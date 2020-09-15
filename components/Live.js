import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Foundation } from "@expo/vector-icons";
import { purple, white } from "../utils/colors";

class Live extends Component {
  state = {
    coords: null,
    status: "denied",
    direction: "",
  };

  askPermission = () => {};
  render() {
    const { coords, status, direction } = this.state;

    if (status === null) {
      return <ActivityIndicator style={{ marginTop: 30 }} />;
    }

    if (status === "denied") {
      return (
        <View style={styles.center}>
          <Foundation name="alert" size={50} color="black" />
          <Text>
            You denied your location. You can fix this by visiting settings and
            enabling location services for this app.
          </Text>
        </View>
      );
    }

    if (status === "undetermined") {
      return (
        <View style={styles.center}>
          <Foundation name="alert" size={50} color="black" />
          <Text>You need to allow location services for this app.</Text>
          <TouchableOpacity style={styles.button} onPress={this.askPermission}>
            <Text style={styles.buttonText}>Enable </Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text>Live</Text>
        <Text>{JSON.stringify(this.state)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    padding: 10,
    backgroundColor: purple,
    alignSelf: "center",
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    color: white,
    fontSize: 20,
  },
});

export default Live;
