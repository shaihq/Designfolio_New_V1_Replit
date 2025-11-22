import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Share2, 
  Bell, 
  Plus,
  Link as LinkIcon,
  Sparkle,
  Pencil,
  Menu,
  MessageSquare,
  FileText,
  Smartphone,
  Monitor,
  Search,
  Layers,
  Trash2,
  GripVertical,
  Paintbrush,
  X
} from "lucide-react";
import { Link } from "wouter";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function Dashboard() {
  const [isThemePanelOpen, setIsThemePanelOpen] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [user] = useState({
    name: "Morgan",
    role: "Product Designer @Apple",
    avatar: "",
    categories: [
      "Design Systems and Style Guides",
      "Human-Centered Design",
      "Ethnographic Research",
      "Design Thinking"
    ]
  });

  useEffect(() => {
    const checkIfMobileOrTablet = () => {
      setIsMobileOrTablet(window.innerWidth < 1190);
    };
    
    checkIfMobileOrTablet();
    window.addEventListener('resize', checkIfMobileOrTablet);
    
    return () => window.removeEventListener('resize', checkIfMobileOrTablet);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "VP of Product",
      company: "Stripe",
      text: "Morgan's approach to design thinking transformed how our team tackles complex problems. Their ability to balance user needs with business goals is exceptional.",
      highlightedText: "design thinking transformed",
      avatar: ""
    },
    {
      id: 2,
      name: "James Rodriguez",
      role: "Design Director",
      company: "Airbnb",
      text: "Working with Morgan was a game-changer for our design system. Their attention to detail and strategic thinking helped us scale our product across multiple platforms seamlessly.",
      highlightedText: "game-changer",
      avatar: ""
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Head of UX",
      company: "Shopify",
      text: "Morgan brings a unique blend of creativity and analytical thinking. Their ethnographic research methods uncovered insights that shaped our entire product strategy.",
      highlightedText: "unique blend of creativity",
      avatar: ""
    },
    {
      id: 4,
      name: "Alex Thompson",
      role: "CEO",
      company: "Notion",
      text: "Our conversion rates doubled after Morgan redesigned our landing page. Sometimes simple changes make the biggest impact.",
      highlightedText: "conversion rates doubled",
      avatar: ""
    }
  ];

  const tools = [
    {
      id: 1,
      name: "Figma",
      category: "Design",
      description: "Interface design and prototyping",
      color: "#F24E1E"
    },
    {
      id: 2,
      name: "Adobe Creative Suite",
      category: "Design",
      description: "Photoshop, Illustrator, After Effects",
      color: "#FF0000"
    },
    {
      id: 3,
      name: "Notion",
      category: "Documentation",
      description: "Research and documentation",
      color: "#000000"
    },
    {
      id: 4,
      name: "Miro",
      category: "Collaboration",
      description: "Whiteboarding and brainstorming",
      color: "#FFD02F"
    },
    {
      id: 5,
      name: "Framer",
      category: "Prototyping",
      description: "Interactive prototypes",
      color: "#0055FF"
    },
    {
      id: 6,
      name: "Principle",
      category: "Animation",
      description: "Micro-interactions and animations",
      color: "#6E56F5"
    }
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState<Set<number>>(new Set());
  const [isTemplateDialogOpen, setIsTemplateDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<number | null>(null);
  const [caseStudies, setCaseStudies] = useState<Array<{
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
  }>>([]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const caseStudyTemplates = [
    {
      id: 'blank',
      name: 'Blank Canvas',
      description: 'Start fresh and make your own layout.',
      icon: FileText,
      color: '#FF553E',
      mockProject: {
        title: 'Untitled Project',
        description: 'Start adding your content here',
        category: 'Project'
      }
    },
    {
      id: 'show-work',
      name: 'Show your Work',
      description: 'Perfect for showing what you built, designed, or created.',
      icon: Layers,
      color: '#FFB088',
      mockProject: {
        title: 'My Latest Project',
        description: 'Showcasing the work I built, designed, and created',
        category: 'Portfolio'
      }
    },
    {
      id: 'how-solved',
      name: 'How I Solved It',
      description: 'Tell the story behind a challenge you faced and how you solved it.',
      icon: MessageSquare,
      color: '#D97DD8',
      mockProject: {
        title: 'Problem Solving Case Study',
        description: 'The story of a challenge I faced and the solution I created',
        category: 'Problem Solving'
      }
    },
    {
      id: 'research',
      name: 'Research & Learnings',
      description: 'Best for sharing what you discovered or tested.',
      icon: Search,
      color: '#B47EE8',
      mockProject: {
        title: 'Research Findings',
        description: 'Insights and learnings from my research and testing',
        category: 'Research'
      }
    }
  ];

  const handleTemplateSelect = (templateId: string) => {
    const template = caseStudyTemplates.find(t => t.id === templateId);
    if (template) {
      const newProject = {
        id: Date.now(),
        title: template.mockProject.title,
        description: template.mockProject.description,
        category: template.mockProject.category,
        image: '/casestudy.png'
      };
      setCaseStudies(prev => [...prev, newProject]);
    }
    setIsTemplateDialogOpen(false);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      setCaseStudies((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleDeleteClick = (projectId: number) => {
    setProjectToDelete(projectId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (projectToDelete !== null) {
      setCaseStudies(prev => prev.filter(p => p.id !== projectToDelete));
      setProjectToDelete(null);
    }
    setDeleteDialogOpen(false);
  };

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 10);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  function SortableCard({ project }: { project: typeof caseStudies[0] }) {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({ id: project.id });

    const style: React.CSSProperties = {
      transform: CSS.Transform.toString(transform),
      transition: transition || 'transform 200ms ease',
      zIndex: isDragging ? 50 : 'auto',
    };

    return (
      <div 
        ref={setNodeRef} 
        style={style} 
        className="group cursor-pointer relative" 
        data-testid={`card-case-study-${project.id}`}
      >
        <motion.div 
          className="bg-white border-0 rounded-2xl overflow-hidden relative"
          style={{ 
            boxShadow: isDragging 
              ? '0 0 0 1px rgba(0,0,0,0.1), 0 20px 40px rgba(0,0,0,0.15)' 
              : '0 0 0 1px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)',
            opacity: isDragging ? 0.9 : 1,
          }}
          whileHover={{ 
            scale: 1.02,
            rotateX: 2,
            rotateY: -2,
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
          }}
          initial={{ scale: 1, rotateX: 0, rotateY: 0 }}
          animate={isDragging ? { scale: 1.02 } : { scale: 1 }}
        >
          <div 
            className="w-full h-56 flex items-center justify-center relative overflow-hidden rounded-t-2xl"
            style={{
              background: 'linear-gradient(135deg, #FCF9F6 0%, #F9F5F1 50%, #F5F1ED 100%)'
            }}
            data-testid={`image-case-study-${project.id}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/[0.02] to-transparent" />
            <motion.img 
              src={project.image} 
              alt={project.title}
              className="w-28 h-28 object-contain opacity-20"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
          
          <div className="p-6 pb-20">
            <div className="mb-3">
              <Badge 
                className="text-xs font-medium"
                style={{ 
                  backgroundColor: '#FFE8DF',
                  color: '#FF553E',
                  border: 'none'
                }}
                data-testid={`badge-case-study-category-${project.id}`}
              >
                {project.category}
              </Badge>
            </div>
            <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-foreground" data-testid={`text-case-study-title-${project.id}`}>
              {project.title}
            </h3>
            <p className="text-sm text-foreground/60 line-clamp-3 leading-relaxed" data-testid={`text-case-study-description-${project.id}`}>
              {project.description}
            </p>
          </div>

          <div 
            className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-t from-white via-white to-transparent rounded-b-2xl"
          >
            <button
              {...attributes}
              {...listeners}
              className="bg-white border border-border rounded-full px-3 py-2 flex items-center gap-2 hover-elevate cursor-grab active:cursor-grabbing"
              aria-roledescription="Reorder"
              data-testid={`button-drag-case-study-${project.id}`}
            >
              <GripVertical className="w-4 h-4 text-foreground" />
            </button>
            
            <div className="flex items-center gap-2">
              <button
                className="bg-white border border-border rounded-full px-4 py-2 flex items-center gap-2 hover-elevate cursor-pointer text-sm font-medium"
                data-testid={`button-edit-case-study-bottom-${project.id}`}
              >
                <Pencil className="w-4 h-4 text-foreground" />
                <span className="text-foreground">Edit</span>
              </button>
              
              <button
                onClick={() => handleDeleteClick(project.id)}
                className="bg-white border border-border rounded-full w-10 h-10 flex items-center justify-center hover-elevate cursor-pointer"
                data-testid={`button-delete-case-study-${project.id}`}
              >
                <Trash2 className="w-4 h-4 text-destructive" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex overflow-x-hidden" style={{ backgroundColor: '#F6F2EF' }}>
      {/* Main Content */}
      <div className="flex-1 w-full min-w-0 transition-all duration-300" style={{ marginRight: !isMobileOrTablet && isThemePanelOpen ? '320px' : '0' }}>
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
              {/* Logo */}
              <Link href="/" className="cursor-pointer" data-testid="link-home">
                <svg width="166" height="33" viewBox="0 0 166 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto" data-testid="logo-icon">
                  <path d="M15.4028 0.779664C15.6377 -0.259891 17.1189 -0.259886 17.3537 0.779669L18.9775 7.96851C19.1297 8.64225 19.9029 8.9625 20.4869 8.59371L26.7184 4.65866C27.6195 4.08962 28.6669 5.137 28.0979 6.03812L24.1628 12.2696C23.794 12.8537 24.1143 13.6268 24.788 13.779L31.9769 15.4028C33.0164 15.6377 33.0164 17.1189 31.9769 17.3537L24.788 18.9775C24.1143 19.1297 23.794 19.9029 24.1628 20.4869L28.0979 26.7184C28.6669 27.6195 27.6195 28.6669 26.7184 28.0979L20.4869 24.1628C19.9029 23.794 19.1297 24.1143 18.9775 24.788L17.3537 31.9769C17.1189 33.0164 15.6377 33.0164 15.4028 31.9769L13.779 24.788C13.6268 24.1143 12.8537 23.794 12.2696 24.1628L6.03812 28.0979C5.137 28.6669 4.08963 27.6195 4.65866 26.7184L8.59371 20.4869C8.9625 19.9029 8.64225 19.1297 7.96851 18.9775L0.779664 17.3537C-0.259891 17.1189 -0.259886 15.6377 0.779669 15.4028L7.96851 13.779C8.64225 13.6268 8.9625 12.8537 8.59371 12.2696L4.65866 6.03812C4.08962 5.137 5.137 4.08963 6.03812 4.65866L12.2696 8.59371C12.8537 8.9625 13.6268 8.64225 13.779 7.96851L15.4028 0.779664Z" fill="#FF553E"/>
                  <path d="M152.495 17.7614C152.495 13.6364 155.72 10.3864 159.745 10.3864C163.27 10.3864 165.645 12.6364 165.645 15.9864C165.645 20.1114 162.445 23.3614 158.395 23.3614C154.87 23.3614 152.495 21.1114 152.495 17.7614ZM155.495 17.5364C155.495 19.4864 156.67 20.7614 158.57 20.7614C160.82 20.7614 162.645 18.7364 162.645 16.2114C162.645 14.2364 161.47 12.9614 159.595 12.9614C157.345 12.9614 155.495 14.9864 155.495 17.5364Z" fill="currentColor"/>
                  <path d="M150.066 8.21142C149.166 8.21142 148.541 7.53642 148.541 6.68643C148.541 5.58642 149.516 4.58643 150.641 4.58643C151.516 4.58643 152.166 5.23642 152.166 6.11143C152.166 7.18642 151.166 8.21142 150.066 8.21142ZM146.266 23.0614L148.216 10.7114H151.141L149.191 23.0614H146.266Z" fill="currentColor"/>
                  <path d="M143.064 23.0614H140.139L143.064 4.46143H146.014L143.064 23.0614Z" fill="currentColor"/>
                  <path d="M125.591 17.7614C125.591 13.6364 128.816 10.3864 132.841 10.3864C136.366 10.3864 138.741 12.6364 138.741 15.9864C138.741 20.1114 135.541 23.3614 131.491 23.3614C127.966 23.3614 125.591 21.1114 125.591 17.7614ZM128.591 17.5364C128.591 19.4864 129.766 20.7614 131.666 20.7614C133.916 20.7614 135.741 18.7364 135.741 16.2114C135.741 14.2364 134.566 12.9614 132.691 12.9614C130.441 12.9614 128.591 14.9864 128.591 17.5364Z" fill="currentColor"/>
                  <path d="M118.183 10.7114H119.933L120.183 9.16142C120.683 6.06143 122.408 4.46143 125.233 4.46143C125.733 4.46143 126.283 4.48643 126.733 4.58643L126.333 7.11143C125.983 7.11143 125.658 7.08642 125.308 7.08642C123.983 7.08642 123.308 7.71143 123.083 9.16142L122.833 10.7114H125.733L125.333 13.1614H122.458L120.883 23.0614H117.983L119.558 13.1614H117.783L118.183 10.7114Z" fill="currentColor"/>
                  <path d="M106.761 23.0614H103.711V10.7114H106.536L106.786 12.3114C107.561 11.0614 109.061 10.3364 110.736 10.3364C113.836 10.3364 115.436 12.2614 115.436 15.4614V23.0614H112.386V16.1864C112.386 14.1114 111.361 13.1114 109.786 13.1114C107.911 13.1114 106.761 14.4114 106.761 16.4114V23.0614Z" fill="currentColor"/>
                  <path d="M87.6544 16.6114C87.6544 13.0114 90.0044 10.3114 93.5294 10.3114C95.3794 10.3114 96.8294 11.0864 97.5544 12.4114L97.7294 10.7114H100.554V22.4364C100.554 26.5614 98.0794 29.1364 94.0794 29.1364C90.5294 29.1364 88.1044 27.1114 87.7294 23.8114H90.7794C90.9794 25.4114 92.2044 26.3614 94.0794 26.3614C96.1794 26.3614 97.5294 25.0364 97.5294 22.9864V20.9364C96.7544 22.0864 95.2294 22.8114 93.4544 22.8114C89.9544 22.8114 87.6544 20.1864 87.6544 16.6114ZM90.7294 16.5364C90.7294 18.6114 92.0544 20.1614 94.0544 20.1614C96.1544 20.1614 97.4544 18.6864 97.4544 16.5364C97.4544 14.4364 96.1794 12.9864 94.0544 12.9864C92.0294 12.9864 90.7294 14.5114 90.7294 16.5364Z" fill="currentColor"/>
                  <path d="M83.6782 8.2364C82.6282 8.2364 81.8032 7.4114 81.8032 6.3864C81.8032 5.3614 82.6282 4.5614 83.6782 4.5614C84.6782 4.5614 85.5032 5.3614 85.5032 6.3864C85.5032 7.4114 84.6782 8.2364 83.6782 8.2364ZM82.1532 23.0614V10.7114H85.2032V23.0614H82.1532Z" fill="currentColor"/>
                  <path d="M69.631 19.3114H72.531C72.556 20.3864 73.356 21.0614 74.756 21.0614C76.181 21.0614 76.956 20.4864 76.956 19.5864C76.956 18.9614 76.631 18.5114 75.531 18.2614L73.306 17.7364C71.081 17.2364 70.006 16.1864 70.006 14.2114C70.006 11.7864 72.056 10.3364 74.906 10.3364C77.681 10.3364 79.556 11.9364 79.581 14.3364H76.681C76.656 13.2864 75.956 12.6114 74.781 12.6114C73.581 12.6114 72.881 13.1614 72.881 14.0864C72.881 14.7864 73.431 15.2364 74.481 15.4864L76.706 16.0114C78.781 16.4864 79.831 17.4364 79.831 19.3364C79.831 21.8364 77.706 23.3864 74.656 23.3864C71.581 23.3864 69.631 21.7364 69.631 19.3114Z" fill="currentColor"/>
                  <path d="M62.1899 23.3864C58.5149 23.3864 55.9399 20.7114 55.9399 16.8864C55.9399 13.0114 58.4649 10.3364 62.0899 10.3364C65.7899 10.3364 68.1399 12.8114 68.1399 16.6614V17.5864L58.8399 17.6114C59.0649 19.7864 60.2149 20.8864 62.2399 20.8864C63.9149 20.8864 65.0149 20.2364 65.3649 19.0614H68.1899C67.6649 21.7614 65.4149 23.3864 62.1899 23.3864ZM62.1149 12.8364C60.3149 12.8364 59.2149 13.8114 58.9149 15.6614H65.1149C65.1149 13.9614 63.9399 12.8364 62.1149 12.8364Z" fill="currentColor"/>
                  <path d="M46.2614 23.3864C42.6864 23.3864 40.4614 20.7614 40.4614 16.9364C40.4614 13.0864 42.7114 10.3364 46.4364 10.3364C48.1614 10.3364 49.6864 11.0614 50.4614 12.2864V4.46143H53.4864V23.0614H50.6864L50.4864 21.1364C49.7364 22.5614 48.1364 23.3864 46.2614 23.3864ZM46.9364 20.5864C49.0614 20.5864 50.4364 19.0614 50.4364 16.8364C50.4364 14.6114 49.0614 13.0614 46.9364 13.0614C44.8114 13.0614 43.5114 14.6364 43.5114 16.8364C43.5114 19.0364 44.8114 20.5864 46.9364 20.5864Z" fill="currentColor"/>
                </svg>
              </Link>

              {/* Nav Actions - Desktop */}
              <div className="hidden md:flex items-center gap-3">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-full h-11 w-11"
                  data-testid="button-insights"
                >
                  <Sparkles className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-full h-11 w-11"
                  data-testid="button-notifications"
                >
                  <Bell className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-full h-11 w-11"
                  onClick={() => setIsThemePanelOpen(!isThemePanelOpen)}
                  data-testid="button-theme"
                >
                  <Paintbrush className="w-5 h-5" />
                </Button>
                <Button 
                  className="bg-foreground text-background hover:bg-foreground/90 focus-visible:outline-none border-0 rounded-full h-11 px-6 text-base font-semibold no-default-hover-elevate no-default-active-elevate transition-colors"
                  data-testid="button-publish-site"
                >
                  Publish Site
                </Button>
                <Avatar className="w-11 h-11" data-testid="avatar-user">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-base" style={{ backgroundColor: '#FF553E', color: '#FFFFFF' }}>
                    {user.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Mobile Menu */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="rounded-full h-11 w-11"
                      data-testid="button-menu"
                    >
                      <Menu className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-80">
                    <div className="flex flex-col gap-4 mt-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="w-11 h-11" data-testid="avatar-user-mobile">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback className="text-base" style={{ backgroundColor: '#FF553E', color: '#FFFFFF' }}>
                            {user.name.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">{user.name}</div>
                          <div className="text-sm text-foreground/50">{user.role}</div>
                        </div>
                      </div>
                      
                      <Button 
                        className="bg-foreground text-background hover:bg-foreground/90 focus-visible:outline-none border-0 rounded-full h-11 px-6 text-base font-semibold no-default-hover-elevate no-default-active-elevate transition-colors w-full justify-center"
                        data-testid="button-publish-site-mobile"
                      >
                        Publish Site
                      </Button>
                      
                      <div className="border-t pt-4 flex flex-col gap-2">
                        <Button 
                          variant="outline" 
                          className="rounded-full h-11 w-full justify-start gap-3"
                          data-testid="button-insights-mobile"
                        >
                          <Sparkles className="w-5 h-5" />
                          <span>Insights</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="rounded-full h-11 w-full justify-start gap-3"
                          data-testid="button-notifications-mobile"
                        >
                          <Bell className="w-5 h-5" />
                          <span>Notifications</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="rounded-full h-11 w-full justify-start gap-3"
                          onClick={() => setIsThemePanelOpen(!isThemePanelOpen)}
                          data-testid="button-theme-mobile"
                        >
                          <Paintbrush className="w-5 h-5" />
                          <span>Theme</span>
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <main className="pb-6">
          {/* Profile Card */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <Card className="bg-white/95 backdrop-blur-sm border-0 rounded-2xl overflow-hidden mb-3 relative" style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.03), 0 0 40px rgba(0,0,0,0.015)' }}>
            {/* Edit Button - Top Right */}
            <div className="absolute top-4 right-4 z-10">
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-full h-11 w-11"
                data-testid="button-edit-profile"
              >
                <Pencil className="w-5 h-5" />
              </Button>
            </div>

            {/* Profile Info */}
            <div className="p-8 pb-6">
              <div className="flex items-center gap-6">
                <div 
                  className="w-32 h-32 rounded-full flex items-center justify-center relative overflow-hidden" 
                  style={{ backgroundColor: '#FFB088' }} 
                  data-testid="avatar-profile"
                >
                  {!imageLoaded && (
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
                        animation: 'shimmer 1.5s infinite'
                      }}
                    />
                  )}
                  <img 
                    src="/advanced.png" 
                    alt={user.name} 
                    className="w-24 h-24 object-contain"
                    onLoad={() => setImageLoaded(true)}
                    style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
                  />
                </div>
                
                <div className="flex-1">
                  <h1 className="text-4xl font-semibold mb-2 font-heading" data-testid="text-user-name">
                    Hey, I'm {user.name}
                  </h1>
                  <p className="text-base text-foreground/50" data-testid="text-user-role">
                    {user.role}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Skills Banner Strip */}
            <div 
              className="relative overflow-hidden border-t border-border/20 py-4" 
              data-testid="container-categories"
              style={{
                background: 'linear-gradient(135deg, #F6F3F0 0%, #F9F7F4 25%, #FCFBF9 45%, #FFFFFF 50%, #FCFBF9 55%, #F9F7F4 75%, #F6F3F0 100%)',
                boxShadow: 'inset 0 2px 3px rgba(255,255,255,0.7), inset 0 -2px 3px rgba(0,0,0,0.04), 0 1px 1px rgba(0,0,0,0.02)'
              }}
            >
              <div className="flex gap-3 animate-scroll px-8">
                {[...user.categories, ...user.categories].map((category, index) => (
                  <div key={index} className="flex items-center gap-3 shrink-0">
                    <span className="text-sm text-foreground/50 whitespace-nowrap">
                      {category}
                    </span>
                    <Sparkle className="w-3 h-3 text-foreground/30 fill-foreground/30" />
                  </div>
                ))}
              </div>
            </div>
          </Card>
          </motion.div>

          {/* My Works Section */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
          >
            <Card className="bg-white/95 backdrop-blur-sm border-0 rounded-2xl p-8" style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.03), 0 0 40px rgba(0,0,0,0.015)' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold" data-testid="text-section-title">
                  My works
                </h2>
                {caseStudies.length > 0 && (
                  <Button 
                    onClick={() => setIsTemplateDialogOpen(true)}
                    variant="outline"
                    size="icon"
                    className="rounded-full h-11 w-11"
                    data-testid="button-add-case-study-header"
                  >
                    <Plus className="w-5 h-5" />
                  </Button>
                )}
              </div>
              
              {caseStudies.length === 0 ? (
                <div 
                  className="border border-border/30 rounded-2xl p-10 shadow-none"
                  style={{
                    backgroundColor: '#F6F2EF',
                    boxShadow: 'inset 0 3px 8px 0 rgb(0 0 0 / 0.03), inset 0 -3px 8px 0 rgb(0 0 0 / 0.02)'
                  }}
                >
                  <div className="flex flex-col items-center justify-center text-center max-w-lg mx-auto">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                      <img src="/casestudy.png" alt="Case Study" className="w-20 h-20" />
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-2" data-testid="text-empty-state-title">
                      Upload your first case study
                    </h3>
                    <p className="text-base text-foreground/60 mb-6" data-testid="text-empty-state-description">
                      Show off your best work
                    </p>
                    
                    <div className="flex gap-4">
                      <Button 
                        onClick={() => setIsTemplateDialogOpen(true)}
                        className="bg-foreground text-background hover:bg-foreground/90 focus-visible:outline-none border-0 rounded-full h-11 px-6 text-base font-semibold no-default-hover-elevate no-default-active-elevate transition-colors flex items-center gap-2"
                        data-testid="button-add-case-study"
                      >
                        <Plus className="w-5 h-5" />
                        Add case study
                      </Button>
                      <div 
                        className="bg-white border border-border rounded-full px-6 py-3 flex items-center justify-center gap-3 hover-elevate cursor-pointer"
                        data-testid="button-write-using-ai"
                      >
                        <Sparkles className="w-5 h-5 text-foreground" />
                        <span className="text-base font-medium text-foreground">
                          Write using AI
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext
                    items={caseStudies.map(p => p.id)}
                    strategy={rectSortingStrategy}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {caseStudies.map((project) => (
                        <SortableCard key={project.id} project={project} />
                      ))}
                  
                      {/* Add New Case Study Card */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="group"
                        data-testid="card-add-case-study"
                      >
                        <div
                          className="w-full h-full border border-border/30 rounded-2xl flex flex-col items-center justify-center p-10 min-h-[400px] gap-3"
                          style={{ 
                            backgroundColor: '#F6F2EF',
                            boxShadow: 'inset 0 3px 8px 0 rgb(0 0 0 / 0.03), inset 0 -3px 8px 0 rgb(0 0 0 / 0.02)'
                          }}
                        >
                          <Button 
                            onClick={() => setIsTemplateDialogOpen(true)}
                            className="bg-foreground text-background hover:bg-foreground/90 focus-visible:outline-none border-0 rounded-full h-11 px-6 text-base font-semibold no-default-hover-elevate no-default-active-elevate transition-colors flex items-center gap-2"
                            data-testid="button-add-case-study-grid"
                          >
                            <Plus className="w-5 h-5" />
                            Add case study
                          </Button>
                          <div 
                            className="bg-white border border-border rounded-full px-6 py-3 flex items-center gap-2 hover-elevate cursor-pointer"
                            data-testid="button-write-using-ai-grid"
                          >
                            <Sparkles className="w-5 h-5 text-foreground" />
                            <span className="text-base font-medium text-foreground">
                              Write using AI
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </SortableContext>
                </DndContext>
              )}
            </Card>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
          >
            <Card className="bg-white/95 backdrop-blur-sm border-0 rounded-2xl p-8 mt-3" style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.03), 0 0 40px rgba(0,0,0,0.015)' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold" data-testid="text-testimonials-title">
                  Testimonials
                </h2>
                <Button 
                  variant="outline"
                  size="icon"
                  className="rounded-full h-11 w-11"
                  data-testid="button-add-testimonial"
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridAutoRows: 'auto' }}>
                {testimonials.map((testimonial, idx) => {
                  const isVisible = visibleTestimonials.has(testimonial.id);
                  
                  const highlightText = (text: string, highlight: string) => {
                    if (!highlight) return text;
                    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
                    return parts.map((part, index) => 
                      part.toLowerCase() === highlight.toLowerCase() ? (
                        <span 
                          key={index} 
                          className={`marker-highlight ${isVisible ? 'animate' : ''}`}
                        >
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    );
                  };

                  return (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      onViewportEnter={() => {
                        setTimeout(() => {
                          setVisibleTestimonials(prev => new Set(prev).add(testimonial.id));
                        }, 300 + idx * 100);
                      }}
                      className="bg-white border border-border/30 rounded-2xl p-5 hover-elevate flex flex-col relative"
                      data-testid={`card-testimonial-${testimonial.id}`}
                      style={{
                        backgroundColor: '#F5F3F1'
                      }}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 h-8 w-8"
                        data-testid={`button-edit-testimonial-${testimonial.id}`}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <p className="text-sm leading-relaxed mb-4 flex-1 pr-6" data-testid={`text-testimonial-content-${testimonial.id}`}>
                        {highlightText(testimonial.text, testimonial.highlightedText)}
                      </p>
                      
                      <div className="flex items-center gap-2.5">
                        <Avatar className="w-10 h-10 shrink-0">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback style={{ backgroundColor: '#FFB088', color: '#FFFFFF' }}>
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <h3 className="font-semibold text-sm mb-0" data-testid={`text-testimonial-name-${testimonial.id}`}>
                            {testimonial.name}
                          </h3>
                          <p className="text-xs text-foreground/50" data-testid={`text-testimonial-role-${testimonial.id}`}>
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* Toolbox Section */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.45 }}
          >
            <Card className="bg-white/95 backdrop-blur-sm border-0 rounded-2xl p-8 mt-3" style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.03), 0 0 40px rgba(0,0,0,0.015)' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold" data-testid="text-toolbox-title">
                  Toolbox
                </h2>
                <Button 
                  variant="outline"
                  size="icon"
                  className="rounded-full h-11 w-11"
                  data-testid="button-add-tool"
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.id}
                    className="bg-white border border-border/30 rounded-2xl p-4 hover-elevate"
                    data-testid={`card-tool-${tool.id}`}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: tool.color }}
                        data-testid={`icon-tool-${tool.id}`}
                      >
                        <div className="w-5 h-5 bg-white/90 rounded" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <h3 className="font-semibold text-sm" data-testid={`text-tool-name-${tool.id}`}>
                            {tool.name}
                          </h3>
                          <Badge 
                            variant="secondary" 
                            className="text-xs"
                            data-testid={`badge-tool-category-${tool.id}`}
                          >
                            {tool.category}
                          </Badge>
                        </div>
                        <p className="text-xs text-foreground/50" data-testid={`text-tool-description-${tool.id}`}>
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </main>
      </div>

      {/* Template Selection Dialog */}
      <Dialog open={isTemplateDialogOpen} onOpenChange={setIsTemplateDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold" data-testid="text-dialog-title">
              Choose a template
            </DialogTitle>
            <DialogDescription data-testid="text-dialog-description">
              Select a template to get started with your case study
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-3 mt-4">
            {caseStudyTemplates.map((template) => {
              const Icon = template.icon;
              return (
                <button
                  key={template.id}
                  onClick={() => handleTemplateSelect(template.id)}
                  className="flex items-start gap-4 p-4 rounded-xl border-2 border-border hover-elevate text-left transition-all"
                  data-testid={`button-template-${template.id}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${template.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: template.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base mb-1" data-testid={`text-template-name-${template.id}`}>
                      {template.name}
                    </h3>
                    <p className="text-sm text-foreground/60" data-testid={`text-template-description-${template.id}`}>
                      {template.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently remove this project from your portfolio. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      </div>

      {/* Theme Panel - Desktop (pushes content) - Only on large screens */}
      {!isMobileOrTablet && (
        <div 
          className={`fixed right-0 top-0 h-full bg-white border-l border-border transition-transform duration-300 z-40 ${
            isThemePanelOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ width: '320px' }}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-lg font-semibold" data-testid="text-theme-panel-title">Theme Settings</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsThemePanelOpen(false)}
                className="h-8 w-8"
                data-testid="button-close-theme-panel"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 overflow-auto">
              <Tabs defaultValue="layouts" className="w-full">
                <TabsList className="w-full grid grid-cols-3 rounded-none border-b">
                  <TabsTrigger value="layouts" className="rounded-none" data-testid="tab-layouts">
                    Layouts
                  </TabsTrigger>
                  <TabsTrigger value="background" className="rounded-none" data-testid="tab-background">
                    Background
                  </TabsTrigger>
                  <TabsTrigger value="cursors" className="rounded-none" data-testid="tab-cursors">
                    Cursors
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="layouts" className="p-6" data-testid="content-layouts">
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold">Layout Options</h3>
                    <p className="text-sm text-foreground/60">
                      Choose your preferred layout style.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="background" className="p-6" data-testid="content-background">
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold">Background Options</h3>
                    <p className="text-sm text-foreground/60">
                      Customize your background appearance.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="cursors" className="p-6" data-testid="content-cursors">
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold">Cursor Options</h3>
                    <p className="text-sm text-foreground/60">
                      Select your cursor style.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      )}

      {/* Theme Panel - Mobile/Tablet (popup with overlay) */}
      {isMobileOrTablet && (
        <Sheet open={isThemePanelOpen} onOpenChange={setIsThemePanelOpen}>
          <SheetContent className="w-80">
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4" data-testid="text-theme-panel-title-mobile">Theme Settings</h2>
              <Tabs defaultValue="layouts" className="w-full">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="layouts" data-testid="tab-layouts-mobile">
                    Layouts
                  </TabsTrigger>
                  <TabsTrigger value="background" data-testid="tab-background-mobile">
                    Background
                  </TabsTrigger>
                  <TabsTrigger value="cursors" data-testid="tab-cursors-mobile">
                    Cursors
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="layouts" className="mt-4" data-testid="content-layouts-mobile">
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold">Layout Options</h3>
                    <p className="text-sm text-foreground/60">
                      Choose your preferred layout style.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="background" className="mt-4" data-testid="content-background-mobile">
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold">Background Options</h3>
                    <p className="text-sm text-foreground/60">
                      Customize your background appearance.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="cursors" className="mt-4" data-testid="content-cursors-mobile">
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold">Cursor Options</h3>
                    <p className="text-sm text-foreground/60">
                      Select your cursor style.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
}
