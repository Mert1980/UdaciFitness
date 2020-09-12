import React, { Component } from "react";
import { View, Text } from "react-native";

class EntryDetail extends Component {
  render() {
    return (
      <View>
        <Text>Entry Detail - {console.log(this.props)}</Text>
      </View>
    );
  }
}

export default EntryDetail;
