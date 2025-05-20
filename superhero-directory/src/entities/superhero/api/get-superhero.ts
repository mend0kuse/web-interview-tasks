import { ResponseSuccess } from '~shared/api/response';
import { wrappedFetch } from '~shared/api/wrapped-fetch';
import { config } from '~shared/config';

import { skipToken, useQuery } from '@tanstack/react-query';

import { superheroKeys } from './keys';

import { Superhero } from '../superhero';

export type Params = {
  id?: string;
};

export function useSuperhero(params: Params) {
  const { id } = params;

  return useQuery({
    queryKey: superheroKeys.superhero(id ?? ''),
    queryFn: id
      ? () => {
          return wrappedFetch<ResponseSuccess<Superhero>>(
            `${config.apiHost}/api/${config.apiToken}/${id}`,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
        }
      : skipToken,
  });
}
