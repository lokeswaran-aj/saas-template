import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container min-h-screen relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-1.5 text-sm backdrop-blur-sm animate-fade-in">
        <Sparkles className="size-4 text-primary" />
        <span className="text-muted-foreground">
          Launching your SaaS made simple
        </span>
      </div>

      {/* Main heading */}
      <h1 className="mb-6 bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in-up">
        Build Your SaaS
        <br />
        <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text">
          In Record Time
        </span>
      </h1>

      {/* Subheading */}
      <p className="mb-12 max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl animate-fade-in-up delay-200">
        The complete Next.js template with authentication, payments, and
        everything you need to launch your SaaS product today.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col items-center gap-4 sm:flex-row animate-fade-in-up delay-300">
        <Button
          size="lg"
          className="group h-12 gap-2 px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
          asChild
        >
          <Link href="/sign-in">
            Get Started
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      {/* Feature highlights */}
      <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 animate-fade-in-up delay-500">
        <div className="flex flex-col items-center gap-3 rounded-lg border bg-card/50 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-lg">
          <div className="rounded-full bg-primary/10 p-3">
            <Zap className="size-6 text-primary" />
          </div>
          <h3 className="font-semibold">Lightning Fast</h3>
          <p className="text-sm text-muted-foreground">
            Built with Next.js 15 for optimal performance
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 rounded-lg border bg-card/50 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-lg">
          <div className="rounded-full bg-primary/10 p-3">
            <Shield className="size-6 text-primary" />
          </div>
          <h3 className="font-semibold">Secure by Default</h3>
          <p className="text-sm text-muted-foreground">
            Enterprise-grade authentication built-in
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 rounded-lg border bg-card/50 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-lg">
          <div className="rounded-full bg-primary/10 p-3">
            <Sparkles className="size-6 text-primary" />
          </div>
          <h3 className="font-semibold">Production Ready</h3>
          <p className="text-sm text-muted-foreground">
            Ship faster with pre-built components
          </p>
        </div>
      </div>
    </main>
  );
}
