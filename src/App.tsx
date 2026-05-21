import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, Download, Phone, Mail, 
  Trophy, Users, Globe, Tv, Heart, Check, Star, 
  Shield, Target, Zap, MessageCircle, ArrowRight,
  MapPin, Calendar, PlayCircle, Instagram, Facebook
} from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// --- UTILS ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- COMPONENTS ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#009246] via-white to-[#CE2B37] z-[60]"></div>
      <nav className={`fixed w-full z-50 transition-all duration-300 mt-1.5 ${isScrolled ? 'bg-deep-black/90 backdrop-blur-md border-b border-red/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img src="https://lh3.googleusercontent.com/d/1VUCGLTuDXYjn_iouio6IPwEGn9Jvd90G" alt="Elite Boxing" className="h-14 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]" />
          </a>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#il-progetto" className="hover:text-red transition-colors">Il Progetto</a>
          <a href="#visibilita" className="hover:text-red transition-colors">Visibilità</a>
          <a href="#pacchetti" className="hover:text-red transition-colors">Pacchetti</a>
          <a href="#contatti" className="bg-red text-deep-black px-6 py-2.5 rounded-sm font-semibold hover:bg-red-light transition-colors">
            Richiedi Proposta
          </a>
        </div>

        <button className="md:hidden text-soft-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal border-b border-red/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              <a href="#il-progetto" onClick={() => setMobileMenuOpen(false)} className="text-lg">Il Progetto</a>
              <a href="#visibilita" onClick={() => setMobileMenuOpen(false)} className="text-lg">Visibilità</a>
              <a href="#pacchetti" onClick={() => setMobileMenuOpen(false)} className="text-lg">Pacchetti</a>
              <a href="#contatti" onClick={() => setMobileMenuOpen(false)} className="text-red font-semibold">Richiedi Proposta</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?q=80&w=2000&auto=format&fit=crop" 
          alt="Elite Boxing Arena" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-deep-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.div variants={fadeIn} className="flex items-center space-x-2 mb-6">
            <div className="h-[1px] w-12 bg-red"></div>
            <span className="text-red font-semibold tracking-widest text-xs uppercase">Sponsorship Proposal 2026</span>
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] mb-6 uppercase">
            L'evento internazionale che trasforma la visibilità in <span className="red-gradient-text">valore per il tuo brand</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Un progetto sportivo, mediatico e territoriale che unisce Muay Thai, spettacolo, streaming internazionale, attivazioni live e impatto sociale. Pensato per aziende che vogliono presidiare un contesto ad altissima intensità emotiva con una presenza memorabile.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#contatti" className="bg-red text-deep-black px-8 py-4 rounded-sm font-bold text-center hover:bg-red-light transition-colors flex items-center justify-center group">
              Richiedi la proposta sponsor
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#pacchetti" className="glass-panel text-soft-white px-8 py-4 rounded-sm font-bold text-center hover:bg-white/10 transition-colors flex items-center justify-center">
              Scopri i pacchetti
            </a>
          </motion.div>

          <motion.div variants={fadeIn} className="flex items-center space-x-4 text-sm text-gray-400 border-l-2 border-red/30 pl-4 bg-deep-black/40 p-3 rounded-r-sm backdrop-blur-sm inline-flex">
            <img src="https://lh3.googleusercontent.com/d/1aIgv87YSKaXiI07zU6p9JqQWmB89mYt7" alt="Feder Combat" className="h-14 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]" />
            <p className="max-w-md">Con il supporto del network sportivo federale e di una visione organizzativa costruita sul campo.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const QuickStats = () => {
  const data = [
    { name: "Spettatori medi live", value: 320, suffix: "K" },
    { name: "Persone raggiunte/mese", value: 500, suffix: "K" },
    { name: "Follower totali", value: 30, suffix: "K" },
    { name: "Paesi in streaming", value: 220, suffix: "" }
  ];

  const COLORS = ['#D90429', '#FF4D5A', '#9B0014', '#E63946'];

  return (
    <section className="py-12 bg-charcoal border-y border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="w-full md:w-1/2 h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value, name, props) => [`${value}${props.payload.suffix}`, name]}
                  contentStyle={{ backgroundColor: '#151515', borderColor: '#D90429', color: '#F5F5F5', borderRadius: '8px' }}
                  itemStyle={{ color: '#F5F5F5' }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  formatter={(value) => <span className="text-gray-300">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 gap-8">
            {data.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                  <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                  <div className="text-4xl md:text-5xl font-heading font-bold text-white">{stat.value}{stat.suffix}</div>
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">{stat.name}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const Story = () => {
  return (
    <section id="il-progetto" className="py-24 bg-deep-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:sticky lg:top-24"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-heading font-bold mb-6 uppercase">
              Una storia costruita con <span className="text-red">disciplina, visione e credibilità</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-gray-300 text-lg">
              <p>
                Il progetto ELITE BOXING nasce dall'unione di due realtà sportive situate una a Bari in Puglia e l'altra a Cagliari in Sardegna.
              </p>
              <p>
                Due società, due territori, tecnici federali di alto livello con percorsi differenti ma uniti dalla stessa visione: costruire una piattaforma eventi capace di valorizzare atleti, sponsor e territorio in un ecosistema credibile, strutturato e professionale.
              </p>
              <p>
                Elite Boxing non rappresenta un singolo team, ma l'evoluzione naturale di storie costruite negli anni sul ring, in palestra e nell'organizzazione sportiva.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6"
          >
            <div className="rounded-sm overflow-hidden relative group bg-deep-black border border-white/5 flex flex-col h-full">
              <div className="flex-1 p-8 flex items-center justify-center min-h-[260px]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1EYGJJJzNLTOnAE19Azo4X5bSqpvRWrJx" 
                  alt="Emanuele Sasanelli - Team Sasanelli Logo" 
                  className="w-full h-full object-contain max-h-[200px] transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-4 pt-0 w-full mt-auto">
                <div className="bg-charcoal/90 backdrop-blur-md p-5 rounded border border-white/10 shadow-xl">
                  <h3 className="text-xl font-heading font-bold text-white mb-1 group-hover:text-red transition-colors">Emanuele Sasanelli</h3>
                  <p className="text-red text-xs uppercase tracking-wider mb-4 leading-relaxed font-bold">Fondatore & Direttore Tecnico</p>
                  <ul className="space-y-2 text-xs text-gray-300">
                    <li className="flex items-start"><Check className="w-3.5 h-3.5 text-red mr-2 shrink-0 mt-0.5" /> Referente Italia WMC</li>
                    <li className="flex items-start"><Check className="w-3.5 h-3.5 text-red mr-2 shrink-0 mt-0.5" /> Dirigente Nazionale FederKombat</li>
                    <li className="flex items-start"><Check className="w-3.5 h-3.5 text-red mr-2 shrink-0 mt-0.5" /> Fondatore Team Sasanelli</li>
                    <li className="flex items-start"><Check className="w-3.5 h-3.5 text-red mr-2 shrink-0 mt-0.5" /> Esperienza pluriennale Muay Thai</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden relative group bg-deep-black border border-white/5 flex flex-col h-full">
              <div className="flex-1 p-8 flex items-center justify-center min-h-[260px]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1nAQxXdpmF94v0C34A4kkbwPm5GsbJFsD" 
                  alt="Gianluca Carta - Chang Peuk Gym Logo" 
                  className="w-full h-full object-contain max-h-[200px] transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-4 pt-0 w-full mt-auto">
                <div className="bg-charcoal/90 backdrop-blur-md p-5 rounded border border-white/10 shadow-xl">
                  <h3 className="text-xl font-heading font-bold text-white mb-1 group-hover:text-red transition-colors">Gianluca Carta</h3>
                  <p className="text-red text-xs uppercase tracking-wider mb-4 leading-relaxed font-bold">Fondatore & DT Chang Peuk Gym</p>
                  <ul className="space-y-2 text-xs text-gray-300">
                    <li className="flex items-start"><Check className="w-3.5 h-3.5 text-red mr-2 shrink-0 mt-0.5" /> Ex Titolare Nazionale Italiana</li>
                    <li className="flex items-start"><Check className="w-3.5 h-3.5 text-red mr-2 shrink-0 mt-0.5" /> Campione Europeo WAKO PRO</li>
                    <li className="flex items-start"><Check className="w-3.5 h-3.5 text-red mr-2 shrink-0 mt-0.5" /> Tecnico Federale</li>
                    <li className="flex items-start"><Check className="w-3.5 h-3.5 text-red mr-2 shrink-0 mt-0.5" /> Oltre 25 anni di esperienza</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Trophy className="w-8 h-8 text-red" />,
      title: "Live Experience",
      desc: "Arena, ring, pubblico ed emozione pura. Un evento dal vivo curato in ogni dettaglio per massimizzare il coinvolgimento."
    },
    {
      icon: <Tv className="w-8 h-8 text-red" />,
      title: "Media Exposure",
      desc: "Streaming internazionale, produzione broadcast di altissimo livello e distribuzione globale dei contenuti."
    },
    {
      icon: <Target className="w-8 h-8 text-red" />,
      title: "Brand Activation",
      desc: "Stand espositivi, installazioni fisiche e brand experience dirette con un pubblico altamente in target."
    },
    {
      icon: <Users className="w-8 h-8 text-red" />,
      title: "Community & Territorio",
      desc: "Un legame profondo con le persone, la città e il tessuto locale, per un impatto che va oltre la singola serata."
    }
  ];

  return (
    <section className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 uppercase">Non solo sport: una vera <span className="text-red">sport property</span> per i brand</h2>
          <p className="text-gray-400 text-lg">
            ELITE BOXING è una piattaforma ad alto impatto che combina evento live, spettacolo, contenuti digitali e relazioni territoriali. Per i brand significa entrare in un ambiente premium con molteplici touchpoint di comunicazione.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-sm hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="mb-6 p-4 bg-deep-black rounded-full inline-block group-hover:bg-red/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Visibility = () => {
  return (
    <section id="visibilita" className="py-24 bg-deep-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-heading font-bold mb-6 uppercase">
              Visibilità reale <br/><span className="text-red">Non solo presenza logo</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-300 text-lg mb-8">
              La partnership con ELITE BOXING offre una piattaforma di visibilità pensata per generare valore su più livelli: awareness, posizionamento, engagement, reputazione e relazione diretta con il pubblico.
            </motion.p>
            
            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Streaming internazionale", "Prime time visibility", 
                "Spot TV 15” / 30”", "Social amplification",
                "Backdrop e interviste", "LED wall e arena branding",
                "Logo su materiali promo", "Presenza conferenze stampa"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-red rounded-full"></div>
                  <span className="text-gray-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeIn} className="bg-charcoal border-l-4 border-red p-6 rounded-r-sm">
              <p className="text-white font-medium italic">
                "Ogni sponsorizzazione viene valorizzata con una logica di brand presence + narrative context + live exposure."
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-charcoal p-8 rounded-sm flex flex-col justify-center border border-white/5">
              <div className="text-4xl font-heading font-bold text-red mb-2">200K</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Interazioni mensili</div>
            </div>
            <div className="bg-charcoal p-8 rounded-sm flex flex-col justify-center border border-white/5 mt-8">
              <div className="text-4xl font-heading font-bold text-red mb-2">500K</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Copertura social</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialImpact = () => {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-red/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=1000&auto=format&fit=crop" 
              alt="Social Impact Muay Thai" 
              className="w-full aspect-square object-cover rounded-sm grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="order-1 md:order-2"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center space-x-2 bg-deep-black px-4 py-2 rounded-full mb-6 border border-white/10">
              <Heart className="w-4 h-4 text-red" />
              <span className="text-xs font-bold uppercase tracking-wider">Inclusione & Valore Umano</span>
            </motion.div>
            
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-heading font-bold mb-6 uppercase">
              Lo sport accessibile <span className="text-red">a tutti</span>
            </motion.h2>
            
            <motion.div variants={fadeIn} className="space-y-4 text-gray-300 text-base mb-8 leading-relaxed">
              <p>
                Elite Boxing nasce dall’unione di realtà sportive radicate nei rispettivi territori, accomunate da un principio chiaro: 
                <strong> Lo sport non è un privilegio. È uno strumento di crescita, integrazione e valore sociale.</strong>
              </p>
              <p>
                Attraverso le proprie ASD affiliate e i tecnici federali che operano nelle diverse regioni, Elite Boxing promuove iniziative inclusive dedicate a:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium text-white my-4">
                <li className="flex items-center"><Check className="w-4 h-4 text-red mr-2 shrink-0" /> Giovani atleti</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-red mr-2 shrink-0" /> Ragazzi in situazioni di fragilità sociale</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-red mr-2 shrink-0" /> Persone con disabilità fisiche o cognitive</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-red mr-2 shrink-0" /> Famiglie che vivono lo sport come strumento educativo</li>
              </ul>
              <p>
                L’obiettivo è realizzare eventi e percorsi sportivi strutturati, con protocolli organizzativi certificati e personale tecnico qualificato, in collaborazione con Federazioni ed Enti riconosciuti.
              </p>
              <p>
                Parola chiave: <strong className="text-white text-lg">INCLUSIONE.</strong>
              </p>
              <p>
                Lo sport da combattimento, se guidato con competenza e responsabilità, diventa scuola di disciplina, rispetto e appartenenza.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const EpicEventSection = () => {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-deep-black/80 to-deep-black z-10"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red/20 rounded-full blur-[120px] z-10 animate-pulse"></div>
        <motion.img 
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src="https://images.unsplash.com/photo-1599552375245-24ea0f229a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Muay Thai Background" 
          className="w-full h-full object-cover grayscale opacity-30"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 uppercase leading-tight relative">
              La Muay Thai <br/>
              <motion.span 
                animate={{ textShadow: ["0px 0px 0px rgba(217,4,41,0)", "0px 0px 20px rgba(217,4,41,0.8)", "0px 0px 0px rgba(217,4,41,0)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-red inline-block"
              >
                non sarà più la stessa
              </motion.span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Per la prima volta nella storia, Elite Boxing porta fuori dalla Thailandia il meglio del mondo: <strong className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">RWS – Rajadamnern World Series</strong>, la promotion numero 1 al mondo per la Muay Thai, approda in Italia.
            </p>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Un evento epico, una visione globale, una sola opportunità per viverlo dal vivo.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.02, boxShadow: "0px 0px 30px rgba(217,4,41,0.2)" }}
              className="bg-deep-black/60 p-8 border border-red/30 rounded-xl backdrop-blur-md relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red/0 via-red/10 to-red/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-white uppercase flex items-center gap-3">
                <span className="w-2 h-2 bg-red rounded-full animate-ping"></span>
                Contatti
              </h3>
              <div className="space-y-4 relative z-10">
                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red/10 rounded-full flex items-center justify-center text-red shrink-0 group-hover:bg-red group-hover:text-white transition-colors">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Instagram</p>
                    <a href="https://www.instagram.com/rwsmuaythai/?hl=it" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-red transition-colors">@rwsmuaythai</a>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red/10 rounded-full flex items-center justify-center text-red shrink-0 group-hover:bg-red group-hover:text-white transition-colors">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Facebook</p>
                    <a href="https://www.facebook.com/rwsmuaythai" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-red transition-colors">RWS Muay Thai</a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="grid grid-cols-2 gap-4 relative"
          >
            {/* Decorative elements behind images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red/10 blur-[80px] rounded-full -z-10"></div>
            
            <div className="space-y-4">
              <motion.img 
                whileHover={{ scale: 1.05, rotate: -2, zIndex: 20 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="https://lh3.googleusercontent.com/d/1EGv07LX1BkK0eM-04uG5ZEeuELQkNLg9" 
                alt="RWS Muay Thai" 
                className="w-full h-48 object-contain rounded-xl border border-white/10 transition-all duration-500 bg-black/60 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(217,4,41,0.4)] hover:border-red/50 relative z-10"
                referrerPolicy="no-referrer"
              />
              <motion.img 
                whileHover={{ scale: 1.05, rotate: 2, zIndex: 20 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="https://lh3.googleusercontent.com/d/120AN6Wo421Qah1JVut7qhsfYhZ3Wa-oO" 
                alt="Muay Thai Fighter" 
                className="w-full h-80 object-cover rounded-xl border border-white/10 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(217,4,41,0.4)] hover:border-red/50 relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-12">
              <motion.img 
                whileHover={{ scale: 1.05, rotate: 2, zIndex: 20 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="https://lh3.googleusercontent.com/d/10sYuSGEK9w5ARYkSxbklNTcSRMaM5kOk" 
                alt="Muay Thai Ring" 
                className="w-full h-80 object-cover rounded-xl border border-white/10 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(217,4,41,0.4)] hover:border-red/50 relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhySponsor = () => {
  const reasons = [
    { title: "Visibilità internazionale", icon: <Globe className="w-6 h-6" /> },
    { title: "Contesto premium e memorabile", icon: <Star className="w-6 h-6" /> },
    { title: "Attivazioni live e contatto diretto", icon: <Users className="w-6 h-6" /> },
    { title: "Supporto alla reputazione del brand", icon: <Shield className="w-6 h-6" /> },
    { title: "Possibilità di personalizzazione", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <section className="py-24 bg-deep-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 uppercase">Perché i brand scelgono <span className="text-red">Elite Boxing</span></h2>
          <p className="text-gray-400 text-lg">
            Ogni partnership viene costruita per massimizzare il ritorno in termini di immagine, relazione e riconoscibilità.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {reasons.map((reason, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-charcoal border border-white/5 px-6 py-4 rounded-sm flex items-center space-x-4 hover:border-red/50 transition-colors"
            >
              <div className="text-red">{reason.icon}</div>
              <span className="font-medium text-white">{reason.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Packages = () => {
  const annualPackages = [
    {
      name: "MAIN SPONSOR",
      price: "€100.000 + IVA",
      desc: "Massima ownership del progetto",
      color: "border-red",
      bg: "bg-gradient-to-b from-red/10 to-transparent",
      features: [
        "Dicitura 'Presented by [Brand]'",
        "Massima visibilità su comunicazione evento",
        "Logo premium in arena",
        "Spot TV 30” + 15”",
        "Presenza conferenza stampa",
        "Stand premium",
        "Forte integrazione branding"
      ]
    },
    {
      name: "DIAMOND SPONSOR",
      price: "€50.000 + IVA",
      desc: "Alta visibilità, forte impatto, grande prestigio",
      color: "border-white/20",
      bg: "bg-charcoal",
      features: [
        "Branding importante in arena",
        "Presenza su materiali ufficiali",
        "Stand espositivo",
        "Social amplification",
        "Visibilità video",
        "Conferenza stampa",
        "Accesso VIP"
      ]
    },
    {
      name: "EMERALD SPONSOR",
      price: "€25.000 + IVA",
      desc: "Presenza premium con ottimo equilibrio",
      color: "border-white/10",
      bg: "bg-charcoal",
      features: [
        "Branding su materiali promozionali",
        "Logo in venue",
        "Presenza digitale",
        "Attivazioni selezionate",
        "Accessi VIP"
      ]
    }
  ];

  const eventPackages = [
    { name: "GOLD SPONSOR", price: "€15.000 + IVA", desc: "Forte presenza sull'evento singolo" },
    { name: "SILVER SPONSOR", price: "€5.000 + IVA", desc: "Ingresso professionale nella piattaforma" },
    { name: "BRONZE SPONSOR", price: "€2.500 + IVA", desc: "Access point per i partner locali" },
    { name: "PARTNER TECNICO", price: "Su misura", desc: "Fornitura beni o servizi in cambio di visibilità" }
  ];

  return (
    <section id="pacchetti" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 uppercase">Pacchetti <span className="text-red">Sponsorship</span></h2>
          <p className="text-gray-400 text-lg">
            Una struttura modulare per permettere a ogni partner di trovare il livello di presenza più coerente con i propri obiettivi di marketing.
          </p>
        </div>

        <h3 className="text-2xl font-heading font-bold mb-8 text-center uppercase tracking-widest text-white">Pacchetti Annuali</h3>
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {annualPackages.map((pkg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`border ${pkg.color} ${pkg.bg} rounded-sm p-8 relative flex flex-col h-full`}
            >
              {i === 0 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red text-deep-black px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                  Top Tier
                </div>
              )}
              <h4 className="text-2xl font-heading font-bold mb-2">{pkg.name}</h4>
              <div className="text-xl text-red font-medium mb-4">{pkg.price}</div>
              <p className="text-sm text-gray-400 mb-8 h-10">{pkg.desc}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start text-sm text-gray-300">
                    <Check className="w-4 h-4 text-red mr-3 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contatti" className={`w-full py-3 rounded-sm font-bold text-center transition-colors ${i === 0 ? 'bg-red text-deep-black hover:bg-red-light' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                Richiedi Info
              </a>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-heading font-bold mb-8 text-center uppercase tracking-widest text-white">Pacchetti Evento Singolo</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {eventPackages.map((pkg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-deep-black border border-white/5 p-6 rounded-sm hover:border-red/30 transition-colors"
            >
              <h4 className="text-lg font-heading font-bold mb-1">{pkg.name}</h4>
              <div className="text-red font-medium text-sm mb-3">{pkg.price}</div>
              <p className="text-xs text-gray-400 leading-relaxed">{pkg.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComparisonTable = () => {
  return (
    <section className="py-24 bg-deep-black hidden md:block">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold mb-4 uppercase">Confronto <span className="text-red">Benefit</span></h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-4 text-gray-400 font-medium w-1/4">Benefit</th>
                <th className="p-4 font-heading font-bold text-red text-center">MAIN</th>
                <th className="p-4 font-heading font-bold text-white text-center">DIAMOND</th>
                <th className="p-4 font-heading font-bold text-white text-center">EMERALD</th>
                <th className="p-4 font-heading font-bold text-white/70 text-center">GOLD</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { name: "Naming Rights / Presented By", levels: ["Full", "-", "-", "-"] },
                { name: "Spot TV", levels: ["30\" + 15\"", "15\"", "-", "-"] },
                { name: "Logo su Ring (Corner/Tappeto)", levels: ["Premium", "Standard", "-", "-"] },
                { name: "Logo su LED Wall", levels: ["Full", "Premium", "Included", "Selective"] },
                { name: "Backdrop Interviste", levels: ["Premium", "Included", "Included", "-"] },
                { name: "Stand Espositivo", levels: ["Premium (6x3)", "Standard (3x3)", "Corner", "-"] },
                { name: "Social Post Dedicati", levels: ["4/mese", "2/mese", "1/mese", "1 pre-evento"] },
                { name: "Accesso VIP", levels: ["10 Pass", "6 Pass", "4 Pass", "2 Pass"] },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 text-gray-300 font-medium">{row.name}</td>
                  {row.levels.map((level, j) => (
                    <td key={j} className={`p-4 text-center ${j === 0 ? 'text-red font-medium' : 'text-gray-400'}`}>
                      {level === "Full" || level === "Premium" || level === "Included" ? (
                        <span className="inline-flex items-center justify-center bg-white/5 px-3 py-1 rounded-full text-xs">
                          {level}
                        </span>
                      ) : level === "-" ? (
                        <span className="text-white/20">-</span>
                      ) : (
                        level
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const CustomSolutions = () => {
  return (
    <section className="py-20 bg-red text-deep-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 uppercase">Soluzioni personalizzate per brand e partner</h2>
            <p className="text-deep-black/80 text-lg mb-8 font-medium">
              Ogni azienda ha obiettivi diversi. Per questo ELITE BOXING può sviluppare proposte personalizzate su esclusività di categoria, branded content, title partnership di singoli momenti e attività experiential.
            </p>
            <a href="#contatti" className="inline-flex items-center bg-deep-black text-red px-8 py-4 rounded-sm font-bold hover:bg-charcoal transition-colors">
              Richiedi un pacchetto su misura
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Esclusività di categoria", "Branded content", "Attività experiential", "Social collaboration"].map((item, i) => (
              <div key={i} className="bg-deep-black/5 p-4 rounded-sm border border-deep-black/10 font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="contatti" className="py-24 bg-charcoal relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?q=80&w=2000&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-deep-black/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 uppercase leading-tight">
              Porta il tuo brand al <span className="text-red">centro dell'evento</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Se vuoi associare la tua azienda a una piattaforma capace di unire emozione, pubblico, visibilità e reputazione, ELITE BOXING è il contesto giusto per farlo.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-red">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <a href="mailto:eliteboxing25@gmail.com" className="font-medium hover:text-red transition-colors">eliteboxing25@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-red">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">WhatsApp / Telefono</div>
                  <a href="https://wa.me/393347605222" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-red transition-colors">+39 334 760 5222</a>
                </div>
              </div>
            </div>

            <div className="bg-deep-black/50 border border-red/20 p-6 rounded-sm">
              <p className="text-sm text-gray-300 font-medium">
                <span className="text-red">Nota:</span> Pacchetti disponibili in numero limitato. Possibilità di esclusività per categoria merceologica.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-sm"
          >
            <h3 className="text-2xl font-heading font-bold mb-6">Richiedi la proposta sponsor</h3>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const company = formData.get('company');
              const email = formData.get('email');
              const phone = formData.get('phone');
              const interest = formData.get('interest');
              const message = formData.get('message');
              
              const subject = encodeURIComponent(`Richiesta Sponsorizzazione: ${company || name}`);
              const body = encodeURIComponent(`Nome e Cognome: ${name}\nAzienda: ${company}\nEmail: ${email}\nTelefono: ${phone}\nInteresse: ${interest}\n\nMessaggio:\n${message}`);
              
              window.location.href = `mailto:eliteboxing25@gmail.com?subject=${subject}&body=${body}`;
            }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wider">Nome e Cognome</label>
                  <input name="name" type="text" required className="w-full bg-deep-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-red transition-colors" placeholder="Mario Rossi" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wider">Azienda</label>
                  <input name="company" type="text" required className="w-full bg-deep-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-red transition-colors" placeholder="Nome Azienda" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wider">Email</label>
                  <input name="email" type="email" required className="w-full bg-deep-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-red transition-colors" placeholder="email@azienda.it" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wider">Telefono</label>
                  <input name="phone" type="tel" required className="w-full bg-deep-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-red transition-colors" placeholder="+39 ..." />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wider">Interesse</label>
                <select name="interest" required className="w-full bg-deep-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-red transition-colors appearance-none">
                  <option value="">Seleziona un pacchetto...</option>
                  <option value="Main Sponsor">Main Sponsor</option>
                  <option value="Diamond Sponsor">Diamond Sponsor</option>
                  <option value="Emerald Sponsor">Emerald Sponsor</option>
                  <option value="Red Sponsor">Red Sponsor</option>
                  <option value="Silver Sponsor">Silver Sponsor</option>
                  <option value="Bronze Sponsor">Bronze Sponsor</option>
                  <option value="Partner Tecnico">Partner Tecnico</option>
                  <option value="Solo Informazioni">Solo Informazioni</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wider">Messaggio (Opzionale)</label>
                <textarea name="message" rows={4} className="w-full bg-deep-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-red transition-colors resize-none" placeholder="Scrivi qui eventuali note o richieste specifiche..."></textarea>
              </div>

              <button type="submit" className="w-full bg-red text-deep-black font-bold py-4 rounded-sm hover:bg-red-light transition-colors mt-4">
                Invia Richiesta
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustEcosystem = () => {
  const logos = [
    "1M0OmjVe1opVgGPAuZ35ll9h8E8I9pWzq",
    "10fIuhZNkcD8QBX9Eh1hOG1ZIzRvq2SUG",
    "16QARxN3Dp25hqPZq_jWYp3LOiy9e_S0z",
    "17ywIbvgmYJH8bQ7Ml9cdipjE9eafvqv0",
    "18FblxLAJlJfDZlx4eGBn091nNpMH2P7L",
    "1C1dl5cI6SaPg8tiDsBHnQz8MVsoQX7xk",
    "1M3eAeXvDDYhbZ8BOlr0wqRwQdTa3vGXY",
    "1VUCGLTuDXYjn_iouio6IPwEGn9Jvd90G",
    "1aIgv87YSKaXiI07zU6p9JqQWmB89mYt7",
    "1cQnUXEvwHj3s0DaVNa5fz_-vWipEC-nq",
    "1n-oj4eTxqDI2i_LC86yOpsTm0iwTSuKp",
    "1MgZVTNxCutMfjEcT8ROrqdSKKIpS8s1o",
    "1EYGJJJzNLTOnAE19Azo4X5bSqpvRWrJx",
    "1nAQxXdpmF94v0C34A4kkbwPm5GsbJFsD"
  ];

  return (
    <section className="py-16 bg-deep-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-xl font-heading font-bold mb-12 uppercase text-gray-400">Un progetto costruito dentro un ecosistema credibile</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-center w-28 h-20 md:w-36 md:h-24 p-2 relative group"
            >
              <img 
                src={`https://lh3.googleusercontent.com/d/${logo}`} 
                alt={`Partner ${index + 1}`} 
                className="max-w-full max-h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-all duration-500" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-deep-black border-t border-white/5 pt-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="https://lh3.googleusercontent.com/d/1VUCGLTuDXYjn_iouio6IPwEGn9Jvd90G" alt="Elite Boxing" className="h-16 md:h-20 object-contain mr-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
            <span className="text-sm font-normal text-gray-500 border-l border-white/10 pl-4">2026</span>
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-red transition-colors">Press Kit</a>
          </div>
        </div>
        <div className="text-center md:text-left text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Elite Boxing / Team Sasanelli. Tutti i diritti riservati.
        </div>
      </div>
      <div className="h-2 w-full bg-gradient-to-r from-[#009246] via-white to-[#CE2B37]"></div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-deep-black text-soft-white font-sans selection:bg-red selection:text-deep-black">
      <Navbar />
      <Hero />
      <QuickStats />
      <Story />
      <Features />
      <Visibility />
      <SocialImpact />
      <EpicEventSection />
      <WhySponsor />
      <Packages />
      <ComparisonTable />
      <CustomSolutions />
      <TrustEcosystem />
      <ContactForm />
      <Footer />
    </div>
  );
}
