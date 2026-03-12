import { DesignMeta } from "../models";

export const ALL_DESIGNS: DesignMeta[] = [
  { id:"O1", name:"Minimal Dark",   tier:"open", tags:["Minimal","Dark","Clean"],       description:"Gradient hero with purple skill pills and clean dark cards",            animated:false },
  { id:"O2", name:"Sidebar Pro",    tier:"open", tags:["Sidebar","Skills","Modern"],     description:"Fixed sidebar with avatar and animated skill progress bars",            animated:false },
  { id:"O3", name:"Color Blocks",   tier:"open", tags:["Colorful","Bold","Grid"],        description:"Bold split-color block grid hero with two-column content",             animated:false },
  { id:"P1", name:"Magazine",       tier:"plus", tags:["Editorial","Serif","Classic"],   description:"Playfair serif masthead with gold accent and skills ticker",           animated:false },
  { id:"P2", name:"Terminal",       tier:"plus", tags:["Developer","Code","JSON"],       description:"Syntax-highlighted terminal displaying your data as live JSON",         animated:false },
  { id:"P3", name:"Glass Card",     tier:"plus", tags:["Glassmorphism","Blur","Depth"],  description:"Floating glass panels over deep gradient with ambient orbs",           animated:false },
  { id:"P4", name:"Brutalist",      tier:"plus", tags:["Raw","Typography","Bold"],       description:"Hard black borders, color accent strips, zero compromise design",      animated:false },
  { id:"P5", name:"Deep Flow",      tier:"plus", tags:["Abstract","Rings","Dark"],       description:"Concentric decorative rings on deep indigo with glass cards",          animated:false },
  { id:"R1", name:"Particle Dream", tier:"pro",  tags:["Animated","Particles","Neon"],   description:"30 floating particles with glow-pulse name entrance animation",        animated:true  },
  { id:"R2", name:"Morph Studio",   tier:"pro",  tags:["Morphing","Gradient","Motion"],  description:"CSS morphing blob background with sticky sidebar and skill bars",      animated:true  },
  { id:"R3", name:"Typewriter",     tier:"pro",  tags:["Terminal","TypeEffect","Code"],  description:"Live typing animation on your name with CRT scanline overlay",         animated:true  },
];

export const OPEN_DESIGNS  = ALL_DESIGNS.filter((d) => d.tier === "open");
export const PLUS_DESIGNS  = ALL_DESIGNS.filter((d) => d.tier === "plus");
export const PRO_DESIGNS   = ALL_DESIGNS.filter((d) => d.tier === "pro");
export const DESIGN_MAP    = new Map(ALL_DESIGNS.map((d) => [d.id, d]));
