import BaseScreen from "../base.screen"

class HomeScreen extends BaseScreen {

    // Home Header — Elements shown on the home screen header.
    get imgSwagLabsLogo() { return $('//android.widget.FrameLayout[@resource-id="android:id/content"]//android.widget.ImageView[2]') }
    get btnCart() { return $('//android.view.ViewGroup[@content-desc="test-Cart"]') }

    // Products - Button presented to add product to cart.
    set btnAddProductToCart(number) { this.button = $(`android=new UiSelector().description("test-ADD TO CART").instance(${number})`) }
    get btnAddProductToCart() { return this.button }

    async isDisplayedImgSwagLabsLogo() {
        return await this.imgSwagLabsLogo.isDisplayed()
    }

    async clickBtnCart() {
        await this.btnCart.click()
    }

    /**
     * Adds a specific product to the cart and navigates to the cart screen.
     * @param {number} product - Number representing the chosen product.
    */
    async addProductToCartAndNavigateToCart(product) {
        this.btnAddProductToCart = product
        await this.btnAddProductToCart.click()
        await this.clickBtnCart()
    }
}

export default new HomeScreen()