import './App.css'
import HomePage from 'pages/Home'
import PageRender from 'pages/PageRender'
import Header from 'components/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NftCreatePage from 'pages/NftCreatePage'
import NftEditPage from 'pages/NftEditPage'
import NftPage from 'pages/NftPage'
import YourNftsPage from 'pages/YourNftsPage'
import { GlobalProvider } from 'store/globalState'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <PageRender>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/nft/:nftId' element={<NftPage />} />
            <Route path='/create-nft' element={<NftCreatePage />} />
            <Route path='/edit-nft/:nftId' element={<NftEditPage />} />
            <Route path='/your-nfts' element={<YourNftsPage />} />
          </Routes>
        </PageRender>
      </Router>
    </GlobalProvider>
  )
}

export default App
