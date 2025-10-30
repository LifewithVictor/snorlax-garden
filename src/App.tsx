const flowers = [
  {
    name: "Tulips",
    image:
      "https://public.youware.com/users-website-assets/prod/f4aabbaa-802c-469e-bc2f-4d3d7c5a922b/e9d95ef1db28438cb04d2dba86e588a6.jpg",
    note: "For the mornings when we laughed without worry, dreaming about what could be.",
    dedicationUrl: "https://music.apple.com/us/album/work-song/1440935225?i=1440935632",
  },
  {
    name: "Lilies",
    image:
      "https://public.youware.com/users-website-assets/prod/f4aabbaa-802c-469e-bc2f-4d3d7c5a922b/4114b99307be46848ec863c3052eca91.jpeg",
    note: "For every time you sat quietly with me, saying so much without a single word.",
    dedicationUrl: "https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg",
  },
  {
    name: "Roses",
    image:
      "https://public.youware.com/users-website-assets/prod/f4aabbaa-802c-469e-bc2f-4d3d7c5a922b/e85de1d5d94d43c5b85926a9f0e71272.jpg",
    note: "For the moments you let me in, even when life felt like too much to hold alone.",
    dedicationUrl: "https://open.spotify.com/track/3vQN8NcKcNH2AE7V9L1Y0d",
  },
  {
    name: "Peonies",
    image:
      "https://public.youware.com/users-website-assets/prod/f4aabbaa-802c-469e-bc2f-4d3d7c5a922b/a92b35afd87d44e0b0760b5726edeec6",
    note: "For the softness you carry, the gentleness that made me brave enough to stay.",
    dedicationUrl: "https://open.spotify.com/track/1jFhnVoFowxOS6OMeS0SS1",
  },
  {
    name: "Sunflowers",
    image:
      "https://public.youware.com/users-website-assets/prod/f4aabbaa-802c-469e-bc2f-4d3d7c5a922b/a3a6a642a6584806966aa7c35a18f17d.jpeg",
    note: "For the light you bring—warm, constant, and somehow always pointed toward hope.",
    dedicationUrl: "https://open.spotify.com/track/7fBv7CLKzipRk6EC6TWHOB",
  },
  {
    name: "Lavender",
    image:
      "https://public.youware.com/users-website-assets/prod/f4aabbaa-802c-469e-bc2f-4d3d7c5a922b/410ae58643cd4c74814b13e7837b3e34.jpeg",
    note: "For the calm you gave when storms felt endless, reminding me to breathe.",
    dedicationUrl: "https://open.spotify.com/track/38ias6LImwjUgFtkECtPQO",
  },
];

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "Flowers", href: "#flowers" },
  { name: "Memories", href: "#memories" },
  { name: "Promises", href: "#promises" },
  { name: "Playlist", href: "#playlist" },
  { name: "Letter", href: "#letter" },
];

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fdf2f8] via-[#eef3ff] to-[#fef9f3] text-[#2e1c3c]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,204,229,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(193,219,255,0.2),_transparent_50%)]" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 pb-24 pt-12 sm:px-10">
        <header className="sticky top-6 z-50">
          <nav className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-[0_20px_50px_-35px_rgba(94,55,124,0.65)] backdrop-blur">
            <span className="text-base font-semibold tracking-[0.25em] text-[#ff7fbf]">
              SNORLAX<br className="block sm:hidden" /> GARDEN
            </span>
            <ul className="hidden items-center gap-4 text-sm font-medium text-[#4a3555] sm:flex">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="rounded-full px-3 py-2 transition-colors duration-200 hover:bg-[#ff9cde]/15 hover:text-[#ff3e92]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#letter"
              className="rounded-full bg-gradient-to-r from-[#ff8fbf] via-[#ffa8c7] to-[#ffcf90] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#ff8fbf]/30 transition-transform duration-200 hover:-translate-y-0.5"
            >
              Open Letter
            </a>
          </nav>
        </header>

        <section id="hero" className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-[#ff7fbf] shadow-sm">
            Dear Snorlax
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            A garden of little apologies,<br className="hidden sm:block" /> grown just for you.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-[#4a3555]">
            I know things have been quiet, and maybe I deserve the silence. Still, I want you to feel the softness you once let me be part of. Each bloom here is a small promise: that I hear you, I miss you, and I’m ready to learn how to show up better.
          </p>
        </section>

        <section id="flowers" className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-3xl font-semibold text-[#3b234a]">Flowers I’m sending you</h2>
            <p className="max-w-2xl text-sm text-[#5b4667]">
              Each bloom carries a moment, a breath, and a different way to say I still care deeply about you.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {flowers.map((flower) => (
              <figure
                key={flower.name}
                className="group h-full rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_25px_60px_-45px_rgba(87,56,110,0.35)] backdrop-blur transition-transform duration-200 hover:-translate-y-2"
              >
                <div className="relative h-44 w-full overflow-hidden rounded-2xl">
                  <img
                    src={flower.image}
                    alt={`${flower.name} dedicated to Snorlax`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 right-3 rounded-full bg-gradient-to-br from-[#ff9cde] via-[#ffd1dc] to-[#ffe0b5] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md">
                    {flower.name}
                  </span>
                </div>
                <figcaption className="mt-5 text-sm leading-relaxed text-[#513a5d]">
                  {flower.dedicationUrl ? (
                    <a
                      href={flower.dedicationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#ff7fbf] underline underline-offset-4 transition-colors duration-200 hover:text-[#ff3e92]"
                    >
                      {flower.note}
                    </a>
                  ) : (
                    flower.note
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="memories" className="grid gap-10 rounded-3xl border border-white/70 bg-white/80 p-10 shadow-[0_40px_90px_-55px_rgba(94,55,124,0.42)] backdrop-blur lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold text-[#3b234a]">Little memories I keep replaying</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4a3555]">
              I keep the long walks, the voice notes you sent before falling asleep, and that word only you used when you needed me close. This space is here so we don’t forget we’re made of layersike petals that still hold color even when time bends them.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#ffdae7]/60 via-[#edf1ff]/70 to-[#fff4e3]/80 p-8 shadow-inner">
            <h3 className="text-lg font-semibold text-[#3b234a]">What I still want to give you</h3>
            <p className="mt-4 text-sm text-[#513a5d]">
              A place you can return to whenever you need to remember how my voice sounds when it tells you that you’re safe.
            </p>
            <div className="mt-6 space-y-3 text-sm text-[#4f3b60]">
              <p>0 Quiet digital postcards each month, even if they’re the only way I can reach you.</p>
              <p>0 A bouquet in person when you’re ready to receive it.</p>
              <p>0 Shared silences, but this time without fear.</p>
            </div>
          </div>
        </section>

        <section
          id="promises"
          className="rounded-3xl border border-white/70 bg-white/80 p-10 text-center shadow-[0_40px_90px_-55px_rgba(94,55,124,0.42)] backdrop-blur"
        >
          <h2 className="text-3xl font-semibold text-[#3b234a]">Gentle promises</h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-[#4a3555]">
            I promise to listen even when your answers are short. I promise to honor your space without disappearing. I promise to show you affection consistently so you never have to guess. These lines aren’t shortcutsthey’re notes to keep me accountable.
          </p>
          <div className="mt-8 flex flex-col gap-6 text-sm text-[#513a5d] sm:flex-row sm:justify-center">
            <div className="rounded-2xl border border-[#ffd1dc]/60 bg-[#fff8fb]/90 px-6 py-5 shadow-inner">
              <h3 className="text-base font-semibold text-[#ff7fbf]">Patience</h3>
              <p className="mt-2">Letting you set the pace, never pushing or asking for certainty you’re not ready to give.</p>
            </div>
            <div className="rounded-2xl border border-[#dcd9ff]/60 bg-[#f6f6ff]/90 px-6 py-5 shadow-inner">
              <h3 className="text-base font-semibold text-[#8f7bff]">Honesty</h3>
              <p className="mt-2">Speaking clearly instead of hiding behind silences that hurt more than hard conversations.</p>
            </div>
            <div className="rounded-2xl border border-[#ffe3b8]/60 bg-[#fff5e8]/90 px-6 py-5 shadow-inner">
              <h3 className="text-base font-semibold text-[#f6943a]">Care</h3>
              <p className="mt-2">Protecting your peace, even if that’s just a good-morning message so you know you’re thought of.</p>
            </div>
          </div>
        </section>

        <section
          id="playlist"
          className="rounded-3xl border border-white/70 bg-white/80 p-10 text-center shadow-[0_40px_90px_-55px_rgba(94,55,124,0.42)] backdrop-blur"
        >
          <h2 className="text-3xl font-semibold text-[#3b234a]">A playlist to hold you</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#4a3555]">
            If I could slip you songs without crowding your day, I’d send these. Let the words carry the feelings I’m still trying to say out loud.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <article className="rounded-2xl border border-white/70 bg-white/80 p-6 text-left shadow-[0_25px_60px_-45px_rgba(87,56,110,0.2)]">
              <h3 className="text-sm font-semibold text-[#ff7fbf]">Work Song — Hozier</h3>
              <p className="mt-3 text-sm text-[#513a5d]">
                “When my time comes around, lay me gently in the cold dark earth.” That devotion is the same one I want to bring back to you—steady, unshakeable, even in the dark.
              </p>
            </article>
            <article className="rounded-2xl border border-white/70 bg-white/80 p-6 text-left shadow-[0_25px_60px_-45px_rgba(87,56,110,0.2)]">
              <h3 className="text-sm font-semibold text-[#ffa8c7]">Yellow — Coldplay</h3>
              <p className="mt-3 text-sm text-[#513a5d]">
                “Look at the stars, look how they shine for you.” You always found a glow in things everyone else skipped. I want you to remember how brightly you’ve always lit up my sky.
              </p>
            </article>
            <article className="rounded-2xl border border-white/70 bg-white/80 p-6 text-left shadow-[0_25px_60px_-45px_rgba(87,56,110,0.2)]">
              <h3 className="text-sm font-semibold text-[#ffd5a3]">I Wanna Be Yours — Arctic Monkeys</h3>
              <p className="mt-3 text-sm text-[#513a5d]">
                “Let me be your leccy meter and I’ll never run out.” Every ordinary thing becomes sacred if it keeps me close to you; that’s still the dream.
              </p>
            </article>
            <article className="rounded-2xl border border-white/70 bg-white/80 p-6 text-left shadow-[0_25px_60px_-45px_rgba(87,56,110,0.2)]">
              <h3 className="text-sm font-semibold text-[#ffcf90]">Marry Me — Jason Derulo</h3>
              <p className="mt-3 text-sm text-[#513a5d]">
                “Will you marry me? I swear that I will mean it.” Because forever still sounds like something we could write together, no matter how long we take getting there.
              </p>
            </article>
          </div>
        </section>

        <section
          id="letter"
          className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/85 p-10 shadow-[0_40px_90px_-55px_rgba(94,55,124,0.42)] backdrop-blur"
        >
          <span className="pointer-events-none absolute -right-20 top-16 h-56 w-56 rounded-full bg-gradient-to-br from-[#ffc8dd]/40 via-[#bde0fe]/30 to-transparent blur-3xl" />
          <h2 className="text-3xl font-semibold text-[#3b234a]">A letter for you</h2>
          <p className="mt-4 text-base leading-relaxed text-[#4a3555]">
            Snorlax, you were the first person who made me believe home could be a feeling. I miss the way you trusted me with your quiet, the way you looked at me like I belonged in your orbit. I’m not asking for everything to rush back. I’m here to tell you I hear the hurt, I value the space, and I’m ready to rebuild what I fractured.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4a3555]">
            If all I can offer today is a bouquet on a screen, then I’ll let these flowers bloom with the patience you deserve. I’m willing to learn how to love you better, even if that means starting again and moving slowly.
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.35em] text-[#ff7fbf]">Always, me.</p>
        </section>

        <section className="flex flex-col items-center justify-center gap-5 rounded-3xl border border-white/70 bg-white/70 px-8 py-12 text-center shadow-[0_25px_70px_-50px_rgba(94,55,124,0.4)] backdrop-blur-lg">
          <p className="max-w-3xl text-sm text-[#4a3555]">
            This link will always be here for you. Whenever you need a reminder of how I feel, open itno pressure, just presence.
          </p>
          <a
            href={typeof window !== "undefined" ? window.location.href : "#"}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#ff8fbf] via-[#ffa8c7] to-[#ffcf90] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-[#ff9cde]/40 transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9cde]"
          >
            Share this garden
          </a>
        </section>

        <footer className="text-center text-xs text-[#5f4a68]/70">
          Made with flowers and patience 4 {new Date().getFullYear()}
        </footer>
      </div>
    </main>
  );
}

export default App;
