import "../global.css";
import font from "next/font";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "Mohammad Shaad",
		template: "%s | mohammad shaad",
	},
	description: "Full Stack Designer & Developer",
	openGraph: {
		title: "Mohammad Shaad",
		description:
			"Full Stack Designer & Developer",
		url: "https://shaad.blog",
		siteName: "shaad.blog",
		images: [
			{
				url: "https://github.com/mohammadshaad/shaad.blog/assets/89409389/14c2ff1a-f8b1-4604-ab92-5e1ebe0ce0ef",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-IN",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Mohammad Shaad",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
