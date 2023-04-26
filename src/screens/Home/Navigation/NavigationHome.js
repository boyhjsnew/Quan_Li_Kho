import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenCustomers from "./ScreenCustomers/ScreenCustomers";
import ScreenDocuments from "./ScreenDocuments/ScreenDocuments";
import ScreenGood from "./ScreenGoods/ScreenGood";
import ScreenIncoming from "./ScreenIncoming/ScreenIncoming";
import ScreenOutGoing from "./ScreenOutGoing/ScreenOutGoing";
import ScreenSuppliers from "./ScreenSuppliers/ScreenSuppliers";
import Home from "./../Home";
import ScreenStock from "./ScreenStock/ScreenStock";
import ScreenSelectStore from "./ScreenSelectStore";
import ScreenReports from "./ScreenReports/ScreenReports";
import ScreenExpense from "./ScreenExpense/ScreenExpense";
import NavGood from "./ScreenGoods/NavGood";
import NavSuppliers from "./ScreenSuppliers/NavSuppliers";
import NavCustomers from "./ScreenCustomers/NavCustomers";
import configureStore from "../../../redux/store";
import { Provider as ReduxProvider, useDispatch } from "react-redux";
import { useEffect } from "react";
import NavReport from "./ScreenReports/NavReport";

export default NavigationHome = () => {
  const Stack = createNativeStackNavigator();
  const store = configureStore();

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Stock" component={ScreenStock}></Stack.Screen>
          <Stack.Screen name="NavGood" component={NavGood}></Stack.Screen>
          <Stack.Screen
            name="Incoming"
            component={ScreenIncoming}
          ></Stack.Screen>
          <Stack.Screen
            name="OutGoing"
            component={ScreenOutGoing}
          ></Stack.Screen>
          <Stack.Screen
            name="SelectStore"
            component={ScreenSelectStore}
          ></Stack.Screen>
          <Stack.Screen
            name="Suppliers"
            component={NavSuppliers}
          ></Stack.Screen>
          <Stack.Screen
            name="Customers"
            component={NavCustomers}
          ></Stack.Screen>
          <Stack.Screen
            name="Document"
            component={ScreenDocuments}
          ></Stack.Screen>
          <Stack.Screen name="Report" component={NavReport}></Stack.Screen>
          <Stack.Screen name="Expense" component={ScreenExpense}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};
