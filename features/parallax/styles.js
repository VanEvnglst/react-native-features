import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: 18,
    shadowColor: '#000',
    shadowRadius: 30,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    padding: 12,
    backgroundColor: 'white',
  },
  imgContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 14,
  },
  image: {
    width: ITEM_WIDTH * 1.4,
    height: ITEM_HEIGHT,
    resizeMode: 'cover',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderWidth: 6,
    borderColor: 'white',
    position: 'absolute',
    bottom: -30,
    right: 60,
  },
});