import { motion } from "framer-motion";

/* ───────── Technical SVG Illustrations ─────────
   Matched to GoliathTech's homepage product imagery:
   1. Steel + ZN: galvanized pile shaft with zinc coating detail in yellow circle
   2. Double protection: cross-section diagram with frost line, labels
   3. Exclusive anchoring system: GoliathTech vs non-certified comparison
   4. Reinforced seals: joint extension with circle zoom detail
*/

const IllustrationSteelZN = () => (
  <svg viewBox="0 0 240 200" fill="none" className="w-full h-full">
    {/* Pile shaft */}
    <rect x="55" y="20" width="26" height="170" rx="2" fill="url(#steelGrad1)" stroke="#71717a" strokeWidth="1.5"/>
    {/* Shaft highlight */}
    <rect x="63" y="20" width="8" height="170" fill="white" opacity="0.15" rx="1"/>
    {/* Helix blade */}
    <ellipse cx="68" cy="172" rx="38" ry="10" fill="#d4d4d8" stroke="#71717a" strokeWidth="1.5"/>
    <ellipse cx="68" cy="170" rx="36" ry="8" fill="#e4e4e7" stroke="#a1a1aa" strokeWidth="1"/>
    {/* Yellow circle highlight with zinc texture */}
    <circle cx="165" cy="85" r="58" fill="#fbbf24" opacity="0.1" stroke="#fbbf24" strokeWidth="2.5"/>
    <clipPath id="zincClip1">
      <circle cx="165" cy="85" r="56"/>
    </clipPath>
    <g clipPath="url(#zincClip1)">
      <rect x="109" y="29" width="112" height="112" fill="#e4e4e7"/>
      {/* Galvanization crystalline texture */}
      <path d="M120 45c10 4 14 14 24 10s12-10 20-6 10 12 18 14" stroke="#b4b4b4" strokeWidth="2" fill="none" opacity="0.5"/>
      <path d="M120 65c8 8 16 6 22 2s14-12 22-6 6 16 18 14" stroke="#b4b4b4" strokeWidth="2" fill="none" opacity="0.4"/>
      <path d="M120 85c12 2 10 12 22 8s16-14 22-8 6 14 16 16" stroke="#b4b4b4" strokeWidth="2" fill="none" opacity="0.5"/>
      <path d="M120 105c8 8 12 4 20 8s10 12 20 8 12-10 20-6" stroke="#b4b4b4" strokeWidth="2" fill="none" opacity="0.4"/>
      <path d="M120 125c6 4 16 8 22 4s12-10 18-4 10 12 20 10" stroke="#b4b4b4" strokeWidth="2" fill="none" opacity="0.5"/>
      {/* Sparkle marks */}
      <path d="M148 65l2-7 2 7-7-2 7 2" stroke="#fbbf24" strokeWidth="1.5"/>
      <path d="M185 95l2-5 2 5-5-2 5 2" stroke="#fbbf24" strokeWidth="1.2"/>
      <path d="M160 115l1.5-5 1.5 5-5-1.5 5 1.5" stroke="#fbbf24" strokeWidth="1"/>
    </g>
    {/* Dashed connector line */}
    <path d="M81 75 C100 75 118 80 127 84" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 3"/>
    <defs>
      <linearGradient id="steelGrad1" x1="55" y1="20" x2="81" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#a1a1aa"/>
        <stop offset="35%" stopColor="#d4d4d8"/>
        <stop offset="65%" stopColor="#e4e4e7"/>
        <stop offset="100%" stopColor="#a1a1aa"/>
      </linearGradient>
    </defs>
  </svg>
);

