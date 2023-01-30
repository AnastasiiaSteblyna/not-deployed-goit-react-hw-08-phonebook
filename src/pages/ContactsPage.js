import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Heading, Box } from '@chakra-ui/react';

import { getLoggedin } from 'redux/slices/AuthSlice';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';

const ContactsView = () => {
  const isLogdedin = useSelector(getLoggedin);
  return (
    <Box w="400px" mx="auto" my="6">
      {!isLogdedin && <Navigate to="/" replace={true} />}
      <Heading align="center">Phonebook</Heading>
      <ContactForm />
      <Heading align="center">Contacts</Heading>
      <ContactFilter />
      <ContactList />
    </Box>
  );
};

export default ContactsView;
