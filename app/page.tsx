const features = [
  {
    title: 'AI Auto-Captions',
    body: 'ClipFlow transcribes speech, highlights punchlines, and styles kinetic captions that stay readable on mobile.',
  },
  {
    title: 'Attention Dynamics Engine',
    body: 'Mirage-like pacing model detects dips, spikes, and scroll-risk moments before viewers leave.',
  },
  {
    title: 'One-Tap TikTok Export',
    body: 'Render vertical clips with safe-zone captions, hooks, and direct TikTok-ready formatting.',
  },
  {
    title: 'Instagram Reels Optimized',
    body: 'Auto crops, trims, and caption placement tuned for Reels retention and thumbnail clarity.',
  },
  {
    title: 'Smart Trimming',
    body: 'Remove dead air, filler pauses, and weak intros while keeping story beats intact.',
  },
  {
    title: 'Viral Templates',
    body: 'Use creator-tested hook layouts, reaction cuts, and caption styles built for short-form velocity.',
  },
];

const steps = [
  ['01', 'Upload Raw Footage', 'Drop interviews, podcasts, demos, or phone clips. ClipFlow accepts messy takes.'],
  ['02', 'AI Analyzes & Edits', 'Attention Dynamics finds hooks, trims slow sections, and generates synced captions.'],
  ['03', 'Export to Social Media', 'Ship polished TikToks, Reels, and Shorts in seconds with platform-safe framing.'],
];

