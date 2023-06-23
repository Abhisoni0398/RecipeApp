//import liraries
import React, {Component, FC, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//custom components
import WrapperContainer from '../../Components/WrapperContainer';
import Header from '../../Components/Header';
import RoundImg from '../../Components/RoundImg';
import CameraModal from '../../Components/CameraModal';
import TextWithButton from '../../Components/TextWithButton';
//constants
import strings from '../../constants/lang';
//styling
import {moderateScale} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
//custom functions
import {androidCameraPermission} from '../../utils/permissions';
import {OpenPicker} from '../../utils/imagePicker';
import imagePath from '../../constants/imagePath';

// create a component
const Profile: FC = () => {
  const [isCameraModalVisible, setIsCameraModalVisible] = useState(false);
  const [selfie, setSelfie] = useState('');

  const options = {
    saveToPhotos: true,
    mediaType: 'photo',
    cropping: true,
    includeBase64: false,
    height: moderateScale(120),
    cropperCircleOverlay: true,
  };

  const toggleModal = () => {
    setIsCameraModalVisible(!isCameraModalVisible);
  };

  const requestCameraPermission = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus) {
      try {
        const imgRes = await OpenPicker(options, 'camera');
        setIsCameraModalVisible(false);
      } catch (error: any) {
        console.log(error);
      }
    }
  };
  const requestGalleryPermisson = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus) {
      try {
        const imgRes = await OpenPicker(options, 'image');
        console.log(imgRes.sourceURL);
        setIsCameraModalVisible(false);
        setSelfie(imgRes.sourceURL);
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  return (
    <WrapperContainer>
      <Header leftText={strings.ACCOUNT_SETTINGS} />
      <TouchableOpacity
        onPress={() => setIsCameraModalVisible(true)}
        style={styles.profileImg}
        activeOpacity={0.7}>
        <RoundImg img={selfie} />
      </TouchableOpacity>
      <View style={styles.centerView}>
        <Text style={styles.txtStyle}>Abhishek Soni</Text>
        <TouchableOpacity style={styles.btnStyle} activeOpacity={0.7}>
          <Text style={styles.btnTxt}>{strings.VIEW_PROFILE}</Text>
        </TouchableOpacity>
      </View>
      <TextWithButton
        text={strings.HISTORY}
        image={imagePath.history}
        onPress={() => console.log('Hello')}
      />
      <TextWithButton
        text={strings.FAQ}
        image={imagePath.faq}
        onPress={() => console.log('Hello')}
      />
      <TextWithButton
        text={strings.TERMS}
        image={imagePath.terms}
        onPress={() => console.log('Hello')}
      />
      <TextWithButton
        text={strings.PRIVACY_POLICY}
        image={imagePath.privacy}
        onPress={() => console.log('Hello')}
      />
      <TextWithButton
        text={strings.LOGOUT}
        image={imagePath.logout}
        onPress={() => console.log('Hello')}
      />
      <CameraModal
        isCameraModalVisible={isCameraModalVisible}
        requestCameraPermission={requestCameraPermission}
        requestGalleryPermission={requestGalleryPermisson}
        toggleModal={toggleModal}
      />
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    alignItems: 'center',
    marginTop: moderateScale(18),
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(12),
    marginBottom: '25%',
  },
  txtStyle: {
    fontFamily: fontFamily.medium,
    color: colors.black,
  },
  btnStyle: {
    marginVertical: moderateScale(6),
    backgroundColor: colors.black,
    borderRadius: moderateScale(24),
    paddingHorizontal: moderateScale(18),
    paddingVertical: moderateScale(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontFamily: fontFamily.medium,
    color: colors.white,
  },
});

//make this component available to the app
export default Profile;
