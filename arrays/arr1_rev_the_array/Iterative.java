package arrays.arr1_rev_the_array;

import java.util.*;

/**
 * Iterative
 */
public class Iterative {

  static void reverse(int[] arr){
    int temp;
    int start = 0, end = arr.length-1;
    while (start < end) {
      temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
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
    reverse(arr);
    print(arr);
    ip.close();
  }
}