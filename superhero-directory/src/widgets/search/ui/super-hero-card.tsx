import { Link } from 'react-router-dom';

import { Superhero } from '~entities/superhero/superhero';

import { ROUTES } from '~shared/lib/routes';

type SuperheroCardProps = {
  superhero: Superhero;
};

export function SuperheroCard({ superhero }: SuperheroCardProps) {
  return (
    <Link
      to={ROUTES.SUPERHERO(superhero.id)}
      className="block rounded-md bg-white p-4 shadow-md transition hover:shadow-lg"
    >
      <img
        src={superhero.image.url}
        alt={superhero.name}
        className="mx-auto mb-4 h-48 w-48 rounded-md object-cover shadow"
      />
      <h2 className="mb-1 text-center text-xl font-bold">{superhero.name}</h2>
      <p className="mb-2 text-center text-gray-600">
        {superhero.biography['full-name'] || 'Unknown Identity'}
      </p>
      <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
        {Object.entries(superhero.powerstats).map(([key, value]) => (
          <li key={key} className="flex justify-between">
            <span className="capitalize">{key}:</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </Link>
  );
}
