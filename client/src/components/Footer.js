import { Link } from 'react-router-dom'
import { BsFacebook, BsTiktok, BsInstagram } from 'react-icons/bs'

export function Footer() {
  return (
    <>
      <footer className='footer container-fluid'>
        <div className='row text-white bg-primary bg-gradient mt-5 pt-5 pb-3 px-5'>
          <div className='col-xs-12 col-md-3 col-lg-3'>
            <div className='container-fluid d-flex align-items-center'>
              <Link to='/'>
                <img
                  src='/img/logo.png'
                  alt='Logo'
                  width='80'
                  height='80'
                  className='d-inline-block mx-2'
                />
              </Link>
              <h2 className='text-center'>Vet-Vet</h2>
            </div>
          </div>
          <div className='col-xs-12 col-md-3 col-lg-3'>
            <p className='h3'>Secciones</p>
            <ul>
              <li className='fs-4 '>
                <Link to='/appointments' className='text-light'>
                  Citas médicas
                </Link>
              </li>
              <li className='fs-4'>
                <Link to='/products' className='text-light'>
                  Productos
                </Link>
              </li>
              <li className='fs-4'>
                <Link to='/services' className='text-light'>
                  Servicios
                </Link>
              </li>
              <li className='fs-4'>
                <Link to='/project' className='text-light'>
                  Proyecto
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-xs-12 col-md-3 col-lg-3'>
            <p className='h3'>Nuestras redes</p>
            <ul>
              <li className='fs-4'>
                <Link
                  to='https://www.instagram.com/'
                  target='_blank'
                  className='text-light'
                >
                  <BsInstagram className='align-self-center mx-2'></BsInstagram>
                  Instagram
                </Link>
              </li>
              <li className='fs-4'>
                <Link
                  to='https://es-la.facebook.com/'
                  target='_blank'
                  className='text-light'
                >
                  <BsFacebook className='align-self-center mx-2'></BsFacebook>
                  Facebook
                </Link>
              </li>
              <li className='fs-4'>
                <Link
                  to='https://www.tiktok.com/es/'
                  target='_blank'
                  className='text-light'
                >
                  <BsTiktok className='align-self-center mx-2'></BsTiktok>
                  Tik Tok
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-xs-12 col-md-3 col-lg-3'>
            <p className='h3 text-center'>Contactanos</p>
            <form>
              <p>
                Nuestro equipo se pondrá en contacto contigo lo más rápido
                posible
              </p>
              <div className='d-flex flex-column flex-sm-row w-100 gap-2'>
                <label htmlFor='newsletter1' className='visually-hidden'>
                  Email address
                </label>
                <input
                  id='newsletter1'
                  type='text'
                  className='form-control'
                  placeholder='Correo'
                />
                <button className='btn btn-secondary' type='button'>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className='col mt-4'>
            <p className='text-center'>
              {' '}
              &copy; 2023 Sebastian Leal - Nicolas Torres. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
