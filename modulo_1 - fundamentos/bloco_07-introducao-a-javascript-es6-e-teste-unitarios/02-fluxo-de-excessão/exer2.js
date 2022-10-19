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
    console.log(`olá ${order.order.delivery.deliveryPerson}, Entrega para: ${order.name}, telefone: ${order.phoneNumber} R. ${order.address.street}, Nº: ${order.address.number} apto: ${order.address.apartment}`)
};

customerInfo(order);

const orderModifier = (order) => {
order.order.delivery.deliveryPerson = 'luiz'

    console.log(`olá ${order.order.delivery.deliveryPerson}, Entrega para: ${order.name}, telefone: ${order.phoneNumber} R. ${order.address.street}, Nº: ${order.address.number} apto: ${order.address.apartment}`)
};

orderModifier(order);