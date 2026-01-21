import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import policyMicImg from "@/assets/policy_mic_empty.jpeg";

export default function PolicySection() {
  return (
    <section id="policy" className="py-20 px-6 container mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-4xl font-black">当局政策吐槽区</h2>
        <p className="text-xl text-muted-foreground">（Meme 式观察，如有雷同，纯属现实太魔幻）</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="hover:shadow-lg transition-shadow border-muted">
          <CardHeader>
            <CardTitle>🏆 把对抗当政绩</CardTitle>
          </CardHeader>
          <CardContent>
            <p>只要嗓门大，外交就是赢。邦交国数量归零不要紧，重要的是我们在推特上赢麻了。</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow border-muted">
          <CardHeader>
            <CardTitle>🧘 把姿态当战略</CardTitle>
          </CardHeader>
          <CardContent>
            <p>遇到危机先摆 Pose， strategic ambiguity（战略模糊）其实就是 “我也没想好咋办”。</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow border-muted">
          <CardHeader>
            <CardTitle>💊 把承诺当安全感</CardTitle>
          </CardHeader>
          <CardContent>
            <p>外面的大哥随口一句 “I got you”，我们就真的信了。这就像相信渣男说 “我会对你负责” 一样天真。</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow border-muted">
          <CardHeader>
            <CardTitle>📅 把选举语言当规划</CardTitle>
          </CardHeader>
          <CardContent>
            <p>四年一轮回的芒果干（亡国感）促销季。长期规划？不存在的，能撑到下次投票就行。</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted p-8 rounded-xl flex flex-col md:flex-row items-center gap-8">
        <img 
          src="policy_mic_empty.jpeg" 
          alt="Policy Rant" 
          className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-md"
        />
        <p className="text-xl font-bold text-foreground/80 flex-1 text-center md:text-left">
          😏 总结：问题不在于立场，而在于所有的资源都用来 “表态” 了，剩下的苦日子只能年轻人自己扛。
        </p>
      </div>
    </section>
  );
}
