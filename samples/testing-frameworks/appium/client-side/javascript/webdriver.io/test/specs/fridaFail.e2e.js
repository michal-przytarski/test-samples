describe("Fail biometric authentication", () => {
  it("should click [Ask biometrics] button", async () => {
    const buttonAskBiometrics = await $(
      '//XCUIElementTypeOther[@name="Ask biometrics"]'
    );
    await buttonAskBiometrics.waitForDisplayed({ timeout: 10000 });
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

  it("shoud fail biometric authentication", async () => {
    const result = await browser.execute("mobile: alert", {
      action: "accept",
      buttonLabel: "Fail",
    });
    const textResult = await $(
      '//XCUIElementTypeStaticText[@name="Biometry failed!"]'
    );
    const visable = await textResult.isDisplayed();
    visable.should.be.true;
  });
});
