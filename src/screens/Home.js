import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import Title from "../components/Title";
import HorizontalScrollview from "../components/HorizontalScrollview";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Home = ({ navigation }) => {

  const [SchoolData, setSchoolData] = useState([
    { key: 1, icon_src: 'ios-home-outline', name: 'HOME' },
    { key: 2, icon_src: 'ios-home-outline', name: 'HOME' },
    { key: 3, icon_src: 'ios-home-outline', name: 'HOME' },
    { key: 4, icon_src: 'ios-home-outline', name: 'HOME' }
  ])

  const [DocumentData, setDocumentData] = useState([
    { key: 1, icon_src: 'image-outline', name: 'HOME', d_icon_name: 'cloud-download' },
    { key: 2, icon_src: 'image-outline', name: 'HOME', d_icon_name: 'cloud-download' },
    { key: 3, icon_src: 'image-outline', name: 'HOME', d_icon_name: 'cloud-download' },
    { key: 4, icon_src: 'image-outline', name: 'HOME', d_icon_name: 'cloud-download' }
  ])

  const scroll_data = () => {
    return (
      <>
        {
          SchoolData.map((item, index) => (
            <>
              <Card
                EXTERNAL_STYLES={{}}
                ICON_SRC={item?.icon_src}
                CARD_TEXT={item?.name}
                CARD_TEXT_STYLES={{}}
              />
            </>
          ))
        }
      </>
    )
  }


  const CD_data = () => {
    return (
      <>
        {
          DocumentData.map((item, index) => (
            <>
              <Card
                EXTERNAL_STYLES={{
                  width: wp('40%'),
                  height: wp('40%'),
                }}
                ICON_SRC={item?.icon_src}
                DOWNLOAD_ICON_SRC={item?.d_icon_name}
                CARD_TEXT={item?.name}
                CARD_TEXT_STYLES={{}}
                CARD_TYPE={2}
              />
            </>
          ))
        }
      </>
    )
  }

  return (
    <View style={styles.center}>
      <Title
        TITLE_TEXT_STYLES={{}}
        TITLE_TEXT={'School Services'}
      />
      <HorizontalScrollview
        HS_ROOT_STYLES={{}}
        scrollEnabled={false}
        HS_STYLES={{}}
        HS_DATA={scroll_data()}
      />
      <HorizontalScrollview
        HS_ROOT_STYLES={{}}
        scrollEnabled={false}
        HS_STYLES={{}}
        HS_DATA={scroll_data()}
      />

      <Title
        TITLE_TEXT_STYLES={{}}
        TITLE_TEXT={'Certificate & Document'}
      />
      <HorizontalScrollview
        scrollEnabled={true}
        HS_ROOT_STYLES={{
          height: hp('20%'),
        }}
        HS_STYLES={{}}
        HS_DATA={CD_data()}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    marginHorizontal: 20,
  },
});

export default Home;