const { test, expect } = require('@playwright/test');
const { getWeather } = require('../utils/apiClient');

test('Verify Weather API for Islamabad', async () => {

    const apiKey = '03249fea2257bbd2414f490926ed522a'; 
    const response = await getWeather('Islamabad', apiKey);

    expect(response.status).toBe(200);
    expect(response.data.main.temp).toBeDefined();
});
