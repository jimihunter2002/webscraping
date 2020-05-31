/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-console */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const {
  Builder,
  By,
  Key,
  until,
  DesiredCapabilities,
  ChromeOptions,
  Actions,
} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const {
  arraySumFromRight,
  arraySumFromLeft,
  arrayCenterIndex,
} = require('./arrayHelpers');

const options = new chrome.Options();
options.addArguments('test-type');
options.addArguments('--start-maximized');

options.addArguments('--allow-running-insecure-content');
options.addArguments('--disable-web-security');

const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();
describe('Web scraping', () => {
  test('first test', () => {
    async function test1() {
      try {
        await driver.get('http://localhost:3000');
        await driver
          .wait(until.titleIs('React App'), 8000)
          .then(clickToStartChallenge())
          .then(getTableRowData(1, 4));
      } catch (e) {
        console.log(`error while trying to start test ${e.message}`);
      }
    }
    test1();
  });
});

function clickToStartChallenge() {
  driver
    .findElement(By.css('button[data-test-id="render-challenge"]'))
    .then(function (btn) {
      btn.click();
    });
}

async function getTableRowData(row, expectedResult) {
  const index = row;
  const extractedArr = [];

  return driver
    .findElements(By.xpath(`//tbody/tr[${index}]/td`))
    .then(function (elements) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].getText().then(function (text) {
          extractedArr.push(Number(text));
        });
      }
      setTimeout(() => {
        const result = arrayCenterIndex(
          arraySumFromRight(extractedArr),
          arraySumFromLeft(extractedArr),
          extractedArr,
        );
        expect(result).toBe(4);
      }, 5000);
    });
}
