import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bgContainer: {
    width,
    height,
  },
  imgContainer: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: '#000',
    opacity: 0.3,
  },
  tabText: {
    color: 'white',
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  indicator: {
    position: 'absolute',
    height: 4,
    backgroundColor: 'white',
    bottom: -10,
    left: 0,
  },
  tabsContainer: {
    position: 'absolute',
    width,
    top: 100,
  },
  tabs: {
    justifyContent: 'space-evenly', 
    flex: 1, 
    flexDirection: 'row'
  }
});