import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GradientBorder } from "@/components/ui/gradient-border";
import type { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function BenefitCard({ title, description, icon: Icon }: BenefitCardProps) {
  return (
    <GradientBorder>
      <Card className="border-0 bg-transparent">
        <CardHeader>
          <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
      </Card>
    </GradientBorder>
  );
}