const IllustrationDoubleProtection = () => (
  <svg viewBox="0 0 240 200" fill="none" className="w-full h-full">
    {/* Ground surface */}
    <rect x="0" y="52" width="240" height="4" fill="#a3a3a3" opacity="0.2"/>
    <line x1="0" y1="54" x2="240" y2="54" stroke="#71717a" strokeWidth="1"/>
    {/* Frost line */}
    <line x1="0" y1="108" x2="240" y2="108" stroke="#60a5fa" strokeWidth="1" strokeDasharray="6 3"/>
    {/* Frost zone shading */}
    <rect x="0" y="54" width="240" height="54" fill="#60a5fa" opacity="0.04"/>
    {/* Support head / bracket */}
    <rect x="78" y="26" width="44" height="14" rx="2" fill="#fbbf24" opacity="0.25" stroke="#fbbf24" strokeWidth="1.5"/>
    <rect x="86" y="22" width="28" height="8" rx="1" fill="#fbbf24" opacity="0.4" stroke="#d97706" strokeWidth="1"/>
    {/* Pile shaft */}
    <rect x="88" y="38" width="24" height="150" rx="2" fill="url(#steelGrad2)" stroke="#71717a" strokeWidth="1.5"/>
    <rect x="96" y="38" width="6" height="150" fill="white" opacity="0.12" rx="1"/>
    {/* Polyurethane fill zone */}
    <rect x="90" y="56" width="20" height="52" fill="#fbbf24" opacity="0.08"/>
    <rect x="84" y="54" width="32" height="56" rx="2" fill="none" stroke="#fbbf24" strokeWidth="2.5" opacity="0.6"/>
    {/* Helix blades */}
    <ellipse cx="100" cy="168" rx="34" ry="9" fill="#d4d4d8" stroke="#71717a" strokeWidth="1.2"/>
    <ellipse cx="100" cy="154" rx="28" ry="7" fill="#e4e4e7" stroke="#a1a1aa" strokeWidth="1"/>
    {/* Labels with leader lines */}
    <line x1="116" y1="32" x2="155" y2="32" stroke="#52525b" strokeWidth="0.75" strokeDasharray="2 2"/>
    <text x="158" y="36" fill="#52525b" fontSize="8" fontWeight="600">Support head</text>
    <line x1="116" y1="72" x2="155" y2="62" stroke="#52525b" strokeWidth="0.75" strokeDasharray="2 2"/>
    <text x="158" y="60" fill="#d97706" fontSize="8" fontWeight="600">Polyurethane</text>
    <text x="158" y="70" fill="#52525b" fontSize="7.5">filling</text>
    <line x1="112" y1="90" x2="155" y2="86" stroke="#52525b" strokeWidth="0.75" strokeDasharray="2 2"/>
    <text x="158" y="90" fill="#52525b" fontSize="8" fontWeight="600">Steel tube</text>
    <line x1="134" y1="168" x2="155" y2="162" stroke="#52525b" strokeWidth="0.75" strokeDasharray="2 2"/>
    <text x="158" y="166" fill="#52525b" fontSize="8" fontWeight="600">Helix</text>
    {/* Zone labels */}
    <text x="8" y="50" fill="#71717a" fontSize="7" fontWeight="600">GROUND LEVEL</text>
    <text x="8" y="104" fill="#60a5fa" fontSize="7" fontWeight="600">FROST LINE</text>
    <text x="8" y="134" fill="#52525b" fontSize="7" fontWeight="500" opacity="0.6">Zone below</text>
    <text x="8" y="143" fill="#52525b" fontSize="7" fontWeight="500" opacity="0.6">frost level</text>
    <defs>
      <linearGradient id="steelGrad2" x1="88" y1="38" x2="112" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#a1a1aa"/>
        <stop offset="35%" stopColor="#d4d4d8"/>
        <stop offset="65%" stopColor="#e4e4e7"/>
        <stop offset="100%" stopColor="#a1a1aa"/>
      </linearGradient>
    </defs>
  </svg>
);

