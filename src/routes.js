import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "@pages/Main";
import Second from "@pages/Second";

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#e8cbbb",
              elevation: 0
            },                             
          }}
        />
        <Stack.Screen
          name="Second"
          component={Second}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#e8cbbb",
              elevation: 0
            },
            headerTintColor: "#4f3214",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
