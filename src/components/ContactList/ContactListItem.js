import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Flex, Box, Button } from '@chakra-ui/react';

import { useDeleteContactsMutation } from 'redux/api/ContactsApi';

const ContactListItem = ({ name, number, id }) => {
  const [deleteContacts, { isLoading: isDeleting, isSuccess, error }] =
    useDeleteContactsMutation();

  useEffect(() => {
    isSuccess && toast.info(` ${name} removed`);
    error && toast.error('something went wrong');
  }, [isSuccess, name, error]);

  return (
    <Box key={id} mb="5">
      <Flex
        textTransform="uppercase"
        alignItems="center"
        justifyContent="space-between"
        w="400px"
        mb="5"
        color={'white'}
      >
        {name} &bull; &bull; &bull; {number}
        <Button
          type="button"
          onClick={() => deleteContacts(id)}
          disabled={isDeleting}
          bg={'blackAlpha.400'}
          color={'white'}
          _hover={{ bg: 'blackAlpha.300' }}
        >
          {isDeleting ? 'Deleting' : 'Delete'}
        </Button>
      </Flex>
    </Box>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
