import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { useContext, useState } from 'react';
import { ItemsContext } from '../../../providers/ItemsContext';
import { useForm, SubmitHandler } from 'react-hook-form';

type TSearchFormValues = {
  search: string;
};

const SearchForm = () => {
  const { searchItem } = useContext(ItemsContext);

  const { register, handleSubmit } = useForm<TSearchFormValues>();

  const submit: SubmitHandler<TSearchFormValues> = ({ search }) => {
    searchItem(search);
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit(submit)}>
      <input
        type="text"
        placeholder="Digitar pesquisa"
        {...register('search')}
      />
      <StyledButton type="submit" $buttonSize="medium" $buttonStyle="green">
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
