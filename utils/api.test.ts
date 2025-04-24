import { fetchCharacters, fetchLocations, fetchEpisodes } from './api';
import { getCharacters, getLocations, getEpisodes } from 'rickmortyapi';

jest.mock('rickmortyapi', () => ({
  getCharacters: jest.fn(),
  getLocations: jest.fn(),
  getEpisodes: jest.fn(),
}));

describe('API Utility Functions', () => {
  it('fetchCharacters should return characters', async () => {
    const mockCharacters = [{ id: 1, name: 'Rick Sanchez' }];
    (getCharacters as jest.Mock).mockResolvedValue({ results: mockCharacters });

    const characters = await fetchCharacters();
    expect(characters).toEqual(mockCharacters);
    expect(getCharacters).toHaveBeenCalledTimes(1);
  });

  it('fetchLocations should return locations', async () => {
    const mockLocations = [{ id: 1, name: 'Earth' }];
    (getLocations as jest.Mock).mockResolvedValue({ results: mockLocations });

    const locations = await fetchLocations();
    expect(locations).toEqual(mockLocations);
    expect(getLocations).toHaveBeenCalledTimes(1);
  });

  it('fetchEpisodes should return episodes', async () => {
    const mockEpisodes = [{ id: 1, name: 'Pilot' }];
    (getEpisodes as jest.Mock).mockResolvedValue({ results: mockEpisodes });

    const episodes = await fetchEpisodes();
    expect(episodes).toEqual(mockEpisodes);
    expect(getEpisodes).toHaveBeenCalledTimes(1);
  });
});