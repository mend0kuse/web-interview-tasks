export type ResponseError = {
  response: 'error';
  error: string;
};

export type ResponseSuccess<T> = {
  response: 'success';
} & T;

export type ResponseUnion<T> = ResponseError | ResponseSuccess<T>;
