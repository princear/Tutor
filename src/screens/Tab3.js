import React, { useState, useEffect } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    Button,
    TouchableOpacity,
    FlatList,
    TouchableHighlight,
    Modal
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { TextInput } from 'react-native-gesture-handler';
// import { useIsFocused, useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Tab3 = ({ props, route }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text >Tab 3 Screen</Text>
        </View>
    )
}

export default Tab3;