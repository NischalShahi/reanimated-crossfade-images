"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossFadeImages = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const FADE_DURATION = 500;
const IMAGE_INTERVAL = 2000;
const ImageComponent = react_1.default.memo(({ imageUrl, isActive, fadeDuration = FADE_DURATION, }) => {
    const opacity = (0, react_native_reanimated_1.useSharedValue)(0);
    (0, react_1.useEffect)(() => {
        opacity.value = (0, react_native_reanimated_1.withTiming)(isActive ? 1 : 0, {
            duration: fadeDuration,
            easing: react_native_reanimated_1.Easing.inOut(react_native_reanimated_1.Easing.ease),
        });
    }, [isActive]);
    const animatedStyles = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        return {
            opacity: opacity.value,
            width: "100%",
            height: "100%",
            position: "absolute",
        };
    });
    return (<react_native_reanimated_1.default.Image style={[animatedStyles]} source={{ uri: imageUrl }} resizeMode="cover"/>);
});
const CrossFadeImages = ({ images, interval = IMAGE_INTERVAL, fadeDuration = FADE_DURATION, children, loop = true, }) => {
    const [activeIndex, setActiveIndex] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        const animationInterval = setInterval(() => {
            if (loop) {
                setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
            }
            else {
                if (activeIndex < images.length - 1) {
                    setActiveIndex((prevIndex) => prevIndex + 1);
                }
            }
        }, interval);
        return () => clearInterval(animationInterval);
    }, [images, activeIndex]);
    return (<react_native_1.View style={{ width: "100%", height: "100%", position: "relative" }}>
      {images.map((imageUrl, index) => (<ImageComponent key={imageUrl + index} imageUrl={imageUrl} isActive={index === activeIndex} fadeDuration={fadeDuration}/>))}
      {children}
    </react_native_1.View>);
};
exports.CrossFadeImages = CrossFadeImages;
