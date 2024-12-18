import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className="mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
        {title}
      </h2>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        {description}
      </p>
    </div>
  );
}