const a = 10;

const fibonacci = (n: number): number => {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(a));
