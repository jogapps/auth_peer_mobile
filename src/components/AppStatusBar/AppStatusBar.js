import React from "react";
import { StatusBar } from "react-native";

const AppStatusBar = (props) => {
    return (
        <StatusBar barStyle={props.type ? props.type : 'dark-content'} translucent backgroundColor={'transparent'} {...props}  />
    );
}

export default AppStatusBar;