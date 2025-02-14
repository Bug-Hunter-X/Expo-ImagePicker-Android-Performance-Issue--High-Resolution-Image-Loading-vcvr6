This bug occurs when using the Expo ImagePicker library on Android.  The issue arises when selecting a high-resolution image, where the image loading process can take an extended period. During this time, the app might appear frozen or unresponsive.  This is not immediately obvious as a bug, it is more of a performance issue that can be misinterpreted as a bug due to the lack of feedback during image loading.

```javascript
// bug.js
import * as ImagePicker from 'expo-image-picker';

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);
};
```