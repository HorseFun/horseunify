import { Card, CardContent } from "@/components/ui/card";

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 px-6 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-black">路线图 (Roadmap)</h2>
          <p className="text-xl text-primary font-bold">值此农历马年，我们决定不搞那些虚的。</p>
          <p className="text-muted-foreground">真正的历史进程不需要甘特图，只需要一个字：冲！</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="relative overflow-hidden border-t-4 border-t-green-500 hover:-translate-y-2 transition-transform duration-300">
            <CardContent className="p-6 pt-8">
              <div className="absolute top-0 right-0 bg-green-100 text-green-700 px-3 py-1 text-xs font-bold rounded-bl-lg">Q1</div>
              <h3 className="text-xl font-bold mb-4">🤫 气氛组就位 (Vibe Check)</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span>✅</span>
                  <span>我们将在 four.meme 平台发射</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✅</span>
                  <span>每天在群里问一遍“今天统一了吗？”</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✅</span>
                  <span>成功把“马”变成 Web3 年度吉祥物</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-t-4 border-t-blue-500 hover:-translate-y-2 transition-transform duration-300">
            <CardContent className="p-6 pt-8">
              <div className="absolute top-0 right-0 bg-blue-100 text-blue-700 px-3 py-1 text-xs font-bold rounded-bl-lg">Q2</div>
              <h3 className="text-xl font-bold mb-4">🧠 精神喊单 (Mental Pumping)</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span>🚀</span>
                  <span>意念拉盘，全靠信仰与东方神秘力量</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>🤝</span>
                  <span>宣布与“历史趋势”达成战略合作伙伴</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📡</span>
                  <span>向全宇宙发射“马上统一”脑电波信号</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-t-4 border-t-purple-500 hover:-translate-y-2 transition-transform duration-300">
            <CardContent className="p-6 pt-8">
              <div className="absolute top-0 right-0 bg-purple-100 text-purple-700 px-3 py-1 text-xs font-bold rounded-bl-lg">Q3</div>
              <h3 className="text-xl font-bold mb-4">⚛️ 物理法则失效 (Physics)</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span>🌊</span>
                  <span>发现“台海”其实只是个浅水坑</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>🤏</span>
                  <span>距离感消失，两岸如同隔壁小区</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>🚄</span>
                  <span>跨海高铁票开启预售（虽然还没建）</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-t-4 border-t-red-500 hover:-translate-y-2 transition-transform duration-300">
            <CardContent className="p-6 pt-8">
              <div className="absolute top-0 right-0 bg-red-100 text-red-700 px-3 py-1 text-xs font-bold rounded-bl-lg">Q4</div>
              <h3 className="text-xl font-bold mb-4">🎉 全剧终 (Grand Finale)</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span>📺</span>
                  <span>醒来发现新闻联播大结局了</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📈</span>
                  <span>所有 K 线都指向同一个终点</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>🥂</span>
                  <span>我们甚至不需要发币，因为共识已满溢</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
