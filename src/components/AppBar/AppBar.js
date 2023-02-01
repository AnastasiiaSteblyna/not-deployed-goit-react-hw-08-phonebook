import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Flex, Button, Text } from '@chakra-ui/react';

import { getUserName } from '../../redux/slices/AuthSlice';
import { useUserLogoutMutation } from '../../redux/api/AuthApi';

const AppBar = () => {
  const name = useSelector(getUserName);
  const [userLogout] = useUserLogoutMutation();

  return (
    <Box bg={'blackAlpha.100'} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <NavLink to="contacts">
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color={'blackAlpha.800'}
          >
            {name}, it is your contacts
          </Text>
        </NavLink>
        <Button
          color={'blackAlpha.700'}
          type="button"
          onClick={() => {
            userLogout();
          }}
        >
          Log out
        </Button>
      </Flex>
    </Box>
  );
};

export default AppBar;
