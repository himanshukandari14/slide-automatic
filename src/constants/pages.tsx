import { AutomationIcon } from "@/icons/Automation";
import { HomeIcon } from "@/icons/Home";
import { SettingsIcon } from "@/icons/Setting";

export const PAGE_BREAD_CRUMBS: string[] = [
  "contacts",
  "automations",
  "integrations",
  "settings",
];

type Props = {
  [page in string]: React.ReactNode;
};
export const PAGE_ICON: Props = {
  AUTOMATIONS: <AutomationIcon />,
  HOME: <HomeIcon />,
  SETTINGS: <SettingsIcon />,
};

export const PLANS = [

  {
    name: 'Free Plan',
    description: 'Full-scale solutions for large teams',
    price: 'Custom Pricing',
    features: [
      'All features from Smart AI Plan',
      'Dedicated account manager',
      'API access and integrations',
      'Advanced security & compliance',
    ],
    cta: 'Contact Sales',
  },
    {
    name: 'Smart AI plan',
    description: 'For growing businesses and serious creators',
    price: '$49',
    features: [
      'All features from Free Plan',
      'Priority customer support',
      'Advanced analytics and insights',
      'Custom branding options',
    ],
    cta: 'Upgrade to Pro',
  },
];
