import * as S from '../styles'
import { useDispatch } from 'react-redux'
import { setDelivery, goToPayment } from '../../../../store/reducers/cart'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Address = () => {
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(3, 'Nome muito curto')
        .required('Campo obrigatório'),

      address: Yup.string().required('Campo obrigatório'),

      city: Yup.string().required('Campo obrigatório'),

      cep: Yup.string()
        .matches(/^\d{8}$/, 'CEP deve ter 8 números')
        .required('Campo obrigatório'),

      number: Yup.string()
        .matches(/^\d{1,5}$/, 'máximo de 5 números')
        .required('Campo obrigatório'),

      complement: Yup.string(),
    }),
    onSubmit: (values) => {
      dispatch(setDelivery(values))
      dispatch(goToPayment())
    },
  })

  return (
    <S.Sidebar>
      <S.Title>Entrega</S.Title>

      <form onSubmit={form.handleSubmit}>
        <S.Label>Quem irá receber</S.Label>
        <S.Input
          name="receiver"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        {form.touched.receiver && form.errors.receiver && (
          <small>{form.errors.receiver}</small>
        )}

        <S.Label>Endereço</S.Label>
        <S.Input
          name="address"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        {form.touched.address && form.errors.address && (
          <small>{form.errors.address}</small>
        )}

        <S.Label>Cidade</S.Label>
        <S.Input
          name="city"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        {form.touched.city && form.errors.city && (
          <small>{form.errors.city}</small>
        )}

        <S.Row>
          <div>
            <S.Label>CEP</S.Label>
            <S.Input
              name="cep"
              maxLength={8}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.cep && form.errors.cep && (
              <small>{form.errors.cep}</small>
            )}
          </div>

          <div>
            <S.Label>Número</S.Label>
            <S.Input
              name="number"
              maxLength={5}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.number && form.errors.number && (
              <small>{form.errors.number}</small>
            )}
          </div>
        </S.Row>

        <S.Label>Complemento (opcional)</S.Label>
        <S.Input
          name="complement"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />

        <S.Button type="submit">Continuar com o pagamento</S.Button>
      </form>
    </S.Sidebar>
  )
}

export default Address
