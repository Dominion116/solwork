import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { PlusIcon } from "lucide-react";

const faq = [
  {
    question: "How does the escrow system work?",
    answer:
      "Funds are held securely in a smart contract. When you create a job, payment is locked in escrow. As freelancers complete milestones, you approve and release funds automatically through the blockchain.",
  },
  {
    question: "What fees does SolWork charge?",
    answer:
      "We charge a small 2.5% platform fee on completed transactions. This covers smart contract execution and platform maintenance. No hidden fees or subscriptions.",
  },
  {
    question: "How do I connect my Solana wallet?",
    answer:
      "Click 'Connect Wallet' and select your preferred Solana wallet (Phantom, Solflare, etc.). You'll need SOL or USDC to post jobs or receive payments.",
  },
  {
    question: "What happens if there's a dispute?",
    answer:
      "Both parties can initiate a dispute resolution process. Our community arbitrators review evidence and vote on fair outcomes. The smart contract enforces the decision.",
  },
  {
    question: "Can I get a refund if work isn't completed?",
    answer:
      "Yes. If milestones aren't met or deliverables aren't approved, funds remain in escrow. You can cancel and receive a full refund minus network fees.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="rounded-full py-1 border-border">
                ✦ FAQ
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about working on SolWork.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="space-y-3"
            defaultValue="question-0"
          >
            {faq.map(({ question, answer }, index) => (
              <AccordionItem
                key={question}
                value={`question-${index}`}
                className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-lg px-6 py-2 hover:border-primary/30 transition-colors"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-45",
                      "text-start text-base"
                    )}
                  >
                    {question}
                    <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
