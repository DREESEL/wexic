import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants/theme';
import Galeriacontenido from "../../components/galeriacontenido";
import DATA from "../../data/data.json";

const HomeScreen = () => {
    const filterData = (price) => (DATA.galeriacontenidos).filter((result) => result.price === price );
    // filtro por tipo de precio
    return (
        <View>
            <View style={styles.top}>
                <View style={styles.searchBox}>
                    <Icon name="search" size={25} color={COLORS.grey} />
                    <TextInput name="txtspace" placeholder="Qué deseas?" style={styles.search} />
                </View>
            </View>
            <ScrollView>
                <Galeriacontenido title="Nuevos" data={filterData('$')} />
                <Galeriacontenido title="Recomendaciones" data={filterData('$$')} />
                <Galeriacontenido title="Populares" data={filterData('$$$')} />
                <View style={{ height: 80 }}/>
            </ScrollView>
        </View>
    )   
}

export default HomeScreen;

