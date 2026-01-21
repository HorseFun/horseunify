import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function TokenomicsSection() {
  return (
    <section id="token" className="py-20 px-6 container mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-4xl font-black">代币经济学 (Tokenomics)</h2>
        <p className="text-xl text-muted-foreground">遵循 four.meme 公平发射规则，这就是真正的 Fair Launch。</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <Card className="bg-card border-2 border-primary/20">
            <CardHeader>
              <CardTitle>📊 four.meme 机制</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[120px]">参数</TableHead>
                    <TableHead>说明</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold">Token Symbol</TableCell>
                    <TableCell>$马上统一 (马上统一)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Launch Type</TableCell>
                    <TableCell>Fair Launch (公平发射)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Mechanism</TableCell>
                    <TableCell>Bonding Curve (联合曲线)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Liquidity</TableCell>
                    <TableCell>满额自动添加流动性并锁死</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground text-center">
            * 风险提示：Meme 币波动极大，请用 “丢了不心疼” 的零钱参与。DYOR (Do Your Own Research)。
          </p>
        </div>

        <div className="space-y-6">
          <Card className="bg-indigo-50 border-2 border-indigo-200">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-indigo-900 text-center">什么是 Bonding Curve？</h3>
              <div className="space-y-3 text-sm text-indigo-800/80">
                <p>📈 <strong>价格机制：</strong> 代币价格随购买需求增加而自动上涨，早期参与者成本更低。</p>
                <p>🔒 <strong>流动性保障：</strong> 当 Bonding Curve 募资满额（通常约 24 BNB），流动性将自动迁移至 PancakeSwap 并永久锁死。</p>
                <p>🛡️ <strong>安全承诺：</strong> 平台合约自动执行，无预挖、无老鼠仓、无撤池风险。</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
