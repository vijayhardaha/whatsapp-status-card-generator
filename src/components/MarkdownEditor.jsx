"use client";

import React, { useEffect, useMemo, useState } from "react";

import "easymde/dist/easymde.min.css";
import PropTypes from "prop-types";

/**
 * MarkdownEditor component for editing markdown text.
 *
 * @param {Object} props - Component props.
 * @param {string} props.markdown - The current markdown content.
 * @param {Function} props.setMarkdown - Function to update the markdown content.
 * @returns {JSX.Element} The rendered MarkdownEditor component.
 */
export const MarkdownEditor = ({ markdown, setMarkdown }) => {
	const [SimpleMDE, setSimpleMDE] = useState(null); // State to hold the SimpleMDE reference

	// Dynamically import SimpleMDE when the component mounts
	useEffect(() => {
		const loadSimpleMDE = async () => {
			const { default: SimpleMDEEditor } = await import("react-simplemde-editor");
			setSimpleMDE(() => SimpleMDEEditor);
		};

		loadSimpleMDE();
	}, []);

	// Memoized options for SimpleMDE editor to avoid unnecessary re-renders.
	const autofocusNoSpellcheckerOptions = useMemo(() => {
		return {
			autofocus: true,
			minHeight: "500px",
			spellChecker: false,
			toolbar: false,
		};
	}, []);

	// If SimpleMDE is not loaded yet, return a loading message
	if (!SimpleMDE) {
		return <div>Loading editor...</div>;
	}

	return (
		<div className="w-full">
			<SimpleMDE
				value={markdown}
				onChange={(value) => {
					setMarkdown(value);
					localStorage.setItem("markdownContent", value); // Store markdown in local storage
				}}
				options={autofocusNoSpellcheckerOptions}
			/>
		</div>
	);
};

// PropTypes validation
MarkdownEditor.propTypes = {
	markdown: PropTypes.string.isRequired,
	setMarkdown: PropTypes.func.isRequired,
};
