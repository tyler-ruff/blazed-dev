import { Config, Brand, Social } from "~/utils/config";

const siteConfig = {
    name: "Blazed Dev",
    description: "Blazed Development is a software engineering department of Blazed Labs."
} as Config;

const brandConfig = {
    logo: "",
    company: "Blazed Labs LLC",
    twitter: "@BlazedLabs",
    email: "hello@blazed.space",
    telephone: "+18557882348"
} as Brand;

const socialConfig = {
    facebook: "https://www.facebook.com/blazedlabs",
    instagram: "https://www.instagram.com/blazed_labs/",
    github: "https://github.com/blazed-labs",
    twitter: "https://twitter.com/BlazedLabs"
} as Social

export {
    siteConfig,
    brandConfig,
    socialConfig
};