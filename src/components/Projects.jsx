function Projects() {
  const projects = [
    {
      name: 'Flowdeck',
      tagline: 'Real-time collaboration suite',
      desc: 'Docs, tasks, and chat in one place. Built with React, Node, and WebSockets for lightning-fast sync.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'CrispCart',
      tagline: 'Headless e-commerce accelerator',
      desc: 'Modular storefront + backend APIs. Launch new brands quickly and scale globally with confidence.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'PulseMD',
      tagline: 'Healthcare scheduling platform',
      desc: 'HIPAA-ready telemedicine and scheduling with secure video, payments, and EHR integrations.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <section id="projects" className="relative bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Selected projects</h2>
          <p className="mt-3 text-neutral-600">A few examples of the apps we ship and scale.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.name} className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-red-600">{p.tagline}</div>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900">{p.name}</h3>
                <p className="mt-2 text-sm text-neutral-600">{p.desc}</p>
                <div className="mt-4 text-sm font-medium text-neutral-900">Case study →</div>
              </div>
            </article>
          ))}
        </div>
        <div id="contact" className="mt-14 flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-semibold text-neutral-900">Have an idea in mind?</h3>
          <p className="mt-2 max-w-xl text-sm text-neutral-600">We can help from concept to launch. Let’s discuss timelines, scope, and pricing to fit your goals.</p>
          <a
            href="mailto:hello@launchlyapps.com"
            className="mt-6 rounded-md bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 transition-colors"
          >
            hello@launchlyapps.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
