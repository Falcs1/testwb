export type MenuType = {
  id: number,
  title: string,
  url?: string,
  submenus?: {
    id: number,
    title: string,
    url: string
  }[]
}[]
export const menu: MenuType = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    submenus: [
      { id: 2.1, title: "Partners", url: "/partners" },
    ],
  },
  {
    id: 3,
    title: "Services",
    submenus: [
      { id: 3.1, title: "Services", url: "/services" },
      { id: 3.2, title: "Services Details", url: "/services-details" },
    ],
  },
  {
    id: 6,
    title: "Contact",
    url: "/contact",
    // submenus: [],
  },
];
