import {NativeModules} from 'react-native';

const {ToastModule} = NativeModules;

export const {LENGTH_LONG, LENGTH_SHORT} = ToastModule.getConstants();

interface ToastInterface {
  show(message: string, duration: number): void;
}

export default ToastModule as ToastInterface;
