// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { NavMenu } from "./lib/types/menu";

export const SITE_TITLE = 'Blazed Dev';
export const SITE_DESCRIPTION = 'Blazed Development is the software development division of Blazed Labs.';

export const SITE_NAV = {
    children: [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Projects",
            path: "/projects"
        },
        {
            title: "Support",
            path: "/support"
        }
    ]
} as NavMenu
