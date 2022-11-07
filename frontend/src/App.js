import React from 'react'
import { Route, Routes } from 'react-router'
import ServerHome from './components/ServerHome'
import CreateServer from './components/CreateServer/CreateServer'
import ReadServer from './components/ReadServer/ReadServer'
import UpdateServer from './components/UpdateServer/UpdateServer'
import ServerHeader from './components/ServerHeader/ServerHeader'

const App = () => {
  return (
    <div>
      <ServerHeader />
      <Routes>
        <Route index path='/' element={<ServerHome />} />
        <Route path='/create' element={<CreateServer />} />
        <Route path='/servers' element={<ReadServer />} />
        <Route path='/update' element={<UpdateServer />} />
      </Routes>
    </div>
  )
}

export default App