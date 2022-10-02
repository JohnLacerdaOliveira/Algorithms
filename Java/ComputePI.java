public class ComputePI {
    public static void main (String[] arg){
        int maxDenominator = 10000;
        double pi=0;

        for (float i=1;i<=maxDenominator;i+=2){

           if (i%4 ==1){
               pi+=(1/i);
           }else{
               pi-=(1/i);
           }
        }
        System.out.println(4*pi);
    }
}
