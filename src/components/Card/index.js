import { View, Text } from 'react-native'
import React from 'react'
import Styles from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Card = (props) => {
    return (
        <>
            <View style={[Styles?.container, props?.EXTERNAL_STYLES]}>
                <Ionicons name={props?.ICON_SRC} color={'skyblue'} size={30} />

                {props?.CARD_TYPE != 2 &&
                    <Text style={[Styles?.cardText, props?.CARD_TEXT_STYLES]}>{props?.CARD_TEXT}</Text>
                }

                {props?.CARD_TYPE == 2 &&
                    <View style={Styles?.downloadIconRoot}>
                        <Ionicons name={props?.DOWNLOAD_ICON_SRC} color={'gray'} size={20} />
                    </View>
                }
            </View>

        </>
    )
}

export default Card;