import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple class names and resolves Tailwind CSS conflicts.
 *
 * This utility function combines `clsx` for conditional class merging
 * and `tailwind-merge` to resolve Tailwind class name conflicts, ensuring
 * the final class string is optimized.
 *
 * @param {...any} inputs - The list of class names or conditionally applied class names.
 * @returns {string} The merged and optimized class names.
 */
export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
