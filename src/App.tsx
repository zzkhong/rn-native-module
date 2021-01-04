import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePickerModule from './ImagePickerModule';
import ToastModule, {LENGTH_LONG} from './ToastModule';

declare const global: {HermesInternal: null | {}};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
  button: {
    height: 50,
    margin: 10,
    backgroundColor: '#ccc',
  },
});

const App = () => {
  const [image, setImage] = React.useState<string | null>(null);

  const handleToastPress = React.useCallback(() => {
    ToastModule.show('This is Android Toast', LENGTH_LONG);
  }, []);

  const handleImagePickerPress = React.useCallback(async () => {
    const imageUri = await ImagePickerModule.pickImage();
    setImage(imageUri);
  }, []);

  console.log(image);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={
              image
                ? {
                    uri: image,
                  }
                : require('../assets/placeholder.png')
            }
          />
        </View>
        <TouchableOpacity onPress={handleImagePickerPress}>
          <View style={[styles.center, styles.button]}>
            <Text>Native Image Picker</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleToastPress}>
          <View style={[styles.center, styles.button]}>
            <Text>Native Toast</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default App;
