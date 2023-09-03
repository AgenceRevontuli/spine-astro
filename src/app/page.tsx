import FormPost from "./Component/FormPost"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1 className="text-8xl">SuperPost</h1>
        </div>
        <FormPost />
    </main>
  )
}
