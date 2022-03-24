from ast import For


def reverse(arr):
  print(arr[::-1])

# Driver function

arr = []
n = int(input())
for n in range(0, n):
  ele = int(input())
  arr.append(ele)
reverse(arr)