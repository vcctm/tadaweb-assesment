import MyNfts from "components/MyNfts";

const YourNftsPage = () => {
  const test = JSON.parse(localStorage['yourNfts'])

  return (
    <>
     <MyNfts
      nfts={test}
     />
    </>
  )
}

export default YourNftsPage;