import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const vocdoni = definePartsStyle({
  control: defineStyle({
    borderRadius: '30%',
    border: '1px solid',
    borderColor: 'green.vocdoni',

    _checked: {
      bg: 'green.vocdoni',
      border: 'none',

      _hover: {
        bg: 'default',
      },
    },
  }),
});

export const checkboxsTheme = defineMultiStyleConfig({
  variants: { vocdoni },
});
