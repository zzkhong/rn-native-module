import {NativeModules} from 'react-native';

const {ImagePickerModule} = NativeModules;

interface ImagePickerInterface {
  pickImage(): Promise<string>;
}

export default ImagePickerModule as ImagePickerInterface;
