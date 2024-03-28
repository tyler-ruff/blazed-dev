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
                    link: "/home"
                },
                {
                    text: "Services",
                    link: "/services"
                },
                {
                    text: "Products",
                    link: "/products"
                },
                {
                    text: "Corportate",
                    link: "https://blazed.company/"
                }
            ]
        },
        {
            header: "Platforms",
            body: [
                {
                    text: "Gaming",
                    link: "https://blazed.games/"
                },
                {
                    text: "Social",
                    link: "https://blz.one/"
                },
                {
                    text: "World",
                    link: "https://blazed.world/"
                },
                {
                    text: "Software",
                    link: "https://blazed.software/"
                }
            ]
        },
        {
            header: "Services",
            body: [
                {
                    text: "Governance",
                    link: "https://vexio.quest/"
                },
                {
                    text: "Sales",
                    link: "https://ixis.space/"
                },
                {
                    text: "Publishing",
                    link: "https://blazed.xyz/"
                },
                {
                    text: "Telecom",
                    link: "https://blazed.tel/"
                }
            ]
        }
    ]
} as Layout;