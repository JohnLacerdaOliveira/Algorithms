public class CozaLozaWoza {
    public static void  main (String[] arg){
        int lowerBound = 1;
        int upperBound = 110;
        for (int i=lowerBound;i<=upperBound;i++){


            if(i%3==0){
               System.out.print("Coza");
            }else if(i%5==0){
                System.out.print("Loza");
            }else if(i%7==0) {
                System.out.print("Woza");
            }else{
                System.out.println(i);
            }
            if (i%11==0){
                System.out.println();
            }else{
                System.out.print(" ");
            }
        }
    }
}