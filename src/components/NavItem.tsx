"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const NavItem = ({ isAnyOpen, category, handleOpen, isOpen }: NavItemProps) => {
    return (
        <div className="flex">
            <div className="flex relative items-center">
                <Button
                    className="gap-1.5"
                    onClick={handleOpen}
                    variant={isOpen ? "secondary" : "ghost"}
                >
                    {category.label}
                    <ChevronDown
                        className={cn(
                            "h-4 w-4 transition-all text-muted-foreground",
                            {
                                "-rotate-180": isOpen,
                            }
                        )}
                    />
                </Button>
            </div>

            {isOpen ? (
                <div
                    className={cn(
                        "absolute inset-x-0 top-full text-sm text-muted-foreground",
                        {
                            "animate-in fade-in slide-in-from-top-5":
                                !isAnyOpen,
                        }
                    )}
                >
                    <div
                        className="absolute inset-0 top-1/2 bg-white shadow"
                        aria-hidden="true"
                    />

                    <div className="relative bg-white">
                        <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                                    {category.featured.map((feature) => (
                                        <div
                                            key={feature.name}
                                            className="group relative text-base sm:text-sm"
                                        >
                                            <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                <Image
                                                    src={feature.imageSrc}
                                                    alt="product category image"
                                                    fill
                                                    className="object-cover object-center"
                                                />
                                            </div>

                                            <Link
                                                href={feature.href}
                                                className="mt-6 block font-medium text-gray-900"
                                            >
                                                {feature.name}
                                            </Link>
                                            <p
                                                className="mt-1"
                                                aria-hidden="true"
                                            >
                                                Shop Now
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default NavItem;
