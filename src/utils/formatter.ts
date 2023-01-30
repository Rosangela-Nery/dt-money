export const dateFormatter = new Intl.DateTimeFormat('pt-BR'); //Formatação para data, utilizando API de internalização do proprio JavaScript

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency', //para formatar como moeda
    currency: 'BRL', //Moeda BRL para ele colocar o R$ na frente
})