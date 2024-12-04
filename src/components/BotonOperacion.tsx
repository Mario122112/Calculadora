import { Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../themes/GlobalStyles";

interface Props {
    label: string,
    width: number,
    type: string,
    onPress?: () => void;
}

export const BotonOperacion = ({label, width, onPress, type}:Props) => {
    return (
        <Pressable>
            <Text 
                style={[GlobalStyles.boton, {width} ,type ==='operador'?GlobalStyles.boton_operador: null, type==='normal'?GlobalStyles.boton_normal: null, type==='especial'?GlobalStyles.boton_especial:null]}
                onPress={onPress}  >{label}</Text>
        </Pressable>
    )
};









