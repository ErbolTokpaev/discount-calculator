"use strict";
const totalPrice = (data) => {
    const newPrice = data.price - data.price * data.discount / 100;
    let monthlySum = newPrice;
    if (data.isInstallment) {
        return monthlySum = monthlySum / data.months;
    }
    return monthlySum;
};
const price = totalPrice({ price: 200000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250
