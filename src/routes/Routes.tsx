import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import { RootStackParams } from '../types'

import Home from '../views/Home'

const Stack = createNativeStackNavigator<RootStackParams>()

const RootNavigator = ()=> {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='home'>
                <Stack.Screen name='home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator