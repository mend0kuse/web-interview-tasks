import { BaseFunction } from './typescript';

export const debounce = (callback: BaseFunction, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<typeof callback>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
