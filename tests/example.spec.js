// @ts-check
const { test, expect } = require('@playwright/test');
const mainPageUrl = 'http://localhost:5551/';

test.beforeEach('Run the Main Page', async ({ page }) => {
  await page.goto(mainPageUrl);
});

test('The project development server is running', async ({ page }) => {
  expect(page.url()).toBe(mainPageUrl);
});

test('Main Page: Page Heading exists', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'CHeckout page' })
  ).toBeAttached();
});

/* body element styles tests: */

test('Body has the background color of #030a1e (line 18)', async ({ page }) => {
  const mainPaddingTopValue = await page.locator('body').evaluate((elem) => {
    return window.getComputedStyle(elem).getPropertyValue('background-color');
  });

  expect(mainPaddingTopValue).toBe('rgb(3, 10, 30)');
});

/* <main> element styles tests: */

test('"main" HTML element has the padding-top of 60px (line 42)', async ({
  page,
}) => {
  const mainPaddingTopValue = await page.locator('main').evaluate((elem) => {
    return window.getComputedStyle(elem).getPropertyValue('padding-top');
  });

  expect(mainPaddingTopValue).toBe('60px');
});

test('"main" HTML element is a flex container (display: flex;) (line 43)', async ({
  page,
}) => {
  const displayValue = await page.locator('main').evaluate((elem) => {
    return window.getComputedStyle(elem).getPropertyValue('display');
  });

  expect(displayValue).toBe('flex');
});

test('"main" HTML element has a column flex layout (flex-direction: column) (line 44)', async ({
  page,
}) => {
  const flexDirectionValue = await page.locator('main').evaluate((elem) => {
    return window.getComputedStyle(elem).getPropertyValue('flex-direction');
  });

  expect(flexDirectionValue).toBe('column');
});

test('"main" HTML element has a 60px distance between flex children (gap: 60px;) (line 45)', async ({
  page,
}) => {
  const gapValue = await page.locator('main').evaluate((elem) => {
    return window.getComputedStyle(elem).getPropertyValue('gap');
  });

  expect(gapValue).toBe('60px');
});

/* ".forms" class element styles tests: */

test('The HTML element of class "forms" is a flex container (display: flex;) (line 53)', async ({
  page,
}) => {
  const displayValue = await page.locator('.forms').evaluate((elem) => {
    return window.getComputedStyle(elem).getPropertyValue('display');
  });

  expect(displayValue).toBe('flex');
});

test('The HTML element of class "forms" has a 30px distance between flex children (gap: 30px;) (line 54)', async ({
  page,
}) => {
  const gapValue = await page.locator('.forms').evaluate((elem) => {
    return window.getComputedStyle(elem).getPropertyValue('gap');
  });

  expect(gapValue).toBe('30px');
});

/* ".box" class element styles tests: */

test('The HTML element of class "box" has a border of #2c3044 color, 1 pixel thickness and solid style (border: 1px solid #2c3044;) (line 65)', async ({
  page,
}) => {
  const borderValue = await page
    .locator('.box')
    .all()
    .then((data) =>
      data[0].evaluate((elem) => {
        return window.getComputedStyle(elem).getPropertyValue('border');
      })
    );

  expect(borderValue).toBe('1px solid rgb(44, 48, 68)');
});

// ".form-input-group" input styles tests

test('The HTML input element inside of class ".form-input-group" has the border radius of 5px (border-radius: 5px;) (line 113)', async ({
  page,
}) => {
  const formGroupInputBorderRadiusValue = await page
    .locator('.form-input-group')
    .first()
    .locator('input')
    .evaluate((elem) => {
      return window.getComputedStyle(elem).getPropertyValue('border-radius');
    });

  expect(formGroupInputBorderRadiusValue).toBe('5px');
});

// ".form-input-group" label styles tests

test('The HTML label element inside of class ".form-input-group" should have the font size of 12px (font-size: 12px;) (line 134)', async ({
  page,
}) => {
  const formGroupLabelFontSizeValue = await page
    .locator('.form-input-group')
    .first()
    .locator('label')
    .evaluate((elem) => {
      return window.getComputedStyle(elem).getPropertyValue('font-size');
    });

  expect(formGroupLabelFontSizeValue).toBe('12px');
});

test('The HTML label element inside of class ".form-input-group" should have the font color of #b6b8c0 (color: #b6b8c0;) (line 134)', async ({
  page,
}) => {
  const formGroupLabelColorValue = await page
    .locator('.form-input-group')
    .first()
    .locator('label')
    .evaluate((elem) => {
      return window.getComputedStyle(elem).getPropertyValue('color');
    });

  expect(formGroupLabelColorValue).toBe('rgb(182, 184, 192)');
});

// ".option-item-selected" styles tests

test('The HTML label element of class ".option-item-selected" should have flex children aligned to the center vertically (align-items: center;) (line 140)', async ({
  page,
}) => {
  const optionSelectedAlignItemsValue = await page
    .locator('.option-item-selected')
    .first()
    .evaluate((elem) => {
      return window.getComputedStyle(elem).getPropertyValue('align-items');
    });

  expect(optionSelectedAlignItemsValue).toBe('center');
});

// Checked input styles test

test('The HTML input element of type "radio" should have the background of "white" when checked (background-color: white;) (line 169)', async ({
  page,
}) => {
  const checkedInputLabelBackgroundValue = await page
    .locator('[type="radio"]:checked ~ label .circle')
    .first()
    .evaluate((elem) => {
      return window.getComputedStyle(elem).getPropertyValue('background');
    });

  expect(
    checkedInputLabelBackgroundValue.includes('rgb(255, 255, 255)')
  ).toBeTruthy();
});

// ".reviews" styles tests

test('The HTML element of class ".reviews" should relatively positioned (position: relative;) (line 183)', async ({
  page,
}) => {
  const reviewsPositionValue = await page
    .locator('.reviews')
    .evaluate((elem) => {
      return window.getComputedStyle(elem).getPropertyValue('position');
    });

  expect(reviewsPositionValue).toBe('relative');
});

test('The HTML element of class ".reviews" should have a background image url of "/assets/backgrounds/review-bg.png" (line 195)', async ({
  page,
}) => {
  const reviewsBackgroundImageValue = await page
    .locator('.reviews')
    .evaluate((elem) => {
      return window
        .getComputedStyle(elem, '::before')
        .getPropertyValue('background-image');
    });

  expect(reviewsBackgroundImageValue).toBe(
    'url("http://localhost:5551/assets/backgrounds/review-bg.png")'
  );
});

// footer anchor styles test

test('The footer link should have the color of #da5252 (color: #da5252;) (line 381)', async ({
  page,
}) => {
  const footerRedLinkColorValue = await page
    .locator('footer ul li span a')
    .evaluate((elem) => {
      return window.getComputedStyle(elem).getPropertyValue('color');
    });

  expect(footerRedLinkColorValue).toBe('rgb(218, 82, 82)');
});
