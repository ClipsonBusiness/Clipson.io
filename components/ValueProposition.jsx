import React from 'react'

const ValueProposition = () => {
  const problems = [
    {
      icon: '💸',
      title: 'Hard to Monetize Your Content?',
      description: 'Many creators struggle to find brand deals or reliable income streams. Small followings and lack of contacts make sponsorships rare.',
      solution: 'ClipSon brings campaign opportunities directly to you, so even creators with ~1,000 followers can earn $100–$1,000+ by consistently posting clips.',
    },
    {
      icon: '⚠️',
      title: 'Tired of Unreliable Payouts?',
      description: 'Creators risk not getting paid or dealing with scams. You need a platform you can trust with your time and content.',
      solution: 'ClipSon guarantees verified, bot-free views and secure payouts for your content. You get paid fairly only for real engagement.',
    },
    {
      icon: '⏰',
      title: 'No Time for Complex Deals?',
      description: 'Negotiating with brands and managing content requirements is time-consuming. You want to create, not deal with admin work.',
      solution: 'With ClipSon, you create content normally, just add the required element, post it, and get paid – no lengthy negotiations or admin work.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why ClipSon Exists
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We understand the challenges creators face. Here's how ClipSon solves them.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {problem.description}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-clipson-green font-semibold">
                    {problem.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueProposition

