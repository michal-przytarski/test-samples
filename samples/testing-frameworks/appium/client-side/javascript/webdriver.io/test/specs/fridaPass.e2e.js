describe("Pass biometric authentication", () => {
  it("should click [Ask biometrics] button", async () => {
    const buttonAskBiometrics = await $(
      '//XCUIElementTypeOther[@name="Ask biometrics"]'
    );
    await buttonAskBiometrics.waitForDisplayed({ timeout: 10000 });
    // expect(await buttonAskBiometrics.isDisplayed().toBe(true));
    const visable = await buttonAskBiometrics.isDisplayed();
    visable.should.be.true;
    await buttonAskBiometrics.click();
  });

  it("shoud show biometric alert", async () => {
    const alertBiometrics = await $(
      '//XCUIElementTypeAlert[@name="BitBar Biometric Authentication"]'
    );
    await alertBiometrics.waitForDisplayed({ timeout: 10000 });
    const visable = await alertBiometrics.isDisplayed();
    visable.should.be.true;
  });

  it("shoud pass biometric authentication", async () => {
    const result = await browser.execute("mobile: alert", {
      action: "accept",
      buttonLabel: "Pass",
    });
    const textResult = await $(
      '//XCUIElementTypeStaticText[@name="Biometry succeed!"]'
    );
    const visable = await textResult.isDisplayed();
    visable.should.be.true;
  });
});
