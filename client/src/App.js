import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Start from './components/pages/Start'
import Board from './components/pages/Board'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'


const App = () => (
	<Router>
		<Routes>
			<Route path='/start' element={<Start/>} />
			<Route path='/game' element={<Board />} />
			<Route path='/signup' element={<Signup />} />
			<Route path='/' element={<Login />} />
		</Routes>
	</Router>
)

export default App
