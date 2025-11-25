import React from 'react'

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-clipson-green to-clipson-green-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to turn your clips into cash?
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Join ClipSon's creator community today.
          </p>
          <p className="text-green-100 mb-8">
            No fees, no obligations – start earning from your very first clip.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button className="w-full sm:w-auto bg-white text-clipson-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Join Now – It's Free
            </button>
          </div>

          <a
            href="#faq"
            className="text-green-100 hover:text-white underline text-sm transition-colors"
          >
            Have questions? Learn more in our FAQ →
          </a>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA

