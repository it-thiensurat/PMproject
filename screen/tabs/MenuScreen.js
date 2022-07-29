import React from 'react'
import {
    View,
    Text,
    Platform,
    Alert,
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
    primaryColor
} from '../../utils/contants'

import styles from '../../style/style'

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

class MenuScreen extends React.Component {

    ComponentLeft = () => {
        return (
            <View>

            </View>
        );
    }

    ComponentCenter = () => {
        return (
            <View style={[styles.center]}>
                <Text style={[styles.bold, { color: 'white', fontSize: 26 }]}>{`หน้าหลัก`}</Text>
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
        const users = this.props.reducer.userInfo
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
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                    
                </View>
            </View >
        )
    }
}

const mapStateToProps = (state) => ({
    reducer: state.fetchReducer
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen)