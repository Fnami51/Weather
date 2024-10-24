import { weatherRequest } from './getRequest'; 
global.fetch = jest.fn();

describe('weatherRequest', () => {
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it('should throw an error if the user is offline', async () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(false);

    await expect(weatherRequest('London', 'GB')).rejects.toThrow('You are not connected to the Internet');
  });

  it('should handle a successful fetch request', async () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(true);

    const mockResponse = {
      ok: true,
      status: 200,
      json: async () => ({ data: 'weather data' }),
    };

    (fetch as jest.Mock).mockResolvedValue(mockResponse);

    const result = await weatherRequest('London', 'GB');
    expect(result).toEqual({ data: 'weather data' });
  });

  it('should throw an error for a 400 Bad Request', async () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(true);

    const mockResponse = {
      ok: false,
      status: 400,
    };

    (fetch as jest.Mock).mockResolvedValue(mockResponse);

    await expect(weatherRequest('InvalidCity', 'GB')).rejects.toThrow('Bad Request: The request was unacceptable, often due to missing a required parameter.');
  });

  it('should throw an error for a 429 Too Many Requests', async () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(true);

    const mockResponse = {
      ok: false,
      status: 429,
    };

    (fetch as jest.Mock).mockResolvedValue(mockResponse);

    await expect(weatherRequest('London', 'GB')).rejects.toThrow('Free trial ended. Please try again tomorrow.');
  });

  it('should throw an error for a 401 Unauthorized', async () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(true);

    const mockResponse = {
      ok: false,
      status: 401,
    };

    (fetch as jest.Mock).mockResolvedValue(mockResponse);

    await expect(weatherRequest('London', 'GB')).rejects.toThrow('Unauthorized: API key is missing or invalid.');
  });

  it('should throw an error for a 404 Not Found', async () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(true);

    const mockResponse = {
      ok: false,
      status: 404,
    };

    (fetch as jest.Mock).mockResolvedValue(mockResponse);

    await expect(weatherRequest('InvalidCity', 'GB')).rejects.toThrow('Not Found: The requested resource could not be found.');
  });

  it('should throw an error for a 204 No Content (Empty Response)', async () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(true);

    const mockResponse = {
      ok: true,
      status: 204,
    };

    (fetch as jest.Mock).mockResolvedValue(mockResponse);

    await expect(weatherRequest('UnknownCity', 'GB')).rejects.toThrow('There may be no such city or the country is incorrectly specified.');
  });
});
