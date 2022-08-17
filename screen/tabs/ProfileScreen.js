import React from 'react'
import {
    View,
    Text,
    Image,
    Platform,
    ScrollView,
    BackHandler,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationBar } from 'navigationbar-react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import VersionCheck from 'react-native-version-check'

import {
    userInfoControll,
    indicatorControll,
    saveQRContno,
    saveQRRefno,
    saveQRMachine,
    saveQRFilter
} from '../../actions'

import {
    TOKEN_KEY,
    primaryColor,
    secondaryColor,
    PICURL
} from '../../utils/contants'

import styles from '../../style/style'
import StorageService from '../../utils/StorageServies'

import nophoto from '../../img/nophoto.png'

const DEVICE_WIDTH = Dimensions.get('window').width;

class ProfileScreen extends React.Component {

    ComponentLeft = () => {
        return (
            <View>

            </View>
        );
    }

    ComponentCenter = () => {
        const props = this.props.reducer
        return (
            <View style={[styles.center]}>
                <Text style={[styles.bold, { color: 'white', fontSize: 26 }]}>{`ข้อมูลพนักงาน`}</Text>
            </View>
        );
    }

    ComponentRight = () => {
        return (
            <View>

            </View>
        );
    }

    handleBack = () => {
        return true

    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBack);
    }

    render() {

        const props = this.props.reducer

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
                <ScrollView style={{ flex: 1, backgroundColor: primaryColor }}>
                    <View style={[styles.marginBetweenVertical]}></View>
                    <View style={[styles.imageContainer, { borderColor: primaryColor, alignItems: 'center', justifyContent: 'center' }]}>
                        {
                            props.userInfo.empForWeb != null ?
                                <Image 
                                style={{ resizeMode: 'contain', width: 120, height: 120, borderWidth: 1, borderRadius: 92, borderColor: 'white', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}
                                source={{ uri: PICURL + props.userInfo.empForWeb + '.jpg' }}
                                />
                                :
                                <Image 
                                style={{ resizeMode: 'contain', width: 120, height: 120, borderWidth: 1, borderRadius: 92, borderColor: 'white', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}
                                source={nophoto}
                                />
                        }
                    </View>
                    <View style={[styles.marginBetweenVertical]}></View>
                    <View style={{ padding: 10 }}>
                        <View style={{ padding: 4, borderBottomWidth: 0.5, borderBottomColor: 'white', marginBottom: 15 }}>
                            <Text style={[styles.bold, { color: 'white', fontSize: 24 }]}>{`ชื่อ - นามสกุล`}</Text>
                            <Text style={[{ color: 'white', fontSize: 24, textAlignVertical: 'bottom' }]}>{`${props.userInfo.title}${props.userInfo.firstname} ${props.userInfo.lastname}`}</Text>
                        </View>
                        <View style={{ padding: 4, borderBottomWidth: 0.5, borderBottomColor: 'white', marginBottom: 15 }}>
                            <Text style={[styles.bold, { color: 'white', fontSize: 24 }]}>{`ตำแหน่ง`}</Text>
                            <Text style={[{ color: 'white', fontSize: 24, textAlignVertical: 'bottom' }]}>{`${props.userInfo.position}`}</Text>
                        </View>
                    </View>
                    <View style={[styles.marginBetweenVertical]}></View>
                    <View style={[styles.marginBetweenVertical]}></View>
                    <View style={[styles.marginBetweenVertical]}></View>
                    <TouchableOpacity style={{ height: 50, width: DEVICE_WIDTH - 100, backgroundColor: secondaryColor, borderRadius: 26, alignSelf: 'center', justifyContent: 'center' }}
                        onPress={
                            async () => {
                                await StorageService.remove(TOKEN_KEY)
                                await StorageService.clear()
                                await this.props.saveQRContno('clear', [])
                                await this.props.saveQRRefno('clear', [])
                                await this.props.saveQRMachine('clear', [])
                                await this.props.saveQRFilter('clear', [])
                                await this.props.navigation.replace('Login')
                            }
                        }>
                        <Text style={[{ color: 'white', fontSize: 24, alignSelf: 'center' }, styles.bold]}>{`ออกจากระบบ`}</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={{ position: 'absolute', bottom: 0, padding: 4, alignSelf: 'flex-end' }}>
                    <Text style={{ fontSize: 14, color: 'white' }}>{`version ${VersionCheck.getCurrentVersion()}`}</Text>
                </View>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)