import { browser } from 'protractor';

describe('', () => {
    it('Should open webpage', async () => {
        await browser.get('https://www.protractortest.org/#/');
        await browser.sleep(5000);
    });
});