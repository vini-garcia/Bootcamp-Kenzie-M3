import { CardTransaction } from "./CardTransaction";

export function ListTransactions({deleteTransactions, listTransactions}) {

    return(
        <section className="sectionFinancialBalance">
            <div>
                <h3 className="balanceText">Resumo financeiro</h3>
            </div>

        {listTransactions.length > 0 ? (
            <ul className="ul">
                {listTransactions.map((transaction) => {
                    return(
                        <CardTransaction key={transaction.id} deleteTransactions={deleteTransactions} transaction={transaction}/>
                    )
                })}
            </ul>

        ) : (
            <div className="noBalanceContainer">
                <h2 className="noBalanceText">Você ainda não possui nenhum lançamento</h2>
            </div>            
        )}
        </section>
    )
}