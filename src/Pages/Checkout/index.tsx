import * as S from './styles'

import Card from '../../components/Card'
import Button from '../../components/Button'
import { useState } from 'react'

import boleto from '../../images/barcode.svg'
import cartão from '../../images/credit-card.svg'

export default function Checkout() {
  const [payWithCard, setPayWithCard] = useState(false)

  return (
    <div className="container">
      <Card title="Dados de Cobrança">
        <>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="FullName">Nome Completo</label>
              <input id="FullName" type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </S.InputGroup>
          </S.Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="deliveryEmail">Email</label>
              <input id="deliveryEmail" type="email" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o Email</label>
              <input id="confirmDeliveryEmail" type="email" />
            </S.InputGroup>
          </S.Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <S.tabButton
            onClick={() => setPayWithCard(false)}
            isActive={!payWithCard}
          >
            <img src={boleto} alt="Boleto" />
            Boleto Bancario
          </S.tabButton>
          <S.tabButton
            onClick={() => setPayWithCard(true)}
            isActive={payWithCard}
          >
            <img src={cartão} alt="Cartão de Credito" />
            Cartão de Credito
          </S.tabButton>
          {payWithCard && (
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="cardOwner">Nome do Titular do Cartão</label>
                  <input id="cardOwner" type="text" />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cardOwnerCpf">CPF do Titular do Cartão</label>
                  <input id="cardOwnerCpf" type="text" />
                </S.InputGroup>
              </S.Row>
              <S.Row marginTop="24px">
                <S.InputGroup>
                  <label htmlFor="cardDisplay">Nome no Cartão</label>
                  <input id="cardDisplay" type="text" />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cardNumber">Cartão de Crédito</label>
                  <input id="cardNumber" type="text" />
                </S.InputGroup>
                <S.InputGroup maxWidth="123">
                  <label htmlFor="expireMonth">Mês de Vencimento</label>
                  <input id="expireMonth" type="text" />
                </S.InputGroup>
                <S.InputGroup maxWidth="123">
                  <label htmlFor="expireYear">Ano de Vencimento</label>
                  <input id="expireYear" type="text" />
                </S.InputGroup>
                <S.InputGroup maxWidth="48px">
                  <label htmlFor="cardCode">CVV</label>
                  <input id="cardCode" type="text" />
                </S.InputGroup>
              </S.Row>
              <S.Row marginTop="24px">
                <S.InputGroup maxWidth="150px">
                  <label htmlFor="installments">Parcelamento</label>
                  <select>
                    <option value="">1X de R$ 0,00</option>
                    <option value="">2X de R$ 0,00</option>
                    <option value="">3X de R$ 0,00</option>
                  </select>
                </S.InputGroup>
              </S.Row>
            </>
          )}
          {!payWithCard && (
            <p>
              Ao optar por essa forma de pagamento, é importante lembrar que a
              confirmação pode levar até 3 dias úteis, devido aos prazos
              estabelecidos pelas instituições financeiras. Portanto, a
              liberação do código de ativação do jogo adquirido ocorrerá somente
              após a aprovação do pagamento do boleto.
            </p>
          )}
        </>
      </Card>
      <Button
        variant="primary"
        type="button"
        title="Clique aqui para finalizar a compra"
      >
        Finalizar
      </Button>
    </div>
  )
}
