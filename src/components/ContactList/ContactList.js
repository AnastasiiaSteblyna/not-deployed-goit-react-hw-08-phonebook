import { useSelector } from 'react-redux';
import { useGetContactQuery } from 'redux/api/ContactsApi';
import { Spinner } from '@chakra-ui/react';

import ContactListItem from './ContactListItem';

const ContactList = () => {
  const { data, isFetching } = useGetContactQuery();
  const filter = useSelector(state => state.filter);

  const contacts =
    data && data.filter(contact => contact.name.toLowerCase().includes(filter));

  return (
    <>
      {isFetching && (
        <Spinner
          thickness="4px"
          speed="0.95s"
          emptyColor="gray.200"
          color="blue.200"
          size="xl"
          ml="190"
        />
      )}
      {data && data.length !== 0 && (
        <ul>
          {contacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </ul>
      )}
      {data && data.length === 0 && <p>Add your contacts to see them here</p>}
    </>
  );
};

export default ContactList;
