# ReAnimatedCrossfadeImages

`ReAnimatedCrossfadeImages` is a React Native component that provides a visually appealing way to display and animate images with cross fading transitions. It utilizes the `react-native-reanimated` library for smooth animations and transitions. This library can be used as both Image or ImageBackground component.

## Installation

Before installing `ReAnimatedCrossfadeImages`, make sure you have `react-native-reanimated` version 3 or higher installed in your React Native project. If not, you can install it with the following commands:

```bash
npm install react-native-reanimated@^3.0.0 reanimated-crossfade-images
# or
yarn add react-native-reanimated@^3.0.0  reanimated-crossfade-images

```

| Props        | Required | Default | Description                                         |
| ------------ | -------- | ------- | --------------------------------------------------- |
| images       | true     |         | This should be an array of images strings.          |
| interval     | false    | 2000    | Interval of images changes in ms.                   |
| fadeDuration | false    | 500     | Duration of the cross fade effect between 2 images. |
| loop         | false    | true    | Set if the animation happens on loop or only once.  |
