// Navigation/Navigation.js

import { createStackNavigator, createAppContainer } from 'react-navigation'
import Map from '../Vues/Map/Map'
import Contacts from '../Vues/Contacts/Contacts'
import Chat from '../Vues/Chat/Chat'
import Bonus from '../Vues/Bonus/Bonus'


const SearchStackNavigator = createStackNavigator({

  Map: {
	screen: Map,
	
  },
  Contacts: {
	screen: Contacts,
  },
  Chat: {
	screen: Chat, 
  },
  Bonus: {
	screen: Bonus, 
  },

  
},
{headerMode: 'none'})

export default createAppContainer(SearchStackNavigator)