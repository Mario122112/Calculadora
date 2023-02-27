/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/** github_ejercicio7
*/
package calculadora;

/**
 *
 * @author redes
 */
/**
 * 
 * 
 */
public class Calculadora {
    private final int num1;
    private final int num2;
    
/**
 * 
 * @param a (primer operario)
 * @param b (segundo operario)
 */    
    
    public Calculadora(int a, int b){
        num1=a;
        num2=b;
    }
    
    /**
     * 
     * @return suma de los dos operarios 
     */
    public int suma(){
        int result=num1+num2;
        return result;
    }
/**
 * 
 * @return la resta de los dos operarios 
 */
    public int resta(){
        int result;
        if (resta2())   result = num1-num2;
        else            result = num2-num1;
        return result;
    }
/**
 * 
 * @return si es true devueve el primer operador es el mayor, false es caso contrario 
 */
    public boolean resta2(){
        return num1 > num2;
    }
    /**
     * 
     * @return la multiplicacion de los dos operarios 
     */
    public int multiplica(){
        int result=num1*num2;
        return result;
    }
    /**
     * 
     * @return la division de los dos operarios (si el divisor no es cero)
     *  
     */
    public int divide(){
        int result=num1/num2;
        return result;
    }
  
 
    /**
     * @param args the command line arguments
     */
    /*
    public static void main(String[] args) {
        // TODO code application logic here
        Calculadora calcu = new Calculadora(20, 10);
        System.out.println(calcu.suma());
    }
    */
}
