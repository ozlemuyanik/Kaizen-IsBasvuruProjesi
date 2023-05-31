/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import cocaColaMainPic from '../Assets/images/main_coca_cola.png';
import cocaColaIcon from '../Assets/images/coca_cola_icon.png';
import mainSpritePic from '../Assets/images/main_sprite.png';
import spriteIcon from '../Assets/images/sprite_icon.png';
import { ProductItemCard } from './ProductItemCard';

const mockData = [
    {
      imageName: cocaColaMainPic,
      iconName: cocaColaIcon,
      butonTextColor: '#F40000',
      footerViewColor: '#FF0023',
      campaingName: '2,5 LT Coca-Cola kapakları Coca-Cola +Coffee kazandırıyor!',
    },
    {
      imageName: mainSpritePic,
      iconName: spriteIcon,
      butonTextColor: '#009639',
      footerViewColor: '#009639',
      campaingName: '2,5 LT Sprite kapakları 330 ML Kutu kazandırıyor!',
    },
    {
      imageName: cocaColaMainPic,
      iconName: cocaColaIcon,
      butonTextColor: '#F40000',
      footerViewColor: '#FF0023',
      campaingName: '2,5 LT Coca-Cola kapakları Coca-Cola +Coffee kazandırıyor!',

    },
    {
      imageName: mainSpritePic,
      iconName: spriteIcon,
      butonTextColor: '#009639',
      footerViewColor: '#009639',
      campaingName: '2,5 LT Sprite kapakları 330 ML Kutu kazandırıyor!',
    },
    {
      imageName: cocaColaMainPic,
      iconName: cocaColaIcon,
      butonTextColor: '#F40000',
      footerViewColor: '#FF0023',
      campaingName: '2,5 LT Coca-Cola kapakları Coca-Cola +Coffee kazandırıyor!',

    },
    {
      imageName: mainSpritePic,
      iconName: spriteIcon,
      butonTextColor: '#009639',
      footerViewColor: '#009639',
      campaingName: '2,5 LT Sprite kapakları 330 ML Kutu kazandırıyor!',

    },
    {
      imageName: mainSpritePic,
      iconName: spriteIcon,
      butonTextColor: '#009639',
      footerViewColor: '#009639',
      campaingName: '2,5 LT Sprite kapakları 330 ML Kutu kazandırıyor!',
    },
  ];

export function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({item, index}) => {
    return <ProductItemCard 
        index={index}
        picName={item.imageName}
        iconName={item.iconName}
        campaingName={item.campaingName}
        />;
  };

  const pagination = (currentIndex: number) => {
    return (
      <Pagination
        dotsLength={mockData.length}
        activeDotIndex={currentIndex}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: mockData[currentIndex] ? 9.5 : 20,
          marginRight: 2,
          backgroundColor: mockData[currentIndex].footerViewColor,
        }}
        inactiveDotStyle={{
          backgroundColor:'gray',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  return (
    <View>
      <Carousel
        data={mockData}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
        windowSize={1}
        sliderWidth={400}
        itemWidth={326}
      />
      {pagination(activeIndex)}
    </View>
  );
};

