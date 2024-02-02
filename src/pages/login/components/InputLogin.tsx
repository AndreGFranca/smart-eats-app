import React from 'react';
import { View, Text, TextInput, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface IInputLogin {
  textLabel: string;
  stylesDivInput: ViewStyle;
  styleslabel: TextStyle;
  stylesInput: ViewStyle;
  inputConfig?: Object;
}

export default function InputLogin({
  textLabel,
  stylesDivInput,
  styleslabel,
  stylesInput,
  inputConfig
}: IInputLogin): React.ReactElement {
  return (
    <View style={stylesDivInput}>
      <Text style={styleslabel}>{textLabel}</Text>
      <TextInput style={stylesInput} {...inputConfig} />
    </View>
  );
}
