import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchIcon, Input, SearchF } from './SearchForm.styled';

function SearchForm() {
  let [searchParams, setSearchParams] = useSearchParams();
  const inputForm = useRef();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      inputForm.current.value = query;
    }
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.search.value });
  };

  return (
    <div>
      <SearchF action="" onSubmit={handleSubmit}>
        <button type="submit"><SearchIcon/></button>
        <Input ref={inputForm} type="text" name="search" placeholder='enter part of the movie title'/>
      </SearchF>
    </div>
  );
}

export default SearchForm;