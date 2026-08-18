'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ProfileCard from '@/components/ProfileCard';

export default function About() {
  const router = useRouter();

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block py-1.5 px-4 bg-accent-blue/10 border border-accent-blue/30 rounded-full text-xs font-bold tracking-widest uppercase text-accent-blue mb-4">
          About Me
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          The Developer <span className="gradient-text">Behind the Work</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Profile Card & Stats (Left Column) */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center w-full">
          
          <div className="w-full max-w-sm mb-6 flex justify-center">
            <ProfileCard
              name="Sriniketh Sudheendra"
              title="Full Stack & Mobile Developer"
              handle="sriniketh-cp"
              status="Online"
              contactText="Hire Me"
              avatarUrl="/images/sriniphoto.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => router.push('/contact')}
              iconUrl="/assets/iconpattern.png"
              behindGlowEnabled={true}
              innerGradient="linear-gradient(145deg, rgba(79, 142, 247, 0.3) 0%, rgba(155, 89, 245, 0.3) 100%)"
            />
          </div>

          <div className="w-full max-w-sm text-center">
            {/* Stat strip retained from the original design */}
            <div className="flex justify-center items-center gap-4 bg-white/5 border border-white/10 rounded-xl py-3 px-4 mb-6">
              <div className="text-center">
                <span className="block font-display font-bold text-xl gradient-text">5+</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Projects</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10"></div>
              <div className="text-center">
                <span className="block font-display font-bold text-xl gradient-text">5+</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Clients</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10"></div>
              <div className="text-center">
                <span className="block font-display font-bold text-xl gradient-text">2+</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Yrs Exp</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-xs font-semibold px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan rounded-full">
                MCA · Christ University
              </span>
              <span className="text-xs font-semibold px-3 py-1 bg-accent-purple/10 border border-accent-purple/20 text-accent-purple rounded-full">
                Freelancer
              </span>
            </div>
          </div>
        </div>

        {/* Text Content (Right Column) */}
        <div className="lg:col-span-7 text-gray-300 text-lg leading-relaxed">
          <p className="mb-6">
            I'm <strong className="text-white">Sriniketh Sudheendra</strong>, a passionate freelance developer with a BCA degree from Christ University and currently pursuing my MCA at Christ University. My journey in software development started with a deep curiosity for how digital products are built — and quickly turned into a professional pursuit.
          </p>
          <p className="mb-6">
            I specialize in building end-to-end digital solutions — from polished web applications and high-performance mobile apps to scalable cloud-deployed systems. Whether you need a clean business website, a feature-rich mobile application, or robust API integrations hosted on AWS or GCP, I bring both technical depth and a client-first mindset to every project.
          </p>
          <p className="mb-8">
            As a freelancer, I work closely with clients to understand their goals and deliver solutions that are not just functional — but exceptional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              "BCA Graduate, pursuing MCA",
              "Full Stack (Web & Mobile) Development",
              "Cloud Deployment — AWS & GCP",
              "Clean Code & Scalable Architecture"
            ].map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="/ " download className="btn-primary px-6 py-3 bg-gradient-main text-white rounded-full font-semibold shadow-lg hover:-translate-y-1 transition-all">
              Download CV
            </a>
            <Link href="/contact" className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}