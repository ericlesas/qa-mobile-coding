import homeScreen from '../../screens/home/home.screen'
import loginScreen from '../../screens/login/login.screen'
import { assert } from 'chai'

describe('Performs login in the application', async () => {

    it('logs into the app with valid credentials', async () => {
        await loginScreen.doLoginWithAutoFill()
        assert.isTrue(await homeScreen.isDisplayedImgSwagLabsLogo(), 'Login attemp failed')
    })
})