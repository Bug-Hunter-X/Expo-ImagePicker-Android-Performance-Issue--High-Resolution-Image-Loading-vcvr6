# Expo ImagePicker Android Performance Issue

This repository demonstrates a performance issue encountered when using the Expo ImagePicker library on Android devices. The problem manifests when selecting high-resolution images; the app can become unresponsive during image loading.  This is not a crash, but poor UX.

## Problem Description

The `expo-image-picker` library, while generally robust, experiences performance degradation when handling very large images on Android. This leads to a frozen UI, giving the user the impression of an application crash.

## Solution

The solution involves adding a loading indicator to provide feedback to the user and consider optimizing image loading (not shown here, would involve image compression or downsampling).  The updated code provides feedback and improves the user experience.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the app on an Android emulator or device.
4. Select a high-resolution image from the gallery. Observe the UI behavior.

## Additional Notes

This is a common problem with image processing in mobile apps. Always provide feedback to the user while working with potentially large images.