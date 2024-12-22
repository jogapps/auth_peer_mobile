import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Collapsible from 'react-native-collapsible';
import Icon from "react-native-vector-icons/Ionicons";
import DropShadow from "react-native-drop-shadow";
import { kAppBlackColor, kAppBlackText, kAppPrimaryColor, kAppRedColor, kAppShadowColor, kAppWhiteColor, kAshColor } from "../../constants/colors";
import AppSpacer from "../AppSpacer/AppSpacer";

const FriendsRow = (props) => {
    return (
        <View>
            <View style={styles.subscriptionRow}>
                <Text style={styles.desc}>{props.text}</Text>
                {props.type == "icon"
                    ? <Icon
                        name={props.iconType == 1 ? "ios-checkmark-sharp" : "ios-close-outline"}
                        color={props.iconType == 1 ? kAppPrimaryColor : kAppRedColor}
                        size={20} />
                    : <Text style={styles.price}>{props.price}</Text>}
            </View>
            <AppSpacer height={7.5} />
            <View style={styles.divider2}></View>
        </View>
    );
}

const FriendsCard = (props) => {

    return (
        <View>
            <TouchableOpacity onPress={props.toggle}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Icon  name= {props.collapsed ? "ios-add-outline" : "remove-outline"} color={kAppPrimaryColor} size={20}/>
            </View>
            </TouchableOpacity>
            <AppSpacer height={10} />
            <View style={styles.divider}></View>
            <Collapsible collapsed={props.collapsed}>
                <DropShadow style={styles.dropShadow}>
                <View style={styles.cardContainer}>
                    <FriendsRow text="Credit Score Check" type="icon" iconType={props.creditScoreCheck} />
                    <AppSpacer height={10} />
                    <FriendsRow text="Access to Credit History" type="icon" iconType={props.creditHistory} />
                    <AppSpacer height={10} />
                    <FriendsRow text="Access to Collateral Details" type="icon" iconType={props.collateralDetail} />
                    <AppSpacer height={10} />
                    <FriendsRow text="Access to Credit Infractions" type="icon" iconType={props.creditInfraction} />
                    <AppSpacer height={10} />
                    <FriendsRow text="PRICE" price={props.price} />
                    <AppSpacer height={10} />
                    <TouchableOpacity onPress={props.onPress}>
                    {
                        !props.current 
                        ? <Text style={styles.payment}>Proceed to Payment</Text>
                        : <Text style={styles.payment}>Upgrade Payment</Text> 
                    }
                    </TouchableOpacity>
                    <AppSpacer height={10} />
                </View>
                </DropShadow>
            </Collapsible>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: kAppPrimaryColor,
        fontSize: 12,
        fontFamily: "Montserrat-Medium"
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20
    },
    line: {
        width: 10,
        height: 2,
        backgroundColor: kAppPrimaryColor
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: kAppPrimaryColor
    },
    divider2: {
        width: "100%",
        height: 1,
        backgroundColor: kAshColor
    },
    cardContainer: {
        borderRadius: 10,
        backgroundColor: kAppWhiteColor,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10
    },
    subscriptionRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    desc: {
        color: kAppBlackColor,
        fontFamily: "Montserrat-Regular"
    },
    price: {
        color: kAppPrimaryColor
    },
    payment: {
        textAlign: "center", 
        textDecorationLine: "underline",
        color: kAppPrimaryColor,
        fontFamily: "Montserrat-Medium"
    },
    dropShadow: {
         shadowColor: kAppShadowColor,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
});

export default FriendsCard;