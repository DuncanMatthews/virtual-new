export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Virtual Renovation",
  description: "AI-powered interior design platform that allows users to visualize different design styles for their living spaces.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    // {
    //   label: "Dashboard",
    //   href: "/dashboard",
    // },
    // {
    //   label: "Pricing",
    //   href: "/pricing",
    // },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },

    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "",
  },
};
