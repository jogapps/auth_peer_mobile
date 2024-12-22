import React, { useEffect, useState } from "react";
import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import AppBar2 from "../../components/AppBar2/AppBar2";
import AppSpacer from "../../components/AppSpacer/AppSpacer";
import AppStatusBar from "../../components/AppStatusBar/AppStatusBar";
import EmptyList from "../../components/EmptyList/EmptyList";
import LoadingHeader from "../../components/LoadingHeader/LoadingHeader";
import SubscriptionCard from "../../components/FriendsCard/FriendsCard";
import { homeBackground } from "../../constants/images";
import FriendsCard from "../../components/FriendsCard/FriendsCard";

const NavFriendsListTab = (props) => {

    const [collapseItem, setCollapseItem] = useState("");

    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [subscriptions, setSubscriptions] = useState([
        {
            "id": "76379cf0-a0f2-11ee-a2f7-39e9f7057f41",
            "price": "0.00",
            "name": "beginner",
            "max_product_listing": 10,
            "search_type": "default",
            "ad_management": "default",
            "analytics": "default",
            "geolocation": "none",
            "data_mining": "none",
            "overall_grade": 0,
            "createdAt": "2023-12-22T17:49:32.098Z",
            "updatedAt": "2023-12-22T17:49:32.098Z",
            "deletedAt": null
        }
    ]);

    const getSubscriptions = () => {
        // setLoading(true);
        // setRefreshing(true);
        // axiosInstance.get(`/subscription/packages`)
        //     .then(response => {
        //         setLoading(false);
        //         setRefreshing(false);
        //         if (response.data.status) {
        //             let type = props.accountType == 0 ? "individual" : "corporate";
        //             setSubscriptions(response.data.data
        //                 .filter(obj => {
        //                     return obj.type === type
        //                 })
        //                 .sort(function(a, b) {
        //                     return a['price'] - b['price'];
        //                 })
        //             );
                     setCollapseItem(/* response.data.data[0].name */ "beginner");
        //         }
        //     })
        //     .catch(error => {
        //         setLoading(false);
        //         setRefreshing(false);
        //     })
        setSubscriptions([
            {
                "id": "76379cf0-a0f2-11ee-a2f7-39e9f7057f41",
                "price": "0.00",
                "name": "beginner",
                "max_product_listing": 10,
                "search_type": "default",
                "ad_management": "default",
                "analytics": "default",
                "geolocation": "none",
                "data_mining": "none",
                "overall_grade": 0,
                "createdAt": "2023-12-22T17:49:32.098Z",
                "updatedAt": "2023-12-22T17:49:32.098Z",
                "deletedAt": null
            }
        ]);
    }

    useEffect(() => {
        getSubscriptions();
    }, []);

    const handleRefresh = () => {
        setSubscriptions([]);
        getSubscriptions();
    };

    const renderSubscriptionPlan = ({ item }) => {
        return (
            <FriendsCard
                toggle={() => setCollapseItem(item.name)}
                collapsed={collapseItem === `${item.name}` ? false : true}
                title={item.name}
                creditScoreCheck={item.credit_score_check}
                creditHistory={item.access_credit_history}
                collateralDetail={item.access_collateral_detail}
                creditInfraction={item.access_credit_infractions}
                price={item.price}
                onPress={() => { props.setSelectedSubscription(item); props.navigation.navigate("PaymentMethodId") }}
            />
        );
    }

    const renderHeader = () => {
        return (
            refreshing
                ? <LoadingHeader />
                : null
        );
    }

    return (
        <ImageBackground source={homeBackground} style={styles.splashBackgroud}>
            <AppStatusBar />
            <AppBar2 title="Subscription Plan" press={() => props.navigation.goBack()} />
            <View style={styles.container}>
                <AppSpacer height={30} />
                <FlatList
                    data={subscriptions}
                    style={{ marginHorizontal: 10 }}
                    renderItem={renderSubscriptionPlan}
                    ItemSeparatorComponent={() => <AppSpacer height={22.5} />}
                    keyExtractor={(item, index) => item.id.toString()}
                    ListHeaderComponent={renderHeader}
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                    ListEmptyComponent={<EmptyList text={loading ? "" : "Unable to load subscriptions, refresh again!"} />}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    splashBackgroud: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    container: {
        flex: 1,
        width: "90%",
        //elevation: 10,
        marginHorizontal: 20,
        marginBottom: 20
    }
});


export default NavFriendsListTab;