type MainProps = {
  title?: string
}

export function Main({ title = 'My main component' }: MainProps) {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">{title}</h1>
    </main>
  )
}
