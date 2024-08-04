import { Type } from 'typescript';

export const randomFrom = (arr: Array<unknown>): unknown => {
  return arr[Math.floor(Math.random() * arr.length)];
};
