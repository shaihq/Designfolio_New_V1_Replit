export default function TrustedBySection() {
  const companies = [
    { name: "Cognition", logo: "🧠" },
    { name: "Etched", logo: "⚡" },
    { name: "Delve", logo: "🔍" },
    { name: "Coframe", logo: "🎨" },
    { name: "Gamma", logo: "γ" },
    { name: "Linear", logo: "📐" },
    { name: "Notion", logo: "✍️" },
    { name: "Vercel", logo: "▲" },
  ];

  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-sm sm:text-base font-medium text-foreground/60 mb-6 sm:mb-8" data-testid="text-trusted-heading">
          Trusted by industry leaders at
        </h3>
        
        <div className="relative">
          <div 
            className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, hsl(var(--background)) 0%, transparent 100%)'
            }}
          />
          
          <div 
            className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, hsl(var(--background)) 0%, transparent 100%)'
            }}
          />
          
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex items-center justify-center px-6 sm:px-8 md:px-12 whitespace-nowrap flex-shrink-0"
                  data-testid={`logo-${company.name.toLowerCase()}-${index}`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl opacity-70">{company.logo}</span>
                    <span className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground/70">
                      {company.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex animate-scroll" aria-hidden="true">
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`duplicate-${company.name}-${index}`}
                  className="flex items-center justify-center px-6 sm:px-8 md:px-12 whitespace-nowrap flex-shrink-0"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl opacity-70">{company.logo}</span>
                    <span className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground/70">
                      {company.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
