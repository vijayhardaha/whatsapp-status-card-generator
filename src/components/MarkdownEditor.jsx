import React, { useMemo } from "react";

import "easymde/dist/easymde.min.css";
import PropTypes from "prop-types";
import SimpleMDE from "react-simplemde-editor";

/**
 * MarkdownEditor component for editing markdown text.
 *
 * @param {Object} props - Component props.
 * @param {string} props.markdown - The current markdown content.
 * @param {Function} props.setMarkdown - Function to update the markdown content.
 * @returns {JSX.Element} The rendered MarkdownEditor component.
 */
export const MarkdownEditor = ({ markdown, setMarkdown }) => {
	// Memoized options for SimpleMDE editor to avoid unnecessary re-renders.
	const autofocusNoSpellcheckerOptions = useMemo(() => {
		return {
			autofocus: true,
			minHeight: "500px",
			spellChecker: false,
			toolbar: false,
		};
	}, []);

	return (
		<div className="w-full">
			<SimpleMDE value={markdown} onChange={setMarkdown} options={autofocusNoSpellcheckerOptions} />
		</div>
	);
};

// PropTypes validation
MarkdownEditor.propTypes = {
	markdown: PropTypes.string.isRequired,
	setMarkdown: PropTypes.func.isRequired,
};
