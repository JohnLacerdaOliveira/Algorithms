class ClosestNeighbours{


	public static void main (String[] args){
		
		int [] myArray = {0,5,1209,6,2,111,112,33,111,112};
		int [] difference = new int[myArray.length-1];
		int min= Math.abs(myArray[1]-myArray[0]) ;

        // Loop myArray...
		for (int i = 0; i<= myArray.length-2;i++){
			// Push all differences to an array...
			difference[i]=Math.abs(myArray[i+1]-myArray[i]);

			if (difference[i]<min){
				min = difference[i];
			}
		}
        System.out.println("The minimum difference is " +min);
        System.out.println("The index(s) of the min differences are: ");

        //Search difference array for min values and print their position...
        for (int i =0;i<=difference.length-1;i++){
            if (difference[i]==min) {
				System.out.print("i=" + i + ", ");
			}
        }



	}
}
