import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
} from '@chakra-ui/react';
import { toast } from 'react-toastify';

import { useUserLoginMutation } from 'redux/api/AuthApi';

import Background from '../images/bg.jpg';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userLogin, { isSuccess, isError }] = useUserLoginMutation();

  useEffect(() => {
    isError && toast.error('Invalid email or password');
  }, [isSuccess, isError]);

  const handleInputChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
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

  const handleSubmit = event => {
    event.preventDefault();
    userLogin({
      email: email,
      password: password,
    });
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

      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading
            fontSize={'4xl'}
            textAlign={'center'}
            color={'blackAlpha.700'}
          >
            Sign in
          </Heading>
        </Stack>
        <Box
          as="form"
          rounded={'lg'}
          bg={'blackAlpha.400'}
          boxShadow={'lg'}
          p={8}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel color={'white'}>Email</FormLabel>
              <Input
                type="email"
                pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
                required
                onChange={handleInputChange}
                name="email"
                value={email}
                color={'white'}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel color={'white'}>Password</FormLabel>
              <Input
                type="password"
                onChange={handleInputChange}
                value={password}
                name="password"
                color={'white'}
                mb={'2'}
              />
            </FormControl>
            <Stack spacing={5}>
              <Button
                type="submit"
                loadingText="Submitting"
                bg={'blackAlpha.600'}
                color={'white'}
                _hover={{ bg: 'blackAlpha.400' }}
              >
                Sign in
              </Button>{' '}
              <Button type="button" onClick={goBack}>
                Go back
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginView;
