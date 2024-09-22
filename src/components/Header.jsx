import React from "react";

/**
 * Header component displays the main title of the application.
 *
 * @returns {JSX.Element} The rendered header with the title.
 */
const Header = () => {
	return (
		<header className="mb-6 mt-3 text-center">
			<h1 className="text-3xl font-black text-gray-800 sm:text-4xl">
				<span className="text-primary">WhatsApp</span> Status Card
			</h1>
		</header>
	);
};

export default Header;
