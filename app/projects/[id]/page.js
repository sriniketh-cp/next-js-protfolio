import Link from 'next/link';
import Image from 'next/image';

// 1. Your actual project data acting as your "Backend Database"
const projectsDatabase = [
  {
    id: "1",
    title: "Virtual Tour of Christ University Central Campus",
    desc: "Developed an interactive virtual tour for Christ University Central Campus, allowing users to explore campus locations through immersive 360° experiences.",
    tags: ["Seekbeak", "virtual tour", "Educational tours"],
    img: "/images/virtual tour screenshot.png",
    liveUrl: "https://virtual-tour-opal.vercel.app/",
    longDesc: "This project involved mapping the central campus and creating an interactive digital experience. It allows prospective students, alumni, and visitors to navigate through key areas, viewing 360-degree panoramas to get a realistic feel of the university infrastructure.",
  },
  {
    id: "2",
    title: "AI Summarizer Application",
    desc: "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    tags: ["React js", "Open AI", "Document Summerization"],
    img: "/images/AI Summerizer screenshot.png",
    liveUrl: "https://graceful-heliotrope-81c4ce.netlify.app/",
    longDesc: "Built with React.js and integrated with OpenAI's API, this tool helps users digest long articles quickly. Paste any URL or text block, and the application extracts the core points, saving significant reading time.",
  },
  {
    id: "3",
    title: "Hygiene Dental Care Website",
    desc: "Developed a responsive website for Hygiene Dental Care featuring Home, About, Services, and Contact sections to improve patient outreach.",
    tags: ["React js", "Firebase", "tailwind css"],
    img: "/images/Hygiene Dental Care Screenshot.png",
    liveUrl: "http://hygienedental.in/",
    longDesc: "A complete business website designed to streamline appointment inquiries and improve digital patient outreach. It features a clean, modern UI built with Tailwind CSS and uses Firebase for backend contact form handling.",
  },
  {
    id: "4",
    title: "Moneywise Website",
    desc: "Designed a responsive website for a financial magazine company.",
    tags: ["React js", "Firebase", "CSS3"],
    img: "/images/Moneywise website screenshot.png",
    liveUrl: "https://moneywisemag.in/",
    longDesc: "Developed during my 6-month internship as an App and Website Developer. This responsive site serves as the digital front door for a financial magazine company, providing readers with seamless access to financial news and views.",
  },
  {
    id: "5",
    title: "Sriram Gifts & Trophies Website",
    desc: "Developed a responsive website for a gifts and trophies shop called sriram gifts and trophies.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: "/images/sriram trophies screenshot.png",
    liveUrl: "https://sriramtrophies.in/",
    longDesc: "A bespoke e-commerce style catalogue website for a retail business client. The site allows customers to browse various trophies and corporate gifts, heavily improving the store's digital presence and client acquisition.",
  }
];

// 2. The Fetching Function
async function getProjectData(id) {
  // We wrap this in a Promise to simulate a network request delay (optional)
  // In the future, you can replace this block directly with a fetch() to your real database
  return new Promise((resolve) => {
    setTimeout(() => {
      const project = projectsDatabase.find((p) => p.id === id.toString());
      resolve(project || null);
    }, 100); // 100ms simulated network delay
  });
}

// 3. The Page Component
export default async function ProjectDetails({ params }) {
  // Await the params object in Next.js 14+ / App Router
  const resolvedParams = await params; 
  const { id } = resolvedParams;
  
  const project = await getProjectData(id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-6">The project ID {id} does not exist in our database.</p>
        <Link href="/projects" className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white font-semibold">
          &larr; Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <Link href="/projects" className="text-accent-blue font-medium mb-8 inline-block hover:underline">
        &larr; Back to Portfolio
      </Link>
      
      <div className="glass-card overflow-hidden">
        {/* Project Image Banner */}
        <div className="relative w-full h-64 md:h-96 bg-white/5 border-b border-white/10">
          <Image 
            src={project.img} 
            alt={project.title} 
            fill 
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] to-transparent opacity-90"></div>
          
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
             <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="text-xs font-bold px-3 py-1 bg-black/50 border border-white/20 backdrop-blur-md text-white rounded-full uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white capitalize leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
        
        {/* Project Content */}
        <div className="p-6 md:p-10">
          <h3 className="text-xl font-bold text-accent-blue mb-4">Project Overview</h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            {project.longDesc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between p-6 bg-white/5 border border-white/10 rounded-xl">
            <div>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Status</p>
              <p className="text-accent-green font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
                Live / Deployed
              </p>
            </div>
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="px-8 py-3 bg-gradient-main text-white font-bold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(79,142,247,0.5)] hover:-translate-y-1 transition-all"
            >
              View Live Website &rarr;
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}