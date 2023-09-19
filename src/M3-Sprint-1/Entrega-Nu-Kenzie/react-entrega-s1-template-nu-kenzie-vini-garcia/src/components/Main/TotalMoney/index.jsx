export function TotalMoney(listTransactions) {

        const positiveTransactions = listTransactions.listTransactions.filter((transaction) => transaction.transactionType === 'entrada');
            const sumPositive = positiveTransactions.reduce((previousValue, currentTransaction) => {
                return previousValue + currentTransaction.transactionValue;
            }, 0);
            
            const negativeTransactions = listTransactions.listTransactions.filter((transaction) => transaction.transactionType === 'despesa');
            const sumNegative = negativeTransactions.reduce((previousValue, currentTransaction) => {
                return previousValue + currentTransaction.transactionValue;
            }, 0);
            
            const balance = sumPositive - sumNegative;



    return(
        <section className="sectionTotalValue">
            <div className="valueContainer">
                <h3 className="textValue">Valor total</h3>
                <h3 className="valueNumber">{balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</h3>
            </div>
            <span className="textDescriptionActualValue">O valor se refere ao saldo</span>
        </section>
    )
}