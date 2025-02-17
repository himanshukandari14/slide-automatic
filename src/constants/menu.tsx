import { AutomationIcon } from "@/icons/Automation";
import { HomeIcon } from "@/icons/Home";
import { SettingsIcon } from "lucide-react";
import { v4 as uuid } from "uuid";

type FieldProps = {
  label: string;
  id: string;
};

type SideBarProps = {
  icon: React.ReactNode;
} & FieldProps;

export const SIDEBAR_MENU: SideBarProps[] = [
  {
    id: uuid(),
    label: "home",
    icon: <HomeIcon />,
  },
  {
    id: uuid(),
    label: "automation",
    icon: <AutomationIcon />,
  },
  {
    id: uuid(),
    label: "settings",
    icon: <SettingsIcon />,
  },
];
