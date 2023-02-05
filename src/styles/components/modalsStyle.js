import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(parts.keys);

const loading = definePartsStyle({
	dialog: {
		borderRadius: '12px',
		width: '150px',
		display: 'flex',
		flexDirection: 'column',

		header: {},

		footer: {}
	},
	body: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '10px',
		paddingY: '30px'
	}
});

const success = definePartsStyle({
	dialog: {
		borderRadius: '12px',
		width: '450px',
		display: 'flex',
		flexDirection: 'column',

		header: {},

		footer: {}
	},
	body: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '10px',
		paddingY: '30px'
	}
});

const error = definePartsStyle({
	overlay: {},
	dialog: {
		borderRadius: '12px',

		padding: '12px',

		_dark: {},

		header: {
			color: 'red.3'
		}
	}
});

export const modalsTheme = defineMultiStyleConfig({
	variants: { loading, success, error }
});
