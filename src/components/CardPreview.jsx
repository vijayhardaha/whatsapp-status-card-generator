import MarkdownIt from "markdown-it";
import PropTypes from "prop-types";

/**
 * CardPreview component renders a preview of the markdown content.
 *
 * @param {Object} props - Component props.
 * @param {string} props.markdown - The markdown content to render.
 * @returns {JSX.Element} The rendered card preview.
 */
export const CardPreview = ({ markdown }) => {
	return (
		<div className="w-full overflow-hidden rounded-md border border-gray-200 bg-white">
			<div
				id="preview-box" // The ID for the preview box, used for downloading.
				className="previewbox preview-min-height"
				dangerouslySetInnerHTML={{ __html: new MarkdownIt().render(markdown) }} // Render markdown to HTML.
			/>
		</div>
	);
};

// PropTypes validation
CardPreview.propTypes = {
	markdown: PropTypes.string.isRequired, // markdown is required and should be a string.
};

export default CardPreview;
