import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenCustomers from "./ScreenCustomers/ScreenCustomers";
import ScreenDocuments from "./ScreenDocuments/ScreenDocuments";
import ScreenGood from "./ScreenGoods/ScreenGood";
import ScreenIncoming from "./ScreenIncoming/ScreenIncoming";
import ScreenOutGoing from "./ScreenOutGoing/ScreenOutGoing";
import ScreenSuppliers from "./ScreenSuppliers/ScreenSuppliers";
import Home from "./../Home";
import ScreenStock from "./ScreenStock/ScreenStock";
import ScreenExpenses from "./ScreenExpense/ScreenExpense";
import ScreenReports from "./ScreenReports/ScreenReports";
export default NavigationHome = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "fade" }}
      >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Stock" component={ScreenStock}></Stack.Screen>
        <Stack.Screen name="Good" component={ScreenGood}></Stack.Screen>
        <Stack.Screen name="Incoming" component={ScreenIncoming}></Stack.Screen>
        <Stack.Screen name="OutGoing" component={ScreenOutGoing}></Stack.Screen>
        <Stack.Screen name="Suppliers" component={ScreenSuppliers}></Stack.Screen>
        <Stack.Screen name="Customers"component={ScreenCustomers}></Stack.Screen>
        <Stack.Screen name="Document"component={ScreenDocuments}></Stack.Screen>
        <Stack.Screen name="Report"component={ScreenReports}></Stack.Screen>
        <Stack.Screen name="Expense"component={ScreenExpenses}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
