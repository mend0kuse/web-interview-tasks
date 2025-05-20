import { memo } from 'react';

import { SuperheroCard } from '~widgets/search/ui/super-hero-card';

import { useSearchSuperheros } from '~entities/superhero/api/search-superheros';

import { EmptyState } from './search-empty-state';
import { ErrorState } from './search-error-state';
import { LoadingState } from './search-loading-state';

type Props = {
  queryData: ReturnType<typeof useSearchSuperheros>;
};

export const SearchResult = memo(({ queryData }: Props) => {
  const { data, isLoading, isError, error } = queryData;

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState message={error?.message} />;
  if (data?.length === 0) return <EmptyState />;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.map((hero) => <SuperheroCard superhero={hero} key={hero.id} />)}
    </div>
  );
});

SearchResult.displayName = 'SearchResult';
