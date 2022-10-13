import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

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
      <form action="" onSubmit={handleSubmit}>
        <input ref={inputForm} type="text" name="search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;