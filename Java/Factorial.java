public class Factorial {
    public static void main (String[] arg){
        long product =1;
        int lowerBound = 1;
        int upperBound = 10;

        while (lowerBound <= upperBound){
            product *=lowerBound;
            lowerBound++;
        };
        System.out.println(product);
    }
}
