import React, { useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import VideoPlayer from 'react-native-video-player';


const slides = [
    {
        key: 1,
        title: 'Great first step!',
        text: 'Enhance the simplest way to engage a \n  tutor or secure tution assignments \n.........just with a few clicks.Try it',
        image: require('../Assets/slider1.jpg'),
        logo: require('../Assets/logo.jpg'),
        skip: "Skip Introduction",
        backgroundColor: '#F7F8FD',
        VVideo: (require('../Assets/first.mp4'))
    },
    {
        key: 2,
        title: 'Engage a tutor',
        text: 'Enhance the simplest way to engage a \n  tutor or secure tution assignments \n.........just with a few clicks.Try it',
        image: require('../Assets/slider2.jpg'),
        logo: require('../Assets/logo.jpg'),
        skip: "Skip",
        backgroundColor: '#F7F8FD',
        VVideo: (require('../Assets/second.mp4'))
    },
    {
        key: 3,
        title: 'Select Tutions jobs!',
        text: 'Enhance the simplest way to engage a \n  tutor or secure tution assignments \n.........just with a few clicks.Try it',
        image: require('../Assets/slider3.jpg'),
        logo: require('../Assets/logo.jpg'),
        skip: "Skip",
        backgroundColor: '#F7F8FD',
        VVideo: (require('../Assets/third.mp4'))

    },
    {
        key: 4,
        title: 'Unrivaled featurs',
        text: 'Enhance the simplest way to engage a \n  tutor or secure tution assignments \n.........just with a few clicks.Try it',
        image: require('../Assets/slider4.jpg'),
        logo: require('../Assets/logo.jpg'),
        skip: "Skip",
        backgroundColor: '#F7F8FD',
        VVideo: (require('../Assets/four.mp4'))
    }
];



const IntroScreen = () => {

    const [showRealApp, setShowRealApp] = useState(false);
    const navigation = useNavigation();

    const onDone = () => {

        //  setShowRealApp(true);
        navigation.navigate('ClientLandingBefore')
    }


    const _onDone = () => {


        return (
            <View style={{
                //  backgroundColor: "red",
                width: wp(95), alignContent: "center",
                alignSelf: "center",

            }}>
                <TouchableOpacity style={{ backgroundColor: '#2F5597', width: wp(85), alignSelf: 'center', justifyContent: 'center', borderRadius: 20, marginTop: 10 }}
                    onPress={onDone}
                >
                    <Text style={{ textAlign: 'center', fontWeight: '600', padding: 14, lineHeight: 16, color: '#fff', fontFamily: 'SharpSansDispNo1-Semibold', fontSize: 14 }}>GET Started</Text>
                </TouchableOpacity>
            </View>
        )

    };

    const _Continue = () => {


        return (
            <View style={{
                //  backgroundColor: "red",
                width: wp(95), alignContent: "center",
                alignSelf: "center",

            }}>
                < TouchableOpacity style={{
                    backgroundColor: '#2F5597', width: wp(85), alignSelf: 'center', alignSelf: "center", borderRadius: 20, marginTop: 10
                }
                }
                    onPress={onDone}
                >
                    <Text style={{ textAlign: 'center', fontWeight: '600', padding: 14, lineHeight: 16, color: '#fff', fontFamily: 'SharpSansDispNo1-Semibold', fontSize: 14 }}>Get started</Text>
                </TouchableOpacity >
            </View >

        )

    };

    const _StartButton = () => {


        return (
            <View style={{
                //  backgroundColor: "red",
                width: wp(90), alignContent: "center",
                alignSelf: "center",

            }}>
                <TouchableOpacity style={{ backgroundColor: '#2F5597', width: wp(85), alignSelf: 'center', justifyContent: 'center', borderRadius: 20, marginTop: 10 }}
                    onPress={onDone}
                >
                    <Text style={{ textAlign: 'center', fontWeight: '600', padding: 14, lineHeight: 16, color: '#fff', fontFamily: 'SharpSansDispNo1-Semibold', fontSize: 14 }}>Continue</Text>
                </TouchableOpacity>
            </View>
        )

    };

    const RenderItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                    //  alignItems: 'center',
                    //paddingTop: hp(10)
                }}>
                <VideoPlayer
                    video={item.VVideo}
                    showDuration={false}
                    disableControlsAutoHide={true}

                    disableSeek={true}
                    style={styles.equipvideo}
                    hideControlsOnStart
                    loop
                    resizeMode='cover'
                    //videoHeight={1500}
                    //videoWidth={1500}
                    autoplay

                />
                <View style={{
                    backgroundColor: item.backgroundColor,
                    height: hp(2),
                    bottom: 5
                }}></View>

                <View
                    style={{
                        // flex: 1,
                        backgroundColor: item.backgroundColor,
                        alignItems: 'center',
                        paddingTop: hp(0),

                        // justifyContent: 'space-around',
                        //paddingBottom: 200,
                    }}>
                    <View style={{ bottom: 60, }}>
                        <Image
                            style={styles.intrologoStyle}
                            source={item.logo} />
                        <Text style={styles.introTitleStyle}>
                            {item.title}
                        </Text>

                        <Text style={styles.introTextStyle}>
                            {item.text}
                        </Text>
                        <TouchableOpacity
                            onPress={() => onDone()}
                            style={{
                                width: wp(100)
                            }}
                        >
                            <Text style={styles.skipTextStyle}>
                                {item.skip}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            // <View
            //     style={{
            //         flex: 1,
            //         backgroundColor: item.backgroundColor,
            //         alignItems: 'center',
            //         paddingTop: hp(10)
            //         // justifyContent: 'space-around',
            //         //paddingBottom: 200,
            //     }}>


            //     <Image
            //         style={styles.introImageStyle}
            //         source={item.image} />
            //     <Image
            //         style={styles.intrologoStyle}
            //         source={item.logo} />
            //     <Text style={styles.introTitleStyle}>
            //         {item.title}
            //     </Text>
            //     <Text style={styles.introTextStyle}>
            //         {item.text}
            //     </Text>

            // <TouchableOpacity
            //     onPress={() => onDone()}
            //     style={{ width: wp(70) }}
            // >
            //     <Text style={styles.skipTextStyle}>
            //         {item.skip}
            //     </Text>
            // </TouchableOpacity>
            // </View>
        );
    };

    return (
        <>
            {showRealApp ? (
                <SafeAreaView style={styles.container}>
                    <View style={styles.container}>

                        <Text style={styles.titleStyle}>
                            Start messaging.
                        </Text>
                        <Text style={styles.paragraphStyle}>
                            To start, you need to scan your QR in our web page
                        </Text>


                        <TouchableOpacity style={{ backgroundColor: '#CEB8FF', width: wp(85), borderRadius: 8, alignSelf: 'center', marginBottom: 10 }}

                        // onPress={() => setShowRealApp(false)}
                        // onPress={() => navigation.navigate('ProfileScreen')}
                        >
                            <Text style={{ textAlign: 'center', fontWeight: '600', lineHeight: 16, padding: 13, color: '#fff', fontFamily: 'SharpSansDispNo1-Semibold', fontSize: 14 }}>CONTINUE</Text>
                        </TouchableOpacity>

                    </View>
                </SafeAreaView>
            ) : (
                <AppIntroSlider
                    data={slides}
                    renderItem={RenderItem}
                    //bottomButton
                    showPrevButton
                    showNextButton
                    //   doneLabel="START MESSAGING"
                    // nextLabel="START MESSAGING"

                    onDone={onDone}
                    renderPrevButton={_StartButton}
                    renderDoneButton={_onDone}
                    renderNextButton={_Continue}


                    dotStyle={{ backgroundColor: '#959595', height: 5, width: 5, marginRight: 0, bottom: 30 }}
                    activeDotStyle={{ backgroundColor: '#000', width: 30, height: 5, marginLeft: 4, marginRight: 0, bottom: 30 }}
                    ButtonStyle={{ backgroundColor: 'red' }}
                />
            )}
        </>
    );

}

