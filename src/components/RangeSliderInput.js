/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

/**
 * RangeSliderInput component allows users to select a range of values with custom styling.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {number} props.min - The minimum value of the range.
 * @param {number} props.max - The maximum value of the range.
 * @param {number} props.step - The step value of the range.
 * @param {number} props.value - The initial value of the range slider.
 * @param {function(number): void} props.setValue - Callback function triggered when the slider value changes.
 * @returns {JSX.Element} The rendered range slider component.
 */
const RangeSliderInput = ({ min, max, step, value, setValue, ...props }) => {
	const [values, setValues] = useState([value]);
	const [Range, setRange] = useState(null); // State to hold the Range component reference

	// Dynamically import Range when the component mounts
	useEffect(() => {
		const loadRange = async () => {
			const { Range: RangeComponent } = await import("react-range");
			setRange(() => RangeComponent);
		};

		loadRange();
	}, []);

	/**
	 * Formats a numeric value to a string with up to three decimal places, avoiding unnecessary trailing zeros.
	 *
	 * @param {number} value - The numeric value to format.
	 * @returns {string} The formatted value as a string.
	 */
	const formatValue = (value) => {
		return Number(value).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 3 });
	};

	// If Range is not loaded yet, return a loading message
	if (!Range) {
		return <div>Loading slider...</div>;
	}

	return (
		<Range
			{...props}
			step={step}
			min={min}
			max={max}
			values={values}
			onChange={(values) => {
				setValues(values);
				setValue(values[0]); // Update the external value when slider changes.
			}}
			renderTrack={({ props, children }) => (
				<div className="flex h-6 w-full">
					<div ref={props.ref} className="h-1 w-full self-center rounded-full bg-gray-200">
						{children}
					</div>
				</div>
			)}
			renderThumb={({ props, isDragged }) => (
				<div
					{...props}
					className={`flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 outline-none ${
						isDragged ? "ring-4 ring-gray-400 ring-offset-2 ring-offset-white" : ""
					}`}
				>
					{/* Tooltip for displaying current value */}
					<div
						className={`absolute -top-9 flex items-center justify-center rounded-md bg-gray-900 px-3 py-1 text-xs text-white outline-none ${
							!isDragged ? "hidden" : ""
						}`}
						role="tooltip"
						aria-live="polite"
					>
						{formatValue(values[0])}
						{/* Tooltip Arrow */}
						<div className="absolute -bottom-[6px] left-1/2 h-0 w-0 -translate-x-1/2 transform border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900"></div>
					</div>
				</div>
			)}
		/>
	);
};

// PropTypes validation
RangeSliderInput.propTypes = {
	min: PropTypes.number.isRequired, // Minimum value for the range.
	max: PropTypes.number.isRequired, // Maximum value for the range.
	step: PropTypes.number.isRequired, // Step value for the range.
	value: PropTypes.number.isRequired, // Initial value for the slider.
	setValue: PropTypes.func.isRequired, // Callback to update the slider value.
};

export default RangeSliderInput;
