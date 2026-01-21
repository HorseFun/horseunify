import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import memeCalendarImg from "@/assets/meme_calendar_rip.jpeg";

export default function MemeSection() {
  return (
    <section id="meme" className="py-20 px-6 container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-black tracking-tight">为什么是「马上统一」？</h2>
            <p className="text-xl text-muted-foreground">当历史只剩最后一页，“什么时候翻页”，才是唯一的悬念。</p>
          </div>
          
          <div className="grid gap-6">
            <Card className="bg-card/50 backdrop-blur border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-500">
                  <span>🚀 语义双关</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>“马上”既是<span className="font-bold">立刻 (Immediately)</span>，也是<span className="font-bold">马年 (Horse Year)</span>。</p>
                <p className="text-sm text-muted-foreground mt-2">临界点已至，懂的都懂。</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-l-4 border-l-amber-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-500">
                  <span>📅 历史进度条</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>那本厚厚的历史书，只剩下<span className="font-bold">最后一页</span>还没翻过去。</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-l-4 border-l-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-indigo-500">
                  <span>😏 唯一悬念</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>结局已经写好，唯一的悬念只是<span className="font-bold">翻页的时间戳</span>。</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-amber-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <img 
            src="meme_calendar_rip.jpeg" 
            alt="Meme Calendar" 
            className="relative rounded-lg shadow-2xl w-full object-cover aspect-video transform transition duration-500 hover:scale-[1.01]"
          />
          <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded text-xs backdrop-blur">
            Meme: The Year of Horse
          </div>
        </div>
      </div>
    </section>
  );
}