export default IntroScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'

    },
    titleStyle: {
        paddingLeft: 20,
        marginTop: 50,
        // fontFamily: 'SharpSansDispNo1-Semibold',
        // fontWeight:'600',
        textAlign: 'left',
        fontSize: 20,
        lineHeight: 24,
        color: '#000000',


    },
    paragraphStyle: {
        height: hp(10),
        paddingLeft: 20,
        lineHeight: 16,
        paddingTop: 24,
        fontSize: 12,
        color: '#000000',
        // fontFamily: 'SharpSansDispNo1-Book',
        fontWeight: '600',

    },

    introImageStyle: {
        //  width: wp(90),
        height: hp(25),
        resizeMode: 'contain',
        marginBottom: 40
    },

    intrologoStyle: {
        height: hp(20),
        resizeMode: 'contain',
        marginBottom: 40,

        //  backgroundColor: 'lightgrey',
        borderRadius: wp(50)
    },

    equipvideo: {
        backgroundColor: '#F7F8FD',
        //  backgroundColor: 'red',
        //zIndex: -999,
        //  marginTop: hp(5),
        height: hp(45),
        width: wp(100),
        alignSelf: "center",
        //  justifyContent: "center"

    },
    introTextStyle: {
        fontSize: 14,
        color: '#000000',
        textAlign: 'center',
        lineHeight: 21,
        // fontFamily: 'SharpSansDispNo1-Book',
        paddingVertical: 10,


    },
    introTitleStyle: {
        fontSize: 20,
        color: '#2F5597',
        fontWeight: '700',
        fontFamily: 'Sharp Sans Medium',
        textAlign: 'center',
        //  backgroundColor: "red"

    },
    skipTextStyle: {
        fontSize: 14,
        color: '#2F5597',
        fontWeight: '700',
        textAlign: 'right',
        lineHeight: 21,
        // backgroundColor: "red",
        //  width: wp(90),
        //  alignSelf: "flex-end",
        // fontFamily: 'SharpSansDispNo1-Book',
        paddingVertical: 10,

    }



})