import React from "react";
import { StyleSheet } from "react-native";
import { AndroidBackHandler } from 'react-navigation-backhandler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Ionicons";
import { kAppBarInactive, kAppBarText, kAppLighterGreen } from "../../constants/colors";
import DrawerContent from "../../components/Drawer/DrawerContent";
import { onBackButtonPress } from "../../utils/helpers";
import NavBottomHomeTab from "../../navigations/Home/NavBottomHomeTab";
import NavFriendsListTab from "../../navigations/NavFriendsList/NavFriendsList";


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeTabId = "HomeTab";

const HomeTabs = (props) => {

    return (
        <Tab.Navigator
            initialRouteName="Summary"
            tabBarOptions={{
                activeTintColor: kAppBarText,
                inactiveTintColor: kAppBarInactive,
                style: styles.appBar,
                labelStyle: styles.appBarLabel
            }}>
            <Tab.Screen
                name="Summary"
                component={NavBottomHomeTab}
                options={{
                    tabBarLabel: "Summary",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="view-dashboard-outline" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="Recommendations"
                component={NavBottomHomeTab}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="head-question-outline" color={color} size={25} style={[{ color: color }]} />
                    ),
                }}
            />
            <Tab.Screen
                name="Friends"
                component={NavFriendsListTab}
                options={{
                    tabBarLabel: "Report",
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-receipt-outline" color={color} size={25} />
                    ),
                }}
            /> 
                        <Tab.Screen
                name="Profile"
                component={NavBottomHomeTab}
                options={{
                    tabBarLabel: "Report",
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-receipt-outline" color={color} size={25} />
                    ),
                }}
            /> 
        </Tab.Navigator>
    );
}

const HomeTab = (props) => {

    return (
        <AndroidBackHandler onBackPress={() => onBackButtonPress(props)}>
            <Drawer.Navigator
            // drawerContent={props => <DrawerContent {...props} />}
            >
                <Drawer.Screen name="Home" component={HomeTabs} />
            </Drawer.Navigator>
        </AndroidBackHandler>
    );
}

const styles = StyleSheet.create({
    appBar: {
        borderTopWidth: 0,
        backgroundColor: kAppLighterGreen,
        height: 70,
        elevation: 0,
        paddingBottom: 15,
        paddingTop: 10
    },
    appBarLabel: {
        fontSize: 12,
        paddingTop: 3
    }
});

export default HomeTabs;
export { HomeTabId }