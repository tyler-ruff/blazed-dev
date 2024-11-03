import { Layout } from 'node_modules/fire-ng/lib/interfaces/layout';
import { FooterLink } from 'node_modules/fire-ng/lib/interfaces/footer-link';


export const site = {
    logo: "https://blazed.sirv.com/logo/BLZ-blue.png",
    nav: [
        {
            text: "Home",
            link: "/home"
        },
        {
            text: "Services",
            link: "/services"
        },
        {
            text: "Products",
            link: "/products"
        }
    ],
    burgerVisible: false,
    footerLinks: [
        {
            header: "Company",
            body: [
                {
                    text: "Home",
                    link: "https://blazedlabs.com/"
                },
                {
                    text: "Solutions",
                    link: "https://blazedlabs.com/solutions"
                },
                {
                    text: "Products",
                    link: "https://blazedlabs.com/products"
                },
                {
                    text: "Corportate",
                    link: "https://blazed.company/"
                }
            ]
        },
        {
            header: "Community",
            body: [
                {
                    text: "R&D",
                    link: "https://blazed-space.github.io/"
                },
                {
                    text: "Blazed One",
                    link: "https://blz.one/"
                },
                {
                    text: "Blazed Space",
                    link: "https://blazed.space/"
                },
                {
                    text: "Blazed City",
                    link: "https://blazed.city/"
                }
            ]
        },
        {
            header: "Services",
            body: [
                {
                    text: "Governance",
                    link: "https://ruff-manage.com/"
                },
                {
                    text: "Logistics",
                    link: "https://rtmtransit.com/"
                },
                {
                    text: "Publishing",
                    link: "https://blazed.xyz/"
                },
                {
                    text: "Innovation",
                    link: "https://blazed.space/"
                }
            ]
        }
    ] as FooterLink[]
} as Layout;