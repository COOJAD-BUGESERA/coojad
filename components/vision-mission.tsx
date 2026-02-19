import { Eye, Target, Sparkles } from 'lucide-react'

export default function VisionMission() {
  return (
    <section className="relative py-28 bg-primary overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Who We Are</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Vision */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Eye className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-lg text-white/75 leading-relaxed">
              To become a micro-finance institution which enjoys operational self-sufficiency and offers a sufficient diversity of financial products adapted to the real needs of members and clients, with particular focus on young people.
            </p>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Our Motto</p>
              <p className="text-lg text-accent font-bold tracking-wide">
                Work · Progress · Mutual Solidarity · ICT
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-white/75 leading-relaxed">
              To contribute to the development of Bugesera District through the provision of financial services that facilitate the creation of jobs and the improvement of the socio-economic well-being of young people in particular and the population in general.
            </p>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Key Actions</p>
              <ul className="space-y-3">
                {[
                  'Promote mobilization and securing of deposits from economically active members',
                  'Facilitate access to credits and increase credit portfolio',
                  'Deliver financial education and promote financial inclusion',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/75 text-sm">
                    <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
