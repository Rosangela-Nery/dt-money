import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function useSymmary() {
    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) => {
      /*Se a minha transaction.type === 'income' eu vou pegar o acc.income e vou somar com o transaction.price se não, vou pegar o acc.outcome e vou somar com o transaction.price*/
      if(transaction.type === 'income') {
        acc.income += transaction.price;
  
        /*Quando for uma entrada eu vou aumentar o total com o preço da transação*/
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
  
              /*Quando for uma saída eu vou diminuir o total usando o preço da transação*/
        acc.total -= transaction.price;
      }
      return acc;
    }, {
        income: 0,
        outcome: 0,
        total: 0
      }
    )

    return summary;
}