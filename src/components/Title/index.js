import { View, Text } from 'react-native'
import React from 'react'
import Styles from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Title = (props) => {
    return (
        <>
            <Text style={[Styles?.titleText, props?.TITLE_TEXT_STYLES]}>{props?.TITLE_TEXT}</Text>
        </>
    )
}

export default Title;