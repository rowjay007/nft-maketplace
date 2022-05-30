/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
     {/*  <nav className="border-b p-6">
        <p className="text-4xl font-bold">Rowjay Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">Home</a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-pink-500">Sell NFT</a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-pink-500">My NFTs</a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-pink-500">Dashboard</a>
          </Link>
        </div>
      </nav> */}

      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          {/* <p className="text-4xl font-bold">Rowjay Marketplace</p> */}
          <Link href="/">
            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              home
            </a>
          </Link>
          <Link href="/create-nft">
            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              Sell NFT
            </a>
          </Link>
          <Link href="/my-nfts">
            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp