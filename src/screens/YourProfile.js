import React, { useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    Button,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { TextInput } from 'react-native-gesture-handler';
// import { useIsFocused, useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { RNCamera, FaceDetector } from 'react-native-camera';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { request, check, PERMISSIONS, RESULTS, } from 'react-native-permissions';

const YourProfle = ({ props, route }) => {

    const [imageSource, setImageSource] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const requestPermission = () => {
        request(PERMISSIONS.IOS.CAMERA).then(result => {
            console.log('requestPermission -> result', result);
            if (result === 'granted') openCamera();
        });
    };
    const openImageLibrary = () => {
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
                Alert.alert('You did not select any image');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log(response.assets[0].uri);
                setImageSource(response.assets[0].uri);
                AsyncStorage.setItem('profileImage', response.assets[0].uri);
            }
            setShowPopup(false);
        });
    };

    const openCamera = () => {
        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
                Alert.alert('You did not select any image');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log(response);
                setImageSource(response);
                AsyncStorage.setItem('profileImage', response);
            }
            setShowPopup(false);
        });
    };

    const showSelectionPopup = () => (
        <TouchableOpacity
            onPress={() => setShowPopup(false)}
            style={{
                position: 'absolute',
                top: 50,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'rgba(0,0,0,0.2)',
                zIndex: 10,
                height: '100%',
                width: '100%',
            }}>
            <View
                style={{
                    height: 100,
                    width: 200,
                    //   backgroundColor: 'red',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:20,
                }}>
                <TouchableOpacity
                    onPress={requestPermission}
                    style={{
                        height: 50,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text>Open Camera</Text>
                </TouchableOpacity>
                <View style={{ height: 1, width: '100%', backgroundColor: 'grey' }} />
                <TouchableOpacity
                    onPress={openImageLibrary}
                    style={{
                        height: 50,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text>Open Image Library</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );


    useEffect(async () => {
        const img = await AsyncStorage.getItem('profileImage');
        setImageSource(img);
    }, []);
    let options = {
        title: 'You can choose one image',
        maxWidth: 256,
        maxHeight: 256,
        storageOptions: {
            skipBackup: true,
        },
    };

    // console.log('route.params', route.params)
    // const[Personal, setPersonal] = useState('');
    // const[Academic, setAcademic] = useState('');


    // useEffect(() => {
    //     setPersonal(route?.params?.complete)
    //     setAcademic(route?.params?.Academiccomplete)
    // },[Personal, Academic])

    // console.log('route?.params?.complete', route?.params?.complete)
    // console.log('route?.params?.Academiccomplete', route?.params?.Academiccomplete)



    const saveprofile = () => {

        console.log('save Profile')
    }

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.Headers}>
                <View style={styles.HeadLeft}>
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                    >
                        <Image source={require('../Assets/baricon.png')}
                            style={styles.icons}
                        />
                    </TouchableOpacity>
                    <Image source={require('../Assets/bell.png')}
                        style={styles.icons}
                    />


                </View>
                <View style={styles.HeadRight}>

                    {/* <Image source={require('../Assets/search.png')}
                        style={styles.icons}
                    /> */}
                    <Image source={require('../Assets/chat.png')}
                        style={styles.icons}
                    />
                </View>

            </View>

            <ScrollView>
                <View style={styles.usercontainer}>
                    {showPopup && showSelectionPopup()}
                    <View style={styles.UserLeft}>
                        <Text style={styles.text1}>Your Profile</Text>
                        <Text style={styles.text2}>Account is only completly setup with your prrofile</Text>

                    </View>

                </View>

                <TouchableOpacity
                    style={{ width: "100%", height: 100, borderRadius: 50, justifyContent: "center", alignItems: "center", backgroundColor: "white", marginTop: 65 }}
                    onPress={() => setShowPopup(true)}>
                    <Image
                        source={{ uri: imageSource }}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            backgroundColor: 'grey',
                        }}
                    />
                </TouchableOpacity>

                <View style={styles.postContainer}>
                    {
                        route?.params?.complete === 'complete' ?
                            <TouchableOpacity style={[styles.postLeft, { justifyContent: 'space-between' }]}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../Assets/Personal.png')}
                                        style={styles.posticons}
                                    />
                                    <Text style={styles.postText}>Personal Information</Text>
                                </View>
                                <Image source={require('../Assets/tutionsjobs.png')}
                                    style={styles.tickIcon}
                                />
                            </TouchableOpacity>
                            :
                            <View style={styles.postLeft}>
                                <View>
                                    <Image source={require('../Assets/Personal.png')}
                                        style={styles.posticons} />
                                </View>
                                <View>
                                    <Text style={styles.postText}>Personal Information</Text>
                                    <Text style={styles.postSemiText}>First, let’s get some information about yourself</Text>

                                    <TouchableOpacity onPress={() => navigation.navigate('PersonalInfo')} style={styles.infoWrapper}>
                                        <Text style={styles.infoWrapperText}>Enter Personal Information</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    }

                    {
                        route?.params?.complete === 'Academiccomplete' ?
                            <View style={[styles.postLeft, { justifyContent: 'space-between' }]}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../Assets/tutionsjobs.png')}
                                        style={styles.posticons}
                                    />
                                    <Text style={styles.postText}>Academic History</Text>
                                </View>
                                <Image source={require('../Assets/tutionsjobs.png')}
                                    style={styles.tickIcon}
                                />
                            </View>
                            :

                            <View style={styles.postLeft}>
                                <View>
                                    <Image source={require('../Assets/Academic.png')}
                                        style={styles.posticons} />
                                </View>
                                <View>
                                    <Text style={styles.postText}>Academic History</Text>
                                    <Text style={styles.postSemiText}>Now we need to know something about your academic background</Text>

                                    <TouchableOpacity onPress={() => navigation.navigate('AcademicInfo')} style={styles.infoWrapper}>
                                        <Text style={styles.infoWrapperText}>Enter Academic History</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                    }
                    {/* <View style={styles.postLeft}>
                        <Image source={require('../Assets/tutionsjobs.png')}
                            style={styles.posticons}
                        />
                        <Text style={styles.postText}>Tution Type</Text>
                    </View> */}
                    <View style={styles.postLeft2}>
                        <View style={{ flexDirection: 'row' }} >
                            <Image source={require('../Assets/TutionTypes.png')}
                                style={styles.posticons} />
                            <View>
                                <Text style={styles.postText}>Tution Type</Text>
                                <Text style={styles.postSemiText}>We have a few tuition services. What are your preferences?</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ height: hp(20), marginTop: hp(2), alignItems: 'center', marginLeft: wp(3), width: wp(26.7), backgroundColor: '#fff', elevation: 10, borderRadius: 8 }}>
                                <View style={{ height: hp(7), width: wp(14), borderRadius: 50, backgroundColor: '#fff', elevation: 10, marginTop: hp(1), alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../Assets/Online.png')}
                                        style={{ height: hp(4), width: wp(6) }} />
                                </View>

                                <Text style={{ color: '#000', fontSize: 12, marginTop: hp(2) }}>Online Tuition</Text>

                                <TouchableOpacity style={{ height: hp(4), width: wp(8), borderRadius: 50, backgroundColor: '#fff', elevation: 10, marginTop: hp(1), alignItems: 'center', justifyContent: 'center' }}>
                                    {/* <Image source={require('../Assets/tutionsjobs.png')}
                                        style={{height:hp(3), width:wp(6)}}/> */}
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: hp(20), marginTop: hp(2), alignItems: 'center', marginLeft: wp(3), width: wp(26.7), backgroundColor: '#fff', elevation: 10, borderRadius: 8 }}>
                                <View style={{ height: hp(7), width: wp(14), borderRadius: 50, backgroundColor: '#fff', elevation: 10, marginTop: hp(1), alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../Assets/HomeWork.png')}
                                        style={{ height: hp(4), width: wp(6) }} />
                                </View>

                                <Text style={{ color: '#000', fontSize: 12, marginTop: hp(2) }}>Homework Help</Text>

                                <TouchableOpacity style={{ height: hp(4), width: wp(8), borderRadius: 50, backgroundColor: '#fff', elevation: 10, marginTop: hp(1), alignItems: 'center', justifyContent: 'center' }}>
                                    {/* <Image source={require('../Assets/tutionsjobs.png')}
                                        style={{height:hp(3), width:wp(6)}}/> */}
                                </TouchableOpacity>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('HomeTution')} style={{ height: hp(20), marginTop: hp(2), alignItems: 'center', marginLeft: wp(3), width: wp(26.7), backgroundColor: '#fff', elevation: 10, borderRadius: 8 }}>
                                <View style={{ height: hp(7), width: wp(14), borderRadius: 50, backgroundColor: '#fff', elevation: 10, marginTop: hp(1), alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../Assets/HomeTution.png')}
                                        style={{ height: hp(4), width: wp(6) }} />
                                </View>

                                <Text style={{ color: '#000', fontSize: 12, marginTop: hp(2) }}>Home Tuition</Text>

                                <TouchableOpacity style={{ height: hp(4), width: wp(8), borderRadius: 50, backgroundColor: '#fff', elevation: 10, marginTop: hp(1), alignItems: 'center', justifyContent: 'center' }}>
                                    {/* <Image source={require('../Assets/tutionsjobs.png')}
                                        style={{height:hp(3), width:wp(6)}}/> */}
                                </TouchableOpacity>
                            </TouchableOpacity>

                        </View>
                        <View style={{ alignSelf: 'center', marginTop: hp(3) }}>
                            <TouchableOpacity style={{ backgroundColor: '#2F5597', borderRadius: 25, height: hp(6), width: wp(35), alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#fff', fontSize: 14 }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    {
                        route?.params?.Tutorcomplete === 'Tutorccomplete' ?

                            <View style={[styles.postLeft, { justifyContent: 'space-between' }]}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../Assets/tutionsjobs.png')}
                                        style={styles.posticons}
                                    />
                                    <Text style={styles.postText}>Tutoring Level, Subjects & Experience</Text>
                                </View>
                                <Image source={require('../Assets/tutionsjobs.png')}
                                    style={styles.tickIcon}
                                />
                            </View>
                            :
                            <View style={styles.postLeft}>
                                <View>
                                    <Image source={require('../Assets/SubjectExperience.png')}
                                        style={styles.posticons} />
                                </View>
                                <View>
                                    <Text style={styles.postText}>Tutoring Level, Subjects & Experience</Text>
                                    <Text style={styles.postSemiText}>Share the subjects you would like to tutor & your tutoring experience</Text>

                                    <TouchableOpacity onPress={() => navigation.navigate('TutoringDetail')} style={styles.infoWrapper}>
                                        <Text style={styles.infoWrapperText}>Enter Tutoring Details</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    }

                    {/* <View style={styles.postLeft}>
                        <Image source={require('../Assets/tutionsjobs.png')}
                            style={styles.posticons}
                        />
                        <Text style={styles.postText}>Personal Statement</Text>
                    </View> */}

                    {
                        route?.params?.WordYou == 'WordYou' ?
                            <View style={[styles.postLeft, { justifyContent: 'space-between' }]}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../Assets/tutionsjobs.png')}
                                        style={styles.posticons}
                                    />
                                    <Text style={styles.postText}>Personal Statement</Text>
                                </View>
                                <Image source={require('../Assets/tutionsjobs.png')}
                                    style={styles.tickIcon}
                                />
                            </View>

                            : <View style={styles.postLeft}>
                                <View>
                                    <Image source={require('../Assets/WordYou.png')}
                                        style={styles.posticons} />
                                </View>
                                <View>
                                    <Text style={styles.postText}>A Word from You</Text>
                                    <Text style={styles.postSemiText}>A little more & you have completed your profile</Text>

                                    <TouchableOpacity onPress={() => navigation.navigate('WordYou')} style={styles.infoWrapper}>
                                        <Text style={styles.infoWrapperText}>A Word from Yous</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    }

                </View>


                <TouchableOpacity style={styles.RequsertButton}
                    // onPress={() => navigation.navigate('TutorLanding')}
                    onPress={() => saveprofile()}

                >
                    <Text style={styles.ReqButtonText}>Done</Text>
                </TouchableOpacity>





            </ScrollView>

        </View>
    )

}

export default YourProfle;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text1: {
        fontSize: 20,
        fontWeight: '700',
        color: '#2F5597'
    },
    text2: {
        fontSize: 15,
        fontWeight: '600',
        color: 'grey'
    },
    SearchContainer: {
        height: hp(15),
        width: wp(100),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    Boxone: {
        height: hp(15),
        width: wp(30),
        justifyContent: "center",


    },
    ImageSec: {
        height: hp(15),
        backgroundColor: "red",
        justifyContent: "center"
    },
    Profileimage: {
        alignSelf: "center"
    },
    RequsertButton: {
        backgroundColor: "#2F5597",
        height: hp(7),
        borderRadius: 50,
        marginTop: 20,
        width: wp(50),
        alignSelf: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    ReqButtonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18

    },
    Headers: {
        // backgroundColor: "red",
        height: hp(10),
        justifyContent: "center",
        flexDirection: "row",
        width: wp(100)
    },
    Slidericons: {
        alignSelf: "center",
        height: 100,
        width: 100,
        marginBottom: 10

    },
    SliderContainer: {

        marginTop: 30,
        marginBottom: 20
    },
    Slider: {
        height: hp(30),
        backgroundColor: "#F9F9F9",
        width: wp(70),
        marginLeft: 15,
        marginRight: 10,
        borderRadius: 20,
        justifyContent: "center",


    },
    searchText: {
        textAlign: "center",
        padding: 10
    },
    postText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#2F5597',
        // alignSelf: "center"

    },
    postSemiText: {
        fontSize: 13,
        color: '#2F5597',
        width: wp(70),
    },
    infoWrapper: {
        backgroundColor: '#2F5597',
        height: hp(5),
        width: wp(55),
        alignItems: 'center',
        borderRadius: 40,
        justifyContent: 'center',
        marginTop: hp(2),
        elevation: 10,
        marginLeft: wp(3),
    },
    infoWrapperText: {
        fontSize: 13,
        color: '#fff',
    },
    sliderText: {
        fontSize: 12,
        lineHeight: 17,
        // fontWeight: '700',
        color: '#000',
        alignSelf: "center",
        textAlign: "center"
    },
    postTextRight: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
        bottom: 20,
        left: -10,
        alignSelf: "center"

    },

    usercontainer: {
        height: hp(10),
        // backgroundColor: "red",
        width: wp(90),
        alignSelf: "center",
        flexDirection: "row",
        //justifyContent: "center"
    },
    usericons: {
        height: 50,
        width: 50,
    },
    searchicons: {
        height: 50,
        width: 50,
        alignSelf: "center"
    },
    icons: {

        height: 30,
        width: 30,
        marginRight: 10
    },
    posticons: {
        height: 20,
        width: 20,
        marginLeft: 20,
        marginRight: 10,
        // alignSelf: "center"
    },
    tickIcon: {
        height: 20,
        width: 20,
        marginRight: 13,
    },
    postRighticons: {
        height: 110,
        width: 110,
        left: -10,
        alignSelf: 'flex-end'

    },
    sicons: {
        height: 20,
        width: 20,
    },
    HeadLeft: {
        width: wp(45),
        height: hp(10),
        flexDirection: "row",
        marginTop:hp(2),
        alignItems: "center"
    },
    postContainer: {

        // flexDirection: "row",
        width: wp(90),
        marginTop: 20,
        alignSelf: "center"


    },
    postLeft2: {

        // height: hp(10),
        backgroundColor: "#fff",
        paddingVertical: hp(2.5),
        width: wp(90),
        shadowColor: '#000',
        elevation: 10,
        marginTop: 10,
        // paddingTop: 10,
        borderRadius: 10,
        // flexDirection: "row",
        alignItems: 'flex-start',
        // alignSelf: "flex-start",
        // marginRight: wp(6),
        // justifyContent: 'flex-start'

    },
    postLeft: {

        // height: hp(10),
        backgroundColor: "#fff",
        paddingVertical: hp(2.5),
        width: wp(90),
        shadowColor: '#000',
        elevation: 10,
        marginTop: 10,
        // paddingTop: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: 'flex-start',
        // alignSelf: "flex-start",
        // marginRight: wp(6),
        // justifyContent: 'flex-start'

    },

    postRight: {

        height: hp(20),
        backgroundColor: "lightblue",
        width: wp(42),
        borderRadius: 20,


    },
    UserLeft: {
        //   width: wp(35),
        height: hp(10),
        // flexDirection: "row",


        //alignItems: "center"
    },
    toggleicons: {
        height: 30,
        width: 30,
        marginLeft: 10,


    },
    UserRight: {
        width: wp(55),
        height: hp(8),
        flexDirection: "row",
        //   backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
        // flexDirection: "row",


        //alignItems: "center"
    },
    HeadRight: {
        width: wp(45),
        height: hp(10),
        marginTop:hp(2),
        // backgroundColor: "pink",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end"
    }
})