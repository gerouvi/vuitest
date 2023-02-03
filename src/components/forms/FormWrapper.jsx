import { FormControl } from '@chakra-ui/react';

const FormWrapper = ({ ...props }) => (
  <FormControl
    as="form"
    sx={{
      fieldset: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        bg: 'white.0',
        _dark: {
          bg: 'black.9',
        },
        boxShadow: '0px 0px 16px rgb(69, 69, 69)',
        padding: '24px',
        borderRadius: '16px',
      },
    }}
    {...props}
  />
);

export default FormWrapper;
