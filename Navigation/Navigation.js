// Navigation/Navigation.js

import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import Map from '../Vues/Map/Map'
import Contacts from '../Vues/Contacts/Contacts'
import Chat from '../Vues/Chat/Chat'
import Bonus from '../Vues/Bonus/Bonus'
import Loading from '../Vues/Login/Loading'
import Login from '../Vues/Login/Login'
import SignUp from '../Vues/Login/SignUp'

// Navigation stack for the app's logic : map, conversation, contacts and bonuses
const AppNavigationStack = createStackNavigator({
  Map : Map,
  Contacts : Contacts,
  Chat : Chat,
  Bonus : Bonus
})

// Nvaigation stack for login logic : login or sign up
const LoginNavigationStack = createStackNavigator({
  Login : Login,
  SignUp : SignUp
})

// AppContainer for navigation logic through the whole app
export default createAppContainer(createSwitchNavigator(
  {
    Loading : Loading,
    LoginNavigationStack : LoginNavigationStack,
    AppNavigationStack : AppNavigationStack
  }
),
{headerMode: 'none'})