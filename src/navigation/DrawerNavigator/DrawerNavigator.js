import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "../StackNavigator/StackNavigator";
import TabNavigator from "../TabNavigator/TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false}}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;