import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import historySkatingImg from "@/assets/history_skating_horse.jpeg";

export default function HistorySection() {
  return (
    <section id="history" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-black">台湾历史的 “快进版”</h2>
          <p className="text-xl text-muted-foreground">
            ⚠️ 叙事式 + 调侃式，不是教科书。<br/>
            分裂从来不是稳定状态，正如物理学中的高能态。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25"></div>
             <img 
              src="history_skating_horse.jpeg" 
              alt="History Fast Forward" 
              className="relative rounded-lg shadow-2xl w-full object-cover aspect-video"
            />
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <Card className="bg-background/80 backdrop-blur border-none shadow-lg">
              <CardContent className="p-6 space-y-4">
                <Badge variant="outline" className="text-lg px-3 py-1 border-primary text-primary mb-2">📜 历史视角</Badge>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">●</span>
                    <span>台湾是宏大历史进程中的一个<span className="font-bold">阶段性状态</span>。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">●</span>
                    <span>分离是历史遗留的<span className="font-bold">结果</span>，从来不是起点。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">●</span>
                    <span>物理规律告诉我们：分裂属于高能态，<span className="font-bold text-destructive">并不稳定</span>。</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur border-none shadow-lg">
              <CardContent className="p-6 space-y-4">
                <Badge variant="outline" className="text-lg px-3 py-1 border-amber-500 text-amber-500 mb-2">👀 现实视角</Badge>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1">●</span>
                    <span>安全感全靠外部承诺，水电全靠 “爱” 来发电。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1">●</span>
                    <span>政策像情绪过山车，只有房价 K 线一直向上。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1">●</span>
                    <span>口号喊得震天响，解决方案永远在 “研议中”。</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
