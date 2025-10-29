function Services() {
  const services = [
    {
      title: 'Product Strategy',
      desc: 'Define the right problems to solve. Roadmaps, discovery, and KPI-driven planning to de-risk your investment.'
    },
    {
      title: 'Design & Prototyping',
      desc: 'User research, UX/UI, and clickable prototypes. We craft interfaces that feel effortless and look polished.'
    },
    {
      title: 'App Development',
      desc: 'Robust web and mobile apps using modern stacks. Scalable architecture, testing, CI/CD, and analytics baked in.'
    },
  ];

  return (
    <section id="services" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">What we do</h2>
          <p className="mt-3 text-neutral-600">Full-lifecycle product teams to move from idea to impact.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="h-10 w-10 rounded-md bg-red-500/10 ring-1 ring-red-200/50 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-red-500" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
              <div className="mt-4 text-sm font-medium text-red-600 opacity-0 transition group-hover:opacity-100">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
