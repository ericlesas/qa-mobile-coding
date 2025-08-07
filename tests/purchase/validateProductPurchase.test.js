import { checkoutSuccessMessages, formData } from '../../data/checkout.data'
import { homeData } from '../../data/home.data'
import cartScreen from '../../screens/cart/cart.screen'
import checkoutScreen from '../../screens/checkout/checkout.screen'
import homeScreen from '../../screens/home/home.screen'
import loginScreen from '../../screens/login/login.screen'
import { assert } from 'chai'

describe('Validate product purchase flow', async () => {

    it('should complete a product purchase successfully', async () => {
        await loginScreen.doLoginWithAutoFill()
        await homeScreen.addProductToCartAndNavigateToCart(homeData.listOfProducts.sauceLabsBackpack)
        await cartScreen.clickBtnCheckout()
        await checkoutScreen.fillFormFieldsAndCompleteThePurchase(formData.name, formData.lastName, formData.zipCode)
        assert.equal(await checkoutScreen.getTextLblSuccessTitle(), checkoutSuccessMessages.title, 'The success title label is different of the expected value')
        assert.equal(await checkoutScreen.getTextLblSuccessDescription(), checkoutSuccessMessages.description, 'The success description label is different of the expected value')
        assert.isTrue(await checkoutScreen.isDisplayedImgCheckoutComplete(), 'The success image was not presented')
        assert.isTrue(await checkoutScreen.isDisplayedBtnBackHome(), 'The back home button was not presented')
    })
})