import { Navigate, Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"

export const AppRouter = () => {

  const verificado = false

  return (
    <Routes>
      {
        verificado
          ? <Route path="/*" element={ <PrivateRoutes /> } /> 
          : <Route path="/*" element={ <PublicRoutes /> } />
      }

      <Route path='/*' element={ <Navigate to='/' /> } />

    </Routes>
  )
}
