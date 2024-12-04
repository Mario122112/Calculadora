import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, type TextProps } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora, Operadores } from './src/hooks/useCalculadora';
import { GlobalStyles } from './src/themes/GlobalStyles';
import { Color } from './src/themes/Color';


export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
         operaciones,resultado  } = useCalculadora();

  return (
  
    <View style={GlobalStyles.container}>    
      <Pantalla numberOfLines={1} adjustsFontSizeToFit>{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla numberOfLines={1} adjustsFontSizeToFit> </Pantalla>
      ) : (
        <Pantalla numberOfLines={1} adjustsFontSizeToFit>{numeroAnterior}</Pantalla>
      )}
      
      <StatusBar style="auto" />

    <View style={GlobalStyles.fila}>
      <BotonOperacion label='C' width={80} onPress={clean} type='especial'></BotonOperacion>
      <BotonOperacion label='+/-' width={80} onPress={cambiarSigno} type='operador'></BotonOperacion>
      <BotonOperacion label='del' width={80} onPress={borrarDigito}type='especial'></BotonOperacion>
      <BotonOperacion label='/' width={80} onPress={() => operaciones(Operadores.dividir)} type='operador'></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='7' width={80} onPress={() =>construirNumero('7')}type='normal'></BotonOperacion>
      <BotonOperacion label='8' width={80} onPress={() =>construirNumero('8')}type='normal'></BotonOperacion>
      <BotonOperacion label='9' width={80} onPress={() =>construirNumero('9')}type='normal'></BotonOperacion>
      <BotonOperacion label='x' width={80} onPress={() => operaciones(Operadores.multiplicar)}type='operador'></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='4' width={80} onPress={() =>construirNumero('4')}type='normal'></BotonOperacion>
      <BotonOperacion label='5' width={80} onPress={() =>construirNumero('5')}type='normal'></BotonOperacion>
      <BotonOperacion label='6' width={80} onPress={() =>construirNumero('6')}type='normal'></BotonOperacion>
      <BotonOperacion label='-' width={80} onPress={() =>operaciones(Operadores.restar)}type='operador'></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='1' width={80} onPress={() =>construirNumero('1')}type='normal'></BotonOperacion>
      <BotonOperacion label='2' width={80} onPress={() =>construirNumero('2')}type='normal'></BotonOperacion>
      <BotonOperacion label='3' width={80} onPress={() =>construirNumero('3')} type='normal'></BotonOperacion>
      <BotonOperacion label='+' width={80} onPress={() =>operaciones(Operadores.sumar)} type='operador'></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='0' width={180} onPress={() =>construirNumero('0')}type='normal'></BotonOperacion>
      <BotonOperacion label='.' width={80} onPress={() =>construirNumero('.')}type='espcial'></BotonOperacion>
      <BotonOperacion label='=' width={80} onPress={resultado} type='operador'></BotonOperacion>
    </View>
    </View>


  );
}
