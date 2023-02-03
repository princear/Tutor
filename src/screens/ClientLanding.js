import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {TextInput} from 'react-native-gesture-handler';
// import { useIsFocused, useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {Shadow} from 'react-native-shadow-2';

const ClientLanding = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.Headers}>
        <View style={styles.HeadLeft}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../Assets/baricon.png')}
              style={styles.icons}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.HeadRight}>
          <Image source={require('../Assets/bell.png')} style={styles.icons} />
          <Image
            source={require('../Assets/search.png')}
            style={styles.icons}
          />
          <Image source={require('../Assets/chat.png')} style={styles.icons} />
        </View>
      </View>

      <ScrollView>
        <View style={styles.usercontainer}>
          <View style={styles.UserLeft}>
            <Image
              source={require('../Assets/user.png')}
              style={styles.usericons}
            />
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../Assets/start.png')}
                style={styles.sicons}
              />
              <Image
                source={require('../Assets/start.png')}
                style={styles.sicons}
              />
              <Image
                source={require('../Assets/start.png')}
                style={styles.sicons}
              />
              <Image
                source={require('../Assets/start.png')}
                style={styles.sicons}
              />
            </View>
          </View>
          <View style={styles.UserRight}>
            <Text>I want to be an Educator.....</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('TutorLanding')}>
              <Image
                source={require('../Assets/btoggle.png')}
                style={styles.toggleicons}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: '#2F5597',
            marginBottom: -40,
          }}></View>
        <View style={styles.postContainer}>
          <TouchableOpacity style={[styles.cardLeft, styles.shadowPropLeft]}>
            <View style={styles.cardShadow1}>
              <Image
                source={require('../Assets/PastedGraphic5.png')}
                style={styles.posticons}
              />
            </View>

            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 5,
                color: 'black',
              }}>
              Your Ideal Tutor is {'\n'} waiting
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('TutorSearch')}
              style={styles.SearchButton}>
              <Text style={{color: '#fff', alignSelf: 'center', fontSize: 14}}>
                Search Now
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.cardLeft, styles.shadowPropLeft]}>
            <View style={styles.cardShadow1}>
              <Image
                source={require('../Assets/PostRequire.png')}
                style={styles.postRighticons}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 10,
                color: 'black',
              }}>
              Post your requirement its Free
            </Text>
            <TouchableOpacity
              // onPress={() => navigation.navigate('TutorLanding')}
              style={styles.CheckinButton}>
              <Text
                style={{color: '#2F5597', alignSelf: 'center', fontSize: 14}}>
                Post it!
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <View style={styles.SliderContainer}>
          <ScrollView horizontal={true}>
            <TouchableOpacity
              style={[styles.cardSlider, styles.shadowPropSlider]}>
              <View style={styles.cardShadow}>
                <Image
                  source={require('../Assets/ChatTutors.png')}
                  style={styles.Slidericons}
                />
              </View>
              <Text style={styles.postText}>Chat with Tutors</Text>
              <Text style={styles.sliderText}>
                Chat with tutors and access their suitability.Sharing your
                tutions concerns with potential tutors...
                <TouchableOpacity>
                  <Text style={{color: '#2F5597'}}>See More</Text>
                </TouchableOpacity>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cardSlider, styles.shadowPropSlider]}>
              <View style={styles.cardShadow}>
                <Image
                  source={require('../Assets/OurTutors.png')}
                  style={styles.Slidericons}
                />
              </View>

              <Text style={styles.postText}>Our Tutors</Text>
              <Text style={styles.sliderText}>
                Chat with tutors and access their suitability.Sharing your
                tutions concerns with potential tutors...
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cardSlider, styles.shadowPropSlider]}>
              <View style={styles.cardShadow}>
                <Image
                  source={require('../Assets/OurService.png')}
                  style={styles.Slidericons}
                />
              </View>

              <Text style={styles.postText}>Our Services</Text>
              <Text style={styles.sliderText}>
                Chat with tutors and access their suitability.Sharing your
                tutions concerns with potential tutors...
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cardSlider, styles.shadowPropSlider]}>
              <View style={styles.cardShadow}>
                <Image
                  source={require('../Assets/MyActivities.png')}
                  style={styles.Slidericons}
                />
              </View>
              {/* <Image source={require('../Assets/MyActivities.png')}
                                style={styles.Slidericons}
                            /> */}
              <Text style={styles.postText}>My Activities</Text>
              <Text style={styles.sliderText}>
                Chat with tutors and access their suitability.Sharing your
                tutions concerns with potential tutors...
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cardSlider, styles.shadowPropSlider]}>
              <View style={styles.cardShadow}>
                <Image
                  source={require('../Assets/Promotion.png')}
                  style={styles.Slidericons}
                />
              </View>
              {/* <Image source={require('../Assets/Promotion.png')}
                                style={styles.Slidericons}
                            /> */}
              <Text style={styles.postText}>Promotions</Text>
              <Text style={styles.sliderText}>
                Chat with tutors and access their suitability.{'\n'}Sharing your
                tutions concerns with {'\n'} potential tutors...
              </Text>
            </TouchableOpacity>

            {/* <View style={styles.Slider}>
                            <Image source={require('../Assets/Promotion.png')}
                                style={styles.Slidericons}
                            />
                            <Text style={styles.postText}>Promotions</Text>
                            <Text style={styles.sliderText}>Chat with tutors and access their suitability.Sharing your tutions concerns with potential tutors...
                            <TouchableOpacity><Text style={{color:"#2F5597"}}>See More</Text></TouchableOpacity></Text>
                        </View> */}
          </ScrollView>
        </View>

        {/* <View style={styles.SearchContainer}>
          <View style={[styles.card, styles.shadowProp]}>
            <View style={styles.Boxone}>
              <View style={styles.cardShadow}>
                <Image
                  source={require('../Assets/Favourite.png')}
                  style={styles.postRighticons}
                />
              </View>
              <Text style={styles.searchText}>My Faves</Text>
            </View>
          </View>
        </View> */}

        {/* <View style={[styles.card, styles.shadowProp,]}>
                        <View style={styles.Boxone}>
                            <View style={styles.cardShadow}>
                                <Image source={require('../Assets/MyPost.png')}
                                    style={styles.postRighticons}
                                />
                            </View>
                            <Text style={styles.searchText}>My Posts</Text>

                        </View>
                    </View> */}
        {/* </View> */}

        <View style={styles.SearchContainer1}>
          <View style={[styles.card, styles.shadowProp]}>
            <View style={styles.Boxtwo}>
              <View style={styles.cardShadow}>
                <Image
                  source={require('../Assets/Booking.png')}
                  style={styles.postRighticons}
                />
              </View>
              <Text style={styles.searchText}>My Bookings</Text>
            </View>
          </View>

          <View style={[styles.card, styles.shadowProp]}>
            <View style={styles.Boxone}>
              <View style={styles.cardShadow}>
                <Image
                  source={require('../Assets/MyPost.png')}
                  style={styles.postRighticons}
                />
              </View>
              <Text style={styles.searchText}>My Posts</Text>
            </View>
          </View>

          {/* <View style={styles.Boxone}>

                        <Image source={require('../Assets/payments.png')}
                            style={styles.searchicons}
                        />
                        <Text style={styles.searchText}>Payments</Text>
                    </View> */}

          <View style={[styles.card, styles.shadowProp]}>
            <View style={styles.Boxtwo}>
              <View style={styles.cardShadow}>
                <Image
                  source={require('../Assets/Upcoming.png')}
                  style={styles.postRighticons}
                />
              </View>
              <Text style={styles.searchText}>Upcoming</Text>
            </View>
          </View>
        </View>

        <View style={styles.SearchContainer1}>
          <View style={[styles.card, styles.shadowProp]}>
            <View style={styles.Boxtwo}>
              <View style={styles.cardShadow}>
                <Image
                  source={require('../Assets/Booking.png')}
                  style={styles.postRighticons}
                />
              </View>
              <Text style={styles.searchText}>My Faves</Text>
            </View>
          </View>

          <View style={[styles.card, styles.shadowProp]}>
            <View style={styles.Boxone}>
              <View style={styles.cardShadow}>
                <Image
                  source={require('../Assets/MyPost.png')}
                  style={styles.postRighticons}
                />
              </View>
              <Text style={styles.searchText}>My Posts</Text>
            </View>
          </View>

          <View style={[styles.card, styles.shadowProp]}>
            <View style={styles.Boxtwo}>
              <View style={styles.cardShadow}>
                <Image
                  source={require('../Assets/Upcoming.png')}
                  style={styles.postRighticons}
                />
              </View>
              <Text style={styles.searchText}>Upcoming</Text>
            </View>
          </View>
        </View>

        {/* <View style={styles.SearchContainer}>
          <View style={[styles.card, styles.shadowProp]}>
            <View style={styles.Boxone}>
              <View style={styles.cardShadow}>
                <Image
                  source={require('../Assets/Favourite.png')}
                  style={styles.postRighticons}
                />
              </View>
              <Text style={styles.searchText}>My Faves</Text>
            </View>
          </View>
        </View> */}

        {/* <View style={[styles.card, styles.shadowProp]}>  
        <View>  
          <Text style={styles.heading}>  
            React Native Box Shadow (Shadow Props)  
          </Text>  
        </View>  
        <Text>  
Using the elevation style prop to apply box-shadow for iOS devices  
        </Text>  
      </View>  */}
      </ScrollView>
    </View>
  );
};

