import { Dimensions } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';

const kAppWidth = Dimensions.get("screen").width;
const kAppHeight = Dimensions.get("screen").height;
const kAppStatusBarHeight = getStatusBarHeight();

export {kAppWidth, kAppHeight, kAppStatusBarHeight};