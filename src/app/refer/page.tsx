import { PageShell } from "@/components/SiteChrome";
import { Button, Chip, Icon } from "@/components/ui";

const steps = [
  {
    icon: "hifi-refer-icon-step1.svg",
    label: "STEP 1",
    title: "Submit the intake form",
    body: "Share basic contact details for the family and, if you know it, the program that seems like the best fit.",
  },
  {
    icon: "hifi-refer-icon-step2.svg",
    label: "STEP 2",
    title: "A specialist follows up",
    body: "A state child care specialist reaches out to the family directly to explain options and answer questions.",
  },
  {
    icon: "hifi-refer-icon-step3.svg",
    label: "STEP 3",
    title: "The family gets enrolled",
    body: "The specialist helps the family enroll in the home visiting program that matches their needs.",
  },
];

const programs = [
  {
    chip: "Early Childhood Development",
    abbr: "PAT",
    name: "Parents as Teachers",
    body: "Personal visits from a trained parent educator who shares age-appropriate activities, tracks developmental milestones, and connects families to community resources.",
    serves: "Expectant parents and families with children from birth to kindergarten.",
    url: "parentpossible.org/pat",
    href: "https://parentpossible.org/pat",
  },
  {
    chip: "School readiness",
    abbr: "HIPPY",
    name: "Home Instruction for Parents of Preschool Youngsters",
    body: "A structured home-based curriculum that gives parents the tools and confidence to be their child's first teacher and prepare them for success in school.",
    serves: "Families with children ages 2 to 5.",
    url: "parentpossible.org/hippy",
    href: "https://parentpossible.org/hippy",
  },
  {
    chip: "Maternal & infant health",
    abbr: "NFP",
    name: "Nurse-Family Partnership",
    body: "A registered nurse partners with a first-time parent throughout pregnancy and the child's first two years, supporting a healthy pregnancy and strong early development.",
    serves: "First-time parents, enrolled early in pregnancy.",
    url: "denverhealth.org",
    href: "https://denverhealth.org/services/community-health/nurse-family-partnership",
  },
  {
    chip: "Family mental health",
    abbr: "Child First",
    name: "",
    body: "A team-based model pairing a clinician and care coordinator with the family to strengthen the parent-child relationship and address trauma, stress, and mental health needs.",
    serves: "Families with young children facing significant stress or adversity.",
    url: "changent.org",
    href: "https://changent.org/what-we-do/child-first",
  },
  {
    chip: "School readiness",
    abbr: "SafeCare",
    name: "",
    body: "A short-term, in-home program that coaches parents on positive parent-child interaction, home safety, and recognizing when a child needs medical care.",
    serves: "Parents and caregivers of children under age 6.",
    url: "cdec.colorado.gov/safecare-colorado",
    href: "https://cdec.colorado.gov/safecare-colorado",
  },
];

function HeroIllustration() {
  return (
    <div
      className="relative h-[292px] w-[476px] shrink-0 overflow-clip"
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/hifi-refer-hero-layer3.svg"
        alt=""
        width="178.56"
        height="183.665"
        className="absolute top-[22.776px] left-[59.5px] max-w-none"
        style={{ width: "178.56px", height: "183.665px" }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/hifi-refer-hero-layer4.svg"
        alt=""
        width="126.714"
        height="130.826"
        className="absolute top-[70.109px] left-[86.918px] max-w-none"
        style={{ width: "126.714px", height: "130.826px" }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/hifi-refer-hero-people.svg"
        alt=""
        width="476.006"
        height="292.001"
        className="absolute top-0 left-0 max-w-none"
        style={{ width: "476.006px", height: "292.001px" }}
      />
    </div>
  );
}

export default function ReferPage() {
  return (
    <PageShell active="refer">
      <section className="w-full bg-[#e3f3ed]">
        <div className="mx-auto flex w-full max-w-[1440px] items-center gap-[60px] px-32 py-[30px]">
          <div className="flex w-[567px] shrink-0 flex-col gap-8 text-[#363a61]">
            <div className="flex flex-col gap-2 leading-[normal]">
              <p className="font-black text-base tracking-[2.56px]">
                FOR PROFESSIONALS
              </p>
              <h1 className="font-heavy w-[498px] text-[40px]">
                Refer a family to a home visiting program
              </h1>
              <p className="text-lg">
                Medical providers and social workers can connect families to
                Colorado&apos;s home visiting programs with one short form.
              </p>
            </div>
            <div className="flex items-center gap-10">
              <Button href="/refer/form" variant="navy" className="leading-4">
                Start a referral
                <Icon name="icon-east-white.svg" size={20} />
              </Button>
            </div>
          </div>
          <HeroIllustration />
        </div>
      </section>

      <div className="flex flex-col items-center gap-2">
        <section className="flex w-[1160px] flex-col gap-10 py-10">
          <h2 className="font-heavy text-2xl leading-[normal] text-[#363a61]">
            How a referral works
          </h2>
          <div className="flex w-full items-stretch gap-12">
            {steps.map((step) => (
              <article
                key={step.title}
                className="flex min-w-0 flex-1 flex-col gap-9 rounded-2xl border border-[#e0e0e0] bg-white p-6 leading-[normal] text-[#363a61]"
              >
                <p className="text-base">{step.label}</p>
                <Icon name={step.icon} size={80} />
                <div className="flex flex-col gap-4">
                  <h3 className="font-heavy text-lg">{step.title}</h3>
                  <p className="text-base">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="flex w-[1160px] flex-col gap-10">
          <div className="flex flex-col gap-2 text-[#1d1d1d]">
            <h2 className="font-heavy text-2xl leading-[normal]">
              Home visiting programs you can refer to
            </h2>
            <p className="text-lg leading-6">
              A quick look at a few of the programs you can apply to here.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {programs.map((p) => (
              <ProgramCard key={p.abbr} {...p} />
            ))}
          </div>
        </section>

        <section className="w-[1170px] py-10">
          <div className="flex items-center gap-6 rounded-2xl bg-[#f2c679] px-12 py-6 text-[#363a61]">
            <div className="flex min-w-0 flex-1 flex-col gap-2 leading-[normal]">
              <h2 className="font-heavy text-2xl">Ready to refer a family?</h2>
              <p className="text-lg">
                The intake form takes just a couple of minutes.
              </p>
            </div>
            <Button
              href="/refer/form"
              variant="navy"
              className="shrink-0 rounded-[4px]! leading-4"
            >
              Start a referral
              <Icon name="icon-east-white.svg" size={20} />
            </Button>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

function ProgramCard({
  chip,
  abbr,
  name,
  body,
  serves,
  url,
  href,
}: {
  chip: string;
  abbr: string;
  name: string;
  body: string;
  serves: string;
  url: string;
  href: string;
}) {
  return (
    <article className="flex flex-col items-start gap-4 rounded-2xl border border-[#e0e0e0] bg-white p-6 text-[#1d1d1d]">
      <Chip tone="navy">{chip}</Chip>
      <div className="font-heavy flex flex-col gap-1 leading-[normal]">
        <h3 className="text-lg">{abbr}</h3>
        {name ? <p className="text-base">{name}</p> : null}
      </div>
      <p className="text-base leading-[normal]">
        {body}
        <br />
        <br />
        <span className="font-heavy">Serves: </span>
        {serves}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-base leading-4 text-[#363a61] underline"
      >
        {url}
        <Icon name="hifi-refer-icon-launch.svg" size={20} />
      </a>
    </article>
  );
}
