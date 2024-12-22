import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { kAppBlackColor, kAppInputBackgroud, kAppPrimaryColor } from '../../constants/colors';

const AppInputField = (props) => { 
    return (
        <TextInput
            style={styles.main}
            placeholder={props.placeholder} 
            {...props} />
    );
}

const styles = StyleSheet.create({
    main: {
        borderColor: kAppPrimaryColor,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 12.5,
        paddingTop: 12.5,
        color: kAppBlackColor,
        backgroundColor: kAppInputBackgroud
    }
});

export default AppInputField;