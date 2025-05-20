import { ResponseSuccess } from '~shared/api/response';
import { wrappedFetch } from '~shared/api/wrapped-fetch';
import { config } from '~shared/config';

import { skipToken, useQuery } from '@tanstack/react-query';

import { superheroKeys } from './keys';

import { Superhero } from '../superhero';

type ResponsePayload = {
  'results-for': string;
  results: Superhero[];
};

export type Params = {
  query: string;
};

export function useSearchSuperheros(params: Params) {
  const { query } = params;

  return useQuery({
    queryKey: superheroKeys.search(query),
    queryFn: query
      ? () => {
          return wrappedFetch<
            ResponseSuccess<ResponsePayload>,
            ResponsePayload['results']
          >(
            `${config.apiHost}/api/${config.apiToken}/search/${query}`,
            undefined,
            (response) => response.results
          );
        }
      : skipToken,
  });
}
