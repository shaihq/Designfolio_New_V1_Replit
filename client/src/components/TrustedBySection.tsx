export default function TrustedBySection() {
  const companyLogos = [
    "/company logos/companylogos01.svg",
    "/company logos/companylogos02.svg",
    "/company logos/companylogos03.svg",
    "/company logos/companylogos04.svg",
    "/company logos/companylogos05.svg",
    "/company logos/companylogos06.svg",
    "/company logos/companylogos07.svg",
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-sm sm:text-base font-medium text-foreground/50 mb-8 sm:mb-10" data-testid="text-trusted-heading">
          Trusted by 20000+ designers—humble brag
        </h3>
        
        <div className="relative overflow-hidden">
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
          
          <div className="flex gap-0 overflow-hidden">
            <div className="flex animate-scroll items-center gap-0 shrink-0">
              {companyLogos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center justify-center px-6 sm:px-10 flex-shrink-0"
                  data-testid={`logo-company-${index}`}
                >
                  <img 
                    src={logo} 
                    alt={`Company logo ${index + 1}`}
                    className="h-6 sm:h-8 w-auto opacity-50 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            
            <div className="flex animate-scroll items-center gap-0 shrink-0" aria-hidden="true">
              {companyLogos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center justify-center px-6 sm:px-10 flex-shrink-0"
                >
                  <img 
                    src={logo} 
                    alt=""
                    className="h-6 sm:h-8 w-auto opacity-50 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
