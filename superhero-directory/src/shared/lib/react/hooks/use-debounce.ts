import { DependencyList, useCallback } from 'react';

import { debounce } from '~shared/lib/debounce';
import { BaseFunction } from '~shared/lib/typescript';

export function useDebounce<Callback extends BaseFunction>(
  callback: Callback,
  delay: number,
  ...deps: DependencyList
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(debounce(callback, delay), [callback, delay, ...deps]);
}
