import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  forwardRef,
  createRef
} from 'react';
import {
  View,
  StatusBar,
  Animated,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const {width, height} = Dimensions.get('screen');

const images = {
  jordan:
    'https://images.pexels.com/photos/5710079/pexels-photo-5710079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  'off white':
    'https://images.pexels.com/photos/5710086/pexels-photo-5710086.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  nike:
    'https://images.pexels.com/photos/6540945/pexels-photo-6540945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  adidas:
    'https://images.pexels.com/photos/6540933/pexels-photo-6540933.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  yeezy:
    'https://images.pexels.com/photos/6050909/pexels-photo-6050909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
};

const data = Object.keys(images).map((i) => ({
  key: i,
  title: i,
  image: images[i],
  ref: createRef(),
}));

const Tab = forwardRef(({item, onItemPress}, ref) => {
  return (
    <TouchableOpacity onPress={onItemPress}>
      <View ref={ref}>
        <Text style={[styles.tabText, { fontSize: 84/data.length}]}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
});

const Indicator = ({measures, scrollX}) => {
  const inputRange = data.map((_, i) => i * width);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x),
  });
  return (
    <Animated.View
      style={[
        styles.indicator,
        {
        width: indicatorWidth,
        transform: [
          { translateX },
        ],
        }
      ]}
    />
  );
};
const Tabs = ({scrollX, data, onItemPress}) => {
  const [measures, setMeasures] = useState([]);
  const containerRef = useRef();
  useEffect(() => {
    let m = [];
    data.forEach((item) => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          m.push({
            x,
            y,
            width,
            height,
          });
          if (m.length === data.length) {
            setMeasures(m);
          }
        },
      );
    });
  }, []);
  return (
    <View style={styles.tabsContainer}>
      <View
        ref={containerRef}
        style={styles.tabs}>
        {data.map((item, index) => {
          return (
            <Tab
              key={item.key}
              item={item}
              ref={item.ref}
              onItemPress={() => onItemPress(index)}
            />
          );
        })}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
};

export default AnimatedTabs = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const ref = useRef();

  const onItemPress = useCallback((itemIndex) => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * width,
    });
  });

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        ref={ref}
        data={data}
        keyExtractor={(item) => item.key}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item}) => {
          return (
            <View style={styles.bgContainer}>
              <Image source={{uri: item.image}} style={styles.imgContainer} />
              <View style={[StyleSheet.absoluteFillObject, styles.overlay]} />
            </View>
          );
        }}
      />
      <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
    </View>
  );
};
