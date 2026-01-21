import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const MAX_SIZE_KB = 100;
const MAX_SIZE_BYTES = MAX_SIZE_KB * 1024;

// 需要压缩的图片目录
const imageDirs = [
  join(__dirname, '../src/assets'),
  join(__dirname, '../public'),
];

async function compressImage(inputPath, outputPath) {
  try {
    const stats = await stat(inputPath);
    const originalSize = stats.size;
    
    console.log(`压缩: ${inputPath} (原始大小: ${(originalSize / 1024).toFixed(2)}KB)`);
    
    // 如果文件已经小于目标大小，跳过
    if (originalSize <= MAX_SIZE_BYTES) {
      console.log(`  ✓ 文件已小于 ${MAX_SIZE_KB}KB，跳过`);
      return;
    }
    
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    let width = metadata.width;
    let height = metadata.height;
    let quality = 80;
    let maxDimension = 1600;
    let compressedSize = originalSize;
    let bestBuffer = null;
    let bestSize = originalSize;
    
    // 智能压缩：逐步调整尺寸和质量
    while (compressedSize > MAX_SIZE_BYTES && (quality > 25 || maxDimension > 600)) {
      // 调整尺寸
      if (width > maxDimension || height > maxDimension) {
        const ratio = Math.min(maxDimension / width, maxDimension / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }
      
      try {
        const buffer = await image
          .resize(width, height, {
            fit: 'inside',
            withoutEnlargement: true,
          })
          .jpeg({
            quality,
            mozjpeg: true,
            progressive: true,
          })
          .toBuffer();
        
        compressedSize = buffer.length;
        
        // 记录最佳结果（最接近但不超过目标大小）
        if (compressedSize < bestSize) {
          bestSize = compressedSize;
          bestBuffer = buffer;
        }
        
        // 如果达到目标，写入并验证
        if (compressedSize <= MAX_SIZE_BYTES) {
          await sharp(buffer).toFile(outputPath);
          // 验证实际文件大小
          const actualStats = await stat(outputPath);
          if (actualStats.size <= MAX_SIZE_BYTES) {
            console.log(`  ✓ 压缩完成: ${(actualStats.size / 1024).toFixed(2)}KB (尺寸: ${width}x${height}, 质量: ${quality})`);
            return;
          } else {
            // 实际文件更大，继续压缩
            compressedSize = actualStats.size;
            console.log(`  实际文件大小 ${(actualStats.size / 1024).toFixed(2)}KB，继续压缩...`);
          }
        }
        
        // 调整策略
        if (quality > 30) {
          quality -= 5;
        } else {
          maxDimension -= 100;
          quality = 70; // 重置质量，继续缩小尺寸
        }
      } catch (error) {
        console.error(`  压缩过程出错: ${error.message}`);
        break;
      }
    }
    
    // 如果还没达到目标，继续更激进的压缩
    if (compressedSize > MAX_SIZE_BYTES) {
      let finalWidth = width;
      let finalHeight = height;
      let finalQuality = 35;
      let finalMaxDim = 1000;
      
      // 继续压缩直到达到目标
      while (compressedSize > MAX_SIZE_BYTES && finalMaxDim >= 600) {
        if (finalWidth > finalMaxDim || finalHeight > finalMaxDim) {
          const ratio = Math.min(finalMaxDim / finalWidth, finalMaxDim / finalHeight);
          finalWidth = Math.round(finalWidth * ratio);
          finalHeight = Math.round(finalHeight * ratio);
        }
        
        const finalBuffer = await image
          .resize(finalWidth, finalHeight, {
            fit: 'inside',
            withoutEnlargement: true,
          })
          .jpeg({
            quality: finalQuality,
            mozjpeg: true,
            progressive: true,
          })
          .toBuffer();
        
        await sharp(finalBuffer).toFile(outputPath);
        
        // 验证实际文件大小
        const actualStats = await stat(outputPath);
        compressedSize = actualStats.size;
        
        if (compressedSize <= MAX_SIZE_BYTES) {
          console.log(`  ✓ 压缩完成 (最终): ${(compressedSize / 1024).toFixed(2)}KB (尺寸: ${finalWidth}x${finalHeight}, 质量: ${finalQuality})`);
          return;
        }
        
        // 调整策略
        if (finalQuality > 25) {
          finalQuality -= 5;
        } else {
          finalMaxDim -= 100;
          finalQuality = 35;
        }
      }
      
      // 最后尝试：最小尺寸
      if (compressedSize > MAX_SIZE_BYTES) {
        const lastBuffer = await image
          .resize(800, 800, {
            fit: 'inside',
            withoutEnlargement: true,
          })
          .jpeg({
            quality: 30,
            mozjpeg: true,
            progressive: true,
          })
          .toBuffer();
        
        await sharp(lastBuffer).toFile(outputPath);
        const lastStats = await stat(outputPath);
        console.log(`  ✓ 压缩完成 (极限): ${(lastStats.size / 1024).toFixed(2)}KB`);
      }
    }
    
    // 如果还是太大，使用更激进的压缩策略
    if (compressedSize > MAX_SIZE_BYTES) {
      const image = sharp(inputPath);
      const metadata = await image.metadata();
      
      let width = metadata.width;
      let height = metadata.height;
      let targetQuality = 50;
      let maxDimension = 1200;
      
      // 逐步缩小尺寸和质量直到达到目标
      while (compressedSize > MAX_SIZE_BYTES && maxDimension >= 400) {
        // 进一步缩小尺寸
        if (width > maxDimension || height > maxDimension) {
          const ratio = Math.min(maxDimension / width, maxDimension / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }
        
        const buffer = await image
          .resize(width, height, {
            fit: 'inside',
            withoutEnlargement: true,
          })
          .jpeg({
            quality: targetQuality,
            mozjpeg: true,
            progressive: true,
          })
          .toBuffer();
        
        compressedSize = buffer.length;
        
        if (compressedSize > MAX_SIZE_BYTES) {
          if (targetQuality > 30) {
            targetQuality -= 5;
          } else {
            maxDimension -= 100;
            targetQuality = 50; // 重置质量，继续缩小尺寸
          }
        } else {
          await sharp(buffer).toFile(outputPath);
          console.log(`  ✓ 压缩完成 (强制): ${(compressedSize / 1024).toFixed(2)}KB (尺寸: ${width}x${height}, 质量: ${targetQuality})`);
          return;
        }
      }
      
      // 最后尝试：最小尺寸和最低质量
      if (compressedSize > MAX_SIZE_BYTES) {
        const finalBuffer = await image
          .resize(800, 800, {
            fit: 'inside',
            withoutEnlargement: true,
          })
          .jpeg({
            quality: 40,
            mozjpeg: true,
            progressive: true,
          })
          .toBuffer();
        
        await sharp(finalBuffer).toFile(outputPath);
        console.log(`  ✓ 压缩完成 (最终): ${(finalBuffer.length / 1024).toFixed(2)}KB`);
      }
    }
  } catch (error) {
    console.error(`  ✗ 压缩失败: ${error.message}`);
  }
}

async function processDirectory(dir) {
  try {
    const files = await readdir(dir);
    
    for (const file of files) {
      if (file.match(/\.(jpeg|jpg)$/i)) {
        const inputPath = join(dir, file);
        await compressImage(inputPath, inputPath); // 原地压缩
      }
    }
  } catch (error) {
    console.error(`处理目录失败 ${dir}: ${error.message}`);
  }
}

async function main() {
  console.log('开始压缩图片...\n');
  
  for (const dir of imageDirs) {
    console.log(`处理目录: ${dir}`);
    await processDirectory(dir);
    console.log('');
  }
  
  console.log('压缩完成！');
}

main().catch(console.error);
