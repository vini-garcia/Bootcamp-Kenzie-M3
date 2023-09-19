export function CardTransaction({deleteTransactions, transaction}) {

    return(
        <>
        {transaction.transactionType === 'entrada' ? (
            <li className="li greenBorder">
                <h2 className="liDescription">{transaction.description}</h2>
                <span className="liType">{transaction.transactionType}</span>
                <span className="liValue">{transaction.transactionValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</span>
                <button className="buttonDelete" onClick={() => deleteTransactions(transaction.id)}>Excluir</button>
            </li>
        ) : (
            <li className="li greyBorder">
                <h2 className="liDescription">{transaction.description}</h2>
                <span className="liType">{transaction.transactionType}</span>
                <span className="liValue">{transaction.transactionValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</span>
                <button className="buttonDelete" onClick={() => deleteTransactions(transaction.id)}>Excluir</button>
            </li>
        )}
        </>
    )
}