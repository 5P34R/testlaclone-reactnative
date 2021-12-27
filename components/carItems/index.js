import React from "react";
import { View, Text, ImageBackground} from "react-native";
import StyledButton from "../styledButton";
import styles from "./styles";

const CarItem = (props) => {

    const { title, tagline, image } = props.car;

    return (
        <View style={styles.carContainer}>
                <ImageBackground source={image}
                    style={styles.image} />

                <View style={styles.titles}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{tagline}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <StyledButton type="primary" content="Custom Order" onPress={() => console.warn("custom order was pressed")}/>
                    <StyledButton type="secondary" content="Existing Inventory" onPress={() => console.warn("Existing Inventory")}/>
                </View>
        </View>
            
    )
}

export default CarItem;