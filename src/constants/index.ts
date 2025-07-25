import { ArrowDownToLine, CheckCircle, Leaf, LucideIcon } from "lucide-react";

interface Perks {
    name: string;
    icon: LucideIcon;
    description: string;
}

export const perks: Perks[] = [
    {
        name: "Instant Delivery",
        icon: ArrowDownToLine,
        description:
            "Get your assets delivered to your email in seconds and download them right away.",
    },
    {
        name: "Guaranteed Quality",
        icon: CheckCircle,
        description:
            "Every asset on our platform is verified by our team to ensure highest quality standards. Not happy? We offer a 30-day refund guarantee.",
    },
    {
        name: "For the Planet",
        icon: Leaf,
        description:
            "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
    },
];
