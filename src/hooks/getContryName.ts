import { countries } from "./conrties";

export function getCountryName(countryCode: string): string | null {
  return (countries[countryCode] ? `, ${countries[countryCode]}` : null);
}