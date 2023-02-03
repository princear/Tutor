import React, { useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    Button,
    TouchableOpacity, Modal, FlatList
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { TextInput } from 'react-native-gesture-handler';
// import { useIsFocused, useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

const AcademicInfo = () => {
    const navigation = useNavigation();

    const [showemail, setShowEmail] = React.useState('Qualification');
    



    const [selectQualification, setselectQualification] = useState(false);
    const [details, setDetails] = useState(false);

    const [show, setShow] = useState(false);





    const [subjects, setSubjects] = useState([
        {
            id: 1,
            courses: 'A Level',
        },
        {
            id: 2,
            courses: 'IB (Diploma)',

        },
        {
            id: 3,
            courses: 'Poly Diploma',

        },
        {
            id: 4,
            courses: 'University Undergraduate'

        },
        {
            id: 5,
            courses: 'University Graduate',

        },
        {
            id: 6,
            courses: 'Ex School Teacher'
        },
        {
            id: 7,
            courses: 'Current School Teacher',

        }


    ])


    const [selectedCourse, setSelectedCourse] = useState('')
    const [national, setNational] = useState('')
    const [school, setSchool] = useState('')
    const [grade, setGrade] = useState('')
    const [subject, setSubject] = useState('')
    const [courses, setCourses] = useState('')
    const [year, setYear] = useState('')

    const [historyModal, setHistoryModal] = useState(false);
    const [historyModal1, setHistoryModal1] = useState(false);


    const [state, setState] = useState('Select One Option')
    const state_list = [
        { label: 'Select One Option', value: 'Select One Option' },
        { label: 'GCE O Level', value: 'GCE O Level' },
        { label: 'GCE A Level', value: 'GCE A Level' },
        { label: 'IB (Diploma)', value: 'IB (Diploma)' },
        { label: 'Polytechnic Diploma', value: 'Polytechnic Diploma' },
        { label: 'IGCSE', value: 'IGCSE' },
        { label: 'Others', value: 'Others' },

    ];

    const [Experience, setExperience] = useState('Select One Option')
    const Experience_List = [
        { label: 'Select One Option', value: 'Select One Option' },
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '10', value: '10' },
        { label: '11', value: '11' },
        { label: '12', value: '12' },
        { label: '13', value: '13' },
        { label: '14', value: '14' },
        { label: '15', value: '15' },
        { label: '16', value: '16' },
        { label: '17', value: '17' },
        { label: '18', value: '18' },
        { label: '19', value: '19' },
        { label: '20', value: '20' },
        { label: '21', value: '21' },
        { label: '22', value: '22' },
        { label: '23', value: '23' },
        { label: '24', value: '24' },
        { label: '25', value: '25' },

    ];


    const saveacademicinfo = () => {

        console.log('LLLLLL', selectedCourse, school, courses, year)
        navigation.navigate('YourProfle')

    }

    return (
        <View style={styles.container}>
            {/* <View style={{flex:0.9}}> */}
            <View style={styles.Headers}>
                <View style={styles.HeadLeft}>
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                    >
                        <Image source={require('../Assets/baricon.png')}
                            style={styles.icons}
                        />

                    </TouchableOpacity>

                </View>
                <View style={styles.HeadRight}>
                    <Image source={require('../Assets/bell.png')}
                        style={styles.icons}
                    />

                    <Image source={require('../Assets/search.png')}
                        style={styles.icons}
                    />
                    <Image source={require('../Assets/chat.png')}
                        style={styles.icons}
                    />
                </View>

            </View>

            <View style={styles.moblieSec}>


                <TouchableOpacity style={[styles.mobiletoch, { backgroundColor: showemail == 'Qualification' ? '#2F5597' : 'lightgrey' }]}
                    onPress={() => setShowEmail('Qualification')}
                >
                    <Text style={[styles.ButtonText, { color: showemail == 'Qualification' ? '#fff' : '#000' }]}>Qualification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.emailtoch, { backgroundColor: showemail == 'History' ? '#2F5597' : 'lightgrey' }]}
                    onPress={() => setShowEmail('History')}
                >
                    <Text style={[styles.ButtonText, { color: showemail == 'History' ? '#fff' : '#000' }]}>History</Text>
                </TouchableOpacity>

            </View>



            {
                showemail == 'Qualification' &&

                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.9 }}>

                        <TouchableOpacity onPress={() => setselectQualification(true)} style={{ borderWidth: 1, borderColor: 'lightgrey', height: hp(8), paddingHorizontal: wp(2), width: wp(90), marginLeft: wp(5) }}>
                            <Text style={{ color: 'lightgrey', fontSize: 14, paddingTop: hp(.5) }}>Select your Current Qualification. You can add detail after selection</Text>
                        </TouchableOpacity>

                        {
                            selectedCourse ?

                                <>
                                    <TouchableOpacity style={{ height: hp(6), borderWidth: 1, borderColor: 'lightgrey', marginLeft: wp(5), alignItems: 'center', justifyContent: 'space-between', width: wp(90), flexDirection: 'row', backgroundColor: '#fff', marginTop: hp(2), }}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                            <Text style={{ color: '#000', fontSize: 13, marginLeft: wp(4) }}>{selectedCourse}</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => setselectQualification(true)} style={{ backgroundColor: 'lightblue', height: hp(6), width: wp(15), alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require('../Assets/Pencil.png')} style={{ height: hp(3), width: wp(5), }} />

                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setDetails(true)} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: wp(5), marginTop: hp(2) }}>
                                        <View style={{ backgroundColor: 'blue', height: hp(5), width: wp(10), borderRadius: 4, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 25, color: '#fff', fontWeight: '800' }}>+</Text>
                                        </View>
                                        <Text style={{ fontSize: 15, color: '#2F5597', fontWeight: '800', marginLeft: wp(2) }}>Add Detail (optional)</Text>
                                    </TouchableOpacity>


                                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: wp(5), backgroundColor: '#fff', elevation: 10, height: hp(12), marginTop: hp(2) }}>
                                        <View style={{ marginLeft: wp(3) }}>
                                            <Text style={{ color: '#000', fontSize: 14, }}>Current school / {school}</Text>
                                            <Text style={{ color: '#000', fontSize: 14, }}>Year in Service / {Experience}</Text>
                                            {/* <Text style={{ color: '#000', fontSize: 14, }}>{year}</Text> */}
                                        </View>
                                        <View >
                                            <TouchableOpacity onPress={() => setDetails(true)} style={{ backgroundColor: 'lightblue', borderRadius: 6, height: hp(6), width: wp(14), alignItems: 'center', justifyContent: 'center' }}>
                                                <Image source={require('../Assets/Pencil.png')}
                                                    style={{ height: hp(3), width: wp(5) }}
                                                />
                                            </TouchableOpacity>
                                            <View style={{ backgroundColor: '#2F5597', borderRadius: 6, height: hp(6), width: wp(14), alignItems: 'center', justifyContent: 'center',marginTop:5 }}>
                                                <Image source={require('../Assets/delete.png')}
                                                    style={{ height: hp(4), width: wp(7) ,}}
                                                />
                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                </> : null
                        }


                        <Modal animationType="slide"
                            transparent={true}
                            visible={selectQualification}
                            onRequestClose={() => {
                                setselectQualification(false);
                            }}>
                            <View style={styles.modalWrapper2}>

                                <View style={styles.modalWrapp}>

                                    <View style={{ alignItems: 'flex-end', marginRight: wp(4), marginTop: hp(2) }}>

                                        {
                                            selectedCourse ? <TouchableOpacity onPress={() => setselectQualification(false)} style={styles.tickWrapper}>
                                                <Image source={require('../Assets/right.png')} style={styles.tickImage} />
                                            </TouchableOpacity> : <View style={{ marginTop: hp(4) }} />
                                        }

                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: 'grey', fontSize: 20, fontWeight: '800' }}>Select Qualification</Text>
                                    </View>
                                    <View style={{ marginLeft: wp(5), marginTop: hp(2) }}>
                                        <Text style={{ color: '#000', fontSize: 18, fontWeight: '800' }}>Select one option</Text>
                                    </View>

                                    <FlatList
                                        data={subjects}
                                        numColumns={1}
                                        keyExtractor={(item, index) => index}
                                        // showsVerticalScrollIndicator={true}
                                        renderItem={({ item, index }) => (
                                            <TouchableOpacity key={item.id} onPress={() => setSelectedCourse(item.courses)} style={{ height: hp(4.5), alignItems: 'center', width: wp(90), flexDirection: 'row', backgroundColor: item.courses == selectedCourse ? '#2F5597' : '#fff', marginTop: hp(2), }}>
                                                <Text style={{ color: selectedCourse == item.courses ? '#fff' : '#000', fontSize: 13, marginLeft: wp(4) }}>{item.courses}</Text>
                                            </TouchableOpacity>
                                        )}
                                    />
                                </View>
                            </View>

                        </Modal >

                        <Modal animationType="slide"
                            transparent={true}
                            visible={details}
                            onRequestClose={() => {
                                setDetails(false);
                            }}>
                            <View style={styles.modalWrapper2}>

                                <View style={styles.modalWrapp}>

                                    <View style={{ flexDirection: 'row', marginTop: hp(2), justifyContent: 'space-between', marginHorizontal: wp(5) }}>
                                        <TouchableOpacity onPress={() => setDetails(false)} style={styles.crossImageWrapper}>
                                            <Image source={require('../Assets/closeingray.png')} style={styles.crossImage} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.tickWrapper}>
                                            <Image source={require('../Assets/right.png')} style={styles.tickImage} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: 'grey', fontSize: 20, fontWeight: '800' }}>Add Details</Text>
                                    </View>

                                    <View style={{ position: 'absolute', top: hp(12), left: wp(10), zIndex: 999, backgroundColor: '#fff' }}>
                                        <Text style={{ color: '#000' }}>   Name of last / Current School   </Text>
                                    </View>

                                    <View style={{ borderWidth: 1, marginTop: hp(3), flexDirection: 'row', alignItems: 'center', borderColor: 'lightgrey', marginHorizontal: wp(5), height: hp(6), borderRadius: 4, }}>
                                        <TextInput
                                            placeholder='National University of Singapore'
                                            placeholderTextColor={'lightgrey'}
                                            style={{ marginLeft: wp(2), width: wp(75) }}
                                            value={school}
                                            onChangeText={(text) => setSchool(text)}
                                        />

                                        <Image source={require('../Assets/School.png')}
                                            style={{ height: hp(3), width: wp(6) }}
                                        />
                                    </View>

                                    <View style={{ position: 'absolute', top: hp(21), left: wp(10), zIndex: 999, backgroundColor: '#fff' }}>
                                        <Text style={{ color: '#000' }}>   Year In Service   </Text>
                                    </View>

                                    <View style={{ borderWidth: 1, marginTop: hp(4), flexDirection: 'row', alignItems: 'center', borderColor: 'lightgrey', marginHorizontal: wp(5), height: hp(6), borderRadius: 4, }}>


                                        <RNPickerSelect
                                            onValueChange={(value) => setExperience(value)}
                                            items={Experience_List}
                                            value={Experience}
                                            placeholder={{}}
                                        >
                                            <View style={{ flexDirection: 'row', width: wp(77), justifyContent: 'space-between', paddingHorizontal: wp(4) }}>
                                                {Experience_List.map(
                                                    (item) =>
                                                        item.value === Experience && (
                                                            <Text
                                                                key={item.value}
                                                                style={{ fontSize: 13, color: '#000',marginTop:10 }}>
                                                                {item.label}
                                                            </Text>
                                                        )
                                                )}
                                                <Image source={require('../Assets/downbutton.png')} style={{ height: hp(3), width: wp(6) ,marginTop:hp(1)}} />

                                            </View>
                                        </RNPickerSelect>
                                        <Image source={require('../Assets/Course.png')}
                                            style={{ height: hp(3), width: wp(6) }}
                                        />
                                    </View>
                                    {/* <View style={{ position: 'absolute', top: hp(22), left: wp(10), zIndex: 999, backgroundColor: '#fff' }}>
                                        <Text style={{ color: '#000' }}>   Course   </Text>
                                    </View> */}

                                    {/* <View style={{ borderWidth: 1, marginTop: hp(4), flexDirection: 'row', alignItems: 'center', borderColor: 'lightgrey', marginHorizontal: wp(5), height: hp(6), borderRadius: 4, }}>
                                        <TextInput
                                            placeholder='Engineering'
                                            placeholderTextColor={'lightgrey'}
                                            style={{ marginLeft: wp(2), width: wp(75) }}
                                            value={courses}
                                            onChangeText={(text) => setCourses(text)} />

                                        <Image source={require('../Assets/Course.png')}
                                            style={{ height: hp(3), width: wp(6) }}
                                        />
                                    </View> */}
                                    {/* <View style={{ position: 'absolute', bottom: hp(13), left: wp(10), zIndex: 999, backgroundColor: '#fff' }}>
                                        <Text style={{ color: '#000' }}>   Year/Graduation   </Text>
                                    </View> */}

                                    {/* <View style={{ borderWidth: 1, marginTop: hp(4), flexDirection: 'row', alignItems: 'center', borderColor: 'lightgrey', marginHorizontal: wp(5), height: hp(6), borderRadius: 4, }}>
                                        <TextInput
                                            placeholder='2018'
                                            placeholderTextColor={'lightgrey'}
                                            style={{ marginLeft: wp(2), width: wp(75) }}
                                            value={year}
                                            onChangeText={(text) => setYear(text)} />

                                        <Image source={require('../Assets/Year.png')}
                                            style={{ height: hp(3), width: wp(6) }}
                                        />
                                    </View> */}

                                    <View style={{ alignItems: 'flex-end', marginRight: wp(5), marginTop: hp(1.5) }}>
                                        <Text style={{ color: 'lightgrey', fontSize: 14, }}>up to 35 characters per block</Text>
                                    </View >
                                </View>
                            </View>

                        </Modal >

                    </View>
                    <View style={{ flex: 0.1 ,flexDirection:"row",justifyContent:"space-between"}}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}
                        style={styles.circleArrow}>
                            <Image style={{transform: [{ rotate: '180deg' }]}}
                             source={require('../Assets/circleArrow.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setShowEmail('History')}
                        style={styles.circleArrow}>
                            <Image
                             source={require('../Assets/circleArrow.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            }
            {
                showemail == 'History' &&
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.9 }}>
                        <TouchableOpacity  onPress = {()=>  setHistoryModal(true)}style={{ borderWidth: 1, borderColor: 'lightgrey', height: hp(8), paddingHorizontal: wp(2), width: wp(90), marginLeft: wp(5) }}>
                            <Text style={{ color: 'lightgrey', fontSize: 14, paddingTop: hp(.5) }}>You can list the School Name, Exam & Results in this section</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setHistoryModal(true)} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: wp(5), marginTop: hp(2) }}>
                            <View style={{ backgroundColor: 'blue', height: hp(5), width: wp(10), borderRadius: 4, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 25, color: '#fff', fontWeight: '800' }}>+</Text>
                            </View>
                            <Text style={{ fontSize: 15, color: '#2F5597', fontWeight: '800', marginLeft: wp(2) }}>Add History (optional)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: wp(5), backgroundColor: '#fff', elevation: 10, height: hp(12), marginTop: hp(2) }}>
                            <View style={{ marginLeft: wp(3) }}>
                                <Text style={{ color: '#000', fontSize: 14, }}>{school}</Text>
                                <Text style={{ color: '#000', fontSize: 14, }}>{state}</Text>
                                <Text style={{ color: '#000', fontSize: 14, }}>{subject}</Text>
                                <Text style={{ color: '#000', fontSize: 14, }}>{grade}</Text>
                            </View>
                            <View >
                                <TouchableOpacity onPress={() => setDetails(true)} style={{ backgroundColor: 'lightblue', borderRadius: 6, height: hp(6), width: wp(14), alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../Assets/Pencil.png')}
                                        style={{ height: hp(3), width: wp(6) }}
                                    />
                                </TouchableOpacity>
                                <View style={{ backgroundColor: '#2F5597',marginTop:5, borderRadius: 6, height: hp(6), width: wp(14), alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../Assets/delete.png')}
                                        style={{ height: hp(4), width: wp(7) }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <Modal animationType="slide"
                            transparent={true}
                            visible={historyModal}
                            onRequestClose={() => {
                                setHistoryModal(false);
                            }}>
                            <View style={styles.modalWrapper2}>

                                <View style={styles.modalWrapp}>

                                    <View style={{ flexDirection: 'row', marginTop: hp(2), justifyContent: 'space-between', marginHorizontal: wp(5) }}>
                                        <TouchableOpacity onPress={() => setHistoryModal(false)} style={styles.crossImageWrapper}>
                                            <Image source={require('../Assets/closeingray.png')} style={styles.crossImage} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.tickWrapper}>
                                            <Image source={require('../Assets/right.png')} style={styles.tickImage} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: 'grey', fontSize: 20, fontWeight: '800' }}>Add History</Text>
                                    </View>

                                    <View style={{ position: 'absolute', top: hp(12), left: wp(10), zIndex: 999, backgroundColor: '#fff' }}>
                                        <Text style={{ color: '#000' }}>   Name of School   </Text>
                                    </View>

                                    <View style={{ borderWidth: 1, marginTop: hp(3), flexDirection: 'row', alignItems: 'center', borderColor: 'lightgrey', marginHorizontal: wp(5), height: hp(6), borderRadius: 4, }}>
                                        <TextInput
                                            placeholder='Pioneer Junior College'
                                            placeholderTextColor={'lightgrey'}
                                            style={{ marginLeft: wp(2), width: wp(75) }}
                                            value={school}
                                            onChangeText={(text) => setSchool(text)}
                                        />

                                        <Image source={require('../Assets/School.png')}
                                            style={{ height: hp(3), width: wp(6) }}
                                        />
                                    </View>
                                    <View style={{ position: 'absolute', top: hp(21), left: wp(10), zIndex: 999, backgroundColor: '#fff' }}>
                                        <Text style={{ color: '#000' }}>   Exam   </Text>
                                    </View>

                                    <View style={{ borderWidth: 1, marginTop: hp(4), flexDirection: 'row', alignItems: 'center', borderColor: 'lightgrey', marginHorizontal: wp(5), height: hp(6), borderRadius: 4, }}>


                                        <RNPickerSelect
                                            onValueChange={(value) => setState(value)}
                                            items={state_list}
                                            value={state}
                                            placeholder={{}}
                                        >
                                            <View style={{ flexDirection: 'row', width: wp(77), justifyContent: 'space-between', paddingHorizontal: wp(4) }}>
                                                {state_list.map(
                                                    (item) =>
                                                        item.value === state && (
                                                            <Text
                                                                key={item.value}
                                                                style={{ fontSize: 13, color: '#000',marginTop:10 }}>
                                                                {item.label}
                                                            </Text>
                                                        )
                                                )}
                                                <Image source={require('../Assets/downbutton.png')} style={{ height: hp(3), width: wp(6) ,marginTop:hp(1)}} />

                                            </View>
                                        </RNPickerSelect>
                                        <Image source={require('../Assets/Exam.png')}
                                            style={{ height: hp(3), width: wp(6) }}
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View>
                                            <View style={{ position: 'absolute', top: hp(1.5), left: wp(10), zIndex: 999, backgroundColor: '#fff' }}>
                                                <Text style={{ color: '#000' }}>   Subject   </Text>
                                            </View>

                                            <View style={{ borderWidth: 1, marginTop: hp(3), flexDirection: 'row', alignItems: 'center', marginLeft: wp(5), borderColor: 'lightgrey', width: wp(45), height: hp(6), borderRadius: 4, }}>
                                                <TextInput
                                                    placeholder='Subject'
                                                    placeholderTextColor={'lightgrey'}
                                                    style={{ marginLeft: wp(2), width: wp(34) }}
                                                    value={subject}
                                                    onChangeText={(text) => setSubject(text)}
                                                />

                                                <Image source={require('../Assets/Course.png')}
                                                    style={{ height: hp(3), width: wp(6) }}
                                                />
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ position: 'absolute', top: hp(1.5), left: wp(10), zIndex: 999, backgroundColor: '#fff' }}>
                                                <Text style={{ color: '#000' }}>   Grade   </Text>
                                            </View>

                                            <View style={{ borderWidth: 1, marginTop: hp(3), flexDirection: 'row', alignItems: 'center', marginLeft: wp(3), borderColor: 'lightgrey', width: wp(35), height: hp(6), borderRadius: 4, }}>
                                                <TextInput
                                                    placeholder='Grade'
                                                    placeholderTextColor={'lightgrey'}
                                                    style={{ marginLeft: wp(2), width: wp(22) }}
                                                    value={grade}
                                                    onChangeText={(text) => setGrade(text)}
                                                />

                                                <Image source={require('../Assets/Grade.png')}
                                                    style={{ height: hp(3), width: wp(6) }}
                                                />
                                            </View>
                                            <TouchableOpacity>
                                                <Image source={require('../Assets/Deletes.png')}
                                                    style={{ height: hp(3), width: wp(6), marginTop: hp(3) ,marginLeft:wp(1)}}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <TouchableOpacity onPress={() => setHistoryModal(true)} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: wp(5), marginTop: hp(2) }}>
                                        <View style={{ backgroundColor: 'blue', height: hp(5), width: wp(10), borderRadius: 4, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 25, color: '#fff', fontWeight: '800' }}>+</Text>
                                        </View>
                                        <Text style={{ fontSize: 15, color: '#2F5597', fontWeight: '800', marginLeft: wp(2) }}>Add Result (optional)</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>

                        </Modal >
                    </View>
                    <View style={{ flex: 0.1, paddingBottom: hp(5) }}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}
                        style={styles.circleArrow}>
                            <Image  style={{transform: [{ rotate: '180deg' }]}}
                            source={require('../Assets/circleArrow.png')} />
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={() => saveacademicinfo()}
                                // onPress={() => navigation.navigate('YourProfle', {
                                //     complete: 'Academiccomplete'
                                // })}
                                style={{ backgroundColor: '#2F5597', borderRadius: 25, height: hp(6), width: wp(60), alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#fff', fontSize: 14 }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            }

        </View>

    )
}

