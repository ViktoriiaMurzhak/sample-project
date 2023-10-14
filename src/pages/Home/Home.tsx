import { Box } from '@mui/joy'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Sidebar from '../../components/Profile/Sidebar'
import css from './Home.module.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className={css.container}>
        <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
          <Sidebar /> <Outlet />
        </Box>
      </div>
      <Footer />
    </>
  )
}

export default Home
