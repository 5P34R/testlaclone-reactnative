import react from "react";
import { View, Text, FlatList, Dimensions } from "react-native";

import CarItem from "../carItems";
import styles from "./styles";
import car from './car'


const CarList = (props) => {
    return (
        <View style={styles.container}>
           <FlatList 
           data={car}
           renderItem={({item}) => <CarItem car={item} />}
            snapToAlignment={"start"}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            showsVerticalScrollIndicator = {false}
           />
        </View>
    )
}

export default CarList;