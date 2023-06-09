const fibonacci = require('./index');

test('Fibonacci', () => {
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(2)).toBe(2);
  expect(fibonacci(3)).toBe(3);
  expect(fibonacci(4)).toBe(5);
  expect(fibonacci(5)).toBe(8);

  // Testes adicionais pessoais
  expect(fibonacci(6)).toBe(13);
  expect(fibonacci(7)).toBe(21);
  expect(fibonacci(8)).toBe(34);
  expect(fibonacci(9)).toBe(55);
  expect(fibonacci(10)).toBe(89);
});
