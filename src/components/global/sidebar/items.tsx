import { SIDEBAR_MENU } from "@/constants/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  page: string;
  slug: string;
};

const Items = ({ page, slug }: Props) => {
  return (
    <div className="flex flex-col gap-y-2">
      {SIDEBAR_MENU.map((item) => (
        <Link
          key={item.id}
          href={`/dashboard/${slug}/${item.label === "home" ? "" : item.label}`}
          className={cn(
            'capitalize flex items-center gap-x-2 rounded-full p-3 transition-colors',
            page === item.label && 'bg-[#0f0f0f]',
            page === slug && item.label === 'home'
            ?'bg-[#0f0f0f]'
            : 'text-[#9b9CA0]'
          )}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Items;
