export default function Achievements() {
  const achievementsList = [
    {
      id: 1,
      category: "Certification",
      title: "AWS Certified Cloud Practioner",
      date: "2025",
      desc: "Validated expertise in developing, deploying, and debugging cloud-based applications using AWS.",
      icon: "fa-aws",
      color: "text-accent-orange",
      bg: "bg-accent-orange/10 border-accent-orange/30",
      link: "https://www.credly.com/badges/7cb34bd6-8806-411d-a01e-eea51dec0e0f/public_url"
    },
    {
      id: 2,
      category: "Milestone",
      title: "BCA Graduation - Christ University",
      date: "May 2026",
      desc: "Successfully completed Bachelor of Computer Applications with a focus on software engineering architectures.",
      icon: "fa-graduation-cap",
      image: "/images/Christ_University_Official_Logo.png",
      color: "text-accent-cyan",
      bg: "bg-accent-cyan/10 border-accent-cyan/30"
    },
    {
      id: 3,
      category: "Professional",
      title: "6-Month Internship at Moneywise",
      date: "Oct 2025 - Mar 2026",
      desc: "Served as an App and Website Developer intern, delivering production-ready features for a Magazine startup.",
      icon: "fa-briefcase",
      image: "/images/Moneywisescreenshot.png",
      color: "text-accent-green",
      bg: "bg-accent-green/10 border-accent-green/30"
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block py-1.5 px-4 bg-accent-blue/10 border border-accent-blue/30 rounded-full text-xs font-bold tracking-widest uppercase text-accent-blue mb-4">
          Milestones
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Certifications & <span className="gradient-text">Achievements</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementsList.map((item) => (
          <div key={item.id} className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300 group">
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl mb-6 border border-white/10"
              />
            )}
            <div className="flex justify-between items-start mb-6">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 rounded-2xl object-cover border border-white/10 group-hover:scale-110 transition-transform"
                />
              ) : (
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${item.bg} group-hover:scale-110 transition-transform`}>
                  <i className={`fab ${item.icon} fas ${item.icon} text-2xl ${item.color}`}></i>
                </div>
              )}
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{item.date}</span>
            </div>

            <span className="text-xs font-semibold text-gray-400 mb-2 block">{item.category}</span>
            <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {item.desc}
            </p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-medium text-accent-orange hover:underline"
              >
                View Credly Badge →
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
