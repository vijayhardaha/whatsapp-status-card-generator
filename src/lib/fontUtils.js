import {
	Hind,
	Josefin_Sans,
	Josefin_Slab,
	Jost,
	Lexend,
	Montserrat,
	Noto_Sans_Devanagari,
	Proza_Libre,
	Playfair_Display,
	Lora,
	Bitter,
	Arvo,
	Poppins,
} from "next/font/google";

// Load fonts at the module scope
const Font_Hind = Hind({
	subsets: ["latin", "devanagari"],
	weight: ["400", "700"],
});
const Font_Josefin_Sans = Josefin_Sans({
	subsets: ["latin"],
	weight: ["400", "700"],
});
const Font_Josefin_Slab = Josefin_Slab({
	subsets: ["latin"],
	weight: ["400", "700"],
});
const Font_Jost = Jost({
	subsets: ["latin"],
	weight: ["400", "700"],
});
const Font_Lexend = Lexend({
	subsets: ["latin"],
	weight: ["400", "700"],
});
const Font_Montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "700"],
});
const Font_Noto_Sans_DevanaGiri = Noto_Sans_Devanagari({
	subsets: ["latin", "devanagari"],
	weight: ["400", "700"],
});
const Font_Poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "700"],
});
const Font_Proza_Libre = Proza_Libre({
	subsets: ["latin"],
	weight: ["400", "700"],
});
const Font_Lora = Lora({
	subsets: ["latin"],
	weight: ["400", "700"],
});
const Font_Bitter = Bitter({
	subsets: ["latin"],
	weight: ["400", "700"],
});
const Font_Playfair_Display = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "700"],
});
const Font_Arvo = Arvo({
	subsets: ["latin"],
	weight: ["400", "700"],
});

// Define the googleFonts array, grouped and ordered
export const googleFonts = [
	// Serif Fonts
	{ name: "Playfair Display", family: Font_Playfair_Display },
	{ name: "Lora", family: Font_Lora },
	{ name: "Josefin Slab", family: Font_Josefin_Slab },
	{ name: "Arvo", family: Font_Arvo },
	{ name: "Bitter", family: Font_Bitter },

	// Sans-serif Fonts
	{ name: "Lexend", family: Font_Lexend },
	{ name: "Montserrat", family: Font_Montserrat },
	{ name: "Poppins", family: Font_Poppins },
	{ name: "Jost", family: Font_Jost },
	{ name: "Josefin Sans", family: Font_Josefin_Sans },
	{ name: "Proza Libre", family: Font_Proza_Libre },

	// Display Fonts
	{ name: "Hind", family: Font_Hind },
	{ name: "Noto Sans Devanagari", family: Font_Noto_Sans_DevanaGiri },
];

/**
 * Fetches the font family object based on the selected font name.
 *
 * @param {string} selectedFont - The name of the selected font.
 * @returns {object|null} The font family object or null if not found.
 */
export const getFontFamily = (selectedFont) => googleFonts.find((font) => font.name === selectedFont)?.family || null;
