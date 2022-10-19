import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Styles from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons';

const HorizontalScrollview = (props) => {
    return (
        <View style={[Styles?.root, props?.HS_ROOT_STYLES]}>
            <ScrollView
                horizontal
                style={[Styles?.container, props?.HS_STYLES]}
                scrollEnabled={props?.scrollEnabled}
                showsHorizontalScrollIndicator={false}
            >
                {props?.HS_DATA}
            </ScrollView>
        </View>
    )
}

export default HorizontalScrollview;