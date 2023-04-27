/* eslint-disable import/no-extraneous-dependencies */

const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:3000';

describe('Setting up Express', () => {
  test('Listening at Port 3000', async () => {
    const fetch = await axios.get('/')
      .then((response) => (response.data))
      .catch((err) => (err));

    console.log(fetch);

    expect(fetch).toBe('Hello World');
  });
});
