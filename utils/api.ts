import { getCharacters, getLocations, getEpisodes } from 'rickmortyapi';
import { Character, Location, Episode } from '../types/types';

export const fetchCharacters = async (): Promise<Character[]> => {
  const { data } = await getCharacters();
  const { results } = data;
  return results as Character[];
};

export const fetchLocations = async (): Promise<Location[]> => {
  const { data } = await getLocations();
  const { results } = data;
  return results as Location[];
};

export const fetchEpisodes = async (): Promise<Episode[]> => {
  const { data } = await getEpisodes();
  const { results } = data;
  return results as Episode[];
};