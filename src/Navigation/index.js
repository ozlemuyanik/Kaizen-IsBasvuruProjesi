/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { navScreenOptions } from './navigationScreenOptions';
import { styles } from './style';
import { DiscoverScreen } from '../Screen/DiscoverScreen';
import { DahaDahaScreen } from '../Screen/DahaDahaScreen';
import { DahaWalletScreen } from '../Screen/DahaWalletScreen';

const Tab = createBottomTabNavigator();

export const NavContainer = () => {
    return (
      <View style={styles.mainContainerStyle}>
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName='Discover'
            screenOptions={navScreenOptions}>
            <Tab.Screen
                name="Discover"
                component={DiscoverScreen}
                options={{
                tabBarIcon: ({ color }) => (
                    <View style={styles.discoverIconStyle}>
                        <MaterialIcons name={'explore'} size={26} color={color} />
                        <Text>Keşfet</Text>
                    </View>
                ),
                unmountOnBlur: true,
                }}
            />
            <Tab.Screen
                name="DahaDaha"
                component={DahaDahaScreen}
                options={{
                tabBarIcon: ({ color }) => (
                <View style={styles.dahaDahaIconMainContainerStyle}>
                    <View
                        style={styles.dahaDahaIconHorizontalContainerStyle}>
                        <View
                        style={styles.redViewStyle}
                        />
                        <View
                        style={styles.yellowViewStyle}
                        />
                    </View>
                    <View
                    style={styles.dahaDahaIconVerticalContainerStyle}>
                    <View
                        style={styles.greenViewStyle}
                    />
                    <View
                    style={styles.orangeViewStyle}
                    />
                    </View>
                </View>
                ),
                unmountOnBlur: true,
                }}
            />
            <Tab.Screen
                name="DahaWallet"
                component={DahaWalletScreen}
                options={{
                tabBarIcon: ({ color }) => (
                    <View style={styles.tabBarIconStyle}>
                    <MaterialIcons name={'star'} size={26} color={color} />
                    <Text>Daha Cüzdan</Text>
                </View>
                ),
                unmountOnBlur: true,
                }}
            />
            </Tab.Navigator>
        </NavigationContainer>
      </View>
    );
};
