/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { DahaWalletScreen } from '../Screen/DahaWalletScreen';

export function ProductItemCard(props) {
    const {index, picName, iconName, campaingName,navigation} = props;
    return (
      <View style={{...styles.mainContainer, marginLeft: index === 0 ? 36 : 0}}>
        <View style={styles.rotatedViewStyle} />
         <View style={styles.mainContentViewStyle}>
          <View>
            <Image
              source={picName}
              style={styles.mainImageStyle}
              resizeMode='contain'
            />
            <Image
              source={iconName}
              style={styles.iconStyle}
              resizeMode='contain'
            />
          </View>
          <Text style={styles.campaingTextStyle}>
              {campaingName}
          </Text>
        <TouchableOpacity>
          <Text 
            style={styles.butonTextStyle}>
            DAHA DAHA
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    mainContainer: {
        marginRight: 34,
        marginTop: 77,
    },
    rotatedViewStyle: {
      width: 315,
      height: 378,
      backgroundColor: 'red',
      transform: [
        {rotateZ: '3deg'},
        {translateY: 5},
      ],
      position: 'absolute',
      borderBottomLeftRadius: 28,
      borderBottomRightRadius:60,
      borderTopLeftRadius: 80,
      borderTopRightRadius:1050,
      borderRightColor: 'white',
      borderTopColor:'white',
      borderTopWidth: 3,
      borderLeftColor: 'white',
      borderLeftWidth: 9.5,
      borderRightWidth: 3.5,
    },
    mainContentViewStyle: {
      width: 305.5,
      height: 365,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    mainImageStyle: {
      width: 303,
      height: 280,
      bottom: 25,
    },
    iconStyle: {
      width: 55,
      height: 55,
      left: 10,
      position:'absolute',
      bottom: 40,
    },
    campaingTextStyle: {
      fontSize:14,
      fontWeight:'bold',
      textAlign:'center',
      lineHeight: 20,
    },
    butonTextStyle: {
      fontSize:14,
      fontWeight: 'bold',
      color: '#F40000',
      marginVertical: 15,
      lineHeight: 16.1,
      alignItems: 'baseline',
      marginBottom: 20,
    },
});