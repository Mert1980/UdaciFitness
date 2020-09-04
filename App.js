import * as React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>UdaciFitness App</Text>
      <FontAwesome5 name="pizza-slice" size={24} color="red" />
    </View>
  );
}
