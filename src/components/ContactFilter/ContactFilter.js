import { useDispatch, useSelector } from 'react-redux';
import { Stack, Input, Text } from '@chakra-ui/react';
import { setFilter } from 'redux/slices/FilterSlice';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const onFilterChange = event => {
    dispatch(setFilter(event.currentTarget.value.toLowerCase()));
  };

  return (
    <Stack w="400px" mx="auto" my="6" spacing={3}>
      <Text color="white" fontWeight="bold">
        Find contacts by name
      </Text>
      <Input
        color={'white'}
        onChange={onFilterChange}
        value={filterValue}
        type="text"
        name="filter"
      />
    </Stack>
  );
};

export default ContactFilter;
