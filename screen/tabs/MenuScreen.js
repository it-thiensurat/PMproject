import React from 'react'
import {
    View,
    Text,
    Platform,
    Alert,
    TextInput,
    BackHandler,
    TouchableOpacity,
    Linking,
    Dimensions,
    ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationBar } from 'navigationbar-react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import {
    userInfoControll,
    indicatorControll,
    saveQRContno,
    saveQRRefno,
    saveQRMachine,
    saveQRFilter
} from '../../actions'

import {
    primaryColor,
    secondaryColor,
    API_KEY,
    BASEURL,
    INSERT_PM
} from '../../utils/contants'

import styles from '../../style/style'
import Helper from '../../utils/Helper'

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

class MenuScreen extends React.Component {

    OnSave() {

        let that = this
        const props = that.props
        const users = props.reducer.userInfo
        let header = {
            'Authorization': props.reducer.token,
            'x-api-key': API_KEY
        }

        if (users.empId != '' && props.reducer.qrcontno != '' && props.reducer.qrrefno != '' && props.reducer.qrmachine != '' && props.reducer.qrfilter != '') {
            let formData = new FormData();

            formData.append('CONTNO', props.reducer.qrcontno);
            formData.append('Refno', props.reducer.qrrefno);
            formData.append('ProductSerial', props.reducer.qrmachine);
            formData.append('FilterSerial', props.reducer.qrfilter);
            formData.append('Empid', users.empId);

            props.indicatorControll(true)
            Helper.post(BASEURL + INSERT_PM, formData, header, async (results) => {
                // alert(JSON.stringify(results))
                // return
                if (results.status == 'SUCCESS') {
                    props.indicatorControll(false)
                    Alert.alert(
                        'ข้อความ',
                        `${results.message}`,
                        [
                            {
                                text: 'OK', onPress: () => that.ClearReducer()
                            },
                        ],
                        { cancelable: false }
                    )
                } else {
                    props.indicatorControll(false)
                    Alert.alert(
                        'คำเตือน',
                        `${results.message}`,
                        [
                            { text: 'OK', onPress: () => null },
                        ],
                        { cancelable: false }
                    )
                }
            })
        } else {
            Alert.alert(
                'ข้อความ',
                `กรุณากรอกข้อมูลหรือสแกนบาร์โค๊ดให้ครบถ้วนก่อนทำการบันทึก`,
                [
                    { text: "ตกลง", onPress: () => null }
                ],
                { cancelable: false }
            )
        }
    }

    ClearReducer() {
        this.props.saveQRContno('clear', [])
        this.props.saveQRRefno('clear', [])
        this.props.saveQRMachine('clear', [])
        this.props.saveQRFilter('clear', [])
    }

    ComponentLeft = () => {
        return (
            <View>

            </View>
        );
    }

    ComponentCenter = () => {
        return (
            <View style={[styles.center]}>
                <Text style={[styles.bold, { color: 'white', fontSize: 26, paddingLeft: 50 }]}>{`หน้าหลัก`}</Text>
            </View>
        );
    }

    ComponentRight = () => {
        return (
            <View style={[{ padding: 10 }]}>
                <TouchableOpacity style={[styles.center, styles.shadow, { padding: 5, backgroundColor: primaryColor, borderRadius: 5, borderWidth: 0.2, borderColor: 'white' }]}
                    onPress={
                        () => {
                            Alert.alert(
                                'ข้อความ',
                                `คุณต้องการล้างข้อมูลทั้งหมดใช่หรือไม่`,
                                [
                                    {
                                        text: "ใช่", onPress: () => this.ClearReducer()
                                    },
                                    { text: "ยกเลิก", onPress: () => null, style: "cancel" }
                                ],
                                { cancelable: false }
                            )
                        }
                    }>
                    <Icon name='trash-alt' size={20} color={'#17A589'} />
                </TouchableOpacity>
            </View>
        );
    }

