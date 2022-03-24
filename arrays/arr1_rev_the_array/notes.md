Iterative:

  while(start > end)
    use temp to swap start and end
    start++, end--

Recursive:

  if(start >= end)
    return;
  swap start and end using temp
  recursively call fun(arr, start+1, end-1)

Slicing in .py only:

  arr(start:end:skip)

  start -> no need as default takes 0
  end -> no need as default take end
  skip -> for skipping values. Here put -1 for reversing