export const depositMoney = (amount) => {
    return (dispath) => {
        dispath({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispath) => {
        dispath({
            type: 'withdraw',
            payload: amount
        })
    }
}
