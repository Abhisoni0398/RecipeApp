import ImagePicker from 'react-native-image-crop-picker';

const OpenPicker = async(options: any, type: string) => {
    if(type === "camera"){
    return ImagePicker.openCamera(options)
    .then((image: any) => {
        return image;
    })
    .catch((err: string) => {
        return err;
    })
}
        return ImagePicker.openPicker(options).then((image: any) => {
            return image;
        })
        .catch((err: string) => {
            return err;
        })

} 

export {OpenPicker};