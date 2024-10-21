// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function weatherRequest(city: string, country?: string): Promise<any> {
  if (!navigator.onLine) {
    throw new Error('You are not connected to the Internet');
  }

  const url = `https://api.weatherbit.io/v2.0/forecast/daily?key=ef518f8cdcaa4ec4bc2f06e0bb7590fd&city=${city}${country ? `&country=${country}` : ''}&days=6`;

  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      switch (response.status) {
      case 400:
        throw new Error('Bad Request: The request was unacceptable, often due to missing a required parameter.');
      case 429:
        throw new Error('Free trial ended. Please try again tomorrow.');
      case 401:
        throw new Error('Unauthorized: API key is missing or invalid.');
      case 403:
        throw new Error('Forbidden: You do not have permission to access this resource.');
      case 404:
        throw new Error('Not Found: The requested resource could not be found.');
      case 500:
        throw new Error('Internal Server Error: Something went wrong on the server.');
      case 502:
        throw new Error('Bad Gateway: The server was acting as a gateway or proxy and received an invalid response.');
      case 503:
        throw new Error('Service Unavailable: The server is not ready to handle the request.');
      case 504:
        throw new Error('Gateway Timeout: The server was acting as a gateway or proxy and did not receive a timely response.');
      case 101:
        throw new Error('Switching Protocols: Protocol is being switched.');
      default:
        throw new Error(`Unexpected error: ${response.status} ${response.statusText}`);
      }
    } else {
      if (response.status === 204) {
        throw new Error('Most likely there is no such city');
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
