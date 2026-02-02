import * as Icons from "lucide-react";

interface DynamicIconProps extends Icons.LucideProps {
  name: string;
}

const iconMap: Record<string, keyof typeof Icons> = {
  "wrench": "Wrench",
  "zap": "Zap",
  "leaf": "Leaf",
  "paint-bucket": "PaintBucket",
  "paintbucket": "PaintBucket",
  "Wrench": "Wrench",
  "Zap": "Zap",
  "Leaf": "Leaf",
  "PaintBucket": "PaintBucket",
  "Briefcase": "Briefcase",
  "briefcase": "Briefcase",
  "hammer": "Hammer",
  "Hammer": "Hammer",
  "home": "Home",
  "Home": "Home",
  "building": "Building",
  "Building": "Building",
  "car": "Car",
  "Car": "Car",
  "truck": "Truck",
  "Truck": "Truck",
  "scissors": "Scissors",
  "Scissors": "Scissors",
  "sparkles": "Sparkles",
  "Sparkles": "Sparkles",
};

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const mappedName = iconMap[name] || name;
  const LucideIcon = (Icons as any)[mappedName];

  if (!LucideIcon) {
    const pascalName = name.charAt(0).toUpperCase() + name.slice(1);
    const FallbackIcon = (Icons as any)[pascalName];
    if (FallbackIcon) {
      return <FallbackIcon {...props} />;
    }
    return <Icons.Briefcase {...props} />;
  }

  return <LucideIcon {...props} />;
}
