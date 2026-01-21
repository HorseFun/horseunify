import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Rocket, FastForward, Hammer } from "lucide-react";

export default function HorseYearSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-red-900 to-slate-900 text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">为什么是马年？</h2>
          <p className="text-xl text-red-200/80">过去是 “观望” (Wait and See)，马年是 “摊牌” (Showdown)。</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="bg-white/10 backdrop-blur border-none text-white hover:bg-white/20 transition-colors">
            <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
              <Zap className="w-12 h-12 text-yellow-400" />
              <div>
                <h3 className="text-2xl font-bold">行动</h3>
                <p className="opacity-70">Action</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-none text-white hover:bg-white/20 transition-colors">
            <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
              <Rocket className="w-12 h-12 text-red-400" />
              <div>
                <h3 className="text-2xl font-bold">速度</h3>
                <p className="opacity-70">Speed</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-none text-white hover:bg-white/20 transition-colors">
            <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
              <FastForward className="w-12 h-12 text-blue-400" />
              <div>
                <h3 className="text-2xl font-bold">推进</h3>
                <p className="opacity-70">Advance</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-none text-white hover:bg-white/20 transition-colors">
            <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
              <Hammer className="w-12 h-12 text-orange-400" />
              <div>
                <h3 className="text-2xl font-bold">决断</h3>
                <p className="opacity-70">Decision</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
