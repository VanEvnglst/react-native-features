import {StyleSheet} from 'react-native';

const SPACING = 20;
const AVATAR_SIZE = 70;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardContainer: {
    flexDirection: 'row',
    padding: SPACING,
    marginBottom: SPACING,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    opacity,
    transform: [{scale}],
  },
  textName: {
    fontSize: 22,
    fontWeight: '700',
  },
  textJob: {
    fontSize: 18,
    opacity: 0.7,
  },
  textEmail: {
    fontSize: 14,
    opacity: 0.8,
    color: '#0099cc',
  },
  image: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    marginRight: SPACING / 2,
  },
});