const IllustrationAnchoring = () => (
  <svg viewBox="0 0 240 200" fill="none" className="w-full h-full">
    {/* Column labels */}
    <rect x="16" y="6" width="92" height="20" rx="3" fill="#fbbf24"/>
    <text x="62" y="20" fill="#000" fontSize="8.5" fontWeight="700" textAnchor="middle">GOLIATHTECH</text>
    <rect x="132" y="6" width="92" height="20" rx="3" fill="#71717a"/>
    <text x="178" y="20" fill="#fff" fontSize="7.5" fontWeight="600" textAnchor="middle">NON-CERTIFIED</text>
    {/* Divider */}
    <line x1="120" y1="30" x2="120" y2="195" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="4 3"/>

    {/* === GoliathTech (left) === */}
    {/* Robust bracket */}
    <rect x="36" y="36" width="52" height="16" rx="2" fill="#fbbf24" opacity="0.25" stroke="#fbbf24" strokeWidth="2"/>
    <rect x="44" y="32" width="36" height="8" rx="1.5" fill="#fbbf24" opacity="0.4" stroke="#d97706" strokeWidth="1"/>
    {/* Nut fasteners on bracket */}
    <circle cx="48" cy="44" r="3" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8"/>
    <circle cx="76" cy="44" r="3" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8"/>
    {/* Shaft */}
    <rect x="52" y="52" width="20" height="106" rx="1" fill="url(#steelGrad3a)" stroke="#71717a" strokeWidth="1.2"/>
    <rect x="59" y="52" width="5" height="106" fill="white" opacity="0.12" rx="1"/>
    {/* Reinforced joint rings */}
    <rect x="49" y="78" width="26" height="5" rx="1.5" fill="#fbbf24" opacity="0.3" stroke="#fbbf24" strokeWidth="1"/>
    <rect x="49" y="98" width="26" height="5" rx="1.5" fill="#fbbf24" opacity="0.3" stroke="#fbbf24" strokeWidth="1"/>
    {/* Strong helix blades */}
    <ellipse cx="62" cy="140" rx="32" ry="9" fill="#d4d4d8" stroke="#71717a" strokeWidth="1.5"/>
    <ellipse cx="62" cy="156" rx="28" ry="7" fill="#e4e4e7" stroke="#a1a1aa" strokeWidth="1"/>
    {/* Green check */}
    <circle cx="62" cy="180" r="11" fill="#16a34a" opacity="0.12" stroke="#16a34a" strokeWidth="1.5"/>
    <path d="M56 180l4 4 8-8" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

    {/* === Non-certified (right) === */}
    {/* Weak flat bracket */}
    <rect x="152" y="40" width="52" height="10" rx="1" fill="#d4d4d8" stroke="#a1a1aa" strokeWidth="1.2"/>
    {/* Thinner shaft */}
    <rect x="166" y="50" width="16" height="108" rx="1" fill="#e4e4e7" stroke="#a1a1aa" strokeWidth="1"/>
    {/* Crack / weakness lines */}
    <path d="M170 78l4 7-3 5 5 7" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M178 95l-3 6 4 5-2 7" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    {/* Weak helix */}
    <ellipse cx="174" cy="140" rx="24" ry="6" fill="#e4e4e7" stroke="#a1a1aa" strokeWidth="1"/>
    {/* Red X */}
    <circle cx="174" cy="180" r="11" fill="#ef4444" opacity="0.12" stroke="#ef4444" strokeWidth="1.5"/>
    <path d="M169 175l10 10M179 175l-10 10" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"/>

    <defs>
      <linearGradient id="steelGrad3a" x1="52" y1="52" x2="72" y2="52" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#a1a1aa"/>
        <stop offset="35%" stopColor="#d4d4d8"/>
        <stop offset="65%" stopColor="#e4e4e7"/>
        <stop offset="100%" stopColor="#a1a1aa"/>
      </linearGradient>
    </defs>
  </svg>
);

