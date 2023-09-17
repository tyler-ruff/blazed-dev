import { FooterLinks, Menu } from "~/utils/config";

const navMenu = {
    _id: "base",
    nav: [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Forum",
            href: "/forum"
        },
        {
            label: "Documentation",
            href: "/docs"
        },
        {
            label: "Community",
            href: "/community"
        }
    ],
} as Menu;

export {
    navMenu
};