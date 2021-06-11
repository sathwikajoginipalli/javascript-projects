import java.util.*;
class Hello{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the length of array");
        int length = sc.nextInt();
        fact(length);
        sc.close();
    }
    static void fact(int n){
        for(int j=1; j<=n;j++){
            int flag = 0;
            int m = j/2;
            if(j==1){
                System.out.println(j+" is not a prime");
                flag = 1;
            }
            for(int i=2;i<=m;i++){
            if (j%i==0){
                System.out.println(j+" is not a prime");
                flag = 1;
                break;
            }
        }
        if(flag==0)  { System.out.println(j+" is prime number"); }  
        }
    }
}

