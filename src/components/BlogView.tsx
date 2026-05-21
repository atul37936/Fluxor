/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  User, 
  Clock, 
  Heart, 
  TrendingUp, 
  Search,
  MessageSquare,
  Bookmark
} from 'lucide-react';

interface BlogViewProps {
  onBackClick: () => void;
  brandFontClass: string;
}

interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishDate: string;
  readTime: string;
  likes: number;
  comments: number;
  imageUrl: string;
  metricCode: string;
}

export default function BlogView({ onBackClick, brandFontClass }: BlogViewProps) {
  const blogPosts: BlogPost[] = [
    {
      id: 'empathy-driven-design',
      category: 'HUMANE UI',
      title: 'Empathy-Driven Design: Breaking Free from Rigid Grid Layouts',
      excerpt: 'Why standard mathematical grids lead to user cognitive fatigue, and how dynamic responsive layouts create intuitive and natural scanning flow.',
      content: 'Digital design has reached a point of absolute sterility. For the past decade, we have been trapped in rigid grid systems that prioritize the constraints of viewport ratios over the natural flow of human ocular focus. Studies reveal that our eye-tracking patterns are organic, sweeping curves, yet we force them to run through geometric mazes. Empathy-Driven Design starts here: understanding visual fatigue coefficients, minimizing sharp contrast edges, and applying responsive, warm gradient transitions that replicate tactile paper.',
      author: {
        name: 'Amara Sterling',
        role: 'Co-Founder & Design Principal',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120'
      },
      publishDate: 'May 18, 2026',
      readTime: '6 min read',
      likes: 142,
      comments: 18,
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600&h=400',
      metricCode: 'LOG-CRT-042'
    },
    {
      id: 'latency-impact',
      category: 'ENGINEERING',
      title: 'The Psychology of Milliseconds: How Rendering Speeds Impact Mood',
      excerpt: 'Exploring the biological stress triggers that arise from micro-latencies and why standard SPA rendering chains must be minimized to <1ms.',
      content: 'When an interface hesitates, even for twenty milliseconds, the human brain registers a tiny gap in continuity. This delay increases cortisol production. Software engineered for machines does not mind standard asynchronous loading cycles, but software designed for humans must prioritize sub-millisecond local reactions. In this article, our systems team breaks down how lighter, optimized React state architectures prevent multi-level re-rendering cascades to protect user focus.',
      author: {
        name: 'Marcus Thorne',
        role: 'Head of Systems Engineering',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120'
      },
      publishDate: 'May 12, 2026',
      readTime: '5 min read',
      likes: 198,
      comments: 24,
      imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=600&h=400',
      metricCode: 'LOG-PERF-901'
    },
    {
      id: 'the-aesthetic-mandate',
      category: 'DESIGN PHILOSOPHY',
      title: 'The Aesthetic Mandate: Designing Software as Digital Craftsmanship',
      excerpt: 'Investigating visual rhythm, color pairing, and why interfaces require physical honesty to foster a sense of comfort.',
      content: 'Computers are tools, but interfaces are spaces. When we build layouts, we are constructing digital environments where users spend hours of their lives. Treating architecture as a utility neglects user cognitive comfort. We propose a craftsmanship standard: incorporating soft, celestial glow systems, choosing typography with display authority, and introducing organic hand-made accents to bring genuine delight back to high-traffic software environments.',
      author: {
        name: 'Elena Rostova',
        role: 'Lead Visual Curator',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120'
      },
      publishDate: 'May 05, 2026',
      readTime: '8 min read',
      likes: 256,
      comments: 42,
      imageUrl: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80&w=600&h=400',
      metricCode: 'LOG-AESTH-232'
    }
  ];

  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'posts' | 'bookmarks'>('posts');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const handleToggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    );
  };

  const categories = ['ALL', 'HUMANE UI', 'ENGINEERING', 'DESIGN PHILOSOPHY'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = filterCategory === 'ALL' || post.category === filterCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'posts' || bookmarkedIds.includes(post.id);
    return matchesCategory && matchesSearch && matchesTab;
  });

  const activePostDetails = blogPosts.find(p => p.id === selectedPost);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.99, y: -10 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl w-full mx-auto px-6 pt-4 pb-20 relative z-10 flex flex-col"
    >
      
      {/* Top action header: Return to Core */}
      <div className="w-full mb-8 flex justify-between items-center flex-wrap gap-4">
        <button
          onClick={selectedPost ? () => setSelectedPost(null) : onBackClick}
          className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-[#D1D5DB] hover:text-white rounded-full text-xs font-mono border border-white/5 hover:border-white/15 transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>{selectedPost ? 'BACK TO REPOSITORY' : 'BACK TO CORE PORTAL'}</span>
        </button>

        {/* Dynamic Category Filters on Repository Main */}
        {!selectedPost && (
          <div className="flex bg-white/[0.02] border border-white/10 rounded-full p-1 scrollbar-none items-center overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all shrink-0 cursor-pointer ${
                  filterCategory === cat ? 'bg-orange-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Conditional: Reader Detail View vs main listing */}
      <AnimatePresence mode="wait">
        {selectedPost && activePostDetails ? (
          <motion.div
            key="readerDetail"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
          >
            {/* Left Content Column (Span 8) */}
            <div className="lg:col-span-8 flex flex-col text-left">
              
              {/* Category banner */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-[9px] font-mono text-orange-400 rounded-full tracking-wider">
                  {activePostDetails.category}
                </span>
                <span className="text-[10px] font-mono text-zinc-500">
                  ID: {activePostDetails.metricCode}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight font-display mb-6">
                {activePostDetails.title}
              </h2>

              {/* Author & Read Time segment */}
              <div className="flex items-center gap-4 py-4 border-y border-white/5 mb-8">
                <img 
                  src={activePostDetails.author.avatar} 
                  alt={activePostDetails.author.name} 
                  className="w-10 h-10 rounded-full border border-white/10 object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 text-left leading-tight">
                  <div className="text-sm font-semibold text-white">{activePostDetails.author.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{activePostDetails.author.role}</div>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400 shrink-0">
                  <Clock className="w-3.5 h-3.5 text-orange-400" />
                  <span>{activePostDetails.publishDate} • {activePostDetails.readTime}</span>
                </div>
              </div>

              {/* Main Expanded Article Body */}
              <div className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed space-y-6 max-w-3xl">
                <p className="text-lg text-white font-light border-l-2 border-orange-500 pl-4 py-1 italic bg-white/[0.01]">
                  {activePostDetails.excerpt}
                </p>
                <p>{activePostDetails.content}</p>
                <p>By moving beyond rigid layouts, we empower users with high-fidelity control over responsiveness levels. At Fluxora, we prioritize cognitive comfort. Our custom calibrators allow developers and users alike to scale dynamic visual ratios, keeping rendering performance strictly within human comforting tolerances.</p>
              </div>

              {/* Likes counter and exit row */}
              <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between">
                <button 
                  onClick={(e) => handleToggleBookmark(activePostDetails.id, e)}
                  className={`flex items-center gap-2 px-4 py-2 border rounded-full text-xs font-mono transition-all cursor-pointer ${
                    bookmarkedIds.includes(activePostDetails.id) 
                      ? 'bg-orange-500/10 border-orange-500/40 text-orange-400' 
                      : 'border-white/10 text-stone-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{bookmarkedIds.includes(activePostDetails.id) ? 'BOOKMARKED' : 'BOOKMARK ARTICLE'}</span>
                </button>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-xs font-semibold text-stone-300 hover:text-white cursor-pointer"
                >
                  Return to Repository
                </button>
              </div>

            </div>

            {/* Right Showcase Hero Aspect (Span 4) */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div className="sticky top-6 bg-white/[0.01] border border-white/10 rounded-[28px] p-6 text-left overflow-hidden relative">
                {/* Background flow banner matching branding exactly */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-red-500/10 filter blur-xl opacity-30 pointer-events-none" />

                <img 
                  src={activePostDetails.imageUrl} 
                  alt="Decorative Header" 
                  className="w-full h-48 object-cover rounded-2xl mb-6 border border-white/10 relative z-10"
                  referrerPolicy="no-referrer"
                />

                <h4 className="text-xs font-mono font-bold tracking-widest text-orange-400 mb-2 relative z-10 uppercase">
                  COGNITIVE INSIGHT
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed font-sans relative z-10 mb-6">
                  Art meets code. This article details the structural, psychological, and rendering constraints evaluated by our solution architects to build Fluxora Technology portals.
                </p>

                {/* Micro metrics panel */}
                <div className="border-t border-white/5 pt-4 space-y-2 relative z-10 text-[11px] font-mono">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Node Signature</span>
                    <span className="text-white">FLX-BLOG-PROD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Category Index</span>
                    <span className="text-stone-300">{activePostDetails.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="postsListing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col text-left"
          >
            {/* Header / Intro block matching our distinct hero elements */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl text-left">
                {/* Header Tag */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-[10px] font-mono text-orange-400 rounded-full mb-4 uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5 text-orange-500" />
                  <span>The Fluxora Ledger</span>
                </span>

                <h1 className="text-[2.2rem] sm:text-[3rem] font-bold leading-[1.1] font-display text-white mb-4">
                  Curated Insights & Thoughts
                </h1>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  Deep dives on responsive design aesthetics, engineering benchmarks, and our search for pristine human integration standards.
                </p>
              </div>

              {/* Search Bar / Input */}
              <div className="relative w-full md:w-80 shrink-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input 
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/[0.02] border border-white/10 hover:border-white/15 focus:border-orange-500/40 rounded-full pl-11 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 font-sans tracking-wide outline-none transition-all"
                />
              </div>
            </div>

            {/* Layout Toggles (Posts vs Bookmarks) */}
            <div className="flex gap-4 border-b border-white/5 pb-4 mb-8">
              <button 
                onClick={() => setActiveTab('posts')}
                className={`text-xs font-mono tracking-widest uppercase pb-1.5 border-b cursor-pointer transition-all ${
                  activeTab === 'posts' 
                    ? 'text-orange-400 border-orange-500 font-semibold' 
                    : 'text-zinc-500 border-transparent hover:text-stone-300'
                }`}
              >
                ALL ARTICLES ({blogPosts.length})
              </button>

              <button 
                onClick={() => setActiveTab('bookmarks')}
                className={`text-xs font-mono tracking-widest uppercase pb-1.5 border-b cursor-pointer transition-all ${
                  activeTab === 'bookmarks' 
                    ? 'text-orange-400 border-orange-500 font-semibold' 
                    : 'text-zinc-500 border-transparent hover:text-stone-300'
                }`}
              >
                MY BOOKMARKS ({bookmarkedIds.length})
              </button>
            </div>

            {/* Main Posts Grid layout resembling elegant bento boxes */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {filteredPosts.map((post, index) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      key={post.id}
                      onClick={() => setSelectedPost(post.id)}
                      className="group/card flex flex-col justify-between bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 hover:border-white/15 rounded-[24px] overflow-hidden transition-all duration-300 cursor-pointer relative"
                    >
                      <div>
                        {/* Upper image header */}
                        <div className="relative h-44 w-full overflow-hidden border-b border-white/5">
                          <img 
                            src={post.imageUrl} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-90" />
                          
                          {/* Floating categories metadata */}
                          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
                            <span className="px-2.5 py-0.5 bg-black/80 backdrop-blur-md rounded text-[9px] font-mono font-semibold text-orange-400 tracking-wider">
                              {post.category}
                            </span>
                            <span className="text-[10px] text-zinc-400 font-mono">
                              [{post.metricCode}]
                            </span>
                          </div>
                        </div>

                        {/* Text Detail blocks */}
                        <div className="p-6">
                          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug mb-3 font-display group-hover/card:text-orange-400 transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-400 leading-relaxed font-sans line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      {/* Footer Actions block */}
                      <div className="p-6 pt-0 border-t border-transparent flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <img 
                            src={post.author.avatar} 
                            alt={post.author.name} 
                            className="w-6.5 h-6.5 rounded-full object-cover border border-white/10 shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <span className="text-[11px] text-gray-400 font-sans tracking-tight">
                            {post.author.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-4">
                          {/* Bookmark trigger pill */}
                          <button
                            onClick={(e) => handleToggleBookmark(post.id, e)}
                            className={`p-1.5 rounded transition bg-white/5 hover:bg-white/10 cursor-pointer text-zinc-400 hover:text-white`}
                          >
                            <Bookmark 
                              className={`w-3.5 h-3.5 ${
                                bookmarkedIds.includes(post.id) ? 'fill-orange-500 text-orange-500' : ''
                              }`} 
                            />
                          </button>

                          <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-stone-300 group-hover/card:bg-white group-hover/card:text-black transition-all">
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/card:translate-x-0.5" />
                          </div>
                        </div>

                      </div>

                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="py-24 text-center border border-dashed border-white/10 rounded-[24px]">
                <BookOpen className="w-8 h-8 text-zinc-600 mx-auto mb-4 animate-pulse" />
                <h4 className="text-sm font-bold text-white tracking-tight mb-1">
                  No Articles Found
                </h4>
                <p className="text-xs text-gray-400">
                  Try adjusting search queries or bookmarks filter to discover ledger posts.
                </p>
              </div>
            )}

            {/* Bottom credo callout */}
            <div className="w-full bg-white/[0.01] border border-white/[0.04] rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left relative overflow-hidden">
              <div className="max-w-xl">
                <h4 className="text-lg font-bold text-white tracking-tight mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  Subscribe to our curated design letters
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                  Stay updated on our latest aesthetic breakthroughs, performance calibration frameworks, and the human ledger stream updates.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  className="flex-1 px-4 h-12 bg-white/[0.02] border border-white/10 hover:border-white/15 focus:border-orange-500/40 rounded-full text-xs text-white placeholder-zinc-500 outline-none transition-all"
                />
                <button
                  onClick={() => alert("Subscription configured successfully in simulated envelope sandbox!")}
                  className="px-6 h-12 rounded-full bg-[#e11d48] text-white text-xs font-semibold hover:bg-orange-600 active:scale-95 transition-all cursor-pointer"
                >
                  Join Us
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Integrated Footer within the View Section */}
      <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 w-full relative z-20">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          <span>Fluxora System • Decentralized Node</span>
        </div>
        
        <div className="text-[#E5E7EB] font-sans text-[13px] tracking-tight font-medium bg-white/[0.02] border border-white/5 px-4 py-1.5 rounded-full flex items-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-[pulse_2s_infinite]" />
          <span>Created by <strong className="text-orange-400 font-semibold hover:text-orange-300 transition-colors pointer-events-auto">Atul mishra</strong></span>
        </div>

        <div className="flex items-center gap-4 text-zinc-500">
          <span>© {new Date().getFullYear()} Fluxora</span>
          <span className="text-zinc-800">|</span>
          <span className="text-stone-400">All Human Rights Reserved</span>
        </div>
      </div>

    </motion.div>
  );
}
