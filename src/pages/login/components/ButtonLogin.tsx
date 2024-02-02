import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface IInputLogin {
    textLabel: string;
    styleDivBotao: ViewStyle;
    styleBotao: ViewStyle;
    styleTextoBotao: TextStyle;
    inputConfig?: Object;
}

export default function ButtonLogin({
    textLabel,
    styleDivBotao,
    styleBotao,
    styleTextoBotao,
    inputConfig
}: IInputLogin): React.ReactElement {

    return <View
        style={styleDivBotao}
    >
        <TouchableOpacity
            style={styleBotao}
            {...inputConfig}
        >
            <Text style={styleTextoBotao}>{textLabel}</Text>
        </TouchableOpacity>
    </View>
}
