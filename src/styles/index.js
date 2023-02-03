import { extendTheme } from '@chakra-ui/react';
import { buttonsTheme } from './components/buttonsStyle';
import { checkboxsTheme } from './components/checkboxsStyle';
import { colors, config, fonts, styles } from './globalStyles';
import { inputsTheme } from './components/inputsStyle';
import { modalsTheme } from './components/modalsStyle';

const overrides = {
  config,
  styles,
  components: {
    Button: buttonsTheme,
    Input: inputsTheme,
    Checkbox: checkboxsTheme,
    Modal: modalsTheme,
  },
  fonts,
  colors,
};

const theme = extendTheme(overrides);

export default theme;
