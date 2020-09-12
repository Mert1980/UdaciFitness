import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StatusBar, Platform } from "react-native";
import AddEntry from "./components/AddEntry";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import History from "./components/History";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { orange, white } from "./utils/colors";
import Constants from "expo-constants";
import EntryDetail from "./components/EntryDetail";

function UdaciStatusBar({ backgroundColor, ...props }) {
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

const TabNav = () => (
  <Tabs.Navigator
    initialRouteName="AddEntry"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let icon;
        if (route.name === "Add Entry") {
          icon = <FontAwesome name="plus-square" size={size} color={color} />;
        } else if (route.name === "History") {
          icon = <Ionicons name="ios-bookmarks" size={size} color={color} />;
        }
        return icon;
      },
    })}
    tabBarOptions={{
      header: null,
      activeTintColor: Platform.OS === "ios" ? orange : white,
      showIcon: true,
      style: {
        height: 80,
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
);

const Stack = createStackNavigator();

const MainNav = () => (
  <Stack.Navigator headerMode="screen">
    <Stack.Screen
      name="Home"
      component={TabNav}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EntryDetail"
      component={EntryDetail}
      options={{
        headerTintColor: white,
        headerStyle: {
          backgroundColor: orange,
        },
      }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <UdaciStatusBar backgroundColor={orange} barStyle="light-content" />
          <MainNav />
        </NavigationContainer>
      </View>
    </Provider>
  );
}
