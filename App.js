import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import NavigationHome from "./src/screens/Home/Navigation/NavigationHome";
import deleteStore from "./src/redux/actions/deleteStore";

export default function App() {
  
  return <NavigationHome />;
}
