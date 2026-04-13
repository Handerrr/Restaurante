import * as S from '../styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  goToFinished,
  goToAddress,
  clear,
} from '../../../../store/reducers/cart'
import type { RootReducer } from '../../../../store'
import { useCheckoutMutation } from '../../../../services/api'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Payment = () => {
  const dispatch = useDispatch()
  const { items, delivery } = useSelector((state: RootReducer) => state.cart)

  const [checkout, { isLoading }] = useCheckoutMutation()

  const currentYear = new Date().getFullYear()

  const form = useFormik({
    initialValues: {
      name: '',
      number: '',
      code: '',
      month: '',
      year: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Nome muito curto')
        .required('Campo obrigatório'),

      number: Yup.string()
        .matches(/^\d{16}$/, 'Cartão deve ter 16 dígitos')
        .required('Campo obrigatório'),

      code: Yup.string()
        .matches(/^\d{3}$/, 'CVV deve ter 3 dígitos')
        .required('Campo obrigatório'),

      month: Yup.string()
        .matches(
          /^(0[1-9]|1[0-2])$/,
          'Mês inválido, adicione um mês entre 01 e 12',
        )
        .required('Campo obrigatório'),

      year: Yup.string()
        .matches(/^\d{4}$/, 'Ano inválido')
        .required('Campo obrigatório')
        .test(
          'valid-year',
          `Ano deve estar entre ${currentYear} e ${currentYear + 15}`,
          (value) => {
            if (!value) return false
            const year = Number(value)
            return year >= currentYear && year <= currentYear + 15
          },
        ),
    }),
    onSubmit: async (values) => {
      try {
        const response = await checkout({
          products: items.map((item) => ({
            id: item.id,
            price: item.preco,
          })),
          delivery: {
            receiver: delivery!.receiver,
            address: {
              description: delivery!.address,
              city: delivery!.city,
              zipCode: delivery!.cep,
              number: Number(delivery!.number),
              complement: delivery!.complement || '',
            },
          },
          payment: {
            card: {
              name: values.name,
              number: values.number,
              code: Number(values.code),
              expires: {
                month: Number(values.month),
                year: Number(values.year),
              },
            },
          },
        }).unwrap()

        dispatch(goToFinished(response.orderId))
        dispatch(clear())
      } catch (error) {
        console.error(error)
        alert('Erro ao finalizar pedido')
      }
    },
  })

  return (
    <S.Sidebar>
      <S.Title>Pagamento</S.Title>

      <form onSubmit={form.handleSubmit}>
        <S.Label>Nome no cartão</S.Label>
        <S.Input
          name="name"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        {form.touched.name && form.errors.name && (
          <small>{form.errors.name}</small>
        )}

        <S.Row>
          <div>
            <S.Label>Número do cartão</S.Label>
            <S.Input
              name="number"
              maxLength={16}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.number && form.errors.number && (
              <small>{form.errors.number}</small>
            )}
          </div>

          <div>
            <S.Label>CVV</S.Label>
            <S.Input
              name="code"
              maxLength={3}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.code && form.errors.code && (
              <small>{form.errors.code}</small>
            )}
          </div>
        </S.Row>

        <S.Row>
          <div>
            <S.Label>Mês</S.Label>
            <S.Input
              name="month"
              maxLength={2}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.month && form.errors.month && (
              <small>{form.errors.month}</small>
            )}
          </div>

          <div>
            <S.Label>Ano</S.Label>
            <S.Input
              name="year"
              maxLength={4}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.year && form.errors.year && (
              <small>{form.errors.year}</small>
            )}
          </div>
        </S.Row>

        <S.Button type="submit" disabled={isLoading}>
          {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
        </S.Button>

        <S.Button type="button" onClick={() => dispatch(goToAddress())}>
          Voltar para a edição de endereço
        </S.Button>
      </form>
    </S.Sidebar>
  )
}

export default Payment
