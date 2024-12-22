import React from "react";
import { StyleSheet, Text, View } from "react-native";

const EmptyList = (props) => {
    return (
        <View style={styles.container}>
            <Text>
                {props.text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        alignItems: "center"
    }
})

export default EmptyList;