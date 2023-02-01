import { NavLink } from 'react-router-dom';

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

import Background from '../images/bg.jpg';

const WithBackgroundImage = () => {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      backgroundImage={`url(${Background})`}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bg={'blackAlpha.200'}
      >
        <Stack maxW={'2xl'} align={'center'} spacing={6}>
          <Text
            color={'blackAlpha.800'}
            mb={'4'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            PHONEBOOK
          </Text>

          <Stack direction={'row'}>
            <Button
              as={NavLink}
              to="register"
              bg={'blackAlpha.600'}
              color={'white'}
              _hover={{ bg: 'blackAlpha.200' }}
            >
              Sing up
            </Button>
            <Button
              as={NavLink}
              to="login"
              bg={'whiteAlpha.700'}
              color={'blackAlpha.800'}
              _hover={{ bg: 'whiteAlpha.400' }}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default WithBackgroundImage;
