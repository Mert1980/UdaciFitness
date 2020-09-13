import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { white } from "../utils/colors";
import MetricCard from "../components/MetricCard";

class EntryDetail extends Component {
  setTitle = (entryId) => {
    if (!entryId) return;

    const year = entryId.slice(0, 4);
    const month = entryId.slice(5, 7);
    const day = entryId.slice(8);

    this.props.navigation.setOptions({
      title: `${month}/${day}/${year}`,
    });
  };

  render() {
    const { entryId } = this.props.route.params;
    this.setTitle(entryId);
    return (
      <View style={styles.container}>
        <MetricCard metrics={this.props.metrics[0]} />
        <Text>Entry Detail - {this.props.route.params.entryId}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
  },
});

function mapStateToProps(state, { route }) {
  const { entryId } = route.params;
  console.log("2 ", state[entryId][0]);
  return {
    entryId,
    metrics: state[entryId],
  };
}

export default connect(mapStateToProps)(EntryDetail);
