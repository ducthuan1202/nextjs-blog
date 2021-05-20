import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  const mode = process.env.APP_MODE;
  console.log("mode",mode)

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to Nextjs
        </h1>

        <Link href="/posts">
          <a>Posts</a>
        </Link>

        <Link href="/page">
          <a>Page my number</a>
        </Link>

      </main>

    </div>
  )
}
