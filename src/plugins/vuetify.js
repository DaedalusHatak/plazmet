// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
// Vuetify
import { createVuetify, ThemeDefinition } from 'vuetify';
let test;

if (!localStorage.themeRecognition) {
	test = 'light';
} else {
	test = localStorage.themeRecognition;
}
console.log(test);
const dark = (ThemeDefinition = {
	colors: {
		background: '#191919',
		surface: '#191919',
		primary: '#FFFFEE',
		'primary-darken-1': '#6600B3',
		secondary: '#03DAC6',
		'grey-lighten-2': '#263238',
		'text-white': '#FFFFFF',
		white: '#FFFFFF',
		central: '#212121',
		'secondary-darken-1': '#018786',
		error: '#B00020',
		info: '#2196F3',
		success: '#4CAF50',
		warning: '#FB8C00',
	},
});
const light = (ThemeDefinition = {
	colors: {
		background: '#FFFFFF',
		surface: '#FFFFFF',
		switch: '#111111',
		primary: '#111111',
		'primary-darken-1': '#3700B3',
		secondary: '#03DAC6',
		'grey-lighten-2': '#CFD8DC',
		white: '#FFFFFF',
		central: '#FFFFFF',
		'secondary-darken-1': '#018786',
		error: '#B00020',
		info: '#2196F3',
		success: '#4CAF50',
		warning: '#FB8C00',
	},
});
export default createVuetify({
	theme: {
		dark: true,
		light: 'light',
		defaultTheme: `${test}`,
		themes: {
			dark,
			light,
		},
	},
});
