import { Navigate, Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"

export const AppRouter = () => {

  //  Para poder visualizar las rutas privadas o publicas necesitas cambiar verificado
  //  verificado = true muestra las rutas privadas
  //  verificado = false muestra las rutas publicas

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
