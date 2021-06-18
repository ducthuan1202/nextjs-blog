import Head from 'next/head'
import MainLayout from 'components/layouts/main'

export default function Home() {

  const mode = process.env.APP_MODE;
  console.log("mode", mode)
  console.log("mode", process.env.secrect_key)

  return (
    <MainLayout>
      <Head>
        <title>Brian</title>
      </Head>

      <h1 className="title">
        Welcome to Nextjs
      </h1>
    </MainLayout>
  )
}
