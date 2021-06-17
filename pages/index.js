import MainLayout from 'components/layouts/main'

export default function Home() {

  const mode = process.env.APP_MODE;
  console.log("mode", mode)

  return (
    <MainLayout>
      <h1 className="title">
        Welcome to Nextjs
      </h1>
    </MainLayout>
  )
}