export default AcademicInfo;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // backgroundColor:'pink'
        // padding: 10,


    },
    Headers: {
        // backgroundColor: "red",
        height: hp(10),
        justifyContent: "center",
        flexDirection: "row",
        width: wp(100),
        marginTop:hp(2)
    },


    Text1: {
        color: '#2F5597',
        fontSize: 24,
        fontWeight: '700'
    },


    icons: {

        height: 30,
        width: 30,
        marginRight: 10
    },


    HeadLeft: {
        width: wp(45),
        height: hp(10),
        flexDirection: "row",

        alignItems: "center"
    },


    HeadRight: {
        width: wp(45),
        height: hp(10),
        // backgroundColor: "pink",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    moblieSec: {
        backgroundColor: "lightgrey",
        height: hp(8),
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15,
        flexDirection: "row",
        width: wp(90),
        marginLeft: wp(5)
    },
    mobiletoch: {
        backgroundColor: "#2F5597",
        width: wp(40),
        height: hp(6),
        borderRadius: 30,
        justifyContent: "center",
        alignItems: 'center'
    },
    emailtoch: {
        backgroundColor: "lightgray",
        width: wp(40),
        height: hp(6),
        justifyContent: "center",
        borderRadius: 30,
        alignItems: 'center'
    },

    circleArrow: { flex: 0.1, justifyContent: 'flex-start', alignItems: 'flex-start',marginHorizontal:wp(5), paddingBottom: hp(4) },
    modalWrapper2: { flex: 1, backgroundColor: '#00000040', alignItems: 'center', justifyContent: 'flex-end' },
    modalWrapp: { height: hp(48), width: wp(100), backgroundColor: '#fff' },
    crossWRapper: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(2) },
    crossImageWrapper: { backgroundColor: 'red', height: hp(5), width: wp(10), borderRadius: 50, alignItems: 'center', justifyContent: 'center' },
    crossImage: { height: hp(4), width: wp(8) },
    tickWrapper: { backgroundColor: 'green', height: hp(5), width: wp(10), borderRadius: 50, alignItems: 'center', justifyContent: 'center' },
    tickImage: { height: hp(2), width: wp(7) },

})