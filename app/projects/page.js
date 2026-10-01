import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const portfolioProjects = [
    {
      id: 1,
      title: "Virtual Tour of Christ University Central Campus",
      desc: "Developed an interactive virtual tour for Christ University Central Campus, allowing users to explore campus locations through immersive 360° experiences.",
      tags: ["Seekbeak", "virtual tour", "Educational tours"],
      img: "/images/virtual tour screenshot.png",
      liveUrl: "https://virtual-tour-opal.vercel.app/"
    },
    {
      id: 2,
      title: "AI Summarizer Application",
      desc: "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
      tags: ["React js", "Open AI", "Document Summerization"],
      img: "/images/AI Summerizer screenshot.png",
      liveUrl: "https://graceful-heliotrope-81c4ce.netlify.app/"
    },
    {
      id: 3,
      title: "Hygiene Dental Care Website",
      desc: "Developed a responsive website for Hygiene Dental Care featuring Home, About, Services, and Contact sections to improve patient outreach and streamline appointment inquiries.",
      tags: ["React js", "Firebase", "tailwind css"],
      img: "/images/Hygiene Dental Care Screenshot.png",
      liveUrl: "http://hygienedental.in/"
    },
    {
      id: 4,
      title: "Moneywise Website",
      desc: "Designed a responsive website for a financial magazine company",
      tags: ["React js", "Firebase", "CSS3"],
      img: "/images/Moneywisescreenshot.png",
      liveUrl: "https://moneywisemag.in/"
    },
    {
      id: 5,
      title: "Sriram Gifts & Trophies Website",
      desc: "Developed a responsive website for a gifts and trophies shop called sriram gifts and trophies",
      tags: ["HTML", "CSS", "JavaScript"],
      img: "/images/sriram trophies screenshot.png",
      liveUrl: "https://sriramtrophies.in/"
    },
    {
      id: 6,
      title: "DSA Visualizer",
      desc: "Interactive platform to visualize common data structures (arrays, linked lists, stacks, queues, trees, graphs) and algorithms (sorting, searching) with step-by-step animations.",
      tags: ["React js", "Animation libraries", "DSA algorithms"],
      img: "/images/dsa_visualizer.png",
      liveUrl: "https://vercel.com/srinikeths-projects/dsa-visualizer/deployments"
    },
     {
      id: 7,
      title: "Dynamic Intreative DSA Algorithm Tracer",
      desc: "A dynamic and intreative DSA Algorithm tracer where students can understand there own code by creative visualizations",
      tags: ["React js", "python", "DSA algorithms"],
      img: "/images/algotrace.png",
      liveUrl: "https://vercel.com/srinikeths-projects/algotrace-ai-fronted-and-api-integration"
    }

  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block py-1.5 px-4 bg-accent-blue/10 border border-accent-blue/30 rounded-full text-xs font-bold tracking-widest uppercase text-accent-blue mb-4">
          My Work
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Portfolio & <span className="gradient-text">Past Projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioProjects.map((project) => (
          <div key={project.id} className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-300 border-white/10 hover:border-accent-blue/40 hover:shadow-[0_10px_30px_rgba(79,142,247,0.15)] flex flex-col">
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden bg-white/5">
              <Image 
                src={project.img} 
                alt={project.title} 
                fill 
                className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="px-4 py-2 bg-gradient-main text-white text-sm font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
                  View Live
                </a>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className={`text-xs font-semibold px-3 py-1 rounded-full border 
                    ${idx % 3 === 0 ? 'bg-accent-blue/10 text-accent-blue border-accent-blue/30' : 
                      idx % 3 === 1 ? 'bg-accent-purple/10 text-accent-purple border-accent-purple/30' : 
                      'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30'}`}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="font-display text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-1">{project.desc}</p>
              
              {/* Dynamic Route Link */}
              <Link href={`/projects/${project.id}`} className="text-accent-blue text-sm font-semibold hover:gap-3 flex items-center gap-2 transition-all w-fit">
                View Project Details <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}