const tiers = [
  {
    name: 'Free',
    price: '$0',
    tagline: 'Start editing without credit card.',
    items: ['5 exports per month', 'AI auto-captions', 'Smart trimming', 'ClipFlow watermark'],
    featured: false,
  },
  {
    name: 'Pro',
    price: '$12/mo',
    tagline: 'Built for creators posting daily.',
    items: ['Unlimited exports', 'No watermark', 'Attention Dynamics Engine', 'TikTok + Reels direct export', 'Premium viral templates'],
    featured: true,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-ink">
      <div className="noise" />

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-void/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#hero" className="group flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-neon to-electric shadow-neon">
              <span className="absolute inset-1 rounded-xl border border-white/30" />
              <span className="font-display text-2xl text-white">C</span>
            </span>
            <span className="font-display text-2xl tracking-tight text-white">ClipFlow</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-bold text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#features">Features</a>
            <a className="transition hover:text-white" href="#how">How It Works</a>
            <a className="transition hover:text-white" href="#pricing">Pricing</a>
          </div>
          <a href="#waitlist" className="neon-button rounded-full px-5 py-2.5 text-sm font-black text-white">
            <span className="relative z-10">Join Waitlist</span>
          </a>
        </div>
      </nav>

      <section id="hero" className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-36 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:pb-32 lg:pt-44">
        <div className="relative z-10">
          <div className="section-label mb-7">
            <span className="h-2 w-2 rounded-full bg-neon shadow-neon" />
            AI editor for short-form velocity
          </div>
          <h1 className="max-w-4xl font-display text-6xl leading-[0.9] tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">
            Edit Short-Form Videos in Seconds with AI — No Skills Needed
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            ClipFlow turns raw clips into retention-ready TikToks and Reels with AI auto-captions, smart trimming, and an Attention Dynamics model that keeps viewers watching.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#waitlist" className="neon-button rounded-full px-8 py-4 text-center text-base font-black text-white">
              <span className="relative z-10">Join Waitlist</span>
            </a>
            <a href="#pricing" className="outline-button rounded-full px-8 py-4 text-center text-base font-black text-white transition hover:border-electric/70 hover:bg-electric/10">
              Try Free
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm font-bold text-slate-300">
            {['Auto-captioned hooks', 'Dead-air removal', 'Platform-safe exports'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">{item}</span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[560px] lg:min-h-0">
          <div className="absolute left-8 top-0 h-72 w-72 rounded-full bg-neon/35 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-electric/30 blur-3xl" />
          <div className="glass-panel relative mx-auto flex max-w-[390px] animate-float flex-col rounded-[2.3rem] p-4 shadow-neon">
            <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/80 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="rounded-full bg-neon/20 px-3 py-1 text-xs font-black text-violet-200">AI EDITING</span>
              </div>
              <div className="relative aspect-[9/16] overflow-hidden rounded-[1.35rem] border border-white/10 bg-gradient-to-b from-slate-800 via-slate-950 to-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,246,0.5),transparent_32%),radial-gradient(circle_at_30%_65%,rgba(59,130,246,0.4),transparent_26%)]" />
                <div className="absolute inset-x-5 top-6 flex justify-between text-xs font-black text-white/75">
                  <span>00:12</span>
                  <span>RETENTION 94%</span>
                </div>
                <div className="absolute inset-x-7 top-28 h-44 rounded-full bg-gradient-to-br from-white/20 to-white/5 blur-sm" />
                <div className="absolute left-7 right-7 top-44 rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-center text-2xl font-black leading-tight text-white">
                    “This clip has a hook in the first 2 seconds.”
                  </p>
                </div>
                <div className="absolute left-5 right-5 bottom-20 grid grid-cols-12 items-end gap-1">
                  {[28, 44, 36, 72, 58, 91, 64, 76, 42, 88, 52, 70].map((height, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-gradient-to-t from-electric to-neon"
                      style={{ height: `${height}px` }}
                    />
                  ))}
                </div>
                <div className="absolute inset-x-0 top-16 h-20 animate-scan bg-gradient-to-b from-transparent via-electric/25 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/50 p-3 backdrop-blur">
                  <div className="mb-2 flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                    <span>Smart Trim</span>
                    <span>-42 sec</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-neon to-electric" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-panel absolute -left-1 bottom-14 hidden rounded-3xl p-4 shadow-electric sm:block">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">Caption sync</p>
            <p className="mt-1 text-3xl font-black text-white">0.02s</p>
          </div>
          <div className="glass-panel absolute -right-2 top-24 hidden rounded-3xl p-4 sm:block">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">Hook score</p>
            <p className="mt-1 text-3xl font-black text-white">98%</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-6">
        <div className="mx-auto flex max-w-7xl overflow-hidden px-5 lg:px-8">
          <div className="flex min-w-max animate-marquee gap-10 text-sm font-black uppercase tracking-[0.24em] text-slate-400">
            {Array.from({ length: 2 }).map((_, group) => (
              <div key={group} className="flex gap-10">
                <span>200M+ videos created</span>
                <span>Trusted by 500K+ creators</span>
                <span>4.9★ App Store rating</span>
                <span>AI captions in seconds</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="section-label mb-5">Features</div>
          <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-white md:text-6xl">Everything needed to make scroll-stopping clips.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article key={feature.title} className="glass-panel group relative overflow-hidden rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-neon/40">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-neon/20 blur-2xl transition group-hover:bg-electric/25" />
              <span className="text-sm font-black text-violet-300">0{index + 1}</span>
              <h3 className="mt-5 text-2xl font-black text-white">{feature.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="section-label mb-5">How It Works</div>
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-white md:text-6xl">Raw footage in. Finished clip out.</h2>
          </div>
          <div className="space-y-5">
            {steps.map(([number, title, body]) => (
              <div key={title} className="glass-panel flex gap-5 rounded-[2rem] p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-neon to-electric font-black text-white shadow-neon">{number}</div>
                <div>
                  <h3 className="text-2xl font-black text-white">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['200M+', 'videos created with ClipFlow pacing and captions'],
            ['500K+', 'creators trust ClipFlow for daily short-form output'],
            ['4.9★', 'App Store rating from editors, founders, and creators'],
          ].map(([value, label]) => (
            <div key={value} className="glass-panel rounded-[2rem] p-8 text-center">
              <p className="font-display text-6xl text-white">{value}</p>
              <p className="mt-3 font-bold leading-7 text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="section-label mb-5">Pricing</div>
          <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-white md:text-6xl">Start free. Upgrade when clips become content engine.</h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {tiers.map((tier) => (
            <article key={tier.name} className={`glass-panel relative rounded-[2.2rem] p-8 ${tier.featured ? 'border-neon/60 shadow-neon' : ''}`}>
              {tier.featured && <div className="absolute right-6 top-6 rounded-full bg-neon px-4 py-1 text-xs font-black uppercase tracking-[0.16em] text-white">Best value</div>}
              <h3 className="text-3xl font-black text-white">{tier.name}</h3>
              <p className="mt-3 text-slate-300">{tier.tagline}</p>
              <p className="mt-7 font-display text-6xl text-white">{tier.price}</p>
              <ul className="mt-8 space-y-4">
                {tier.items.map((item) => (
                  <li key={item} className="flex gap-3 font-bold text-slate-200">
                    <span className="mt-1 h-5 w-5 rounded-full bg-gradient-to-br from-neon to-electric" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className={`mt-8 block rounded-full px-6 py-4 text-center font-black ${tier.featured ? 'neon-button text-white' : 'outline-button text-white'}`}>
                <span className="relative z-10">Choose {tier.name}</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="waitlist" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="glass-panel relative overflow-hidden rounded-[2.6rem] p-8 text-center md:p-14">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-neon/30 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="section-label mb-6">Waitlist</div>
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-white md:text-7xl">Get early access to ClipFlow.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Join creators using AI captions, attention-aware edits, and direct social exports to turn raw footage into daily short-form momentum.
            </p>
            <form className="mx-auto mt-9 flex max-w-2xl flex-col gap-3 rounded-[1.4rem] border border-white/10 bg-slate-950/70 p-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="creator@clipflow.ai"
                aria-label="Email address"
                className="min-h-14 flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-5 font-bold text-white outline-none transition placeholder:text-slate-500 focus:border-neon"
              />
              <button type="submit" className="neon-button rounded-2xl px-7 py-4 font-black text-white">
                <span className="relative z-10">Submit</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm font-bold text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 ClipFlow. AI short-form editing for creators.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#waitlist" className="hover:text-white">Waitlist</a>
            <a href="mailto:hello@clipflow.ai" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
