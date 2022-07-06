import MyNfts from 'components/MyNfts'

const YourNftsPage = () => {
  const localNfts = localStorage['yourNfts']
    ? JSON.parse(localStorage['yourNfts'])
    : []

  return (
    <>
      <MyNfts localNfts={localNfts} />
    </>
  )
}

export default YourNftsPage
