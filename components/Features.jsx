import React from 'react'

const Features = () => {
  const features = [
    {
      icon: '📊',
      title: 'Consistent Campaign Opportunities',
      subtitle: 'Always something to clip.',
      description: "ClipSon offers a steady stream of campaigns so creators can earn continuously. New campaigns are added frequently (30+ active campaigns at any time, from gaming highlights to music promos), meaning there's always an opportunity to monetize content.",
    },
    {
      icon: '💵',
      title: 'Transparent, High Payouts',
      subtitle: 'Earn for every real view.',
      description: "Creators know exactly what they'll earn (e.g. a fixed CPM rate per 1K views or set bounty) before joining a campaign. No hidden fees or confusing points – if a campaign pays $600 per 1M views, you see that upfront. What you see is what you get in earnings.",
    },
    {
      icon: '⚡',
      title: 'Fast & Secure Payments',
      subtitle: 'Get paid quickly, in your preferred way.',
      description: 'ClipSon pays out via reliable methods like PayPal or crypto (USDT) as soon as earnings are verified. No long waits – payouts are processed promptly, so you can cash out securely, every time.',
    },
    {
      icon: '👥',
      title: 'No Large Following Needed',
      subtitle: 'Designed for up-and-coming creators.',
      description: 'Many platforms require huge subscriber counts; ClipSon is accessible to smaller creators. Most campaigns only require ~1,000 followers on a platform, which is very achievable. You can succeed on ClipSon with skill and consistency, not just follower count.',
    },
    {
      icon: '🤝',
      title: 'Community Support & Growth',
      subtitle: 'Join a thriving creator community.',
      description: "ClipSon isn't just a marketplace, but a community. Connect with thousands of fellow clippers in our community channels – swap tips, celebrate wins, and get instant help from the ClipSon team. You're never alone on your journey to viral success.",
    },
    {
      icon: '🛡️',
      title: 'Quality and Fairness Assurance',
      subtitle: 'We value your effort.',
      description: "ClipSon's AI-powered fraud detection ensures every view that you earn is real – so honest creators always get the rewards. Our strict fairness policy means no random bans; we succeed when you do.",
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why Creators Choose ClipSon
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Everything you need to turn your clips into consistent income.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-clipson-green font-semibold text-sm mb-3">
                  {feature.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Social Proof Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-clipson-green mb-2">5,000+</div>
              <div className="text-gray-600">Clips Uploaded</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-clipson-green mb-2">$500K+</div>
              <div className="text-gray-600">Paid to Creators</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-clipson-green mb-2">7,500+</div>
              <div className="text-gray-600">Active Creators</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-clipson-green mb-2">30+</div>
              <div className="text-gray-600">Active Campaigns</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

