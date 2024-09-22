"use client";

import React, { useEffect, useState } from "react";

import ActionButtons from "@/components/ActionButtons";
import { CardPreview } from "@/components/CardPreview";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { SettingsModal } from "@/components/SettingsModal";

/**
 * Page component handles the main functionality of the status card generator.
 * It includes a markdown editor, preview mode, and settings modal for customizing the status card.
 *
 * @returns {JSX.Element} The rendered page component.
 */
const Page = () => {
	// State to manage the markdown content
	const [markdown, setMarkdown] = useState("# Status Card\n\nwrite your content here.");

	// State to toggle between preview mode and editor mode
	const [previewMode, setPreviewMode] = useState(false);

	// State to manage the visibility of the settings modal
	const [isModalOpen, setModalOpen] = useState(false);

	// Effect to load markdown content from localStorage
	useEffect(() => {
		let value;
		// Get the value from local storage if it exists
		value = localStorage.getItem("markdownContent") || "";
		if (value) {
			setMarkdown(value);
		}
	}, []);

	return (
		<div className="relative grow">
			{/* Conditionally render the preview or markdown editor based on previewMode */}
			{previewMode ? (
				<CardPreview markdown={markdown} />
			) : (
				<MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
			)}

			{/* Sticky action buttons at the bottom of the page */}
			<div className="sticky bottom-2">
				<ActionButtons
					previewMode={previewMode}
					setPreviewMode={setPreviewMode}
					settingToggle={() => setModalOpen(true)}
				/>
			</div>

			{/* Settings modal */}
			<SettingsModal isOpen={isModalOpen} setSettingsOpen={setModalOpen} />
		</div>
	);
};

export default Page;
