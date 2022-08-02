import React from 'react'
import {
    Alert,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import QRCodeScanner from 'react-native-qrcode-scanner'
import Icon from 'react-native-vector-icons/FontAwesome5'

import {
    primaryColor,
    secondaryColor
} from '../utils/contants'

import {
    saveQRContno,
    saveQRRefno,
    saveQRMachine,
    saveQRFilter
} from '../actions'

import styles from '../style/style'

class ScannerScreen extends React.Component {

    onSkip() {
        this.props.navigation.pop()
    }

    onSuccess = (e) => {
        const props = this.props
        const { type } = props.route.params
        if (type == 'Contno') {
            props.saveQRContno('save', e.data)
        } else if (type == 'Refno') {
            props.saveQRRefno('save', e.data)
        } else if (type == 'Machine') {
            props.saveQRMachine('save', e.data)
        } else if (type == 'Filter') {
            props.saveQRFilter('save', e.data)
        }
        this.onSkip()
    }

    render() {
        const props = this.props
        const { type } = props.route.params

        return (
            <View style={[styles.center, { flex: 1, backgroundColor: 'black' }]}>
                <QRCodeScanner
                    onRead={this.onSuccess}
                    showMarker={true}
                    topContent={
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={{ flex: 0.2 }}>
                                <TouchableOpacity style={{ position: 'absolute', top: 20, left: 20 }}
                                    onPress={
                                        () => this.onSkip()
                                    }>
                                    <Icon name={`times`} size={24} color={'white'} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.6, alignItems: 'center', top: 20 }}>
                                <Text style={[styles.bold, { fontSize: 24, color: 'white', textAlignVertical: 'center' }]}>{`สแกน BarCode ${type}`}</Text>
                            </View>
                            <View style={{ flex: 0.2 }}></View>
                        </View>
                    }
                    bottomContent={
                        <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>

                        </View>
                    } />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    reducer: state.fetchReducer
})

const mapDispatchToProps = {
    saveQRContno,
    saveQRRefno,
    saveQRMachine,
    saveQRFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(ScannerScreen)