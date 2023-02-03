import { Flex } from '@chakra-ui/react';

const FormSection = ({ ...props }) => (
  <Flex
    flexDirection="column"
    gap={4}
    bg="white.2"
    _dark={{
      bg: 'black.7',
    }}
    borderRadius={8}
    padding={4}
    {...props}
  />
);

export default FormSection;
