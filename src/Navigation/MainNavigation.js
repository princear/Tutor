import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import Register from '../screens/Register';
import IntroScreen from '../screens/IntroScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';
import Login from '../screens/Login';
import ClientLanding from '../screens/ClientLanding';
import DrawerContent from '../screens/Drawer';
import DrawerContentThird from '../screens/DrawerThird'
import DrawerTwo from '../screens/DrawerTwo';
import TutorLanding from '../screens/TutorLanding';
import TutorSearch from '../screens/TutorSearch';
LogBox.ignoreLogs(['EventEmitter.removeListener'])
import { Image, View, TouchableOpacity, Text, ScrollView, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
enableScreens();
import { useIsFocused, useNavigation } from '@react-navigation/native';
import ClientLandingBefore from '../screens/ClientLandingBefore';
import { Provider } from 'react-redux';
import store from '../Redux/Store/index'
import OTPScreen from '../screens/OTPScreen';
import YourProfle from '../screens/YourProfile';
import PersonalInfo from '../screens/PersonalInfo';
import OurTutor from '../screens/OurTutor';
import TutorSearchProfile from '../screens/TutorSearchProfile'
import LetsBook from '../screens/LetsBook'
import StudentBookingInfo from '../screens/StudentBookingInfo'
import StudentBookingDetails from '../screens/StudentBookingDetails';
import TutorQualification from '../screens/TutorQualification';
import TutionSchedulePicker from '../screens/TutionSchedulePicker'
import BookingInformationConfirmation from '../screens/BookingInformationConfirmation'
import MapScreen from '../screens/MapScreen';
import AcademicInfo from '../screens/AcademicInfo'
import HomeTution from '../screens/HomeTution';
import TutoringDetail from '../screens/TutoringDetail';
import WordYou from '../screens/WordYou';
import Messages from '../screens/Messages';
import Tab3 from '../screens/Tab3';
import Tab4 from '../screens/Tab4';





const SignStack = createStackNavigator();

function SignInScreen() {

  return (

    <SignStack.Navigator
    //  initialRouteName='AuthCheck'
    >

      <Stack.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={{
          title: 'Chats',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      {/* <Stack.Screen
        name="TutorSearch"
        component={TutorSearch}
        options={{
          title: 'AuthCheck',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      /> */}


      {/* <Stack.Screen
        name="TutorLanding"
        component={TutorLanding}
        options={{
          title: 'AuthCheck',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      /> */}

      {/* <Stack.Screen
        name="ClientLanding"
        component={ClientLanding}
        options={{
          title: 'AuthCheck',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />


 */}

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'AuthCheck',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />


      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{
          title: 'OTPScreen',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'AuthCheck',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />


      <Stack.Screen
        name="ClientLandingBefore"
        component={ClientLandingBefore}
        options={{
          title: 'AuthCheck',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />


{/* <Stack.Screen
        name="LetsBook"
        component={LetsBook}
        options={{
          title: 'AuthCheck',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      /> */}


<Stack.Screen
        name="StudentBookingInfo"
        component={StudentBookingInfo}
        options={{
          title: 'AuthCheck',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

<Stack.Screen
        name="StudentBookingDetails"
        component={StudentBookingDetails}
        options={{
          title: 'AuthCheck',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

<Stack.Screen
        name="TutorQualification"
        component={TutorQualification}
        options={{
          title: 'AuthCheck',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

<Stack.Screen
        name="TutionSchedulePicker"
        component={TutionSchedulePicker}
        options={{
          title: 'AuthCheck',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

<Stack.Screen
        name="BookingInformationConfirmation"
        component={BookingInformationConfirmation}
        options={{
          title: 'AuthCheck',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />


    </SignStack.Navigator>
  )
}



function MyTabBar({ state, descriptors, navigation }) {

  return (
    <View
      style={{

        flexDirection: 'row',
        // position:'absolute',
        bottom: 0,
        alignSelf: 'center',
        borderTopColor: '#E5E5E5',
        borderTopWidth: 1,
        width: wp('110%'),
        backgroundColor: '#fff',
        height: 50

      }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;


        const isFocused = state.index === index;
        let showlabel = "";
        let iconNm = "";

        if (label == "TutorLanding") {
          // showlabel = "Dashboard";
          iconNm = require('../Assets/Settings.png');


          // {
          //   isFocused ?
          //     iconNm = require('../Assets/bell.png')
          //     :
          //     iconNm = require('../Assets/bell.png')
          // }

        }




        if (label == "Bookmark") {
          // showlabel = "Settings";
          iconNm = require('../Assets/Chats.png');


          // {
          //   isFocused ?

          //     iconNm = require('../Assets/bell.png')

          //     :
          //     iconNm = require('../Assets/bell.png')
          // }
        }



        if (label == "ClientLanding") {
          //showlabel = "Home";
          iconNm = require('../Assets/Bookings.png');

          // {
          //   isFocused ?
          //     iconNm = require('../Assets/bell.png')
          //     :
          //     iconNm = require('../Assets/bell.png')
          // }
        }

        if (label == "FirstStacknavigation") {
          //showlabel = "Home";
          iconNm = require('../Assets/Settings.png');

          // {
          //   isFocused ?
          //     iconNm = require('../Assets/bell.png')
          //     :
          //     iconNm = require('../Assets/bell.png')
          // }
        }

        // if (label == "bell") {
        //     showlabel = "Notification";
        //     iconNm= label;
        // }

        // if (label == "envelope") {
        //     showlabel = "Contact us";
        //     iconNm = label
        // }


        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (

          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: 'center' }}
            key={route.key}
          >
            {/* <Icon size={24} name={iconNm} color={isFocused ? '#FFFFFF' : '#d3d3d3'} />  */}
            <View style={{ flexDirection: 'row', padding: 8, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

              <Image source={iconNm} style={{ width: 30, height: 30, }} />


              {/* <Text style={{ alignSelf: 'center', color: isFocused ? '#000' : '#0008', fontSize: 13,fontWeight:'bold' }}>
                      {showlabel}
                  </Text> */}
            </View>
          </TouchableOpacity>

        );
      })}
    </View>
  );
}




const SecondStack = createStackNavigator();
function SecondStacknavigation() {

  return (
    <SecondStack.Navigator screenOptions={{ headerShown: false }} tabBar={props => <MyTabBar {...props} />} >

      <SecondStack.Screen
        name="ClientLanding"
        component={ClientLanding}
        options={{
          title: 'ClientLanding',
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerShown: false,

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <SecondStack.Screen

        name="TutorLanding"
        component={TutorLanding}
        options={{
          title: 'TutorLanding',

          headerStyle: {
            backgroundColor: '#e85b3d',

          },

          headerShown: false,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <SecondStack.Screen
        name="TutorSearch"
        component={TutorSearch}
        options={{
          title: 'TutorSearch',
          headerStyle: {

            backgroundColor: '#e85b3d',

          },
          headerShown: false,

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

<SecondStack.Screen
        name="TutorSearchProfile"
        component={TutorSearchProfile}
        options={{
          title: 'AuthCheck',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <SecondStack.Screen

        name="LetsBook"
        component={LetsBook}
        options={{
          title: 'AuthCheck',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      
      <SecondStack.Screen
        name="OurTutor"
        component={OurTutor}
        options={{
          title: 'OurTutor',
          headerStyle: {

            backgroundColor: '#e85b3d',

          },
          headerShown: false,

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <SecondStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: 'MapScreen',
          headerStyle: {

            backgroundColor: '#e85b3d',

          },
          headerShown: false,

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      



    </SecondStack.Navigator>
  )
}




const FirstStack = createStackNavigator();
function FirstStacknavigation() {

  return (
    <FirstStack.Navigator
      screenOptions={{ headerShown: false }} tabBar={props => <MyTabBar {...props} />} >

      <FirstStack.Screen

        name="YourProfle"
        component={YourProfle}
        options={{
          title: 'YourProfle',

          headerStyle: {
            backgroundColor: '#e85b3d',

          },

          headerShown: false,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <FirstStack.Screen

        name="PersonalInfo"
        component={PersonalInfo}
        options={{
          title: 'PersonalInfo',

          headerStyle: {
            backgroundColor: '#e85b3d',

          },

          headerShown: false,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />


      <FirstStack.Screen

        name="AcademicInfo"
        component={AcademicInfo}
        options={{
          title: 'AcademicInfo',

          headerStyle: {
            backgroundColor: '#e85b3d',

          },

          headerShown: false,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <FirstStack.Screen

        name="HomeTution"
        component={HomeTution}
        options={{
          title: 'HomeTution',

          headerStyle: {
            backgroundColor: '#e85b3d',

          },

          headerShown: false,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <FirstStack.Screen

        name="TutoringDetail"
        component={TutoringDetail}
        options={{
          title: 'TutoringDetail',

          headerStyle: {
            backgroundColor: '#e85b3d',

          },

          headerShown: false,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <FirstStack.Screen

        name="WordYou"
        component={WordYou}
        options={{
          title: 'WordYou',

          headerStyle: {
            backgroundColor: '#e85b3d',

          },

          headerShown: false,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />


    </FirstStack.Navigator>
  )
}

const HomeStack = createBottomTabNavigator();
function MainNavigation1() {

  return (
    <HomeStack.Navigator initialRouteName='ClientLanding' tabBar={props => <MyTabBar {...props} />} >
      {/* <Stack.Screen
        name="ClientLandingBefore"
        component={ClientLandingBefore}
        options={{
          title: 'AuthCheck',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      /> */}


      <HomeStack.Screen
        name="SecondStacknavigation"
        component={SecondStacknavigation}
        options={{
          title: 'ClientLanding',
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerShown: false,

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />


      <HomeStack.Screen

        name="Messages"
        component={Messages}
        options={{
          title: 'Bookmark',

          headerStyle: {
            backgroundColor: '#e85b3d',

          },

          headerShown: false,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <HomeStack.Screen
        name="Tab3"
        component={Tab3}
        options={{
          title: 'ClientLanding',
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerShown: false,

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />



      <HomeStack.Screen
        name="Tab4"
        component={Tab4}
        options={{
          title: 'TutorLanding',
          headerStyle: {

            backgroundColor: '#e85b3d',

          },
          headerShown: false,

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />









    </HomeStack.Navigator>


  )
}









const HomeStack1 = createBottomTabNavigator();
function MainNavigation2() {

  return (
    <HomeStack1.Navigator
      // initialRouteName='Home2'
      tabBar={props => <MyTabBar {...props} />} >
      {/* <Stack.Screen
        name="ClientLandingBefore"
        component={ClientLandingBefore}
        options={{
          title: 'AuthCheck',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      /> */}

      <HomeStack1.Screen

        name="FirstStacknavigation"
        component={FirstStacknavigation}
        options={{
          // title: 'YourProfle',

          headerStyle: {
            backgroundColor: '#e85b3d',

          },

          headerShown: false,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />


      <HomeStack1.Screen

        name="Messages"
        component={Messages}
        options={{
          title: 'Bookmark',

          headerStyle: {
            backgroundColor: '#e85b3d',

          },

          headerShown: false,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <HomeStack1.Screen
        name="Tab3"
        component={Tab3}
        options={{
          title: 'ClientLanding',
          headerStyle: {
            backgroundColor: '#e85b3d',
          },

          headerShown: false,

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />



      <HomeStack1.Screen
        name="Tab4"
        component={Tab4}
        options={{
          title: 'TutorLanding',
          headerStyle: {

            backgroundColor: '#e85b3d',

          },
          headerShown: false,

          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />


    </HomeStack1.Navigator>


  )
}


const Drawer = createDrawerNavigator();

function MyDrawer({ navigation, route }) {

  return (
    <Drawer.Navigator defaultStatus="closed" screenOptions={{
      //  drawerPosition: 'left',
      headerShown: false,
      drawerActiveBackgroundColor: "#FAFAFC",
    }}
      //initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={MainNavigation1} />
      {/* <Drawer.Screen name="Home2" component={MainNavigation2} /> */}

      {/* <Drawer.Screen name="Home" component={MainNavigation1} /> */}

    </Drawer.Navigator>
  );

}

const Drawer3 = createDrawerNavigator();

function MyDrawer3({ navigation, route }) {

  return (
    <Drawer3.Navigator defaultStatus="closed" screenOptions={{
      //  drawerPosition: 'left',
      headerShown: false,
      drawerActiveBackgroundColor: "#FAFAFC",
    }}
      //initialRouteName="Home"
      drawerContent={props => <DrawerContentThird {...props} />}
    >
      <Drawer3.Screen name="Home3" component={SignInScreen} />
      {/* <Drawer.Screen name="Home2" component={MainNavigation2} /> */}

      {/* <Drawer.Screen name="Home" component={MainNavigation1} /> */}

    </Drawer3.Navigator>
  );

}


const Drawer1 = createDrawerNavigator();

function MyDrawer2({ navigation, route }) {

  return (
    <Drawer1.Navigator defaultStatus="closed" screenOptions={{
      //  drawerPosition: 'left',
      headerShown: false,
      drawerActiveBackgroundColor: "#FAFAFC",
    }}
      //initialRouteName="Home"
      drawerContent={props => <DrawerTwo {...props} />}
    >

      <Drawer.Screen name="Home2" component={MainNavigation2} />

      {/* <Drawer.Screen name="Home" component={MainNavigation1} /> */}

    </Drawer1.Navigator>
  );

}


const Stack = createNativeStackNavigator();

function MainNavigation() {



  return (
    <Provider store={store}>
      <NavigationContainer>

        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          
          <Stack.Screen name="home" component={MyDrawer3} />
          <Stack.Screen name="Auth2" component={MyDrawer2} />

          <Stack.Screen name="Auth" component={MyDrawer} />


          {/* <Stack.Screen name="AuthCheck" component={AuthCheck} />  */}

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default MainNavigation;