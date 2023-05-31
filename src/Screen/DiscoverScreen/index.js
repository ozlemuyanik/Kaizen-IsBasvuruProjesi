/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import cocaColaIcon from '../../Assets/images/coca_cola_icon.png';
import searceIconPic from '../../Assets/images/searce_icon.png';
import burgerKingPic from '../../Assets/images/burger_king_icon.png';
import trendyolPic from '../../Assets/images/trendyol_icon.png';
import { ProductCarousel } from '../../Components/ProductCarousel';
import { LeadingHeadLineComponent } from '../../Components/LeadingHeadLineComponent';
import { BrandTagSlider } from '../../Components/BrandTagSlider';

function LoginorRegisterButton(){
  return(
    <TouchableOpacity>
    <View style={{backgroundColor:'red', borderRadius:20, marginLeft:140}}>
      <Text style={{color:'white', padding:14, textAlign:'center', fontWeight:'bold'}}>Giriş Yap</Text>
    </View>
    </TouchableOpacity>
  );
}
function ProfileIcon(){
  return (
    <View style={{backgroundColor:'black', height:48, width:48, borderRadius:24, marginLeft:15, alignItems:'center', justifyContent:'center'}}>
     <MaterialIcons name={'person-outline'} size={30} color={'white'} />
    </View>
  );
}

export function DiscoverScreen() {

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{flexDirection:'row', marginTop: 44,}}>
        <View style={{marginLeft:15}}>
          <LeadingHeadLineComponent />
          <LeadingHeadLineComponent />
        </View>
          <LoginorRegisterButton />
          <ProfileIcon />
      </View>
        <View style={{marginTop: 20}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
          justifyContent:'flex-start',
          alignItems:'center',
          }}>
            <BrandTagSlider
                brandName={'Fırsat Bul'}
                brandIconName={searceIconPic}
            />
             <BrandTagSlider
                brandName={'Coca Cola'}
                brandIconName={cocaColaIcon}
            />
             <BrandTagSlider
                brandName={'Trendyol'}
                brandIconName={trendyolPic}
            />
            <BrandTagSlider
                brandName={'Burger King'}
                brandIconName={burgerKingPic}
            />
        </ScrollView>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            backgroundColor:'white',
        }}>
         <ProductCarousel />
       </View>
    </SafeAreaView>
  );
}






