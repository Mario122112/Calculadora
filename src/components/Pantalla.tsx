import { Text, type TextProps, StyleSheet } from 'react-native';
import { GlobalStyles } from '../themes/GlobalStyles';

interface Props extends TextProps {};

export const Pantalla = ({children, ...rest}:Props) => {
  return (
    <Text style={GlobalStyles.pantallaPrincipal} {...rest}>
        {children}
    </Text>
  )
}


