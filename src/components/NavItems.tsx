"use client";

import { products_category } from "@/constants";
import { RefObject, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const isAnyOpen = activeIndex !== null;

    const navRef = useRef<HTMLDivElement | null>(null);

    useOnClickOutside(navRef, () => setActiveIndex(null));
    return (
        <div className="flex gap-4 h-full" ref={navRef}>
            {products_category.map((category, i) => {
                const handleOpen = () => {
                    if (activeIndex === i) {
                        setActiveIndex(null);
                    } else {
                        setActiveIndex(i);
                    }
                };

                const isOpen = i === activeIndex;

                return (
                    <NavItem
                        isOpen={isOpen}
                        handleOpen={handleOpen}
                        category={category}
                        key={category.value}
                        isAnyOpen={isAnyOpen}
                    />
                );
            })}
        </div>
    );
};

export default NavItems;
