import { Mail, Phone } from 'lucide-react'

const interests = ['Musician', 'Snowboarder', 'Rock Climber', 'Cook Intern']

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

export function CallingCard() {
  return (
    <article className="w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <header className="bg-primary px-8 pt-10 pb-8 text-primary-foreground">
        <p className="text-xs font-medium tracking-[0.2em] uppercase opacity-75">
          College Athlete
        </p>
        <h1 className="mt-3 font-serif text-5xl leading-none text-balance">
          Gabriel Lacaran
        </h1>
      </header>

      <div className="flex flex-col gap-8 px-8 py-8">
        <section aria-labelledby="about-heading">
          <h2
            id="about-heading"
            className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase"
          >
            A little more
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {interests.map((item) => (
              <li
                key={item}
                className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Asian &middot; Filipino / Japanese
          </p>
        </section>

        <section aria-labelledby="contact-heading" className="border-t border-border pt-6">
          <h2
            id="contact-heading"
            className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase"
          >
            How to reach me
          </h2>
          <ul className="mt-3 flex flex-col gap-2">
            {contacts.map(({ label, value, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group flex items-center gap-3 rounded-lg px-2 py-2 -mx-2 transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-ring"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="sr-only">{label}: </span>
                    <span className="text-sm font-medium break-all text-foreground">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}
