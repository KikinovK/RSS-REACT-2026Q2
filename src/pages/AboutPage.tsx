const AboutPage = () => {
  return (
    <div className="min-h-screen bg-deep-space text-stardust font-noigrotesk flex flex-col items-center justify-center px-8 py-12 relative overflow-hidden">

      <div
        className="absolute w-125 h-125 rounded-full blur-[120px] opacity-20 pointer-events-none -top-40 -left-20"
        style={{ backgroundImage: 'var(--gradient-guidepost-green, radial-gradient(rgb(211, 251, 82) 0%, rgb(122, 243, 255) 52%, rgba(0, 0, 0, 0) 78%))' }}
      />
      <div
        className="absolute w-125 h-125 rounded-full blur-[140px] opacity-15 pointer-events-none -bottom-40 -right-20"
        style={{ backgroundImage: 'var(--gradient-guidepost-green, radial-gradient(rgb(211, 251, 82) 0%, rgb(122, 243, 255) 52%, rgba(0, 0, 0, 0) 78%))' }}
      />

      <main className="max-w-2xl w-full flex flex-col gap-8 z-10">

        <header className="text-center md:text-left">
          <h1 className="font-sansplomb text-heading-lg md:text-5xl uppercase tracking-[-0.02em] leading-0.85 text-stardust">
            About Pokémon Search
          </h1>
          <p className="text-body-sm text-muted-text mt-2 font-light">
            An agile, high-performance dashboard driven by modern web technologies.
          </p>
        </header>

        <section className="bg-white/6 border border-white/10 rounded-3xl p-6 flex flex-col gap-4 backdrop-blur-md">
          <h2 className="text-heading-sm font-medium text-stardust tracking-tight">
            Author Profile
          </h2>
          <div className="flex flex-col gap-2">
            <h3 className="text-subheading font-medium text-guidepost-green">
              Kostiantyn Kikinov
            </h3>
            <p className="text-body text-stardust font-light leading-relaxed">
              Aspiring Frontend Developer dedicated to building highly interactive,
              compact, and optimized web environments using modern technologies like
              React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-between gap-6 bg-midnight-core/50 border border-white/5 rounded-3xl p-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h4 className="text-body font-medium text-stardust">
              RS School React Course
            </h4>
            <p className="text-body-sm text-muted-text">
              Developed as part of the React materials evaluation framework.
            </p>
          </div>

          <a
            href="https://rs.school/courses/reactjs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-guidepost-green text-stardust font-medium text-body-sm px-4 py-3 rounded-lg hover:bg-guidepost-green hover:text-deep-space transition-all duration-300 shadow-[0_0_15px_rgba(211,251,82,0.1)] hover:shadow-[0_0_25px_rgba(211,251,82,0.3)] whitespace-nowrap"
          >
            Go to Course
          </a>
        </section>

      </main>
    </div>
  );
};

export default AboutPage;
