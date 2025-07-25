import { ArrowDownToLine, CheckCircle, Leaf, LucideIcon } from "lucide-react";

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

export const products_category: ProductCategory[] = [
    {
        label: "UI Kits",
        value: "ui_kits" as const,
        featured: [
            {
                name: "Editor picks",
                href: "#",
                imageSrc: "/nav/ui-kits/mixed.jpg",
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/nav/ui-kits/blue.jpg",
            },
            {
                name: "Best Sellers",
                href: "#",
                imageSrc: "/nav/ui-kits/purple.jpg",
            },
        ],
    },
    {
        label: "Icons",
        value: "icons" as const,
        featured: [
            {
                name: "Favorite Icon Picks",
                href: "#",
                imageSrc: "/nav/icons/picks.jpg",
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/nav/icons/new.jpg",
            },
            {
                name: "Best Selling Icons",
                href: "#",
                imageSrc: "/nav/icons/bestsellers.jpg",
            },
        ],
    },
];
