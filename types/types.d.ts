
interface Perks {
    name: string;
    icon: LucideIcon;
    description: string;
}

type FeaturedItem = {
    name: string;
    href: string;
    imageSrc: string;
};

type ProductCategory = {
    label: string;
    value: "ui_kits" | "icons";
    featured: FeaturedItem[];
};

interface NavItemProps {
    category: ProductCategory;
    handleOpen: () => void;
    isOpen: boolean;
    isAnyOpen: boolean;
}

