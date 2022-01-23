declare module "*.svg" {
    import React from "react";
    import { SvgProps } from 'react-native-svg'; // getting svg properties for typing purposes
    const content: React.FC<SvgProps>; // declare that it's a react functional component with svg properties
    export default content;
}