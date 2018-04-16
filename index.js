import React, { Component } from 'react';
import { Modal, View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  image: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  innerContent: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 10
  },
  header: {
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10
  },
  closeIconView: {
    backgroundColor: '#efefef',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  closeIcon: {
    color: '#6e6e6e',
    fontSize: 20
  }
});

export default class ModalPopup extends Component {
  render() {
    let { close, overlayStyle } = this.props;
    return <Modal
    animationType={'slide'}
    transparent={true}
    visible={this.props.visible}>
      <View style={[styles.overlay, overlayStyle]}>
        <View style={styles.innerContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={close}>
              <View style={styles.closeIconView}>
                <Text style={styles.closeIcon}>X</Text>
              </View>
            </TouchableOpacity>
          </View>
          {this.props.content()}
        </View>
      </View>
    </Modal>;
  }
}