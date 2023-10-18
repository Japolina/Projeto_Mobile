

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import ListaFlat from './ListaFlat';
import ListaSection from './ListaSection';
import ListaNome from './ListaNome';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import { HomeProps } from '../App';
import { Resul } from './App3';
import Resultado from './Login';

const lista = [
    { key: 1, descricao: 'teste' },
    { key: 2, descricao: 'teste2' },
    { key: 3, descricao: 'teste3' },
    { key: 4, descricao: 'teste4' }
];
const listaSection = [
    { title: 'A', data: [{ key: 1, descricao: 'Ana' }] },
    { title: 'B', data: [{ key: 1, descricao: 'Bryan' }] },
];

const listaNome = [
    { nome: 'Érica' },
    { nome: 'Yasmin' }
]


// const Principal = () => {
//     return (
//         <>
//         <ListaFlat array={lista}/>
//         <ListaSection array={listaSection}/>
//         <ListaNome array={listaNome}/>
//         </>
//     );
// }
const Principal = ({ navigation, route }: HomeProps) => {
    return (
        <>
            <View style={styles.botao}/>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Detalhes')}/>
            <Resultado/>
        </>
    );
}

export default Principal;

const styles = StyleSheet.create({
    botao: {
        marginTop: 50,
    },
});

