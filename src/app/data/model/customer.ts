import { Representative } from './representative.js';
import { Country } from './country.js';

export class Customer {
  id?: number;
  name?: number;
  country?: Country;
  company?: string;
  date?: string;
  status?: string;
  representative?: Representative;
}
