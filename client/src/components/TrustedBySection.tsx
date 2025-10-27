export default function TrustedBySection() {
  const companies = [
    "Cognition",
    "Etched",
    "Delve",
    "Coframe",
    "Gamma",
    "Linear",
    "Notion",
    "Vercel",
  ];

  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-sm sm:text-base font-medium text-foreground/50 mb-8 sm:mb-10" data-testid="text-trusted-heading">
          Trusted by 20000+ designers—humble brag
        </h3>
        
        <div className="relative">
          <div 
            className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, hsl(var(--background)) 0%, transparent 100%)'
            }}
          />
          
          <div 
            className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, hsl(var(--background)) 0%, transparent 100%)'
            }}
          />
          
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`${company}-${index}`}
                  className="flex items-center justify-center px-8 sm:px-12 whitespace-nowrap flex-shrink-0"
                  data-testid={`logo-${company.toLowerCase()}-${index}`}
                >
                  <span className="text-base sm:text-lg font-medium text-foreground/40">
                    {company}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="flex animate-scroll" aria-hidden="true">
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`duplicate-${company}-${index}`}
                  className="flex items-center justify-center px-8 sm:px-12 whitespace-nowrap flex-shrink-0"
                >
                  <span className="text-base sm:text-lg font-medium text-foreground/40">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
