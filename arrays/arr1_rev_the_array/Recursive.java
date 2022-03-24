package arrays.arr1_rev_the_array;

import java.util.*;

public class Recursive {

  static void reverse(int[] arr, int start, int end){
    int temp;
    if(start >= end)
      return;
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverse(arr, start+1, end-1);
  }

  static void print(int[] arr){
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
  }
  public static void main(String[] args) {
    Scanner ip = new Scanner(System.in);
    int n = ip.nextInt();
    int[] arr = new int[n];
    for (int i = 0; i < arr.length; i++) {
      arr[i] = ip.nextInt();
    }
    reverse(arr, 0, arr.length-1);
    print(arr);
    ip.close();
  }
}
