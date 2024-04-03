import { INavItem } from "./Types"

export const LINKS = {
  home:  "/",
  about: "/",
  contact: "/"
}

export const NAV_ITEMS: INavItem[] = [
  {
    link: LINKS.home,
    text: "Home",
    target: "_blank"
  },
  {
    link: LINKS.about,
    text: "About",
    target: "_blank"
  },
  {
    link: LINKS.contact,
    text: "Contact",
    target: "_blank"
  }
]