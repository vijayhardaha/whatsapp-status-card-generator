# WhatsApp Status Card Generator

**WhatsApp Status Card Generator** is a web app built with **Next.js** and **Tailwind CSS** that allows users to create customizable cards with markdown text and download them as images. The app provides an iPhone 14-sized preview box, various font options, and settings to customize the appearance of the card.

## Features

- **Markdown Support**: Users can write text in markdown, which is converted to a styled HTML preview.
- **Font Customization**: Choose from multiple Google Fonts to style the heading and body text.
- **Settings**: Adjust font family, font size for heading and body text.
- **Download Card**: Export the designed card as an image using the `dom-to-image` library.
- **Responsive Design**: Optimized for mobile and desktop.

## Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **Yarn** or **npm** for package management

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vijayhardaha/whatsapp-status-card-generator.git
   cd whatsapp-status-card-generator
   ```

2. Install the dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

3. Run the development server:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Build for Production

To build the app for production:

```bash
yarn build
# or
npm run build
```

This will create an optimized build in the `.next` folder.

## Usage

- Write markdown text in the input box to preview it on the card.
- Open the settings drawer to choose fonts and adjust the font sizes.
- Once satisfied, click the "Download" button to save the card as an image.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you'd like to contribute to the project.

## License

This project is licensed under the MIT [License](LINCESE).
