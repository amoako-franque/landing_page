import {
	facebook,
	instagram,
	shieldTick,
	support,
	truckFast,
	twitter,
} from "../assets/icons"
import {
	bigShoe1,
	bigShoe2,
	bigShoe3,
	customer1,
	customer2,
	shoe4,
	shoe5,
	shoe6,
	shoe7,
	thumbnailShoe1,
	thumbnailShoe2,
	thumbnailShoe3,
} from "../assets/images"

export const navLinks = [
	{ href: "#home", label: "Home" },
	{ href: "#about-us", label: "About Us" },
	{ href: "#products", label: "Products" },
	{ href: "#contact-us", label: "Contact Us" },
]

export const shoes = [
	{
		thumbnail: thumbnailShoe1,
		bigShoe: bigShoe1,
	},
	{
		thumbnail: thumbnailShoe2,
		bigShoe: bigShoe2,
	},
	{
		thumbnail: thumbnailShoe3,
		bigShoe: bigShoe3,
	},
]

export const statistics = [
	{ value: "1k+", label: "Brands" },
	{ value: "500+", label: "Shops" },
	{ value: "250k+", label: "Customers" },
]

export const products = [
	{
		imgURL: shoe4,
		name: "Mike Dune Bauer -01",
		price: "$200.20",
	},
	{
		imgURL: shoe5,
		name: "Mike Dune Bauer -10",
		price: "$210.20",
	},
	{
		imgURL: shoe6,
		name: "Mike Dune Bauer -100",
		price: "$220.20",
	},
	{
		imgURL: shoe7,
		name: "Mike Dune Bauer -001",
		price: "$230.20",
	},
]

export const services = [
	{
		imgURL: truckFast,
		label: "Free shipping",
		subtext: "Enjoy seamless shopping with our complimentary shipping service.",
	},
	{
		imgURL: shieldTick,
		label: "Secure Payment",
		subtext:
			"Experience worry-free transactions with our secure payment options.",
	},
	{
		imgURL: support,
		label: "Love to help you",
		subtext: "Our dedicated team is here to assist you every step of the way.",
	},
]

export const reviews = [
	{
		imgURL: customer1,
		customerName: "Morich Brown",
		rating: 4.5,
		feedback:
			"The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
	},
	{
		imgURL: customer2,
		customerName: "Lota Mongeskar",
		rating: 4.5,
		feedback:
			"The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
	},
]

export const footerLinks = [
	{
		title: "Products",
		links: [
			{ name: "Dune Ratio", link: "/dune-ration" },
			{ name: "Dune Tundra", link: "/dune-tundra" },
			{ name: "Dune Bauer  1", link: "/dune-bauer" },
			{ name: "Dune Still 2", link: "/dune-still-2" },
			{ name: "Mike Waffle Space", link: "/mike-waffle-space" },
			{ name: "Mike Bauer", link: "/mike-bauer" },
		],
	},
	{
		title: "Help",
		links: [
			{ name: "About us", link: "/about-us" },
			{ name: "FAQs", link: "/faqs" },
			{ name: "How it works", link: "/how-it-works" },
			{ name: "Privacy policy", link: "/privacy-policy" },
			{ name: "Payment policy", link: "/payment-policy" },
		],
	},
	{
		title: "Get in touch",
		links: [
			{
				name: "Mail Customer Service here",
				link: "mailto:customerservice@mike.com",
			},
			{ name: "Call help Desk", link: "tel:+233244589011" },
		],
	},
]

export const socialMedia = [
	{ src: facebook, alt: "facebook logo" },
	{ src: twitter, alt: "twitter logo" },
	{ src: instagram, alt: "instagram logo" },
]
