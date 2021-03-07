import React, { Component } from 'react';
import { createStackNavigator } from "react-navigation-tabs";
import BookDonationScreen from "../screens/BookDonationScreen";
import ReceiverDetailsScreen from "../screens/ReceiverDetailsScreen";

export const AppStackNavigator=createStackNavigator({
    BookDonateList:{
        screen:BookDonationScreen,
        navigationOptions:{
            headerShown:true
        }
    },
    ReceiverDetails:{
        screen:ReceiverDetailsScreen,
        navigationOptions:{
            headerShown:false
        }
    },
},
{
    initialRouteName:'BookDonateList'
}
)