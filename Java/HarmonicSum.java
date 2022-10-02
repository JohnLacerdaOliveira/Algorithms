public class HarmonicSum {
    public static void main (String[] arg){
        int maxDenominator = 100000	;
        double sumL2R = 0.00;
        double sumR2L = 0.00;
        double absDiff;

        for (float n=1;n<=maxDenominator;n++){
            sumL2R+=(1/n);
        }
        System.out.println("sumL2R is "+sumL2R);

        for (float n=maxDenominator;n>0;n--){
            sumR2L+= (1/n);
        }
        System.out.println("sumR2L is "+ sumL2R);

        absDiff = sumL2R-sumR2L;

        System.out.println("absDiff is "+absDiff);
    }
}
