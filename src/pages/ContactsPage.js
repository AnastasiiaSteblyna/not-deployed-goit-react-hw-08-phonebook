import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Heading, Box } from '@chakra-ui/react';

import { getLoggedin } from 'redux/slices/AuthSlice';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';

import { Stack, Flex } from '@chakra-ui/react';

import Background from '../images/bg.jpg';

const ContactsView = () => {
  const isLogdedin = useSelector(getLoggedin);
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundImage={`url(${Background})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Box rounded={'lg'} bg={'blackAlpha.400'} boxShadow={'lg'} p={8}>
          {!isLogdedin && <Navigate to="/" replace={true} />}
          <Heading align="center" color={'whiteAlpha.800'}>
            Phonebook
          </Heading>
          <ContactForm />
          <Heading align="center" color={'whiteAlpha.800'}>
            Contacts
          </Heading>
          <ContactFilter />
          <ContactList />
        </Box>
      </Stack>
    </Flex>
  );
};

export default ContactsView;
