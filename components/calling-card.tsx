import { Mail, Phone } from 'lucide-react'

const interests = ['Musician', 'Snowboarder', 'Rock Climber', 'Cook Intern']

const details = [
  { label: 'Age', value: '18' },
  { label: 'Ethnicity', value: 'Filipino / Japanese' },
]

const contacts = [
  {
    label: 'Email',
    value: 'gabriellacaran@gmail.com',
    href: 'mailto:gabriellacaran@gmail.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '(702) 906-3977',
    href: 'tel:+17029063977',
    icon: Phone,
  },
]

function SectionLabel({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-[0.7rem] font-medium tracking-[0.25em] text-muted-foreground uppercase"
    >
      {children}
    </h2>
  )
}

export function CallingCard() {
  return (
    <article className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-card/80 shadow-2xl shadow-black/60 backdrop-blur-xl">
      <header className="relative overflow-hidden bg-gradient-to-br from-primary via-[oklch(0.2_0.08_300)] to-black px-8 pt-12 pb-10 text-primary-foreground">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-white/10 blur-3xl"
        />
        <div className="relative flex items-center gap-3">
          <span className="h-px w-8 bg-white/60" aria-hidden="true" />
          <p className="text-[0.7rem] font-medium tracking-[0.3em] uppercase text-white/80">
            College Athlete
          </p>
        </div>
        <h1 className="relative mt-5 font-serif text-6xl leading-[0.9] text-balance text-white">
          Gabriel
          <br />
          <span className="italic text-white/85">Lacaran</span>
        </h1>
      </header>

      <div className="flex flex-col gap-8 px-8 py-8">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
          {details.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1 bg-card px-4 py-3">
              <dt className="text-[0.65rem] font-medium tracking-[0.25em] text-muted-foreground uppercase">
                {label}
              </dt>
              <dd className="text-sm font-medium text-foreground">{value}</dd>
            </div>
          ))}
        </dl>

        <section aria-labelledby="about-heading">
          <SectionLabel id="about-heading">A little more</SectionLabel>
          <ul className="mt-4 flex flex-wrap gap-2">
            {interests.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="contact-heading" className="border-t border-white/10 pt-6">
          <SectionLabel id="contact-heading">How to reach me</SectionLabel>
          <ul className="mt-3 flex flex-col gap-1">
            {contacts.map(({ label, value, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="-mx-2 flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-ring"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="sr-only">{label}: </span>
                  <span className="text-sm font-medium break-all text-foreground">{value}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}
