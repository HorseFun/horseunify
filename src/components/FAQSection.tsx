import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="py-20 px-6 container mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <h2 className="text-4xl font-black">常见问题 (FAQ)</h2>
        <p className="text-xl text-muted-foreground">你敢问，我就敢编...啊不，敢答。</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold">Q: 为什么强调农历马年？</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              A: “马上统一” 本身就是双关梗。马年寓意 “加马力、快决策”，我们把它当作社区共识推进的好时机，而不是政治口号。
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-bold">Q: 如何购买？</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              A: 我们在 <strong>four.meme</strong> 发射！准备好 BNB 钱包（推荐 Metamask 或 TrustWallet），访问 four.meme 搜索“马上统一”或 $马上统一 即可参与 Fair Launch。
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-bold">Q: 什么是 four.meme 发射？</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              A: 这是一个基于 BSC 的公平发射平台。没有预留、没有老鼠仓，所有人都站在同一条起跑线上。当 Bonding Curve 满额后，流动性将自动迁移至 DEX 并锁死。
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-bold">Q: 买了能发财吗？</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              A: 可能会，也可能归零。这取决于共识的强度。我们提供的是情緒價值，不是财务顾问。
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-bold">Q: 涉及政治敏感吗？</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              A: 我们是幽默创作，遵循当地法律法规。我们反对仇恨言论，主张爱与和平。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
