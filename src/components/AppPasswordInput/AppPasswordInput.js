import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { kAppAshes, kAppBlackColor, kAppInputBackgroud, kAppPrimaryColor } from '../../constants/colors';
import AppSpacer from '../AppSpacer/AppSpacer';

const AppPasswordInput = (props) => {

    const [visibilty, setVisibity] = useState(true);

    return (
        <View style={{ width: '100%' }}>
            <View style={styles.formContainer}>
                <View style={{
                    overflow: 'hidden',
                    width: '95%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}>
                    <TextInput
                    style={styles.main}
                    placeholder={props.placeholder}
                        selectionColor={kAppBlackColor}
                        secureTextEntry={visibilty}
                        underlineColorAndroid="transparent"
                        {...props} />
                </View>
                <AppSpacer width={5} />
                <TouchableOpacity onPress={() => setVisibity(!visibilty)}>
                <MaterialCommunityIcons
                name= {!visibilty ? 'eye-off-outline' : 'eye-outline'}
                size={25} color={kAppPrimaryColor} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        borderColor: kAppPrimaryColor,
        borderWidth: 1,
        backgroundColor: kAppInputBackgroud,
    },
    main: {
        paddingLeft: 5,
        paddingRight: 17.5,
        paddingBottom: 12.5,
        paddingTop: 12.5,
        flex: 1,
        color: kAppBlackColor,
        backgroundColor: kAppInputBackgroud,
    },
});

export default AppPasswordInput;
