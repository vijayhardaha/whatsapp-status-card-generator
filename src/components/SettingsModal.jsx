import React, { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";

import RangeSliderInput from "./RangeSliderInput";
import { getFontFamily, googleFonts } from "@/lib/fontUtils";

/**
 * SettingsModal component allows users to adjust settings for the card.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Whether the modal is open.
 * @param {Function} props.setSettingsOpen - Function to set the modal state.
 * @returns {JSX.Element} The rendered settings modal.
 */
export const SettingsModal = ({ isOpen, setSettingsOpen }) => {
	const modalRef = useRef(null);
	const [wasOpen, setWasOpen] = useState(false);

	const [headingFontScale, setHeadingFontScale] = useState(1);
	const [textFontSize, setTextFontSize] = useState(16);
	const [selectedHeadingFont, setSelectedHeadingFont] = useState("Playfair Display");
	const [selectedTextFont, setSelectedTextFont] = useState("Poppins");

	useEffect(() => {
		if (isOpen) {
			setWasOpen(true);
		}
	}, [isOpen]);

	useEffect(() => {
		// Close modal on outside click only if it was opened
		const handleOutsideClick = (e) => {
			if (modalRef.current && !modalRef.current.contains(e.target) && wasOpen) {
				setSettingsOpen(false);
				setWasOpen(false);
			}
		};

		if (wasOpen) {
			document.addEventListener("click", handleOutsideClick);
		} else {
			document.removeEventListener("click", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [wasOpen, setSettingsOpen]);

	// Apply styles globally
	useEffect(() => {
		document.documentElement.style.setProperty("--heading-font-scale", headingFontScale);
		document.documentElement.style.setProperty("--text-font-size", `${textFontSize}px`);
		document.documentElement.style.setProperty(
			"--preview-heading-font",
			getFontFamily(selectedHeadingFont).style.fontFamily
		);
		document.documentElement.style.setProperty("--preview-text-font", getFontFamily(selectedTextFont).style.fontFamily);
	}, [headingFontScale, textFontSize, selectedHeadingFont, selectedTextFont]);

	return (
		<>
			{/* Background overlay */}
			<div
				className={`fixed inset-0 bg-black transition-opacity duration-100 ${isOpen ? "opacity-50" : "pointer-events-none opacity-0"}`}
			/>

			{/* Modal Content */}
			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby="settings-modal-title"
				className={`fixed bottom-0 left-0 right-0 flex w-full transform items-center justify-center transition-all duration-100 sm:inset-0 sm:h-full sm:p-4 ${isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1/2 opacity-0"}`}
			>
				<div ref={modalRef} className="w-full rounded bg-white p-4 sm:w-[450px]">
					<header className="mb-8 flex items-center justify-between border-b-[1px] border-stone-200 pb-2">
						<h2 id="settings-modal-title" className="text-2xl font-bold">
							Settings
						</h2>
						<button
							type="button"
							aria-label="Close settings"
							className="rounded-lg border border-stone-200 border-transparent bg-transparent p-2 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
							onClick={() => (setSettingsOpen(false), setWasOpen(false))}
						>
							<AiOutlineClose />
							<span className="sr-only">Close</span>
						</button>
					</header>

					{/* Heading Font Selection */}
					<div className="mb-6">
						<label className="mb-1 block text-sm font-semibold" htmlFor="heading-font-selection">
							Heading Font
						</label>
						<select
							id="heading-font-selection"
							value={selectedHeadingFont}
							onChange={(e) => setSelectedHeadingFont(e.target.value)}
							className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
							aria-label="Select heading font"
						>
							{googleFonts.map((font) => (
								<option key={font.name} value={font.name}>
									{font.name}
								</option>
							))}
						</select>
					</div>

					{/* Heading Font Scale */}
					<div className="mb-6">
						<label className="mb-1 block text-sm font-semibold" htmlFor="heading-font-scale">
							Heading Font Scale: {headingFontScale}
						</label>
						<div className="relative px-3">
							<RangeSliderInput
								min={0.75}
								max={1.25}
								step={0.125}
								value={headingFontScale}
								setValue={setHeadingFontScale}
								className="mb-4 w-full"
								aria-label="Adjust heading font scale"
							/>
						</div>
					</div>

					{/* Text Font Selection */}
					<div className="mb-6">
						<label className="mb-1 block text-sm font-semibold" htmlFor="text-font-selection">
							Text Font
						</label>
						<select
							id="text-font-selection"
							value={selectedTextFont}
							onChange={(e) => setSelectedTextFont(e.target.value)}
							className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
							aria-label="Select text font"
						>
							{googleFonts.map((font) => (
								<option key={font.name} value={font.name}>
									{font.name}
								</option>
							))}
						</select>
					</div>

					{/* Text Font Size */}
					<div className="mb-6">
						<label className="mb-1 block text-sm font-semibold" htmlFor="text-font-size">
							Text Font Size: {textFontSize}px
						</label>
						<div className="relative px-3">
							<RangeSliderInput
								min={10}
								max={30}
								step={1}
								value={textFontSize}
								setValue={setTextFontSize}
								className="mb-4 w-full"
								aria-label="Adjust text font size"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

// PropTypes validation
SettingsModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	setSettingsOpen: PropTypes.func.isRequired,
};
