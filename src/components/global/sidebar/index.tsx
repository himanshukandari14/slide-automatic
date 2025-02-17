"use client";
import { usePath } from "@/hooks/use-nav";
import LogoSmall from "@/svgs/logo-small";
import Items from "./items";
import React from "react";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import { SubscriptionPlan } from "../subscription-plan";
import UpgradeCard from "./upgrade";


type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page } = usePath();

  return (
    <div className="w-[250px] border-[1px] fixed left-0 lg:inline-block border-[#545454] bg-gradient-to-b from-[#768bdd] via-[#171717] to-[#768bdd] hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden">
      <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding backdrop-filter backdrop-blur_safari backdrop-blur-3xl">
        {/* Logo and Sidebar Items */}
        <div className="flex flex-col items-center p-5 gap-y-5">
          <LogoSmall />
          <div className="flex flex-col w-full">
            <Items page={page} slug={slug} />
          </div>
          <div>
            <Separator orientation="horizontal" className="bg-[#333335]" />
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
    </div>
  );
};

export default Sidebar;
