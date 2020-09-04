import React from "react";
import { View, Text } from "react-native";
import { getMetricMetaInfo } from "../utils/helpers";

export default function AddEntry() {
  return <View>{getMetricMetaInfo("bike").getIcon()}</View>;
}
