import { useState } from 'react';
import { Navigate, useNavigate, useLocation, NavLink } from 'react-router-dom';
import { useUserSignupMutation } from 'redux/api/AuthApi';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';

import Background from '../images/bg.jpg';

const SignupView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userSignup, { isSuccess }] = useUserSignupMutation();

  const handleInputChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await userSignup({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

  let navigate = useNavigate();
  let location = useLocation();

  const goBack = () => {
    navigate(location?.state?.from || '/');
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundImage={`url(${Background})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      {isSuccess && <Navigate to="/contacts" replace={true} />}

      <Stack spacing={5} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading
            fontSize={'4xl'}
            textAlign={'center'}
            color={'blackAlpha.700'}
          >
            Sign up
          </Heading>
        </Stack>
        <Box
          as="form"
          rounded={'lg'}
          bg={'blackAlpha.400'}
          boxShadow={'lg'}
          onSubmit={handleSubmit}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="firstName" isRequired>
              <FormLabel color={'white'}>Name</FormLabel>
              <Input
                type="text"
                value={name}
                name="name"
                onChange={handleInputChange}
                color={'white'}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel color={'white'}>Email address</FormLabel>
              <Input
                pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
                onChange={handleInputChange}
                type="email"
                value={email}
                name="email"
                color={'white'}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel color={'white'}>Password</FormLabel>
              <InputGroup>
                <Input
                  onChange={handleInputChange}
                  type={'password'}
                  value={password}
                  minLength={7}
                  name="password"
                  color={'white'}
                />
                <InputRightElement h={'full'}></InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={5} pt={2}>
              <Button
                type="submit"
                loadingText="Submitting"
                bg={'blackAlpha.600'}
                color={'white'}
                _hover={{ bg: 'blackAlpha.400' }}
              >
                Sign up
              </Button>
              <Button type="button" onClick={goBack}>
                Go back
              </Button>
            </Stack>
            <Stack pt={4}>
              <Text align={'center'}>
                Already a user?{' '}
                <Link color={'white'} as={NavLink} to="/login">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignupView;
