"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('', () => {
    it('Should open webpage', async () => {
        await protractor_1.browser.get('https://www.protractortest.org/#/');
        await protractor_1.browser.sleep(5000);
    });
});
