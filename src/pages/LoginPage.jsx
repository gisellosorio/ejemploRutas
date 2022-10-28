import { useLocation, useParams } from "react-router-dom"

export const LoginPage = () => {
  const { pathname, search } = useLocation()
  const params = useParams()

  console.log(params)

  return (
    <h1 style={{ color: 'red', fontSize: '2rem' }}>HOLA MUNDO DESDE LOGIN PAGE</h1>
  )
}
