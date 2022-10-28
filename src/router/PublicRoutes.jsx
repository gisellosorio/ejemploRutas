import { Navigate, Route, Routes } from "react-router-dom"
import { IndexPage } from "../pages/IndexPage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"

export const PublicRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={ <IndexPage /> } />
      <Route path="auth/login" element={ <LoginPage /> } />
      <Route path="auth/register" element={ <RegisterPage /> } />

      <Route path='/*' element={ <Navigate to='/' /> } />

    </Routes>
  )
}
