

const Content = () => {
  return (
    <main className="flex-1 bg-gray-50">
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
          Welcome
        </span>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
          Build Modern Web Experiences
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Create fast, responsive, and beautiful applications using React,
          TypeScript, and Tailwind CSS. Everything you need to bring your ideas
          to life.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-3 text-xl font-semibold">⚡ Fast</h2>
          <p className="text-gray-600">
            Optimized for performance with modern web technologies.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-3 text-xl font-semibold">📱 Responsive</h2>
          <p className="text-gray-600">
            Looks great on desktops, tablets, and mobile devices.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-3 text-xl font-semibold">🎨 Modern</h2>
          <p className="text-gray-600">
            Clean, accessible, and easy to customize with Tailwind CSS.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Content;