    handleBack = () => {
        // return true

        if (this.props.navigation.isFocused()) {
            this.props.saveQRContno('clear', [])
            this.props.saveQRRefno('clear', [])
            this.props.saveQRMachine('clear', [])
            this.props.saveQRFilter('clear', [])
            this.props.navigation.pop();
            return true;
        }
    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBack);
    }

    render() {
        const props = this.props.reducer
        const users = props.userInfo
        const contnobc = props.qrcontno
        const refnobc = props.qrrefno
        const machinebc = props.qrmachine
        const filterbc = props.qrfilter

        return (
            <View style={{ flex: 1, backgroundColor: primaryColor }}>
                <NavigationBar
                    componentLeft={this.ComponentLeft}
                    componentCenter={this.ComponentCenter}
                    componentRight={this.ComponentRight}
                    navigationBarStyle={{
                        backgroundColor: primaryColor,
                        elevation: 0,
                        shadowOpacity: 0,
                        marginTop: 15
                    }}
                    statusBarStyle={{
                        backgroundColor: primaryColor,
                        elevation: 0,
                        shadowOpacity: 0,
                    }} />
                <View style={[styles.container, styles.center]}>
                    <ScrollView>
                        <View style={[styles.marginBetweenVertical]}></View>
                        <View style={[styles.marginBetweenVertical]}></View>
                        <View style={[styles.marginBetweenVertical]}></View>
                        <View style={[styles.marginBetweenVertical]}></View>
                        <View style={[styles.container, styles.containerRow]}>
                            <View style={[styles.center]}>
                                <Text style={[styles.bold, { fontSize: 22, color: 'white', alignSelf: 'center', paddingLeft: 55 }]}>{`เลขสัญญา`}</Text>
                                <View style={[styles.container, { flexDirection: 'row', alignItems: 'center' }]}>
                                    <View style={[styles.marginBetweenVertical]}></View>
                                    <View style={[styles.center, styles.shadow, { width: 55, height: 55, backgroundColor: secondaryColor, borderRadius: 30, marginRight: 3 }]}>
                                        <TouchableOpacity style={[styles.center, styles.shadow, { width: 50, height: 50, backgroundColor: 'white', borderRadius: 40 }]}
                                            onPress={
                                                () => this.props.navigation.navigate('Scanner', {
                                                    type: 'Contno'
                                                })
                                            }>
                                            <Icon name={`qrcode`} size={25} color={secondaryColor} />
                                            <Text style={[{ fontSize: 7, textAlign: 'center', color: secondaryColor }]}>{`SCAN BARCODE`}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[styles.marginBetweenVertical]}></View>
                                    <View style={[styles.shadow, styles.inputBarcode, { flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingLeft: 0 }]}>
                                        <TextInput style={[styles.inputContainer]}
                                            placeholder=''
                                            keyboardType='email-address'
                                            returnKeyType='next'
                                            textAlign={'center'}
                                            onBlur={false}
                                            autoCapitalize={false}
                                            blurOnSubmit={false}
                                            selectTextOnFocus={true}
                                            value={props.qrcontno}
                                            onChangeText={async (text) => {
                                                let item = props
                                                let unit = props.qrcontno
                                                unit = text
                                                item.qrcontno = unit
                                                await this.setState({ props: item.qrcontno })
                                            }} />
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.marginBetweenVertical]}></View>
                            <View style={[styles.center]}>
                                <Text style={[styles.bold, { fontSize: 22, color: 'white', alignSelf: 'center', paddingLeft: 55 }]}>{`เลขอ้างอิง`}</Text>
                                <View style={[styles.container, { flexDirection: 'row', alignItems: 'center' }]}>
                                    <View style={[styles.marginBetweenVertical]}></View>
                                    <View style={[styles.center, styles.shadow, { width: 55, height: 55, backgroundColor: secondaryColor, borderRadius: 30, marginRight: 3 }]}>
                                        <TouchableOpacity style={[styles.center, styles.shadow, { width: 50, height: 50, backgroundColor: 'white', borderRadius: 40 }]}
                                            onPress={
                                                () => this.props.navigation.navigate('Scanner', {
                                                    type: 'Refno'
                                                })
                                            }>
                                            <Icon name={`qrcode`} size={25} color={secondaryColor} />
                                            <Text style={[{ fontSize: 7, textAlign: 'center', color: secondaryColor }]}>{`SCAN BARCODE`}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[styles.marginBetweenVertical]}></View>
                                    <View style={[styles.shadow, styles.inputBarcode, { flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingLeft: 0 }]}>
                                        <TextInput style={[styles.inputContainer]}
                                            placeholder=''
                                            keyboardType='email-address'
                                            returnKeyType='next'
                                            textAlign={'center'}
                                            onBlur={false}
                                            autoCapitalize={false}
                                            blurOnSubmit={false}
                                            selectTextOnFocus={true}
                                            value={props.qrrefno}
                                            onChangeText={async (text) => {
                                                let item = props
                                                let unit = props.qrrefno
                                                unit = text
                                                item.qrrefno = unit
                                                await this.setState({ props: item.qrrefno })
                                            }} />
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.marginBetweenVertical]}></View>
                            <View style={[styles.center]}>
                                <Text style={[styles.bold, { fontSize: 22, color: 'white', alignSelf: 'center', paddingLeft: 55 }]}>{`ซีเรียลเครื่องกรองน้ำ`}</Text>
                                <View style={[styles.container, { flexDirection: 'row', alignItems: 'center' }]}>
                                    <View style={[styles.marginBetweenVertical]}></View>
                                    <View style={[styles.center, styles.shadow, { width: 55, height: 55, backgroundColor: secondaryColor, borderRadius: 30, marginRight: 3 }]}>
                                        <TouchableOpacity style={[styles.center, styles.shadow, { width: 50, height: 50, backgroundColor: 'white', borderRadius: 40 }]}
                                            onPress={
                                                () => this.props.navigation.navigate('Scanner', {
                                                    type: 'Machine'
                                                })
                                            }>
                                            <Icon name={`qrcode`} size={25} color={secondaryColor} />
                                            <Text style={[{ fontSize: 7, textAlign: 'center', color: secondaryColor }]}>{`SCAN BARCODE`}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[styles.marginBetweenVertical]}></View>
                                    <View style={[styles.shadow, styles.inputBarcode, { flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingLeft: 0 }]}>
                                        <TextInput style={[styles.inputContainer]}
                                            placeholder=''
                                            keyboardType='email-address'
                                            returnKeyType='next'
                                            textAlign={'center'}
                                            onBlur={false}
                                            autoCapitalize={false}
                                            blurOnSubmit={false}
                                            selectTextOnFocus={true}
                                            value={props.qrmachine}
                                            onChangeText={async (text) => {
                                                let item = props
                                                let unit = props.qrmachine
                                                unit = text
                                                item.qrmachine = unit
                                                await this.setState({ props: item.qrmachine })
                                            }} />
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.marginBetweenVertical]}></View>
                            <View style={[styles.center]}>
                                <Text style={[styles.bold, { fontSize: 22, color: 'white', alignSelf: 'center', paddingLeft: 55 }]}>{`ซีเรียลสารกรอง`}</Text>
                                <View style={[styles.container, { flexDirection: 'row', alignItems: 'center' }]}>
                                    <View style={[styles.marginBetweenVertical]}></View>
                                    <View style={[styles.center, styles.shadow, { width: 55, height: 55, backgroundColor: secondaryColor, borderRadius: 30, marginRight: 3 }]}>
                                        <TouchableOpacity style={[styles.center, styles.shadow, { width: 50, height: 50, backgroundColor: 'white', borderRadius: 40 }]}
                                            onPress={
                                                () => this.props.navigation.navigate('Scanner', {
                                                    type: 'Filter'
                                                })
                                            }>
                                            <Icon name={`qrcode`} size={25} color={secondaryColor} />
                                            <Text style={[{ fontSize: 7, textAlign: 'center', color: secondaryColor }]}>{`SCAN BARCODE`}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[styles.marginBetweenVertical]}></View>
                                    <View style={[styles.shadow, styles.inputBarcode, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 0 }]}>
                                        <TextInput style={[styles.inputContainer]}
                                            placeholder=''
                                            keyboardType='email-address'
                                            returnKeyType='next'
                                            textAlign={'center'}
                                            onBlur={false}
                                            autoCapitalize={false}
                                            blurOnSubmit={false}
                                            selectTextOnFocus={true}
                                            value={props.qrfilter}
                                            onChangeText={async (text) => {
                                                let item = props
                                                let unit = props.qrfilter
                                                unit = text
                                                item.qrfilter = unit
                                                await this.setState({ props: item.qrfilter })
                                            }} />
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.marginBetweenVertical]}></View>
                            <View style={[styles.marginBetweenVertical]}></View>
                            <View style={[styles.marginBetweenVertical]}></View>
                            <View style={[styles.marginBetweenVertical]}></View>
                            <View style={[styles.marginBetweenVertical]}></View>
                            <View style={[styles.marginBetweenVertical]}></View>
                            <View style={[styles.marginBetweenVertical]}></View>
                            <View style={[styles.marginBetweenVertical]}></View>
                            <View style={{ alignSelf: 'center' }}>
                                <TouchableOpacity style={[styles.useButton, styles.center]}
                                    onPress={
                                        () => {
                                            Alert.alert(
                                                'ข้อความ',
                                                `คุณต้องการบันทึกข้อมูลใช่หรือไม่`,
                                                [
                                                    { text: "ใช่", onPress: () => this.OnSave() },
                                                    { text: "ยกเลิก", onPress: () => null, style: "cancel" }
                                                ],
                                                { cancelable: false }
                                            )
                                        }
                                    }>
                                    <Text style={[styles.bold, { fontSize: 24, color: 'white', alignSelf: 'center' }]}>{`บันทึกข้อมูล`}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View >
        )
    }
}

const mapStateToProps = (state) => ({
    reducer: state.fetchReducer
})

const mapDispatchToProps = {
    userInfoControll,
    indicatorControll,
    saveQRContno,
    saveQRRefno,
    saveQRMachine,
    saveQRFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen)