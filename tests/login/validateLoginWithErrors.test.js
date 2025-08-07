import { errorMessage, loginData } from '../../data/login.data'
import loginScreen from '../../screens/login/login.screen'
import { assert } from 'chai'

describe('Performs login in the application with invalid data', async () => {

    it('Validates login in the app with a locked user', async () => {
        loginScreen.doLoginWithLockedOutUser()
        assert.equal(await loginScreen.getTextErroMessage(errorMessage.lockedOutUser), errorMessage.lockedOutUser, 'The label "Sorry, this user has been locked out." is different of the expected value')
    })

    it('Validates login in the app with invalid credentials', async () => {
        loginScreen.doLoginByFillingFields(loginData.invalidUsername)
        assert.equal(await loginScreen.getTextErroMessage(errorMessage.invalidCredentials), errorMessage.invalidCredentials, 'The label "Username and password do not match" is different of the expected value')
    })

    it('Validates login in the app with username field empty', async () => {
        loginScreen.doLoginByFillingFields(loginData.emptyUsername)
        assert.equal(await loginScreen.getTextErroMessage(errorMessage.usernameIsRequired), errorMessage.usernameIsRequired, 'The label "Username is required" is different of the expected value')
    })

    it('Validates login in the app with password field empty', async () => {
        loginScreen.doLoginByFillingFields(loginData.invalidUsername, loginData.emptyPassword)
        assert.equal(await loginScreen.getTextErroMessage(errorMessage.passwordIsRequired), errorMessage.passwordIsRequired, 'The label "Password is required" is different of the expected value')
    })
}) 