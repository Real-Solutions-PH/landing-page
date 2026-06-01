import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Block } from "@/lib/blog";

export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="pt-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl"
              >
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p
                key={i}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2.5">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span className="text-base leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "faq":
            return (
              <div key={i} className="space-y-4 pt-2">
                {block.items.map((item, j) => (
                  <Card key={j} className="border-border bg-card p-5">
                    <h3 className="mb-2 font-semibold text-foreground">
                      {item.q}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </Card>
                ))}
              </div>
            );
          case "links":
            return (
              <div
                key={i}
                className="mt-4 rounded-2xl border border-border bg-secondary/40 p-6"
              >
                {block.heading && (
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {block.heading}
                  </h3>
                )}
                <ul className="space-y-2">
                  {block.items.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-4"
                      >
                        <ArrowRight className="h-3.5 w-3.5" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
