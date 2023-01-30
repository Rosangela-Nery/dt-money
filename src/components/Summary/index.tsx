import { SummaryCar, SummaryContainer } from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

export function Summary() {
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

    return (
        <SummaryContainer>
            <SummaryCar>
              <header>
                  <span>Entradas</span>
                  <ArrowCircleUp size={32} color="#00b37e" />
              </header>
              <strong>R$ {summary.income}</strong>
            </SummaryCar>

            <SummaryCar>
              <header>
                  <span>Saídas</span>
                  <ArrowCircleDown size={32} color="#f75a68" />
              </header>
              <strong>R$ {summary.outcome}</strong>
            </SummaryCar>

            <SummaryCar variant='green'>
              <header>
                  <span>Total</span>
                  <CurrencyDollar size={32} color="#fff" />
              </header>
              <strong>R$ {summary.total}</strong>
            </SummaryCar>
        </SummaryContainer>
    )
}