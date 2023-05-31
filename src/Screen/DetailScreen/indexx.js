/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import cocaColaDetail from '../../Assets/images/cocacola_detail.png';
import cocaColaIcon from '../../Assets/images/coca_cola_icon.png';

//Bu sayfada çok fazla hard coded alan kaldı farkındayım.
//Keşfet sayfasında çok vakit harcadım. Projeyi geciktirmemek 
// adına böyle bırakmak zorunda kaldım. Teşekkür ederim.
export function DetailScreen(props) {
    const {headerText, detailText} = props;
    return (
        <SafeAreaView>
            <View style={{ alignItems:'center'}}>
            <Image
              source={cocaColaDetail}
              style={{height:350, width:375}}
            />
            <View style={{marginTop: -70, marginLeft:-290}}>
             <Image
              source={cocaColaIcon}
              style={{height:55, width:55}}
            />
            </View>
            <Text style={{
                fontSize: 26,
                fontWeight: 'bold',
                textAlign: 'center',
                padding: 5}}>
                    Her Altın Kapakta Bir Coca-Cola + Coffee Keyfi
                </Text>
                <Text style={{fontSize:14, textAlign:'center', marginTop:15}}>
                Coca-Cola Coffee, kolanın lezzetini kahve aroması ile bir araya getirir.  Brezilya kahve çekirdeklerinin lezzetiyle aromalanan Coca Cola, geleneksel lezzetine modern bir yorum katarak raflarda yer alır.

Yeni tatlara açık olanların beğenisini kazanan kahveli Coca-Cola, kutu tasarımı ile çantada bile kolaylıkla taşınır. Kahve tiryakilerinin bir yudum ferahlık istediği anlarda tercihi olacak ürün, dünyada en çok yankı uyandıran kola edisyonları arasında yer almaktadır.

İçeceğin soğuk tüketilmesi önerilir. Buzla beraber içilebilir. 
Özellikle sıcak yaz günlerinde ferahlatıcı etki gösterir. 
                </Text>
                <TouchableOpacity>
                    <View style={{width:300, backgroundColor:'red', height:50, borderRadius: 28, alignItems:'center', justifyContent:'center', marginTop:10}}>
                        <Text style={{textAlign:'center', justifyContent:'center',color:'white',fontWeight:'bold', alignItems:'center'}}>Hemen Katıl</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}