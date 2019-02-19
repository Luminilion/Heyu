// Navigation/Navigation.js

import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import Map from '../Vues/Map/Map'
import Contacts from '../Vues/Contacts/Contacts'
import Chat from '../Vues/Chat/Chat'
import Loading from '../Vues/Login/Loading'
import Login from '../Vues/Login/Login'
import SignUp from '../Vues/Login/SignUp'
import Parameters from '../Vues/Parameters/Parameters'
import PasswordReset from '../Vues/Login/PasswordReset'

// Navigation stack for the app's logic : map, conversation, contacts and bonuses
const AppNavigationStack = createStackNavigator({
  Map : Map,
  Contacts : Contacts,
  Chat : Chat,
  Parameters : Parameters
}, {headerMode: 'none'})

// Navigation stack for login logic : login or sign up
const LoginNavigationStack = createStackNavigator({
  Login : Login,
  SignUp : SignUp,
  PasswordReset : PasswordReset
})

// AppContainer for navigation logic through the whole app
export default createAppContainer(createSwitchNavigator(
  {
    Loading : Loading,
    LoginNavigationStack : LoginNavigationStack,
    AppNavigationStack : AppNavigationStack
  }
))