export default ClientLanding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  SearchContainer: {
    height: hp(15),
    width: wp(95),
    // alignItems: 'flex-end',
    marginRight: 0,
    // backgroundColor: 'green',
  },
  SearchContainer1: {
    height: hp(15),
    width: wp(100),
    flexDirection: 'row',
    justifyContent: 'space-around',
    //backgroundColor: 'red',
  },
  Boxone: {
    height: hp(11),
    width: wp(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Boxtwo: {
    height: hp(11),
    width: wp(23),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Headers: {
    height: hp(10),
    justifyContent: 'center',
    flexDirection: 'row',
    width: wp(100),
  },
  Slidericons: {
    alignSelf: 'center',
    height: 30,
    width: 30,
    marginBottom: 10,
  },
  toggleicons: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  SliderContainer: {
    marginTop: 10,
    height: hp(22),
    width: '100%',
  },
  searchText: {
    textAlign: 'center',
    marginTop: 5,
    color: 'black',
  },
  postText: {
    width: '90%',
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    alignSelf: 'center',
  },
  sliderText: {
    width: '90%',
    fontSize: 12,
    color: '#000',
    alignSelf: 'center',
  },
  postTextRight: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    bottom: 20,
    left: -10,
    alignSelf: 'center',
  },

  usercontainer: {
    height: hp(10),

    width: wp(100),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  usericons: {
    height: 50,
    width: 50,
  },
  searchicons: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  icons: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  posticons: {
    alignSelf: 'center',
    height: 77,
    width: 77,
  },
  postRighticons: {
    alignSelf: 'center',
    height: 30,
    width: 30,
  },
  sicons: {
    height: 20,
    width: 20,
  },
  HeadLeft: {
    width: wp(45),
    height: hp(10),
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  postContainer: {
    height: hp(20),
    flexDirection: 'row',
    width: wp(90),
    marginTop: 20,
    alignSelf: 'center',
  },
  postLeft: {
    backgroundColor: 'red',
    height: hp(18),

    width: wp(38),
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginRight: wp(6),
    borderWidth: 0.2,
  },
  postRight: {
    height: hp(20),
    backgroundColor: 'lightblue',
    width: wp(42),
    borderRadius: 20,
  },
  UserLeft: {
    width: wp(35),
    height: hp(10),
  },
  UserRight: {
    width: wp(55),
    height: hp(8),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeadRight: {
    width: wp(45),
    height: hp(10),
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  cardShadowLeft: {
    marginTop: 10,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    // borderWidth: 0.1,
    alignSelf: 'center',
    overflow: 'hidden',
    padding: 16,
    backgroundColor: 'white',
    // backgroundColor: 'red',
  },
  SearchButton: {
    backgroundColor: '#2F5597',
    width: wp(30),
    borderRadius: 20,
    padding: 3,
    alignSelf: 'center',
    marginTop: 10,
  },
  CheckinButton: {
    // backgroundColor: "#2F5597",
    // padding: 5,
    width: wp(30),
    alignSelf: 'center',
    marginBottom: 10,
  },

  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    height: hp(11),
    width: wp(23),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"red",
  },
  shadowProp: {
    shadowOffset: {width: 8, height: 10},
    shadowColor: '#2F5597',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
  },
  cardShadow: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    // borderWidth: 0.1,
    alignSelf: 'center',
    overflow: 'hidden',
    padding: 16,
    backgroundColor: 'white',
    // backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 5,
    elevation: 10,
  },
  cardShadow1: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    alignSelf: 'center',
    // overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    // backgroundColor: 'red',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 10,
      width: -5,
      height: -10,
      elevation: 10,
    },
    shadowOpacity: 0.18,
    shadowRadius: 5,
    elevation: 10,
  },
  cardLeft: {
    backgroundColor: 'white',
    // backgroundColor:"red",
    height: hp(20),
    width: wp(40),
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginRight: wp(8),
    // borderWidth: 0.2,
    // borderColor: "lightgrey",
  },
  shadowPropLeft: {
    shadowOffset: {width: 8, height: 10},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
  },
  cardRight: {
    backgroundColor: 'white',
    justifyContent: 'center',
    // backgroundColor:"red",

    height: hp(20),
    width: wp(40),
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginRight: wp(6),
    // borderWidth: 0.2,
  },
  shadowPropRight: {
    shadowOffset: {width: 8, height: 10},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
  },
  cardSlider: {
    // alignSelf: "flex-start",
    // borderWidth: 0.2,
    height: hp(19),
    backgroundColor: 'white',
    width: wp(55),
    marginLeft: 15,
    marginRight: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowPropSlider: {
    shadowOffset: {width: 8, height: 15},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
  },
});
