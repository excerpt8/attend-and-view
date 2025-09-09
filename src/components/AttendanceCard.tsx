import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface AttendanceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variant: "register" | "attendance" | "history";
  onClick?: () => void;
}

export function AttendanceCard({ title, description, icon: Icon, variant, onClick }: AttendanceCardProps) {
  const variantStyles = {
    register: "border-primary/20 hover:border-primary/40 bg-gradient-card hover:shadow-card",
    attendance: "border-accent/20 hover:border-accent/40 bg-gradient-card hover:shadow-card", 
    history: "border-warning/20 hover:border-warning/40 bg-gradient-card hover:shadow-card"
  };

  const iconStyles = {
    register: "text-primary",
    attendance: "text-accent",
    history: "text-warning"
  };

  const buttonVariants = {
    register: "primary",
    attendance: "accent", 
    history: "warning"
  } as const;

  return (
    <Card 
      className={cn(
        "group cursor-pointer transition-all duration-300 hover:scale-105",
        variantStyles[variant]
      )}
      onClick={onClick}
    >
      <CardContent className="p-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-background p-4 shadow-sm">
            <Icon className={cn("h-8 w-8", iconStyles[variant])} />
          </div>
        </div>
        <h3 className="mb-3 text-xl font-semibold text-card-foreground">{title}</h3>
        <p className="mb-6 text-muted-foreground leading-relaxed">{description}</p>
        <Button 
          variant={buttonVariants[variant] as any}
          className="w-full shadow-button hover:shadow-elevated transition-all duration-200"
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}