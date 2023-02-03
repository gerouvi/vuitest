import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(inputAnatomy.keys);

const inputText = definePartsStyle({
	field: {
		paddingLeft: 0,
		backgroundColor: 'transparent',
		height: '30px',
		border: 'none',
		borderBottom: '1px solid currentColor',
		focusBorderColor: 'transparent',
		borderRadius: 'none',
		_focus: { borderBottom: '1px solid currentColor' },
		_hover: { borderBottom: '1px solid currentColor' }
	}
});

const inputIcon = definePartsStyle({
	field: {
		border: '1px solid black',
		bg: 'transparent',

		_focus: {
			border: '1px solid black'
		},
		_hover: {
			border: '1px solid black'
		},
		_dark: {
			border: '1px solid white',
			focusBorderColor: 'white'
		}
	}
});

export const inputsTheme = defineMultiStyleConfig({
	variants: { inputText, inputIcon }
});
