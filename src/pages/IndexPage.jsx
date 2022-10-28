import { Link, useLocation, useParams } from 'react-router-dom'

export const IndexPage = () => {
  const location = useLocation()
  const params = useParams()

  console.log(location)

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to='/auth/login'>
          Pagina de Login
        </Link>
        <Link to='/auth/register'>
          Pagina de Register
        </Link>
        <Link to='/admin'>
          Pagina de admin
        </Link>
      </div>
    </>
  )
}
