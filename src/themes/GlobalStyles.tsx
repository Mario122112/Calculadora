import { StyleSheet } from "react-native";
import { Color } from './Color';


export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.background,
        alignItems:  'center',
        justifyContent: 'flex-end',
        paddingBottom:20,
      }
    ,boton: {
        color: Color.textPrimary,
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor:  Color.borde,
        borderWidth: 2,
        borderRadius: 200
        
    },
    pantallaPrincipal: {
        fontSize: 70,
        textAlign: 'right',
        fontWeight:400,
        width: '90%',
        color: Color.textPrimary
        
    }
    ,fila: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom:16,
        paddingHorizontal:10,
        width: '100%',
      }
    ,boton_operador: {
        backgroundColor: Color.orange,
    }
    ,boton_normal: {
        backgroundColor: Color.darkGray,
    }
    ,boton_especial:{
        backgroundColor: Color.lightGray
    }

  });
