import React from "react";
import { StyleSheet, Text } from "react-native";

const ErrorMessage = (props) => {
    return (
        <Text style={ styles.main }>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    main: {
        color: "red",
        fontSize: 14,
        marginTop: 2.5
    }
});

export default ErrorMessage;