import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StatusBar, Platform } from "react-native";
import AddEntry from "./components/AddEntry";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import History from "./components/History";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { orange, white, purple } from "./utils/colors";
import Constants from "expo-constants";

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor={orange} barStyle="light-content" />
        <NavigationContainer>
          <Tabs.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === "Add Entry") {
                  iconName = (
                    <Ionicons
                      name="ios-add-circle-outline"
                      color={color}
                      size={size}
                      color="black"
                    />
                  );
                } else if (route.name === "History") {
                  iconName = (
                    <FontAwesome5 name="history" size={size} color={color} />
                  );
                }

                // You can return any component that you like here!
                return iconName;
              },
            })}
            navigationOptions={{
              header: null,
            }}
            tabBarOptions={{
              activeTintColor: Platform.OS === "ios" ? orange : white,
              inactiveTintColor: "gray",
              style: {
                height: 50,
                backgroundColor: Platform.OS === "ios" ? white : orange,
                shadowColor: "rgba(0, 0, 0, 0.24)",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowRadius: 6,
                shadowOpacity: 1,
              },
            }}
          >
            <Tabs.Screen name="Add Entry" component={AddEntry} />
            <Tabs.Screen name="History" component={History} />
          </Tabs.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}
