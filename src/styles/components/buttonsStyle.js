import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const vocdoniSolid = defineStyle({
	bg: 'green.vocdoni',
	color: 'green.8',
	_active: {
		fontSize: '0.8em'
	},
	_hover: {
		bg: 'green.8',
		color: 'green.vocdoni'
	}
});

const iconButtonVocdoni = defineStyle(props => ({
	bg: props.colorMode === 'light' ? 'green.vocdoni' : 'transparent',
	color: props.colorMode === 'light' ? 'green.8' : 'green.vocdoni',
	borderRadius: '50%',
	border: '1px solid ',
	borderColor: 'green.vocdoni',
	_hover: {
		bg: props.colorMode === 'light' ? 'green.8' : 'green.vocdoni',
		color: props.colorMode === 'light' ? 'green.vocdoni' : 'green.8'
	}
}));

const iconButtonTransparent = defineStyle({
	bg: 'transparent'
});

export const buttonsTheme = defineStyleConfig({
	variants: { vocdoniSolid, iconButtonVocdoni, iconButtonTransparent }
});
