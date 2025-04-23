// ASSETS //
import toDoIcon from "../assets/to-do-icon.svg";
import homeIcon from "../assets/home-icon.svg";
import settingsIcon from "../assets/settings-icon.svg";

// DATA //
const navItems = [
  {
    href: "/",
    src: toDoIcon,
    alt: "This is an icon.",
    text: "To do",
    isActive: true,
  },
  {
    href: "#",
    src: homeIcon,
    alt: "This is an icon.",
    text: "Home",
    isActive: false,
  },
  {
    href: "/settings",
    src: settingsIcon,
    alt: "This is an icon.",
    text: "Settings",
    isActive: false,
  },
];

export default navItems;
