import { Dimensions, PixelRatio } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const guidelineBaseWidth = 375;

const calcHeight = x => PixelRatio.roundToNearestPixel((DEVICE_HEIGHT * x) / 100);
const calcWidth = x => PixelRatio.roundToNearestPixel((DEVICE_WIDTH * x) / 100);
const getOrientation = () => ( Dimensions.get('window').width < Dimensions.get('window').height ) ? 'portrait' : 'landscape';

const scaleSize = size => (DEVICE_WIDTH/guidelineBaseWidth) * size;
const scaleFont = size => size * PixelRatio.getFontScale();

const dimensions = (top, right = top, bottom = top, left = right, property) => {
  let styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

const margin = (top, right, bottom, left) => dimensions(top, right, bottom, left, 'margin');

const padding = (top, right, bottom, left) => dimensions(top, right, bottom, left, 'padding');

const boxShadow = (color, offset = {height:2,width:2}, radius = 8, opacity = 0.2) => {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
export { DEVICE_HEIGHT, DEVICE_WIDTH, calcHeight, calcWidth, getOrientation, scaleSize,
    scaleFont, dimensions, margin, padding, boxShadow }