"use client";

import { ShoppingCart } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const Cart = () => {
    const itemCount: number = 0;
    const fee = 1;

    return (
        <Sheet>
            <SheetTrigger className="group -m-2 flex items-center p-2">
                <ShoppingCart
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                />

                <span className="ml-2 text-sm font-medium  text-gray-700 group-hover:text-gray-800">
                    {itemCount}
                </span>
            </SheetTrigger>

            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className="space-y-2.5 pr-6">
                    <SheetTitle>Cart ({itemCount})</SheetTitle>
                </SheetHeader>

                {itemCount > 0 ? (
                    <>
                        <div className="flex w-full flex-col pr-6">
                            {/* TODO:cart logic */}
                            Cart Items
                        </div>

                        <div className="space-y-4 pr-6">
                            <Separator />

                            <div className="space-y-1.5 text-sm">
                                <div className="flex">
                                    <span className="flex-1 font-bold">
                                        Shipping
                                    </span>
                                    <span className="text-primary">Free</span>
                                </div>
                                <div className="flex">
                                    <span className="flex-1 font-bold">
                                        Transaction Fee
                                    </span>
                                    <span>{formatPrice(fee)}</span>
                                </div>
                                <Separator />
                                <div className="flex">
                                    <span className="flex-1 font-bold">
                                        Total
                                    </span>
                                    <span>{formatPrice(fee)}</span>
                                </div>
                            </div>

                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link
                                        href="/cart"
                                        className={buttonVariants({
                                            className: "w-full",
                                        })}
                                    >
                                        Continue to Checkout
                                    </Link>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center space-y-1">
                        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
                            <Image
                                src="/hippo-empty-cart.png"
                                fill
                                alt="empty shopping cart hippo"
                            />
                        </div>

                        <div className="text-xl font-semibold">
                            Your cart is empty
                        </div>
                        <SheetTrigger>
                            <Link
                                href="/prodcucts"
                                className={buttonVariants({
                                    variant: "link",
                                    size: "sm",
                                    className: "text-sm text-mutedforeground",
                                })}
                            >
                                Add items to your cart to checkout
                            </Link>
                        </SheetTrigger>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default Cart;
