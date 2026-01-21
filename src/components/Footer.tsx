export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="container mx-auto text-center space-y-8">
        
        <div className="space-y-4">
          <h2 className="text-3xl font-black text-white tracking-widest">
            On-chain, On-time, Inevitable.
          </h2>
          <p className="text-lg font-mono text-primary">链上 = 无需解释</p>
        </div>

        <div className="h-px w-24 bg-slate-700 mx-auto my-8"></div>

        <div className="max-w-2xl mx-auto text-xs text-justify bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <p className="font-bold text-slate-300 mb-2">⚠️ 免责声明 (Disclaimer):</p>
          <p className="mb-2">
            本项目（马上统一）仅为 Meme（模因）文化实验，代币 $马上统一 无任何内在价值或财务回报承诺，不构成任何投资建议。加密货币资产具有极高风险，请对此保持清醒认知。
          </p>
          <p className="mb-2">
            我们倡导文明、理性、和平的表达方式。项目愿景是建立基于文化认同的社区共识，坚决反对任何形式的仇恨言论、暴力煽动或地域歧视。
          </p>
          <p>
            历史是镜子，幽默是解药。如果你看懂了，说明你已经懂了；如果你觉得冒犯，那说明它确实起作用了。Peace & Love. 🕊️
          </p>
        </div>

        <div className="pt-8 text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} 马上统一 (马上统一). All rights reserved.</p>
          <p className="mt-2 text-xs font-mono text-slate-500">Fair Launch on four.meme (BSC)</p>
        </div>
      </div>
    </footer>
  );
}
