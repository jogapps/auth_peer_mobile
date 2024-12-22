import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Drawer } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerItem } from '@react-navigation/drawer';
import { useIsFocused } from '@react-navigation/core';
import { kAppAshes, kAppDarkGreen, kAppDrawerLight, kAppLightBlack, kAppPrimaryColor, kAppWhiteColor } from '../../constants/colors';
// import { AuthWelcomeId } from '../../screens/Welcome/AuthWelcome';
import { getStorage } from '../../utils/helpers';
import { defaultProfile } from '../../constants/texts';

const DrawerContent = (props) => {

    const [identityNumber, setIdentityNumber] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [loginType, setLoginType] = useState('');

    const getIdentityNumber = async () => {
        let userDetails = await getStorage('user_data');
        if (userDetails) {
            let rcNumber = userDetails.rc_number;
            let nin = userDetails.nin;
            let bvn = userDetails.bvn;
            if (rcNumber) {
                setIdentityNumber(rcNumber);
                setLoginType('RC Number');
            } else if (nin) {
                setIdentityNumber(nin);
                setLoginType('NIN');
            } else {
                setIdentityNumber(bvn);
                setLoginType('BVN');
            }
        }
    }

    const getProfilePic = async () => {
        let profile = (await getStorage('user_data')).profile_image;
        if(profile) setProfilePic(profile);
    }

    const isFocused = useIsFocused();

    useEffect(() => {
        getIdentityNumber();
        getProfilePic();
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <View style={styles.profileSection}>
                <View style={styles.profile}>
                <Image source={{uri: profilePic ? profilePic : defaultProfile}} style={styles.profileImage}/>
                    {/* <Icon name="person" color={kAppWhiteColor} size={18} /> */}
                </View>
                <View style={{
                    flexDirection: 'column'
                }}>
                    <Text style={styles.title}>{loginType}</Text>
                    <Text style={styles.number}>{identityNumber}</Text>
                </View>
            </View>
            <View style={styles.itemSection}>
                <Drawer.Section>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="card-outline" color={kAppLightBlack} size={22} />
                        )}
                        label="Subscription Plan"
                        labelStyle={styles.labelStyle}
                        onPress={() => {
                            props.navigation.goBack();
                            props.navigation.navigate(CurrentSubscriptionId);
                        }} />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="log-out-outline" color={kAppLightBlack} size={22} />
                        )}
                        label="Logout"
                        labelStyle={styles.labelStyle}
                        onPress={() => { props.navigation.replace(AuthWelcomeId) }} />
                </Drawer.Section>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    profileSection: {
        flex: 2, backgroundColor: kAppDrawerLight,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemSection: {
        flex: 10,
        backgroundColor: kAppPrimaryColor,
        paddingTop: 20
    },
    profile: {
        height: 40,
        width: 40,
        backgroundColor: kAppPrimaryColor,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    profileImage: {
        width: 38.5,
        height: 38.5,
        resizeMode: 'cover',
        borderRadius: 100,
        //backgroundColor: "transparent"
    },
    title: {
        color: kAppDarkGreen,
        fontSize: 13,
        fontWeight: 'bold',
    },
    number: {
        color: kAppPrimaryColor,
        fontSize: 13,
        fontFamily: 'OpenSans-Regular',
    },
    labelStyle: {
        color: kAppWhiteColor
    }
})

// const mapStateToProps = (state) => {
//     return {
//         accountType: state.authReducers.ACCOUNT_TYPE
//     }
// }

export default DrawerContent;