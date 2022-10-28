import { useLocation, useParams } from "react-router-dom"

export const RegisterPage = () => {
  const { pathname, search } = useLocation()
  const params = useParams()

  console.log({ pathname, search, params })

  return (
    <div>RegisterPage</div>
  )
}
