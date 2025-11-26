import React from 'react'

const steps = [
  {
    title: 'Pick a creator',
    description: 'Connect with partnered streamers and get instant access to their content drops.',
    badge: 'Step 01',
  },
  {
    title: 'Clip at light-speed',
    description: 'Use ClipSon\'s editor presets to cut, caption, and brand shorts in minutes.',
    badge: 'Step 02',
  },
  {
    title: 'Earn on autopilot',
    description: 'Publish across platforms, then watch guaranteed rev-share hit your wallet every month.',
    badge: 'Step 03',
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-20 bg-[#030b1f] border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-white/60 mb-3">Playbook</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            How ClipSon Works
          </h2>
          <p className="text-white/70 mt-4">
            Watch how easy it is to go from raw stream moments to viral clips and guaranteed payouts.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-left"
            >
              <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.4em] text-white/60">
                {step.badge}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-white/70">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-1">
            <div className="rounded-[28px] overflow-hidden aspect-video shadow-2xl shadow-black/40">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/pvV4g53XE9I"
                title="How ClipSon Works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

