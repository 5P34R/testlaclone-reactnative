import React from "react";
import { View, Text, Image, ImageEditor } from 'react-native';

import styles from "./styles";

const Header = () => {
    return (
        <View style={styles.container}>
            <Image src={require('../../assets/images/logo.png')}/>
            
        </View>
    )
}

export default Header;