import React from "react";
import { View, Text, Image } from 'react-native';

import styles from "./styles";

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} src={require('../../assets/images/logo.png')}/>
            <Image style={styles.menu} src={require('../../assets/images/menu.png')}/>
            
        </View>
    )
}

export default Header;