/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';

export function BrandTagSlider(props){
    const {brandName, brandIconName} = props;
    return (
      <View style={{
        marginHorizontal:15,
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#ECEEEF',
        borderRadius:8,
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical: 6,
        paddingLeft: 6,
        }}>
          <Image
              source={brandIconName}
              style={{height:24, width:24}}
            />
          <Text
            style={{
              fontSize:12,
              color:'gray',
              textAlign:'center',
              padding:10,
            }}>
              {brandName}
          </Text>
      </View>
    );
  }