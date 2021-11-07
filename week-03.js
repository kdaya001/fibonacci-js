function fibonacci(n, i=0, prev = 0, curr = 1) { 
    if(i !== n - 1) {
        let temp = prev + curr;
        prev = curr;
        i++;
        return fibonacci(n, i, prev, temp);
    } else {
        return curr;
    }
}