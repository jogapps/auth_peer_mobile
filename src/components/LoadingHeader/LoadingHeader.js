import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingHeader = (props) => {
    return (
        
        <View style={styles.loader}>
                        <ActivityIndicator size="large" />
                    </View>
    );
}

const styles = StyleSheet.create({
    loader: {
        marginVertical: 10,
        alignItems: "center"
    }
});

export default LoadingHeader;