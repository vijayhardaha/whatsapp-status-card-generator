import { Montserrat } from "next/font/google";
import PropTypes from "prop-types";

import "./globals.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

/**
 * Load the Montserrat font with specific weights.
 */
const montserrat = Montserrat({
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "WhatsApp Status Card Generator",
	description: "Generate and download custom WhatsApp status cards",
};

/**
 * RootLayout component for the application.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The child components to render inside the layout.
 * @returns {JSX.Element} The rendered layout.
 */
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				{/* Favicon for general browsers */}
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />

				{/* Apple Touch Icon for iOS devices */}
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

				{/* Icons for Android Chrome and other devices */}
				<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
				<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

				{/* Additional favicon sizes for compatibility */}
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

				{/* Link to the web app manifest file */}
				<link rel="manifest" href="/manifest.json" />

				{/* Theme color for browsers that support it */}
				<meta name="theme-color" content="#25D366" />
			</head>

			<body className={`${montserrat.className} bg-gray-100 text-gray-900 antialiased`}>
				<div className="min-h-screen">
					<div className="container mx-auto">
						<Header />
						{children}
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
}

// PropTypes validation
RootLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
