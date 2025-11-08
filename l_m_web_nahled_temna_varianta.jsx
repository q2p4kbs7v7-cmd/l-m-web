import { useState } from "react";
import { motion } from "framer-motion";

// --- Mini logo as inline SVG (matches your sent logo vibe) ---
const LMLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <defs>
      <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#E2AD73" />
        <stop offset="100%" stopColor="#9C7B5A" />
      </linearGradient>
    </defs>
    <path
      fill="url(#g)"
      d="M50 12 18 44l4 4 10-10v36l7 7V63h12v18l7-7V38l10 10 4-4L50 12Zm6 44H44V37l12-12v31Z"
    />
  </svg>
);

const Section = ({ id, title, children, subtle = false }) => (
  <section
    id={id}
    className={`relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
      subtle ? "py-10 sm:py-14" : "py-14 sm:py-20"
    }`}
  >
    {title && (
      <div className="mb-8 flex items-end gap-3">
        <LMLogo className="w-7 h-7" />
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-100">
          {title}
        </h2>
      </div>
    )}
    {children}
  </section>
);

const Card = ({ title, desc, icon }) => (
  <div className="rounded-2xl border border-stone-800 bg-stone-900/40 p-5 hover:border-stone-700 transition">
    <div className="mb-3 flex items-center gap-3">
      <div className="grid place-items-center rounded-xl border border-stone-800 bg-stone-900/60 w-11 h-11">
        {icon}
      </div>
      <h3 className="text-stone-100 font-medium text-lg">{title}</h3>
    </div>
    <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const GalleryItem = ({ item, onOpen }) => (
  <button
    className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/40"
    onClick={() => onOpen(item)}
    title={`${item.title} – ${item.place}`}
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />
    <div className="absolute inset-0">
      <img src={item.src} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform" />
    </div>
    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
      <p className="text-stone-200 text-sm font-medium">{item.title}</p>
      <p className="text-stone-400 text-xs">{item.place}</p>
    </div>
  </button>
);

export default function App() {
  const [open, setOpen] = useState(null);

  const services = [
    {
      title: "Nábytek na míru",
      desc: "Masivní stoly, kuchyňské a koupelnové desky, vestavby. Precizní truhlářina od návrhu po montáž.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-400"><path fill="currentColor" d="M3 7h18v2H3zm2 4h14v8H5zm2 2v4h10v-4z"/></svg>
      ),
    },
    {
      title: "Pergoly a přístřešky",
      desc: "Poctivé konstrukce z KVH/BSH, statika a kotvení na jistotu, povrch v přírodních odstínech.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-400"><path fill="currentColor" d="m12 3 9 6-1.2 1.6L12 6.1 4.2 10.6 3 9zM5 12h14v9H5z"/></svg>
      ),
    },
    {
      title: "Střechy",
      desc: "Krovy, laťování, krytina. Od přípravy po poslední šroub – bezpečně a přesně.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-400"><path fill="currentColor" d="M4 10h16v10H4zm8-7 8 6H4z"/></svg>
      ),
    },
    {
      title: "Podbití a obklady",
      desc: "OSB + nátěr, palubky i PVC. Rovné linie, čisté detaily a dlouhá výdrž.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-400"><path fill="currentColor" d="M3 5h18v4H3zm0 6h18v8H3z"/></svg>
      ),
    },
  ];

  const gallery = [
    { id: 1, title: "Kuchyně – rekonstrukce", place: "Horní Benešov", src: "/mnt/data/IMG_9092.JPG" },

    // — Zakázka 2: Masiv (Staré Heřmínovy)
    { id: 21, title: "Masivní jasan – koupelnová deska (detail)", place: "Staré Heřmínovy", src: "/mnt/data/6fd68100-5e74-4292-940b-08cf681f0f94.jpeg" },
    { id: 22, title: "Masivní jasan – koupelnová deska (bok)", place: "Staré Heřmínovy", src: "/mnt/data/a6ce6955-1b7c-49b2-88b1-b92318caf8c5.jpeg" },
    { id: 23, title: "Masivní jasan – koupelnová skříňka s deskou", place: "Staré Heřmínovy", src: "/mnt/data/e9861542-b92d-44a7-b45b-d07defb7d876.jpeg" },
    { id: 24, title: "Masivní jasan – jídelní stůl (instalace)", place: "Staré Heřmínovy", src: "/mnt/data/13c9c7da-5ee2-4079-8e1b-53b102c22dce.jpeg" },

    // — Další práce
    { id: 3, title: "Pergola / přístřešek", place: "Horní Benešov", src: "/mnt/data/IMG_9089.JPG" },
    { id: 4, title: "Podbití střechy", place: "Opava", src: "/mnt/data/IMG_4268.jpeg" },
    { id: 5, title: "Kuchyně – dokončeno", place: "Horní Benešov", src: "/mnt/data/2e7279c3-97f0-49ff-8f69-55f96ada8904.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-stone-300 selection:bg-amber-300 selection:text-black">
      {/* --- Header --- */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-stone-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LMLogo className="w-8 h-8" />
            <span className="font-semibold tracking-wide text-stone-100">L&M Tesařství & Truhlářství</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#sluzby" className="hover:text-stone-100">Služby</a>
            <a href="#realizace" className="hover:text-stone-100">Realizace</a>
            <a href="#onas" className="hover:text-stone-100">O nás</a>
            <a href="#kontakt" className="hover:text-stone-100">Kontakt</a>
            <a
              href="#kontakt"
              className="rounded-xl border border-amber-400/40 bg-gradient-to-b from-amber-300 to-amber-400 text-black px-4 py-2 font-medium shadow-sm hover:brightness-110"
            >
              Nezávazná poptávka
            </a>
          </nav>
        </div>
      </header>

      {/* --- Hero --- */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(226,173,115,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.35),rgba(0,0,0,0.0))]" />
        <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url('/mnt/data/IMG_9092.JPG')" }} />
        <Section>
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-50"
              >
                L&M Tesařství & Truhlářství
              </motion.h1>
              <p className="mt-5 text-stone-300 max-w-xl leading-relaxed">
                Poctivé dřevo. Přesná práce. Výsledek, který vydrží. Stoly a nábytek na míru, pergoly a přístřešky, střechy a podbití.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  className="rounded-xl border border-amber-400/40 bg-gradient-to-b from-amber-300 to-amber-400 text-black px-5 py-3 font-medium shadow-sm hover:brightness-110"
                >
                  📩 Nezávazná poptávka
                </a>
                <a
                  href="tel:+420702212472"
                  className="rounded-xl px-5 py-3 border border-stone-700 hover:border-stone-600 text-stone-200"
                >
                  📞 Zavolat: 702 212 472
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl border border-stone-800 bg-stone-900/40 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/mnt/data/IMG_9092.JPG')" }} />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
              </div>
              <p className="mt-4 text-sm text-stone-400">Reálná fotka: kuchyně na míru (Horní Benešov). Můžeme ji kdykoli vyměnit za jiný projekt.</p>
            </div>
          </div>
        </Section>
      </div>

      {/* --- Services --- */}
      <Section id="sluzby" title="Služby">
        <p className="text-stone-400 max-w-2xl mb-8">
          Navrhujeme, vyrábíme a montujeme. Vždy na míru a poctivě. Materiály volíme s ohledem na životnost a vzhled.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div key={i} initial={{opacity:0, y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}}>
              <Card {...s} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- Gallery --- */}
      <Section id="realizace" title="Vybrané realizace">
        <div className="grid md:grid-cols-2 gap-5">
          {gallery.map((g) => (
            <GalleryItem key={g.id} item={g} onOpen={setOpen} />
          ))}
        </div>
        <p className="text-stone-500 text-sm mt-4">*V ostré verzi zde budou vaše reálné fotografie (Zakázka 1–4) v jednotném formátu.*</p>
      </Section>

      {/* --- Process --- */}
      <Section subtle title="Jak pracujeme">
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-stone-300">
          {[
            ["Poptávka", "Krátký formulář nebo telefon. Ozveme se zpět do 24 h."],
            ["Zaměření", "Dorazíme na místo, domluvíme detaily a materiál."],
            ["Výroba", "Poctivá ruční práce a pečlivá příprava na montáž."],
            ["Montáž", "Čistá práce, předání a servis."],
          ].map(([h, p], i) => (
            <li key={i} className="rounded-2xl border border-stone-800 bg-stone-900/40 p-5">
              <p className="text-amber-300 text-sm mb-1">0{i + 1}</p>
              <h3 className="text-stone-100 font-medium mb-1">{h}</h3>
              <p className="text-stone-400 text-sm">{p}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* --- About --- */}
      <Section id="onas" title="O nás">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <p className="text-stone-400 leading-relaxed">
            Děláme věci tak, jak bychom je dělali u sebe doma. Masiv, přesnost, férové jednání. Každý kus dřeva má svůj příběh – my mu dáme nový život.
          </p>
          <div className="rounded-2xl border border-stone-800 bg-stone-900/40 p-5">
            <p className="text-sm text-stone-300">„Tyvole, tohle chci taky.“ – to je reakce, kterou chceme vyvolat. Fotkami poctivé práce a čistými detaily.
            </p>
          </div>
        </div>
      </Section>

      {/* --- Contact --- */}
      <Section id="kontakt" title="Kontakt">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3 text-stone-300">
            <p className="text-lg font-medium text-stone-100">L&M Tesařství & Truhlářství</p>
            <p>📍 Staré Heřmínovy 18 (Opavsko a okolí)</p>
            <p>📞 Jaroslav Meinhold — <a className="hover:text-stone-100" href="tel:+420702212472">702 212 472</a></p>
            <p>📞 Aleš Legerský — <a className="hover:text-stone-100" href="tel:+420774998560">774 998 560</a></p>
            <p>✉️ <a className="hover:text-stone-100" href="mailto:tesarilm@seznam.cz">tesarilm@seznam.cz</a></p>
          </div>
          <form className="rounded-2xl border border-stone-800 bg-stone-900/40 p-5 grid gap-3">
            <div>
              <label className="text-sm text-stone-400">Jméno a příjmení</label>
              <input className="mt-1 w-full rounded-xl bg-stone-950 border border-stone-800 px-3 py-2 text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="Jan Novák" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-stone-400">Telefon</label>
                <input className="mt-1 w-full rounded-xl bg-stone-950 border border-stone-800 px-3 py-2 text-stone-100" placeholder="702 000 000" />
              </div>
              <div>
                <label className="text-sm text-stone-400">E-mail</label>
                <input className="mt-1 w-full rounded-xl bg-stone-950 border border-stone-800 px-3 py-2 text-stone-100" placeholder="email@domena.cz" />
              </div>
            </div>
            <div>
              <label className="text-sm text-stone-400">Popište svou poptávku</label>
              <textarea rows={4} className="mt-1 w-full rounded-xl bg-stone-950 border border-stone-800 px-3 py-2 text-stone-100" placeholder="Co potřebujete vyrobit / kde se bude montovat…" />
            </div>
            <button type="button" className="mt-2 rounded-xl border border-amber-400/40 bg-gradient-to-b from-amber-300 to-amber-400 text-black px-5 py-3 font-medium shadow-sm hover:brightness-110">
              Odeslat poptávku
            </button>
            <p className="text-xs text-stone-500">Odesláním souhlasíte se zpracováním kontaktních údajů za účelem vyřízení poptávky.</p>
          </form>
        </div>
      </Section>

      <footer className="border-t border-stone-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-stone-500">
          <div className="flex items-center gap-2">
            <LMLogo className="w-5 h-5" />
            <span>© {new Date().getFullYear()} L&M Tesařství & Truhlářství — poctivá práce ze dřeva</span>
          </div>
          <a href="#top" className="hover:text-stone-300">Nahoru ↑</a>
        </div>
      </footer>

      {/* — Lightbox / Carousel — */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={open.src} alt={open.title} className="w-full h-auto rounded-xl border border-stone-700" />
            <div className="mt-3 flex justify-between text-stone-300 text-sm">
              <div>
                <p className="text-stone-100 font-medium">{open.title}</p>
                <p className="text-stone-400">{open.place}</p>
              </div>
              <button className="rounded-xl px-3 py-2 border border-stone-700 hover:border-stone-600" onClick={() => setOpen(null)}>Zavřít</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
