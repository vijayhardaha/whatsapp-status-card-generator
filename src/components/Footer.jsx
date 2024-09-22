import React from "react";

/**
 * Footer component displays a copyright message with a link to Twitter.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
	return (
		<footer className="mt-6 flex items-center justify-center border-t-[1px] border-gray-200 bg-gray-100 py-4">
			<p className="text-gray-900">
				Made with love ❤️ by{" "}
				<a
					href="https://twitter.com/vijayhardaha"
					target="_blank"
					rel="noopener noreferrer"
					className="font-semibold text-primary hover:underline"
				>
					Vijay Hardaha
				</a>
			</p>
		</footer>
	);
};

export default Footer;
