import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Pencil, 
  Sparkles, 
  Bell, 
  Paintbrush, 
  Menu, 
  X, 
  Upload, 
  Sparkle, 
  Crown, 
  Lock,
  Mail,
  Linkedin,
  ArrowUpRight
} from "lucide-react";
import { 
  SiBehance 
} from "react-icons/si";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Link } from "wouter";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, rectSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from "react";

// Stardust Button Component
const StardustButton = ({ children, onClick, className = "", ...props }: { children: React.ReactNode, onClick?: () => void, className?: string }) => {
  return (
    <button
      onClick={onClick}
      className={`relative group overflow-hidden px-6 py-2.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
      {...props}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 animate-gradient-x group-hover:opacity-90 transition-opacity" />
      
      {/* Particle container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 animate-stardust opacity-30" />
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-white/20" />
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

function SortableCard({ project }: { project: Project }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: project.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 0,
    opacity: isDragging ? 0.6 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="group relative h-full"
    >
      <div 
        {...listeners}
        className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white"
      >
        <Menu className="w-4 h-4 text-foreground/40" />
      </div>
      
      <Card className="overflow-hidden border border-border/30 bg-white rounded-2xl h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        <div className="p-5">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-foreground/[0.03] text-foreground/60 border-0 text-[10px] font-semibold tracking-wider uppercase">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-foreground/50 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </Card>
    </div>
  );
}

export default function Dashboard() {
  const [isThemePanelOpen, setIsThemePanelOpen] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [selectedWallpaper, setSelectedWallpaper] = useState<string | null>(() => {
    const saved = localStorage.getItem('dashboard-wallpaper');
    return saved || null;
  });
  const [previousWallpaper, setPreviousWallpaper] = useState<string | null>(null);
  const [isDarkWallpapers, setIsDarkWallpapers] = useState(() => {
    const saved = localStorage.getItem('dashboard-wallpaper-mode');
    return saved === 'dark';
  });
  const [customWallpaper, setCustomWallpaper] = useState<string | null>(() => {
    const saved = localStorage.getItem('dashboard-custom-wallpaper');
    return saved || null;
  });
  const [backgroundBlur, setBackgroundBlur] = useState<number>(() => {
    const saved = localStorage.getItem('dashboard-background-blur');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [backgroundEffectType, setBackgroundEffectType] = useState<'blur' | 'grain'>(() => {
    const saved = localStorage.getItem('dashboard-background-effect-type');
    return (saved === 'blur' || saved === 'grain') ? saved : 'blur';
  });
  const [grainIntensity, setGrainIntensity] = useState<number>(() => {
    const saved = localStorage.getItem('dashboard-grain-intensity');
    return saved ? parseInt(saved, 10) : 30;
  });
  const [backgroundMotion, setBackgroundMotion] = useState<boolean>(() => {
    const saved = localStorage.getItem('dashboard-background-motion');
    return saved === 'on';
  });
  const [sectionOrder, setSectionOrder] = useState<string[]>(() => {
    const saved = localStorage.getItem('dashboard-section-order');
    let order = saved ? JSON.parse(saved) : ['works', 'work_experience', 'testimonials', 'toolbox'];
    if (!order.includes('work_experience')) {
      const testimonialIndex = order.indexOf('testimonials');
      if (testimonialIndex !== -1) {
        order.splice(testimonialIndex, 0, 'work_experience');
      } else {
        order.push('work_experience');
      }
    }
    return order;
  });
  const [workExperiences, setWorkExperiences] = useState([
    {
      id: 1,
      role: "Senior Product Designer",
      company: "Stark Industries",
      period: "2022 - Present",
      description: "Leading the design system for iron-man suits and industrial interfaces.",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=SI"
    },
    {
      id: 2,
      role: "Product Designer",
      company: "Wayne Enterprises",
      period: "2020 - 2022",
      description: "Designed multi-functional gadgets and vehicle UI for tactical deployment.",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=WE"
    }
  ]);
  const [selectedFont, setSelectedFont] = useState<string>(() => {
    const saved = localStorage.getItem('dashboard-font');
    return saved || 'inter';
  });
  const [scrollOffset, setScrollOffset] = useState(0);
  const rafRef = useRef<number | null>(null);
  const [user] = useState({
    name: "Shai!",
    role: "A 0→1 Product Designer with 6 years of experience. I design and develop digital products, create prototypes, and design interfaces.",
    avatar: "",
    categories: [
      "Design Systems and Style Guides",
      "Human-Centered Design",
      "Ethnographic Research",
      "Design Thinking"
    ]
  });

  const [caseStudies, setCaseStudies] = useState<Project[]>([
    {
      id: 1,
      title: "Uplift Health App",
      description: "A mental wellness platform designed to provide accessible resources and support for individuals seeking better emotional health.",
      image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800",
      tags: ["Mobile App", "Health", "UI/UX"]
    }
  ]);

  const [testimonials] = useState([
    {
      id: 1,
      name: "Alex Rivera",
      role: "Founder",
      company: "Nexus Design",
      text: "Shai's ability to transform complex problems into elegant solutions is remarkable. A true visionary.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Lead Engineer",
      company: "TechFlow",
      text: "Working with Shai was a pleasure. The attention to detail and design thinking is top-notch.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    }
  ]);

  const [tools] = useState([
    {
      id: 1,
      name: "Figma",
      category: "Design",
      description: "Primary tool for interface design and prototyping.",
      color: "#F24E1E"
    },
    {
      id: 2,
      name: "Adobe CC",
      category: "Creative",
      description: "Suite of tools for image editing and branding.",
      color: "#FF0000"
    }
  ]);

  const [isTemplateDialogOpen, setIsTemplateDialogOpen] = useState(false);
  const [selectedTestimonialId, setSelectedTestimonialId] = useState<number | null>(null);
  const [isEditTestimonialOpen, setIsEditTestimonialOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [visibleTestimonials, setVisibleTestimonials] = useState<Set<number>>(new Set());
  const [showUnsavedWarning, setShowUnsavedWarning] = useState(false);
  const [pendingAction, setPendingAction] = useState<string | null>(null);
  const [pendingTestimonialId, setPendingTestimonialId] = useState<number | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<number | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    const checkIfMobileOrTablet = () => {
      setIsMobileOrTablet(window.innerWidth < 1190);
    };
    
    checkIfMobileOrTablet();
    window.addEventListener('resize', checkIfMobileOrTablet);
    
    return () => window.removeEventListener('resize', checkIfMobileOrTablet);
  }, []);

  useEffect(() => {
    localStorage.setItem('dashboard-section-order', JSON.stringify(sectionOrder));
  }, [sectionOrder]);

  const fontOptions: Record<string, { name: string; family: string; description: string }> = {
    'inter': { name: 'Inter', family: 'Inter, sans-serif', description: 'Clean and modern sans-serif' },
    'satoshi': { name: 'Satoshi', family: 'Satoshi, sans-serif', description: 'Geometric contemporary sans' },
    'manrope': { name: 'Manrope', family: 'Manrope, sans-serif', description: 'Modern geometric sans-serif' },
    'dm-sans': { name: 'DM Sans', family: '"DM Sans", sans-serif', description: 'Low-contrast geometric sans' },
    'source-serif-4': { name: 'Source Serif 4', family: '"Source Serif 4", serif', description: 'Elegant transitional serif' },
    'merriweather': { name: 'Merriweather', family: 'Merriweather, serif', description: 'Classic readable serif' },
    'ibm-plex-sans': { name: 'IBM Plex Sans', family: '"IBM Plex Sans", sans-serif', description: 'Neutral corporate sans' },
    'work-sans': { name: 'Work Sans', family: '"Work Sans", sans-serif', description: 'Optimized for screen display' },
    'roboto-mono': { name: 'Roboto Mono', family: '"Roboto Mono", monospace', description: 'Technical monospace style' },
  };

  useEffect(() => {
    localStorage.setItem('dashboard-font', selectedFont);
    const font = fontOptions[selectedFont] || fontOptions['inter'];
    document.documentElement.style.setProperty('--font-sans', font.family);
    document.documentElement.style.setProperty('--font-heading', font.family);
    document.documentElement.style.setProperty('--font-serif', font.family);
    document.body.style.fontFamily = font.family;
  }, [selectedFont]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);

      if (backgroundMotion) {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
        rafRef.current = requestAnimationFrame(() => {
          setScrollOffset(currentScrollY);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [lastScrollY, backgroundMotion]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setCaseStudies((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleEditTestimonialClick = (testimonial: any) => {
    setSelectedTestimonialId(testimonial.id);
    setIsEditTestimonialOpen(true);
  };

  const handleConfirmDiscard = () => {
    setShowUnsavedWarning(false);
    setIsEditTestimonialOpen(false);
    setSelectedTestimonialId(null);
  };

  const handleDeleteConfirm = () => {
    if (projectToDelete) {
      setCaseStudies(prev => prev.filter(p => p.id !== projectToDelete));
      setDeleteDialogOpen(false);
      setProjectToDelete(null);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setCustomWallpaper(base64String);
        setSelectedWallpaper(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTemplateSelect = (templateId: string) => {
    setIsTemplateDialogOpen(false);
    // Add logic for template selection if needed
  };

  const caseStudyTemplates = [
    { id: 'mobile', name: 'Mobile App', description: 'Optimized for app showcases', icon: Sparkles, color: '#2563EB' },
    { id: 'web', name: 'Web Platform', description: 'Best for dashboard and SaaS', icon: Sparkles, color: '#7C3AED' },
  ];

  return (
    <div className="min-h-screen flex overflow-x-hidden relative" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Background Layer */}
      {selectedWallpaper && (
        <div 
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `url(${selectedWallpaper})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: `blur(${backgroundBlur}px)`,
            transform: backgroundMotion ? `translateY(${scrollOffset * 0.2}px) scale(${1 + (scrollOffset * 0.0001)})` : 'none',
            opacity: 0.15,
            mixBlendMode: 'overlay'
          }}
        />
      )}
      
      {/* Main Content */}
      <div className="flex-1 w-full min-w-0 transition-all duration-300 relative z-10" style={{ marginRight: !isMobileOrTablet && isThemePanelOpen ? '320px' : '0' }}>
        <div className="max-w-4xl mx-auto px-6">
          {/* Floating Navbar */}
          <div 
            className="sticky top-0 pt-6 z-50 transition-all duration-300"
            style={{
              transform: isNavVisible ? 'translateY(0)' : 'translateY(-100%)',
              transition: 'transform 0.3s ease-in-out'
            }}
          >
            <Card 
              className="bg-white/95 backdrop-blur-sm border-0 rounded-2xl px-8 py-4 mb-6 transition-shadow duration-300" 
              style={{ 
                boxShadow: isScrolled 
                  ? '0 0 0 1px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.08)' 
                  : '0 0 0 1px rgba(0,0,0,0.03), 0 0 40px rgba(0,0,0,0.015)' 
              }}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="cursor-pointer" data-testid="link-home">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#FF553E] rounded-lg flex items-center justify-center">
                      <Sparkle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">Designfolio</span>
                  </div>
                </Link>

                <div className="hidden md:flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full h-11 w-11">
                    <Sparkles className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-11 w-11">
                    <Bell className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-11 w-11" onClick={() => setIsThemePanelOpen(!isThemePanelOpen)}>
                    <Paintbrush className="w-5 h-5" />
                  </Button>
                  <Button className="bg-foreground text-background hover:bg-foreground/90 border-0 rounded-full h-11 px-6 text-base font-semibold transition-colors">
                    Publish Site
                  </Button>
                  <Avatar className="w-11 h-11">
                    <AvatarFallback style={{ backgroundColor: '#FF553E', color: '#FFFFFF' }}>S</AvatarFallback>
                  </Avatar>
                </div>

                <div className="md:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full h-11 w-11">
                        <Menu className="w-5 h-5" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="w-80">
                      <div className="flex flex-col gap-4 mt-8">
                        <Button className="w-full bg-foreground text-background rounded-full h-11 font-semibold">
                          Publish Site
                        </Button>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </Card>
          </div>

          <main className="pb-6">
            {/* Profile Card */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="z-10"
            >
              <Card className="bg-white/95 backdrop-blur-sm border-0 rounded-2xl mb-3 relative overflow-hidden" style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.03), 0 0 40px rgba(0,0,0,0.015)' }}>
                <div className="absolute top-4 right-4 z-10">
                  <Button variant="outline" size="icon" className="rounded-full h-11 w-11">
                    <Pencil className="w-5 h-5" />
                  </Button>
                </div>

                <div className="p-8 pb-6">
                  <div className="flex items-center gap-6">
                    <div className="w-32 h-32 rounded-2xl flex items-center justify-center relative overflow-hidden shrink-0 bg-[#F5F3F1]">
                      <Avatar className="w-24 h-24 rounded-none">
                        <AvatarFallback className="bg-transparent text-4xl">👋</AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="flex-1">
                      <h1 className="text-3xl font-semibold mb-2 font-heading">
                        Hey, I'm Shai!
                      </h1>
                      <p className="text-base text-foreground/50 leading-relaxed">
                        {user.role}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative overflow-hidden border-t border-border/10 py-3 bg-[#F8F7F5] rounded-b-2xl">
                  <div className="flex gap-4 animate-scroll px-8 opacity-40">
                    {[...user.categories, ...user.categories].map((category, index) => (
                      <div key={index} className="flex items-center gap-3 shrink-0">
                        <span className="text-[12px] font-medium whitespace-nowrap uppercase tracking-normal">
                          {category}
                        </span>
                        <Sparkle className="w-2.5 h-2.5" />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            <AnimatePresence mode="popLayout">
              {sectionOrder.map((sectionId, index) => {
                if (sectionId === 'works') {
                  return (
                    <motion.div key="works" layout initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                      <Card className="bg-white/95 backdrop-blur-sm border-0 rounded-2xl p-6 mt-3" style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.03), 0 0 40px rgba(0,0,0,0.015)' }}>
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-sm font-medium text-foreground/50 uppercase tracking-wider">My works</h2>
                          <Button variant="outline" size="icon" className="rounded-full h-11 w-11">
                            <Plus className="w-5 h-5" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {caseStudies.map((project) => (
                            <SortableCard key={project.id} project={project} />
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  );
                }

                if (sectionId === 'work_experience') {
                  return (
                    <motion.div key="work-experience" layout initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                      <Card className="bg-white/95 backdrop-blur-sm border-0 rounded-2xl p-6 mt-3" style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.03), 0 0 40px rgba(0,0,0,0.015)' }}>
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-sm font-medium text-foreground/50 uppercase tracking-wider">Work Experience</h2>
                          <Button variant="outline" size="icon" className="rounded-full h-11 w-11">
                            <Plus className="w-5 h-5" />
                          </Button>
                        </div>
                        <div className="space-y-4">
                          {workExperiences.map((exp) => (
                            <div key={exp.id} className="group flex gap-5 p-4 rounded-2xl border border-border/30 bg-[#F5F3F1] hover-elevate transition-all duration-300">
                              <Avatar className="w-12 h-12 rounded-xl border border-border/50">
                                <AvatarImage src={exp.logo} />
                                <AvatarFallback className="bg-muted text-xs">{exp.company.substring(0, 2)}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                  <h3 className="font-semibold text-base truncate">{exp.role}</h3>
                                  <span className="text-xs font-medium text-foreground/40 shrink-0">{exp.period}</span>
                                </div>
                                <div className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground/60">{exp.company}</div>
                                <p className="text-sm text-foreground/50 leading-relaxed line-clamp-2">{exp.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  );
                }

                if (sectionId === 'testimonials') {
                  return (
                    <motion.div key="testimonials" layout initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                      <Card className="bg-white/95 backdrop-blur-sm border-0 rounded-2xl p-6 mt-3" style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.03), 0 0 40px rgba(0,0,0,0.015)' }}>
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-sm font-medium text-foreground/50 uppercase tracking-wider">Testimonials</h2>
                          <Button variant="outline" size="icon" className="rounded-full h-11 w-11">
                            <Plus className="w-5 h-5" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="border-border/30 bg-[#F5F3F1] rounded-2xl p-5 flex flex-col hover-elevate transition-all">
                              <p className="text-sm leading-relaxed mb-4 flex-1">{testimonial.text}</p>
                              <div className="flex items-center gap-2.5">
                                <Avatar className="w-10 h-10 shrink-0">
                                  <AvatarImage src={testimonial.avatar} />
                                  <AvatarFallback>T</AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="font-semibold text-sm mb-0">{testimonial.name}</h3>
                                  <p className="text-xs text-foreground/50">{testimonial.company}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  );
                }

                if (sectionId === 'toolbox') {
                  return (
                    <React.Fragment key="toolbox-group">
                      <motion.div key="toolbox" layout initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                        <Card className="bg-white/95 backdrop-blur-sm border-0 rounded-2xl p-6 mt-3" style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.03), 0 0 40px rgba(0,0,0,0.015)' }}>
                          <div className="flex items-center justify-between mb-4">
                            <h2 className="text-sm font-medium text-foreground/50 uppercase tracking-wider">Toolbox</h2>
                            <Button variant="outline" size="icon" className="rounded-full h-11 w-11">
                              <Plus className="w-5 h-5" />
                            </Button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {tools.map((tool) => (
                              <div key={tool.id} className="bg-white border border-border/30 rounded-2xl p-4 hover-elevate">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: tool.color }}>
                                    <div className="w-5 h-5 bg-white/90 rounded" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-0.5">
                                      <h3 className="font-semibold text-sm">{tool.name}</h3>
                                      <Badge variant="secondary" className="text-xs">{tool.category}</Badge>
                                    </div>
                                    <p className="text-xs text-foreground/50">{tool.description}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </Card>
                      </motion.div>
                      
                      {/* Contact Section - Only visible after Toolbox */}
                      <motion.div
                        key="contact-section"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-20 mb-20 px-6 max-w-2xl mx-auto"
                      >
                        <div className="flex flex-col gap-10">
                          <div className="flex items-center justify-between group cursor-pointer">
                            <div className="flex items-center gap-4">
                              <Mail className="w-5 h-5 text-foreground/40 group-hover:text-foreground transition-colors" />
                              <span className="text-lg font-medium">Email</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-lg text-foreground/60 group-hover:text-foreground transition-colors">h.potphode0@gmail.com</span>
                              <ArrowUpRight className="w-5 h-5 text-foreground/20 group-hover:text-foreground transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                          </div>

                          <div className="flex items-center justify-between group cursor-pointer">
                            <div className="flex items-center gap-4">
                              <Linkedin className="w-5 h-5 text-foreground/40 group-hover:text-foreground transition-colors" />
                              <span className="text-lg font-medium">LinkedIn</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-lg text-foreground/60 group-hover:text-foreground transition-colors">/in/harshpotphode</span>
                              <ArrowUpRight className="w-5 h-5 text-foreground/20 group-hover:text-foreground transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                          </div>

                          <div className="flex items-center justify-between group cursor-pointer">
                            <div className="flex items-center gap-4">
                              <SiBehance className="w-5 h-5 text-foreground/40 group-hover:text-foreground transition-colors" />
                              <span className="text-lg font-medium">Behance (a few more projects)</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-lg text-foreground/60 group-hover:text-foreground transition-colors">@HarshPotphode</span>
                              <ArrowUpRight className="w-5 h-5 text-foreground/20 group-hover:text-foreground transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                          </div>
                        </div>

                        <div className="mt-24 flex flex-col items-center">
                          <div className="w-48 h-24 mb-6 opacity-80 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105 cursor-default">
                            <svg viewBox="0 0 200 100" className="w-full h-full text-foreground fill-none stroke-current" style={{ strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                              <path d="M40,60 C45,45 55,20 60,35 C65,50 60,70 70,60 C80,50 85,30 90,45 C95,60 90,80 100,70 C110,60 115,25 120,40 C125,55 120,75 130,65 C140,55 145,20 150,35 C155,50 150,70 160,60" />
                            </svg>
                          </div>
                          <p className="text-xs font-semibold text-foreground/30 tracking-[0.2em] uppercase">Harsh Potphode</p>
                        </div>
                      </motion.div>
                    </React.Fragment>
                  );
                }
                return null;
              })}
            </AnimatePresence>
          </main>
        </div>

        {/* Theme Panel */}
        {!isMobileOrTablet && (
          <div className={`fixed right-0 top-0 h-full bg-white border-l border-border transition-transform duration-300 z-40 ${isThemePanelOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ width: '320px' }}>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-lg font-semibold">Theme Settings</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsThemePanelOpen(false)} className="h-8 w-8">
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex-1 overflow-auto p-6">
                <Tabs defaultValue="fonts">
                  <TabsList className="w-full mb-6">
                    <TabsTrigger value="fonts" className="flex-1">Fonts</TabsTrigger>
                    <TabsTrigger value="background" className="flex-1">Background</TabsTrigger>
                  </TabsList>
                  <TabsContent value="fonts">
                    <div className="space-y-4">
                      {Object.entries(fontOptions).map(([key, font]) => (
                        <button key={key} onClick={() => setSelectedFont(key)} className={`w-full text-left p-3 rounded-xl border-2 transition-all ${selectedFont === key ? 'border-foreground bg-foreground/5' : 'border-border hover:border-foreground/30'}`}>
                          <div className="font-semibold" style={{ fontFamily: font.family }}>{font.name}</div>
                          <div className="text-xs text-foreground/50">{font.description}</div>
                        </button>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dialogs and Alerts */}
      <Dialog open={isTemplateDialogOpen} onOpenChange={setIsTemplateDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Choose a template</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-3 mt-4">
            {caseStudyTemplates.map((template) => (
              <button key={template.id} onClick={() => setIsTemplateDialogOpen(false)} className="flex items-start gap-4 p-4 rounded-xl border-2 border-border hover-elevate text-left">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${template.color}15` }}>
                  <template.icon className="w-6 h-6" style={{ color: template.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base mb-1">{template.name}</h3>
                  <p className="text-sm text-foreground/60">{template.description}</p>
                </div>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
