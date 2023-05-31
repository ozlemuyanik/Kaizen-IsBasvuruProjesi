/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export function LeadingHeadLineComponent() {
    return (
      <View style={styles.headLineLeadingContainer}>
        <View style={styles.letterDContainer}>
          <Text style={styles.letterTextStyle}>
              D
            </Text>
        </View>
        <View style={{
            ...styles.letterAContainer,
            backgroundColor: 'green',
          }}>
          <Text style={styles.letterTextStyle}>
              A
            </Text>
        </View>
        <View style={styles.letterHContainer}>
          <Text style={styles.letterTextStyle}>
            H
          </Text>
        </View>
        <View style={styles.letterAContainer}>
          <Text style={styles.letterTextStyle}>
              A
            </Text>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    headLineLeadingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    letterDContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'row',
      backgroundColor:'red',
      width: 16,
      height: 16,
      borderTopRightRadius: 13,
      borderBottomRightRadius: 13,
    },
    letterTextStyle: {
      position:'absolute',
      fontSize: 26,
      fontWeight: '700',
    },
    letterHContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'orange',
      width: 16,
      height: 18,
      marginLeft: 2,
    },
    letterAContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'row',
      backgroundColor:'yellow',
      width: 17,
      height: 17,
      borderStartColor:'white',
      borderStartWidth: 3.5,
      borderTopStartRadius: 7,
      borderTopEndRadius: 7,
      borderEndWidth: 4.5,
      borderEndColor: 'white',
      marginLeft: 2,
    },
});
