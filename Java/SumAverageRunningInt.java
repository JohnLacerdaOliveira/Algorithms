public class SumAverageRunningInt {
    public static void main (String[] arg){
        int lowerBound = 1;
        int upperBound = 100;
        int totalSum =0;
        float average =0;

        for (int i = lowerBound;i<=upperBound;i++){
            totalSum+=i;
        };
        average = totalSum/(upperBound-lowerBound);
        System.out.println("The sum of "+ lowerBound +" to "+ upperBound +" is "+ totalSum);
        System.out.println("The average is "+ average);

    }
}
