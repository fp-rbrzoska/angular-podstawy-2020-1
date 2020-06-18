import { Address } from './Address';

export interface User {
  name: string;
  age: number;
  address?: Address;
}
