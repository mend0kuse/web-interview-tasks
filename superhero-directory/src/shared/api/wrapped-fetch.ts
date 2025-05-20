import { ResponseError } from './response';

export async function wrappedFetch<RawResponse, MappedResponse = RawResponse>(
  input: RequestInfo,
  init?: RequestInit,
  mapper?: (res: RawResponse) => MappedResponse
): Promise<MappedResponse> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const error: ResponseError = await res.json();

    throw new Error(`Error ${res.status}: ${res.statusText} - ${error.error}`);
  }

  const response = await res.json();

  if (response.error) {
    throw new Error(response.error);
  }

  return mapper ? mapper(response) : response;
}
