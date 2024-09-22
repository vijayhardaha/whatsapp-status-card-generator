import { useState } from "react";

import domtoimage from "dom-to-image";
import PropTypes from "prop-types";
import {
	AiOutlineCheck,
	AiOutlineCloudDownload,
	AiOutlineControl,
	AiOutlineEdit,
	AiOutlineFileText,
} from "react-icons/ai";
import { PiSpinnerGapLight } from "react-icons/pi";

import { cn } from "@/lib/utils";

/**
 * ActionButtons component provides action buttons for toggling modes and downloading.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.previewMode - Indicates whether the component is in preview mode.
 * @param {Function} props.setPreviewMode - Function to toggle preview mode.
 * @param {Function} props.settingToggle - Function to toggle the settings modal.
 * @returns {JSX.Element} The rendered action buttons.
 */
const ActionButtons = ({ previewMode, setPreviewMode, settingToggle }) => {
	const [isDownloading, setIsDownloading] = useState(false);
	const [isDownloaded, setIsDownloaded] = useState(false);

	/**
	 * Handles the download of the card as a JPEG image.
	 */
	const handleDownload = () => {
		const node = document.getElementById("preview-box");

		if (node) {
			setIsDownloading(true); // Set downloading state to true.

			const rect = node.getBoundingClientRect();
			const width = rect.width * 6;
			const height = rect.height * 6;

			const options = {
				width,
				height,
				quality: 0.75,
				style: {
					transform: "scale(6)",
					transformOrigin: "top left",
				},
			};

			domtoimage
				.toJpeg(node, options)
				.then((dataUrl) => {
					const link = document.createElement("a");
					link.download = `status-card.jpeg`;
					link.href = dataUrl;
					link.click();
					setIsDownloaded(true);
					setIsDownloading(false);
					setTimeout(() => setIsDownloaded(false), 1000); // Reset download state after 1 second.
				})
				.catch((error) => {
					console.error("Failed to download: ", error);
					setIsDownloading(false);
				});
		} else {
			console.error("Element with id 'preview-box' not found.");
		}
	};

	return (
		<div className="mt-4 flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-2">
			{/* Toggle Edit/Preview Mode Button */}
			<button
				type="button"
				onClick={() => setPreviewMode(!previewMode)}
				aria-label={previewMode ? "Switch to Edit Mode" : "Switch to Preview Mode"}
				className="flex h-12 w-12 items-center justify-center rounded-lg border border-stone-200 bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
			>
				{!previewMode ? (
					<AiOutlineFileText className="text-xl" aria-hidden="true" />
				) : (
					<AiOutlineEdit className="text-xl" aria-hidden="true" />
				)}
			</button>

			{/* Open Settings Button */}
			<button
				type="button"
				onClick={settingToggle}
				aria-label="Open settings"
				className="flex h-12 w-12 items-center justify-center rounded-lg border border-stone-200 bg-gray-900 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
			>
				<AiOutlineControl className="text-xl" aria-hidden="true" />
			</button>

			{/* Download Button */}
			<button
				type="button"
				onClick={handleDownload}
				aria-label="Download the card"
				className={cn(
					"flex h-12 flex-grow items-center justify-center rounded-lg bg-primary px-6 font-semibold text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-80 focus:ring-offset-2 focus:ring-offset-gray-50",
					{
						"cursor-not-allowed bg-gray-400 hover:bg-gray-400": !previewMode, // Disabled styles
						"hover:bg-primary hover:bg-opacity-85": previewMode, // Normal hover styles
					}
				)}
				disabled={!previewMode}
			>
				{isDownloading ? (
					<PiSpinnerGapLight aria-hidden="true" size={20} className="mr-2 animate-spin" />
				) : isDownloaded ? (
					<AiOutlineCheck aria-hidden="true" size={20} className="mr-2" />
				) : (
					<AiOutlineCloudDownload aria-hidden="true" size={20} className="mr-2" />
				)}
				{isDownloading ? "Downloading..." : isDownloaded ? "Downloaded!" : "Download"}
			</button>
		</div>
	);
};

// PropTypes validation
ActionButtons.propTypes = {
	previewMode: PropTypes.bool.isRequired,
	setPreviewMode: PropTypes.func.isRequired,
	settingToggle: PropTypes.func.isRequired,
};

export default ActionButtons;
