
Reanimated Crossfade as Background Image


https://github.com/NischalShahi/reanimated-crossfade-images/assets/37703654/6f3b5e17-b4dc-4757-b4ce-1890a49d3a1e



Reanimated Crossfade 


https://github.com/NischalShahi/reanimated-crossfade-images/assets/37703654/40b8cf64-9580-417c-ad11-7e2a33a37f7d



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





EXAMPLE FOR REANIMATED CROSSFADE IMAGES
```bash
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { CrossFadeImages } from 'reanimated-crossfade-images';
import { RNReAnimatedTriImages } from 'rn-reanimated-tri-images';

const IMAGES = [] //links for images


function App(): JSX.Element {

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <View style={{width:"100%",height:500}}>
      <CrossFadeImages images={IMAGES} />
      </View>
    </View>
  );
}

export default App;


```


EXAMPLE FOR REANIMATED CROSSFADE BACKGROUND IMAGES
```bash
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { CrossFadeImages } from 'reanimated-crossfade-images';
import { RNReAnimatedTriImages } from 'rn-reanimated-tri-images';

const IMAGES = [] //links for images


function App(): JSX.Element {

  return (
   <CrossFadeImages images={IMAGES}>
      <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
        <View style={{width:"80%", backgroundColor:"white", padding: 20}}>
        <Text style={{fontSize:20, textAlign:"center"}}>This is a sample text above the fading background image</Text>
        </View>
      </View>
    </CrossFadeImages> 
  );
}

export default App;


```
