import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slack, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      
      <div className="container relative flex min-h-[90vh] items-center px-4">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <Badge variant="secondary" className="rounded-full px-6 py-1.5 text-base">
              Beta
            </Badge>
          </div>
          <h1 className="mb-8 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
            The Open Source WordPress Community
            <span className="mt-2 block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              for Everyone
            </span>
          </h1>
          <p className="mb-12 text-xl text-muted-foreground sm:text-2xl">
            Join a thriving community of WordPress professionals, developers, and enthusiasts.
            Shape the future of WordPress together.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-14 gap-2 rounded-full px-8 text-lg">
              <Slack className="h-5 w-5" />
              Join Our Slack Community
            </Button>
            <Button variant="outline" size="lg" className="h-14 gap-2 rounded-full px-8 text-lg">
              <Users className="h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}