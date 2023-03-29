
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenCustomers from "./ScreenCustomers/ScreenCustomers";
import ScreenDocuments from "./ScreenDocuments/ScreenDocuments";
import ScreenGood from './ScreenGoods/ScreenGood';
import ScreenIncoming from "./ScreenIncoming/ScreenIncoming";
import ScreenOutGoing from "./ScreenOutGoing/ScreenOutGoing";
import ScreenSuppliers from "./ScreenSuppliers/ScreenSuppliers";
import Home from "./../Home";
export default NavigationHome=()=>{
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Good" component={ScreenGood}></Stack.Screen>
                <Stack.Screen name="Incoming" component={ScreenIncoming}></Stack.Screen>
                <Stack.Screen name="OutGoing" component={ScreenOutGoing}></Stack.Screen>
                <Stack.Screen name="Suppliers" component={ScreenSuppliers}></Stack.Screen>
                <Stack.Screen name="Customers" component={ScreenCustomers}></Stack.Screen>
                <Stack.Screen name="Document" component={ScreenDocuments}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}