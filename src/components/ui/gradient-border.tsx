import { cn } from "@/lib/utils";

interface GradientBorderProps {
  className?: string;
  children: React.ReactNode;
}

export function GradientBorder({ className, children }: GradientBorderProps) {
  return (
    <div className={cn(
      "relative rounded-lg p-[1px] transition-all hover:scale-[1.01]",
      "before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-br before:from-primary/50 before:to-primary/0 before:opacity-0 before:transition-opacity hover:before:opacity-100",
      className
    )}>
      <div className="h-full w-full rounded-lg bg-card p-6">
        {children}
      </div>
    </div>
  );
}