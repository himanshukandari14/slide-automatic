"use client";

import { PAGE_BREAD_CRUMBS } from "@/constants/pages";
import { usePath } from "@/hooks/use-nav";
import { Menu } from "lucide-react";
import React from "react";
import Sheet from "../sheet";
import Items from "../sidebar/items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import { SubscriptionPlan } from "../subscription-plan";
import UpgradeCard from "../sidebar/upgrade";
import LogoSmall from "@/svgs/logo-small";
import CreateAutomation from "../create-automation";
import Search from "../search";
import Notifications from "./notifications";
import MainBreadCrumb from "../main-bread-crumb";

type Props = {
  slug: string;
};

const Navbar = ({ slug }: Props) => {
  const { page } = usePath();
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page === slug;

  return (
    currentPage && (
      <div className={"flex flex-col"}>
        <div className="flex gap-x-3 lg:gap-x-5 justify-end">
          <span className="lg:hidden flex items-center flex-1 gap-x-2">
            <Sheet side="left" trigger={<Menu />} className="lg:hidden">
              <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding backdrop-filter backdrop-blur_safari backdrop-blur-3xl">
                {/* Logo and Sidebar Items */}
                <div className="flex flex-col items-center p-5 gap-y-5">
                  <LogoSmall />
                  <div className="flex flex-col w-full">
                    <Items page={page} slug={slug} />
                  </div>
                  <div>
                    <Separator
                      orientation="horizontal"
                      className="bg-[#333335]"
                    />
                  </div>
                  <div className="px-3 w-full flex flex-col gap-y-5">
                    <div className="flex gap-x-2">
                      <ClerkAuthState />
                      <p className="text-[#989CA0]"></p>
                    </div>
                    <div className="flex gap-x-3"></div>
                  </div>
                </div>
                <SubscriptionPlan type="FREE">
                  <div className="flex-1 flex flex-col justify-end">
                    <UpgradeCard />
                  </div>
                </SubscriptionPlan>
              </div>
            </Sheet>
          </span>
          <Search />
          <CreateAutomation />
          <Notifications />
        </div>
        <MainBreadCrumb page={page === slug ? "Home" : page} slug={slug} />
      </div>
    )
  );
};

export default Navbar;
