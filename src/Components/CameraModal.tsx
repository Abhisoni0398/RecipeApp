import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
//3rd party
import Modal from 'react-native-modal';
import colors from '../styles/colors';
import {moderateScale} from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import strings from '../constants/lang';

interface ICameraProps {
  isCameraModalVisible: boolean;
  requestCameraPermission: () => {};
  requestGalleryPermission: () => {};
  toggleModal: any;
}

const CameraModal: FC<ICameraProps> = props => {
  const {
    isCameraModalVisible,
    requestCameraPermission,
    requestGalleryPermission,
    toggleModal,
  } = props;
  return (
    <View>
      <Modal
        style={styles.modalContainer}
        isVisible={isCameraModalVisible}
        onBackdropPress={toggleModal}
        transparent={true}>
        <View style={styles.modalStyle}>
          <Text style={styles.modalText}>{strings.SELECT_UPLOAD_OPTION}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={requestCameraPermission}
            style={styles.modalButton}>
            <Text style={styles.modalButtonTxt}>{strings.OPEN_CAMERA}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={requestGalleryPermission}
            style={styles.modalButton}>
            <Text style={styles.modalButtonTxt}>{strings.OPEN_GALLERY}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default CameraModal;

const styles = StyleSheet.create({
  modalStyle: {
    flex: 0.25,
    backgroundColor: colors.white,
    padding: moderateScale(16),
    alignItems: 'center',
    borderRadius: moderateScale(24),
  },
  modalText: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(18),
    fontFamily: fontFamily.medium,
    paddingBottom: moderateScale(24),
    paddingTop: moderateScale(8),
  },
  modalButton: {
    width: '95%',
    height: moderateScale(40),
    marginVertical: moderateScale(12),
    backgroundColor: colors.black,
    borderRadius: moderateScale(22),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    paddingTop: moderateScale(12),
  },
  modalButtonTxt: {
    color: colors.white,
    fontSize: moderateScale(14),
    lineHeight: 18,
    fontFamily: fontFamily.bold,
  },
  modalContainer: {
    marginHorizontal: 0,
    marginBottom: 0,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
});
