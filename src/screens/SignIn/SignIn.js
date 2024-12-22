import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppInputField from '../../components/AppInputField/AppInputField';
import AppMainButton from '../../components/AppMainButton/AppMainButton';
import AppSpacer from '../../components/AppSpacer/AppSpacer';
import AppPasswordInput from '../../components/AppPasswordInput/AppPasswordInput';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import AppStatusBar from '../../components/AppStatusBar/AppStatusBar';
import { kAppAshes, kAppPrimaryColor } from '../../constants/colors';
import { kAppStatusBarHeight } from '../../constants/sizes';
// import { LoginIndividualId } from "../LoginIndividual/LoginIndividual";
// import { KycIndividualId } from "../KycIndividual/KycIndividual";
// import { changeRegistrationDetails } from "../../store/actions/authActions";
// import { connect } from "react-redux";
import { Formik } from 'formik';
import { registerSchema } from '../../utils/schemas';
import { SignupId } from '../Signup/SignUp';
import { HomeTabId } from '../Home/Home';

const SigninId = 'SigninPage';
const SigninPage = (props) => {

    return (
        <Formik
            validateOnMount={true}
            initialValues={{
                name: '', email: '', password: '', my_number: '',
                date_of_birth: '', residential_address: '', occupation: '',
            }}
            validationSchema={registerSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
                <ScrollView contentContainerStyle={styles.container}>
                    <AppStatusBar />
                    <AppSpacer height={100 + parseInt(kAppStatusBarHeight)} />
                    <View style={styles.container2}>
                        <Text style={styles.welcome}>Welcome!</Text>
                        <AppSpacer height={5} />
                        <Text style={styles.subText}>Please provide following</Text>
                        <AppSpacer height={2} />
                        <Text style={styles.subText}>details for your new account </Text>
                        <AppSpacer height={70} />
                        <View style={{ width: '100%' }}>
                            <AppSpacer height={10} />
                            <AppInputField
                                placeholder="Email"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email} />
                            {(errors.my_number && touched.email) && <ErrorMessage text={errors.email} />}
                            <AppSpacer height={30} />
                            <AppPasswordInput
                                placeholder="Enter your Password"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password} />
                            {(errors.password && touched.password) && <ErrorMessage text={errors.password} />}
                            <AppSpacer height={50} />

                            <AppMainButton text="Continue" width={0.9} onPress={() => props.navigation.navigate(HomeTabId)} />
                        </View>
                        <AppSpacer height={10} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'baseline', alignContent: 'space-between' }}>
                            <Text style={styles.alreadyText}>New here? </Text>
                            <TouchableOpacity onPress={() => props.navigation.replace(SignupId)}>
                                <Text style={styles.signUp}> Sign Up </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        width: '90%',
        marginHorizontal: 20,
        alignItems: 'center',
    },
    welcome: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 25,
        color: kAppPrimaryColor,
    },
    subText: {
        fontFamily: 'Montserrat-Light',
        color: '#000',
        fontSize: 12,
    },
    description: {
        fontFamily: 'Montserrat-Regular',
    },
    alreadyText: {
        fontFamily: 'Montserrat-Regular',
        marginRight: 20,
    },
    checkText: {
        fontFamily: 'Montserrat-Regular',
        marginRight: 20,
        fontSize: 12,
    },
    signUp: {
        fontFamily: 'OpenSans-SemiBold',
        color: kAppPrimaryColor,
        textDecorationLine: 'underline',
        fontSize: 15,
    },
    checkRow: {
        flexDirection: 'row',
        marginRight: 10,
        alignItems: 'flex-end',
    },
    titleAlign: {
        marginRight: 'auto',
    },
});

// const mapStateToProps = (state) => {
//     return {
//         registerDetails: state.authReducers.REGISTRATION_DETAILS
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setRegisterDetails: (registerDetails) => dispatch(changeRegistrationDetails(registerDetails)),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SignupIndividual);
export default SigninPage;
export { SigninId };