import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Stack, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';

import {
  useGetContactQuery,
  useAddContactsMutation,
} from 'redux/api/ContactsApi';

const ContactForm = () => {
  const [addContacts, { isLoading, isSuccess, error }] =
    useAddContactsMutation();
  const { data } = useGetContactQuery();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [notify, setNotify] = useState('');

  useEffect(() => {
    isSuccess &&
      toast.success(` ${notify} succesfully added`, {
        autoClose: 800,
      });
    error && toast.error('something went wrong');
  }, [error, isSuccess, notify]);

  const handleInputChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setNotify(name);
    data.every(item => item.name.toLowerCase() !== name.toLowerCase())
      ? addContacts({
          name: name,
          number: number,
        })
      : toast.error(`${name} is alredy in contacts!`);
    setName('');
    setNumber('');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Stack w="400px" mx="auto" my="6" spacing={4}>
        <FormControl id="name">
          <FormLabel color={'white'}>Name</FormLabel>
          <Input
            color={'white'}
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Davyd Steblyna"
          />
        </FormControl>
        <FormControl id="name">
          <FormLabel color={'white'}>Number</FormLabel>
          <Input
            color={'white'}
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="+380..."
          />
        </FormControl>
        <Button
          bg={'blackAlpha.600'}
          color={'white'}
          _hover={{ bg: 'blackAlpha.400' }}
          type="submit"
        >
          {isLoading ? 'Adding...' : 'Add Contact'}
        </Button>
      </Stack>
    </form>
  );
};

export default ContactForm;
