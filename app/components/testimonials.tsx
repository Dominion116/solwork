import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import Link from "next/link";
import { ComponentProps } from "react";

const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    designation: "Smart Contract Developer",
    company: "@alexbuilds",
    testimonial:
      "SolWork's escrow system gave me confidence to work with new clients. Got paid instantly after each milestone approval. No more payment delays!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    designation: "Project Manager",
    company: "@mariapm",
    testimonial:
      "Finding quality developers was always a challenge. SolWork's on-chain ratings helped me hire the perfect team for our DeFi project.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "David Park",
    designation: "UI/UX Designer",
    company: "@daviddesigns",
    testimonial:
      "Love the milestone system! Clients can see progress at every step, and I get paid fairly for my work. Win-win for everyone.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    designation: "NFT Project Lead",
    company: "@sarahnft",
    testimonial:
      "The transparency of blockchain payments is incredible. No hidden fees, no intermediaries. Just honest work and instant settlements.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Michael Torres",
    designation: "Full-Stack Developer",
    company: "@miguecode",
    testimonial:
      "Built my entire reputation on-chain through SolWork. Clients trust me because they can verify my track record. This is the future!",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Emma Wilson",
    designation: "Web3 Entrepreneur",
    company: "@emmaweb3",
    testimonial:
      "Hired three developers through SolWork for our launch. The escrow protection and milestone system made everything smooth and stress-free.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonials = () => (
  <section className="py-24">
    <div className="h-full w-full">
      <div className="flex justify-center mb-6">
        <Badge variant="secondary" className="rounded-full py-1 border-border">
          <span className="text-primary">✦</span> Testimonials
        </Badge>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight px-6">
        Trusted by Freelancers & Clients
      </h2>
      <p className="mt-4 text-center text-muted-foreground text-lg max-w-2xl mx-auto px-6">
        Real stories from people building the future of work on Solana
      </p>
      <div className="mt-14 relative">
        <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-linear-to-r from-background to-transparent" />
        <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-linear-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:30s]">
          <TestimonialList />
        </Marquee>
        <Marquee pauseOnHover reverse className="mt-6 [--duration:30s]">
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </section>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="min-w-96 max-w-sm bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.designation}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" target="_blank">
            <TwitterLogo className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed">{testimonial.testimonial}</p>
    </div>
  ));

const TwitterLogo = (props: ComponentProps<"svg">) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  </svg>
);

export default Testimonials;
