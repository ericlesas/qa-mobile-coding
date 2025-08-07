class BaseScreen {

    async scrollDown() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsVerticalList().scrollToEnd(1)')
    }

    async scrollUp() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsVerticalList().scrollToBeginning(1)')
    }

    async getTextElement(element) {
        return await element.getText()
    }

    async sleep() {
        await browser.pause(2000)
    }
}

export default BaseScreen