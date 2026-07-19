export default function NovedadesLoading() {
  return (
    <main className="bg-white text-black min-h-screen py-12 overflow-x-hidden">
      {/* Header skeleton */}
      <header className="container mx-auto px-6 text-center mb-16">
        <div className="h-14 w-64 mx-auto bg-neutral-200 rounded animate-pulse mb-12" />
      </header>

      {/* Featured skeletons */}
      <section className="container mx-auto px-6 mb-16">
        <div className="h-8 w-40 bg-neutral-200 rounded animate-pulse mb-6" />

        <div className="relative w-full h-105 md:h-130 rounded-xl overflow-hidden mb-10">
          <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
          <div className="absolute bottom-6 left-6 right-6 space-y-3">
            <div className="flex gap-2">
              <div className="h-5 w-16 bg-neutral-300 rounded animate-pulse" />
              <div className="h-5 w-20 bg-neutral-300 rounded animate-pulse" />
            </div>
            <div className="h-3 w-24 bg-neutral-300 rounded animate-pulse" />
            <div className="h-7 w-3/4 bg-neutral-300 rounded animate-pulse" />
            <div className="h-4 w-full bg-neutral-300 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-neutral-300 rounded animate-pulse" />
            <div className="h-9 w-24 bg-neutral-300 rounded animate-pulse" />
          </div>
        </div>
      </section>

      {/* Normal card skeletons */}
      <section className="container mx-auto px-6">
        <div className="h-8 w-52 bg-neutral-200 rounded animate-pulse mb-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="border border-neutral-200 overflow-hidden"
            >
              <div className="aspect-video w-full bg-neutral-200 animate-pulse" />
              <div className="p-5 space-y-3">
                <div className="h-3 w-20 bg-neutral-200 rounded animate-pulse" />
                <div className="flex gap-2">
                  <div className="h-4 w-14 bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 w-18 bg-neutral-200 rounded animate-pulse" />
                </div>
                <div className="h-5 w-3/4 bg-neutral-200 rounded animate-pulse" />
                <div className="h-4 w-full bg-neutral-100 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-neutral-100 rounded animate-pulse" />
                <div className="h-9 w-24 bg-neutral-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
