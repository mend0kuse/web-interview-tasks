import { useSearchSuperheros } from '~entities/superhero/api/search-superheros';

import { SearchInput } from './search-input';
import { SearchResult } from './search-result';

import { useSearchInput } from '../lib/use-search-input';

export function Search() {
  const { inputValue, onChange, query } = useSearchInput();
  const queryData = useSearchSuperheros({ query });

  return (
    <div>
      <SearchInput value={inputValue} onChange={onChange} />
      <SearchResult queryData={queryData} />
    </div>
  );
}
