# 🚀 Parte I - Criando fluxo de exceção

Copie e cole o código abaixo no seu editor de texto:
```
<!DOCTYPE html>
<html lang='pt-BR'>
<head>
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Calculadora</title>
</head>
<body>
  <p>Informe dois números para realizar a soma:</p>
  <label for='value1'>Valor 1:</label>
  <input type='text' id='value1'>
  <label for='value2'>Valor 2:</label>
  <input type='text' id='value2'>
  <button id='button'>Somar</button>
  <p id='result'></p>
  <script>
    function sum() {
      const value1 = document.getElementById('value1').value;
      const value2 = document.getElementById('value2').value;
      const result = Number(value1) + Number(value2);
      document.getElementById('result').innerHTML = `Resultado: ${result}`;
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
    }
    window.onload = () => {
      const button = document.getElementById('button');
      button.addEventListener('click', sum);
    }
  </script>
</body>
</html>
```

Aparentemente está tudo funcionando, mas a aplicação não possui **fluxo de exceção**. Ou seja, caso ocorra um erro, eles não serão tratados. Que tal resolver isso?

* Utilize o throw new Error e o bloco try/catch.

* Evite funções que tenham muitas responsabilidades distintas.

* Caso a pessoa usuária nao preencha nenhum input, ou preencha apenas um input, lance um erro.

* Caso os valores inseridos nos inputs pela pessoa usuária não sejam números, lance um erro. Você pode fazer essa verificação utilizando a função **isNan()**.

* Adicione o texto dos erros no **parágrafo** com id result, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!

* Utilize o **finally** para apagar os valores dos inputs ao final do bloco **try/catch**.

# Parte II - Pedido de clientes

Para os exercícios a seguir, use o seguinte código:

```
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.

};

customerInfo(order);