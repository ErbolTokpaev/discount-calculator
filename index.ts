interface IData {
    price: number,
    discount: number,
    isInstallment: boolean,
    months: number,
}

const totalPrice = (data: IData):number => {
    const newPrice: number = data.price - data.price * data.discount / 100;
    let monthlySum: number = newPrice;
    if (data.isInstallment) {
        return monthlySum = monthlySum / data.months
    }
    return monthlySum;
}
const price = totalPrice({ price: 200000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250