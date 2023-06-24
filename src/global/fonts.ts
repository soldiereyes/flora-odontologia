import GoogleFontsPlugin from 'google-fonts-webpack-plugin';


const fontFamilies: string[] = [
    'Verdana',
    'Tahoma',
    'Calibri',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
];

const fontConfig = {
    fonts: fontFamilies.map((family) => ({
        family: family.replace(/ /g, '+'),
        variants: ['regular', '500', '700'],
    })),
};

const googleFontsPlugin = new GoogleFontsPlugin(fontConfig);

export default googleFontsPlugin;
