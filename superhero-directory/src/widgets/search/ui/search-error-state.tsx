type Props = {
  message?: string;
};

export function ErrorState({ message = 'Something went wrong.' }: Props) {
  return (
    <div className="mt-4 text-center text-sm text-red-500">
      <p className="font-medium">Error</p>
      <p>{message}</p>
    </div>
  );
}
