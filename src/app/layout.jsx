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
