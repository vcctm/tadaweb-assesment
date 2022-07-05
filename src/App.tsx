import './App.css'
import HomePage from 'pages/Home'
import PageRender from 'pages/PageRender'
import Header from 'components/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NftCreatePage from 'pages/NftCreatePage'
import NftEditPage from 'pages/NftEditPage'
import NftPage from 'pages/NftPage'

function App() {
  return (
    <Router>
      <PageRender>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/nft' element={<NftPage />} />
          <Route path='/create-nft' element={<NftCreatePage />} />
          <Route path='/edit-nft' element={<NftEditPage />} />
        </Routes>
      </PageRender>
    </Router>
  )
}

export default App
