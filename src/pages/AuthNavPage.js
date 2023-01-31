import { NavLink } from 'react-router-dom';

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

// import Image from '../../image/dark-macbook.png';

const WithBackgroundImage = () => {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      // backgroundImage={`url(${Image})`}/
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.100, transparent)'}
      >
        {/* kjlkjlkjlkjlkj */}
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            Phonebook
          </Text>
          <Stack direction={'row'}>
            <Button
              as={NavLink}
              to="register"
              bg={'blue.200'}
              color={'white'}
              _hover={{ bg: 'blue.300' }}
            >
              Sing up
            </Button>
            <Button
              as={NavLink}
              to="login"
              bg={'whiteAlpha.300'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
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
