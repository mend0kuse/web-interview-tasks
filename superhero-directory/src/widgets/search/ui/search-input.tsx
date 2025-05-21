import { InputHTMLAttributes, memo } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const SearchInput = memo((props: Props) => {
  return (
    <input
      placeholder="Search for a superhero..."
      className="mb-6 w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
      {...props}
    />
  );
});

SearchInput.displayName = 'SearchInput';
