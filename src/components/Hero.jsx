import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/80"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl">
          We build delightful apps for ambitious brands
        </h1>
        <p className="mt-5 max-w-2xl text-base text-neutral-700 sm:text-lg">
          Product strategy, UX design, and full-stack development. From MVP to enterprise scale, we ship fast and iterate even faster.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-md bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 transition-colors"
          >
            View our work
          </a>
          <a
            href="#services"
            className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-neutral-900 ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 transition-colors"
          >
            What we offer
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
