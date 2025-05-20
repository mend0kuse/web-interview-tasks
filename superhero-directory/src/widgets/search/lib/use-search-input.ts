import { useState, useCallback, ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDebounce } from '~shared/lib/react/hooks/use-debounce';

import { SEARCH_DEBOUNCE_MS, SEARCH_QUERY_PARAM } from '../constants';

export const useSearchInput = () => {
  const [params, setParams] = useSearchParams();
  const query = params.get(SEARCH_QUERY_PARAM) ?? '';

  const [inputValue, setInputValue] = useState(query);

  const setSearchParams = useCallback(
    (value: string) => {
      const newParams = new URLSearchParams();
      newParams.set(SEARCH_QUERY_PARAM, value);
      setParams(newParams, {
        replace: true,
      });
    },
    [setParams]
  );

  const debouncedSetParams = useDebounce(setSearchParams, SEARCH_DEBOUNCE_MS);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSetParams(value);
  };

  return {
    inputValue,
    onChange,
    query,
  };
};
