"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Category } from "@/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MainNavProps {
  data: Category[];
}
export default function MainNav({ data }: MainNavProps) {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((nav) => {
        return (
          <Link
            key={nav.href}
            href={nav.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black",
              nav.active ? "text-black" : "text-neutral-500"
            )}
          >
            {nav.label}
          </Link>
        );
      })}
    </nav>
  );
}
