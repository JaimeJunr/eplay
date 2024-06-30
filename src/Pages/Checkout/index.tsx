import * as S from './styles'

import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { usePurchaseMutation } from '../../services/api'

import Card from '../../components/Card'
import Button from '../../components/Button'
import boleto from '../../images/barcode.svg'
import cartão from '../../images/credit-card.svg'

export default function Checkout() {
  const [payWithCard, setPayWithCard] = useState(false)

  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome deve ter pelo menos 5 caracteres')
        .required('Nome obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail obrigatório'),
      cpf: Yup.string()
        .min(14, 'O CPF deve ter pelo menos 14 caracteres')
        .max(14, 'O CPF deve ter pelo menos 14 caracteres')
        .required('CPF obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('E-mail obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'E-mails não conferem')
        .required('E-mail obrigatório'),
      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Nome obrigatório') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('CPF obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Nome obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Número obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Mês obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Ano obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Código obrigatório') : schema
      ),
      installments: Yup.number().when((values, schema) =>
        payWithCard ? schema.required('Parcelamento obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 10
          }
        ],
        billing: {
          document: values.cpf,
          name: values.fullName,
          email: values.email
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: Number(values.installments),
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              name: values.cardOwner,
              document: values.cpfCardOwner
            },
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const GetErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isError = fieldName in form.errors
    if (isTouched && isError) {
      return message
    }
    return ''
  }
  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Muito Obrigado">
          <>
            <p className="margin-top">
              É com satisfação que informamos que recebemos seu pedido com
              sucesso!
              <br />
              Abaixo estão os detalhes da sua compra:
              <br />
              Número do pedido: {data.orderId}
              <br /> Forma de pagamento:
              {payWithCard ? ' Cartão de credito' : ' Boleto bancário'}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis.
              <br />
              Após a aprovação do pagamento, enviaremos um e-mail contendo o
              código de ativação do jogo.
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. <br />
              Você receberá o código no e-mail cadastrado em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. <br /> Caso tenha alguma
              dúvida ou necessite de mais informações, por favor, entre em
              contato conosco através dos nossos canais de atendimento ao
              cliente.
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de Cobrança">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="fullName">Nome Completo</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {GetErrorMessage('fullName', form.errors.fullName)}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{GetErrorMessage('email', form.errors.email)}</small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    id="cpf"
                    type="text"
                    name="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{GetErrorMessage('cpf', form.errors.cpf)}</small>
                </S.InputGroup>
              </S.Row>
              <h3 className="margin-top">
                Dados de entrega - conteúdo digital
              </h3>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="deliveryEmail">Email</label>
                  <input
                    id="deliveryEmail"
                    type="email"
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {GetErrorMessage(
                      'deliveryEmail',
                      form.errors.deliveryEmail
                    )}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="confirmDeliveryEmail">Confirme o Email</label>
                  <input
                    id="confirmDeliveryEmail"
                    type="email"
                    name="confirmDeliveryEmail"
                    value={form.values.confirmDeliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {GetErrorMessage(
                      'confirmDeliveryEmail',
                      form.errors.confirmDeliveryEmail
                    )}
                  </small>
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
                      <label htmlFor="cardOwner">
                        Nome do Titular do Cartão
                      </label>
                      <input
                        id="cardOwner"
                        type="text"
                        name="cardOwner"
                        value={form.values.cardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {GetErrorMessage('cardOwner', form.errors.cardOwner)}
                      </small>
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cardOwnerCpf">
                        CPF do Titular do Cartão
                      </label>
                      <input
                        id="cardOwnerCpf"
                        type="text"
                        name="cardOwnerCpf"
                        value={form.values.cpfCardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {GetErrorMessage(
                          'cardOwnerCpf',
                          form.errors.cpfCardOwner
                        )}
                      </small>
                    </S.InputGroup>
                  </S.Row>
                  <S.Row marginTop="24px">
                    <S.InputGroup>
                      <label htmlFor="cardDisplay">Nome no Cartão</label>
                      <input
                        id="cardDisplay"
                        type="text"
                        name="cardDisplay"
                        value={form.values.cardDisplayName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {GetErrorMessage(
                          'cardDisplay',
                          form.errors.cardDisplayName
                        )}
                      </small>
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cardNumber">Cartão de Crédito</label>
                      <input
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {GetErrorMessage('cardNumber', form.errors.cardNumber)}
                      </small>
                    </S.InputGroup>
                    <S.InputGroup maxWidth="123">
                      <label htmlFor="expireMonth">Mês de Vencimento</label>
                      <input
                        id="expireMonth"
                        type="text"
                        name="expireMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {GetErrorMessage(
                          'expireMonth',
                          form.errors.expiresMonth
                        )}
                      </small>
                    </S.InputGroup>
                    <S.InputGroup maxWidth="123">
                      <label htmlFor="expireYear">Ano de Vencimento</label>
                      <input
                        id="expireYear"
                        type="text"
                        name="expireYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {GetErrorMessage('expireYear', form.errors.expiresYear)}
                      </small>
                    </S.InputGroup>
                    <S.InputGroup maxWidth="48px">
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {GetErrorMessage('cardCode', form.errors.cardCode)}
                      </small>
                    </S.InputGroup>
                  </S.Row>
                  <S.Row marginTop="24px">
                    <S.InputGroup maxWidth="150px">
                      <label htmlFor="installments">Parcelamento</label>
                      <select
                        name="installments"
                        id="installments"
                        value={form.values.installments}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      >
                        <option value="">1X de R$ 0,00</option>
                        <option value="">2X de R$ 0,00</option>
                        <option value="">3X de R$ 0,00</option>
                      </select>
                      <small>
                        {GetErrorMessage(
                          'installments',
                          form.errors.installments
                        )}
                      </small>
                    </S.InputGroup>
                  </S.Row>
                </>
              )}
              {!payWithCard && (
                <p>
                  Ao optar por essa forma de pagamento, é importante lembrar que
                  a confirmação pode levar até 3 dias úteis, devido aos prazos
                  estabelecidos pelas instituições financeiras. Portanto, a
                  liberação do código de ativação do jogo adquirido ocorrerá
                  somente após a aprovação do pagamento do boleto.
                </p>
              )}
            </>
          </Card>
          <Button
            variant="primary"
            type="button"
            title="Clique aqui para finalizar a compra"
            onClick={form.submitForm}
          >
            Finalizar
          </Button>
        </form>
      )}
    </div>
  )
}
