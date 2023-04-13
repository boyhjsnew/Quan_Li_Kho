import React, { useState, useEffect } from "react";
import { View, Image, Button } from "react-native";
import ImagePicker from "react-native-image-picker";

export const ImageUpload = () => {
  const [imageUri, setImageUri] = useState();
  useEffect(() => {
    checkPermissions();
  }, []);

  const checkPermissions = async () => {
    const permissions = await RNPermissions.check("photo");
    if (permissions != "authorized") {
      await requestPermission();
    }
  };

  const requestPermission = async () => {
    const permissions = await RNPermissions.check("photo");
    if (permissions != "authorized") {
      console.log("Permission denied");
    }
  };

  const chooseImage = () => {
    const options = {
      mediaType: "photo",
      maxWidth: 600,
      maxHeight: 600,
      quality: 0.5,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (!response.didCancel && !response.error) {
        setImageUri(response.uri);
      }
    });
  };

  return (
    <View>
      {imageUri && (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      )}
      <Button title="Choose Image" onPress={chooseImage} />
    </View>
  );
};
