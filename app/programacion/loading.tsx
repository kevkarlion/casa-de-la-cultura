export default function Loading() {
  return (
    <main className="bg-white text-black min-h-screen py-12 overflow-x-hidden">
      <header className="max-w-6xl mx-auto px-2 text-center mb-16">
        <div className="h-14 w-72 mx-auto rounded bg-neutral-200 animate-pulse" />
      </header>

      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="relative w-full h-105 md:h-130 rounded-lg overflow-hidden bg-neutral-200 animate-pulse" />
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="h-8 w-56 mx-auto rounded bg-neutral-200 animate-pulse mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow bg-neutral-100 animate-pulse">
              <div className="h-48 md:h-56 bg-neutral-200" />
              <div className="p-4 space-y-3">
                <div className="h-3 w-20 rounded bg-neutral-200" />
                <div className="h-5 w-3/4 rounded bg-neutral-200" />
                <div className="flex gap-1">
                  <div className="h-4 w-12 rounded bg-neutral-200" />
                  <div className="h-4 w-16 rounded bg-neutral-200" />
                </div>
                <div className="flex gap-2">
                  <div className="h-6 w-16 rounded bg-neutral-200" />
                  <div className="h-6 w-20 rounded bg-neutral-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
