/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    mainContainerStyle: {
			flex: 1,
    },
    dahaDahaIconMainContainerStyle: {
			position: 'absolute',
			bottom: -4,
			justifyContent: 'center',
			alignItems: 'center',
			paddingVertical: 15,
			borderWidth: 2,
			borderRadius: 24,
			borderLeftColor: 'red',
			borderBottomColor: 'orange',
			borderRightColor: 'yellow',
			borderTopColor: 'green',
			backgroundColor: 'white',
			minWidth: 70,
			minHeight: 72,
			shadowOffset: {
				height: 8,
				width: 0,
			},
			shadowColor: 'gray',
			elevation: 2,
			shadowRadius: 8,
			shadowOpacity: 1,

    },
    dahaDahaIconHorizontalContainerStyle: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			borderRadius: 8,
			borderColor: '#1D1D1B',
			marginHorizontal: 17,
    },
    dahaDahaIconVerticalContainerStyle: {
			position: 'absolute',
			justifyContent: 'space-between',
			borderRadius: 8,
			borderColor: '#1D1D1B',
    },
    redViewStyle: {
			width: 15,
			height: 15,
			backgroundColor: 'red',
			borderWidth: 2,
			borderColor: '#1D1D1B',
			borderTopLeftRadius: 8,
			borderBottomLeftRadius: 8,
			marginRight: 9,

    },
    greenViewStyle: {
			width: 15,
			height: 15,
			backgroundColor: 'green',
			borderWidth: 2,
			borderColor: '#1D1D1B',
			borderTopLeftRadius: 8,
			borderBottomLeftRadius: 8,
			marginBottom: 9,
			transform: [{rotateZ: '90deg'}]

    },
    yellowViewStyle: {
			width: 15,
			height: 15,
			backgroundColor: 'yellow',
			borderWidth: 2,
			borderColor: '#1D1D1B',
			borderTopLeftRadius: 8,
			borderBottomLeftRadius: 8,
			transform: [{rotateZ: '180deg'}]

    },
    orangeViewStyle: {
			width: 15,
			height: 15,
			backgroundColor: 'orange',
			borderWidth: 2,
			borderColor: '#1D1D1B',
			borderTopLeftRadius: 8,
			borderBottomLeftRadius: 8,
			transform: [{rotateZ: '-90deg'}]

    },
		discoverIconStyle: {
			justifyContent: 'center',
			alignItems: 'center',
			paddingTop: 10
		},
		tabBarIconStyle: {
			justifyContent: 'center',
			alignItems: 'center',
			paddingTop: 10,
		},

});