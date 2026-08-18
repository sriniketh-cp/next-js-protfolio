import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-accent-purple/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-green/10 border border-accent-green/20 rounded-full text-accent-green text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></span>
            Available for Freelance Work
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black leading-tight mb-4">
            Hi, I'm <span className="gradient-text">Sriniketh</span><br />
            <span className="text-gray-400 font-bold">Sudheendra</span>
          </h1>
          <p className="text-accent-blue font-semibold text-lg md:text-xl mb-4">Freelance Full Stack Developer & Mobile App Developer</p>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            Building modern web applications, mobile apps, and cloud‑deployed systems.
          </p>
          
          <div className="flex items-center justify-center md:justify-start gap-4">
            <Link href="/contact" className="px-6 py-3 bg-gradient-main text-white rounded-full font-semibold shadow-lg hover:-translate-y-1 transition-all">
              Hire Me
            </Link>
            <Link href="/projects" className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-hero">
            <div className="w-full h-full rounded-full overflow-hidden bg-secondary border-4 border-primary relative">
              <Image 
                src="/images/sriniphoto.jpg" 
                alt="Sriniketh Sudheendra" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}