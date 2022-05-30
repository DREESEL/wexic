import React, { useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
/*import { withOrientation } from "react-navigation";*/
import { COLORS, SIZES } from './src/constants/theme';
import Router from './src/router/router';

const slides = [
  {
    id: 1,
    title: 'Encarga',
    description: '“Nuevos productos, Todos los dias compra we"',
    image: require('./src/assets/onboardScreen1.png')
  },
  {
    id: 2,
    title: 'Descubre',
    description: '“Albion online es un rpg no lineal... espera, eso no!!"',
    image: require('./src/assets/onboardScreen2.png')
  },
  {
    id: 3,
    title: 'Vende',
    description: '“Unete a la comunidad, comparte, publica y se un contribuidor."',
    image: require('./src/assets/onboardScreen3.png')
  }
]

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);

   StatusBar.setBarStyle('light-content', true); 

  const buttonLabel = (label) => {
    return(
      <View style={{
        padding: 12
      }}>
        <Text style={{
          color: COLORS.title,
          fontWeight: '600',
          fontSize: SIZES.h4,
        }}>
          {label}
        </Text>
      </View>
    )
  }

  if(!showHomePage) {
    return(
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return(
            <View style={{
              flex: 1,
              alignContent: "center",
              alignItems: 'center',
              padding: 15,
              paddingTop: 100,
              background: "#000",
            }}>
              <Image
                source={item.image}
                style={{
                  width: SIZES.width - 80,
                  height: 400,
                }}
                resizeMode="contain"
              />
              <Text style={{
                fontWeight: 'bold',
                color: COLORS.title,
                fontSize: SIZES.h1,
              }}>
                {item.title}
              </Text>
              <Text style={{
                textAlign: 'center',
                paddingTop: 5,
                color: COLORS.title
              }}>
                {item.description}
              </Text>
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    )
  }

  return(
    <Router />
  )
}