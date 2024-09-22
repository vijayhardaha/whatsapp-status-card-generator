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
	// State to manage the markdown content, loading from localStorage if available.
	const [markdown, setMarkdown] = useState(() => {
		// Check if there's markdown content in localStorage
		const storedMarkdown = localStorage.getItem("markdownContent");
		return storedMarkdown ? storedMarkdown : "# Status Card\n\nwrite your content here.";
	});

	// State to toggle between preview mode and editor mode.
	const [previewMode, setPreviewMode] = useState(false);

	// State to manage the visibility of the settings modal.
	const [isModalOpen, setModalOpen] = useState(false);

	// Effect to store markdown content in localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem("markdownContent", markdown);
	}, [markdown]);

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
