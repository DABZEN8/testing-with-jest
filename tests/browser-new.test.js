test('peek button exists', async () => {
    let peek = await driver.findElement(By.id('peek'));
    expect(peek).toBeDefined();
});