const IllustrationReinforcedSeals = () => (
  <svg viewBox="0 0 240 200" fill="none" className="w-full h-full">
    {/* Top pile section */}
    <rect x="48" y="8" width="24" height="72" rx="1.5" fill="url(#steelGrad4a)" stroke="#71717a" strokeWidth="1.5"/>
    <rect x="55" y="8" width="6" height="72" fill="white" opacity="0.12" rx="1"/>
    {/* Bottom pile section (extension) */}
    <rect x="48" y="116" width="24" height="76" rx="1.5" fill="url(#steelGrad4a)" stroke="#71717a" strokeWidth="1.5"/>
    <rect x="55" y="116" width="6" height="76" fill="white" opacity="0.12" rx="1"/>
    {/* Reinforced seal joint area */}
    <rect x="40" y="76" width="40" height="44" rx="3" fill="#fbbf24" opacity="0.1" stroke="#fbbf24" strokeWidth="2.5"/>
    {/* Seal rings */}
    <rect x="44" y="82" width="32" height="7" rx="2" fill="#a1a1aa" stroke="#71717a" strokeWidth="1"/>
    <rect x="44" y="93" width="32" height="7" rx="2" fill="#a1a1aa" stroke="#71717a" strokeWidth="1"/>
    <rect x="44" y="104" width="32" height="7" rx="2" fill="#a1a1aa" stroke="#71717a" strokeWidth="1"/>
    {/* Stop bolts */}
    <circle cx="42" cy="86" r="3.5" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
    <circle cx="78" cy="86" r="3.5" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
    <circle cx="42" cy="107" r="3.5" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
    <circle cx="78" cy="107" r="3.5" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
    {/* Helix at bottom */}
    <ellipse cx="60" cy="186" rx="32" ry="8" fill="#d4d4d8" stroke="#71717a" strokeWidth="1.2"/>

    {/* Yellow circle zoom detail */}
    <circle cx="168" cy="98" r="56" fill="#fbbf24" opacity="0.08" stroke="#fbbf24" strokeWidth="2.5"/>
    <clipPath id="sealClip1">
      <circle cx="168" cy="98" r="54"/>
    </clipPath>
    <g clipPath="url(#sealClip1)">
      {/* Zoomed pipe sections */}
      <rect x="140" y="44" width="56" height="46" fill="#d4d4d8" stroke="#a1a1aa" strokeWidth="1"/>
      <rect x="148" y="44" width="12" height="46" fill="white" opacity="0.15"/>
      <rect x="140" y="110" width="56" height="46" fill="#d4d4d8" stroke="#a1a1aa" strokeWidth="1"/>
      <rect x="148" y="110" width="12" height="46" fill="white" opacity="0.15"/>
      {/* Zoomed seal */}
      <rect x="134" y="87" width="68" height="26" rx="3" fill="#fbbf24" opacity="0.15" stroke="#fbbf24" strokeWidth="2"/>
      <rect x="138" y="91" width="60" height="6" rx="2" fill="#a1a1aa" stroke="#71717a" strokeWidth="0.75"/>
      <rect x="138" y="101" width="60" height="6" rx="2" fill="#a1a1aa" stroke="#71717a" strokeWidth="0.75"/>
      {/* Zoomed bolts */}
      <circle cx="136" cy="94" r="5" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
      <circle cx="200" cy="94" r="5" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
      <circle cx="136" cy="104" r="5" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
      <circle cx="200" cy="104" r="5" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
    </g>
    {/* Connector line */}
    <path d="M80 98 C95 98 105 98 114 98" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 3"/>

    <defs>
      <linearGradient id="steelGrad4a" x1="48" y1="8" x2="72" y2="8" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#a1a1aa"/>
        <stop offset="35%" stopColor="#d4d4d8"/>
        <stop offset="65%" stopColor="#e4e4e7"/>
        <stop offset="100%" stopColor="#a1a1aa"/>
      </linearGradient>
    </defs>
  </svg>
);

const features = [
  {
    illustration: IllustrationSteelZN,
    title: "Steel + ZN",
    description: "High-quality galvanized steel.",
  },
  {
    illustration: IllustrationDoubleProtection,
    title: "Double protection",
    description: "Materials designed to withstand freeze and thaw movements.",
  },
  {
    illustration: IllustrationAnchoring,
    title: "Exclusive anchoring system",
    description: "Superior resistance to lateral and vertical structure movement.",
  },
  {
    illustration: IllustrationReinforcedSeals,
    title: "GoliathTech reinforced seals",
    description: "Possible to extend the piles while maintaining high stability.",
  },
];

export function ProductFeatures() {
  return (
    <section id="product-features" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading — matches GoliathTech's layout */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-zinc-500 text-lg mb-2">
            Our screw piles are designed to
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-primary">surpass the highest</span>
            <br />
            <span className="text-primary">industry standards.</span>
          </h2>
          <div className="w-20 h-1 bg-primary/40 mx-auto mb-6" />
          <p className="text-xl md:text-2xl font-bold text-black tracking-wide">
            Consistency. Precision. Strength.
          </p>
        </div>

        {/* 4 feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => {
            const Illustration = feature.illustration;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="text-left"
              >
                <div className="w-full h-48 mb-6">
                  <Illustration />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Learn More CTA */}
        <div className="flex justify-center">
          <a
            href="#product-detail"
            className="inline-flex items-center gap-2 border-2 border-black hover:bg-black hover:text-white text-black font-bold uppercase px-8 py-3 tracking-widest transition-all text-sm"
          >
            Learn More
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
