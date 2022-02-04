import { View, Text, Image, ScrollView, SafeAreaView, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { bannerStyle } from "./homeBannerStyle";

const HomeBanner = () => {
  const [bannerImages, setBannerImages] = useState([
    {
      img: require("../../assets/images/img1.jpg"),
    },
    {
      img: require("../../assets/images/img2.jpg"),
    },
    {
      img: require("../../assets/images/img3.jpg"),
    },
    {
      img: require("../../assets/images/img3.jpg"),
    },
    {
      img: require("../../assets/images/img3.jpg"),
    },

  ]);

  const scrollRef = useRef();
  let slide;
  const [active, setActive] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setActive((prevActive) => {
        console.log(prevActive);

        let store = prevActive === bannerImages.length - 1 ? 0 : prevActive + 1;
        scrollRef.current.scrollTo({
          // x: slide===store?Dimensions.get("window").width * store:Dimensions.get("window").width * slide,
          x: Dimensions.get("window").width * store,
          y: 0,
          animated: true
        })
      })
    }, 5000)
  }, [])

  const screenChange = (nativeEvent) => {
    if (nativeEvent) {
     
       slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      console.log("Slide",slide);
      if (slide !== active) {
        setActive(slide);
      }
    }
  };


  return (
    <SafeAreaView>
      <View style={bannerStyle.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => screenChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={bannerStyle.wrap}
          ref={scrollRef}
        >
          {bannerImages.map((object, index) => (
            <Image
              key={index}
              resizeMode="stretch"
              style={bannerStyle.wrap}
              source={object.img}
            />
          ))}
        </ScrollView>
        <View style={bannerStyle.wrapDot}>
          {bannerImages.map((object, index) => (
            <Text
              key={index}
              style={active === index ? bannerStyle.dotActive : bannerStyle.dot}
            >
              ●
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeBanner;