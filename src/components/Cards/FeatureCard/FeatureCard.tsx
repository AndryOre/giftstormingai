import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: "yellow" | "green" | "blue" | "purple" | "red";
}

function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  const colorMapping: Record<
    FeatureCardProps["color"],
    { border: string; text: string; bg: string; shadow: string }
  > = {
    yellow: {
      border: "border-yellow-500",
      text: "text-yellow-500",
      bg: "bg-yellow-200",
      shadow:
        "shadow-[0px_2px_4px_-1px_rgba(234,179,8,0.06),0px_4px_6px_-1px_rgba(234,179,8,0.10)]",
    },
    green: {
      border: "border-green-500",
      text: "text-green-500",
      bg: "bg-green-200",
      shadow:
        "shadow-[0px_2px_4px_-1px_rgba(34,197,94,0.06),0px_4px_6px_-1px_rgba(34,197,94,0.10)]",
    },
    blue: {
      border: "border-blue-500",
      text: "text-blue-500",
      bg: "bg-blue-200",
      shadow:
        "shadow-[0px_2px_4px_-1px_rgba(59,130,246,0.06),0px_4px_6px_-1px_rgba(59,130,246,0.10)]",
    },
    purple: {
      border: "border-purple-500",
      text: "text-purple-500",
      bg: "bg-purple-200",
      shadow:
        "shadow-[0px_2px_4px_-1px_rgba(168,85,247,0.06),0px_4px_6px_-1px_rgba(168,85,247,0.10)]",
    },
    red: {
      border: "border-red-500",
      text: "text-red-500",
      bg: "bg-red-200",
      shadow:
        "shadow-[0px_2px_4px_-1px_rgba(239,68,68,0.06),0px_4px_6px_-1px_rgba(239,68,68,0.10)]",
    },
  };

  const colors = colorMapping[color];

  return (
    <div
      className={`dark:bg-neutral-950] flex flex-col items-center gap-2 rounded border p-3 
      ${colors.border} ${colors.text} ${colors.shadow}`}
    >
      <div className={`rounded p-1 ${colors.bg} ${colors.text} text-[32px]`}>
        {icon}
      </div>
      <div className="text-center">
        <div className="font-montserrat text-xl font-semibold">{title}</div>
        <div className="font-lato text-neutral-700 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
