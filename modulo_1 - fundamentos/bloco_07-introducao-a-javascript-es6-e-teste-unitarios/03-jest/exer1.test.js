const {
  sum,
  Myremove,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
} = require("./exer1");
const vogais = ["a", "e", "i", "o", "u"];
const code = [1, 2, 3, 4, 5];

describe("1. função Soma", () => {
  test("a soma de 4 + 5 deve retornar 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  test("a soma de 0 + 0 deve retornar 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('deve ser lançado um erro quando os paramatros sao 4 e "5" em string', () => {
    expect(() => sum(4, "5").toThrow());
  });

  test("a mensagem de erro deve ser parameters must be numbers", () => {
    expect(() => {
      sum();
    }).toThrowError(new Error("parameters must be numbers"));
  });
});

describe("2. função remover", () => {
  const arr = [1, 2, 3, 4];
  test("conferir se retorna o array [1,2,4]", () => {
    expect(myRemove(arr, 3)).toEqual([1, 2, 4]);
  });

  test("conferir se não retorna o array [1,2,3,4]", () => {
    expect(myRemove(arr, 3)).not.toEqual([1, 2, 3, 4]);
  });

  test("conferir se retorna o array [1,2,3,4]", () => {
    expect(myRemove(arr, 5)).toEqual([1, 2, 3, 4]);
  });
});

describe("3. função fizzbuzz", () => {
  test("conferir se um numero divisivel por 3 e 5 retorna fizzBuzz", () => {
    expect(myFizzBuzz(30)).toMatch("fizzbuzz");
  });

  test("verificar se um numero é divisel por 3", () => {
    expect(myFizzBuzz(3)).toMatch("fizz");
  });

  test("verificar se um numero é divisel por 5", () => {
    expect(myFizzBuzz(5)).toMatch("buzz");
  });

  test("verificar se um numero não é divisel por 3 e 5", () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  test("verificar se um numero não é divisel por 3 e 5", () => {
    expect(myFizzBuzz("pedro")).toBeFalsy();
  });
});

describe("4. função encode e decode ", () => {
  test("verificar se encode e decode são funções", () => {
    expect(typeof encode).toBe("function");
  });

  test("verificar se encode e decode são funções", () => {
    expect(typeof decode).toBe("function");
  });

  test("verificar se encode retrorna 1,2,3,4 e 5 ao receber a,e,i,o,u", () => {
    expect(encode("xablau")).toBe("x1bl15");
  });

  test("verificar se encode retrorna a,e,i,o,u ao receber 1,2,3,4,5", () => {
    expect(decode("x1bl15")).toBe("xablau");
  });

  test("verificar demais letras/números não são convertidos para cada caso", () => {
    expect(encode("Ctvrt")).toBe("Ctvrt");
  });

  test("verificar se o comprimento da string permanece o mesmo durante o processo", () => {
    const palavra = 'palavra'
    const comprimento = palavra.length
    expect(decode('palavra')).toHaveLength(comprimento);
  });

  
});
