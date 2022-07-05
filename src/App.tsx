import './App.css'
import HomePage from 'pages/Home'
import PageRender from 'pages/PageRender'
import Header from 'components/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CreateNft from 'pages/CreateNft'
import NftPage from 'pages/NftPage'

function App() {
  return (
    <Router>
      <PageRender>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create-nft' element={<CreateNft />} />
          <Route path='/nft' element={<NftPage />} />
        </Routes>
      </PageRender>
    </Router>
  )
}

export default App
