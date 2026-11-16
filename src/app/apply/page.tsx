import { PageShell } from "@/components/SiteChrome";
import { Button, Icon } from "@/components/ui";

const benefitCards = [
  {
    icon: "hifi-apply-icon-apply-once.svg",
    title: "Apply once",
    body: "instead of filling out multiple applications.",
  },
  {
    icon: "hifi-apply-icon-save-time.svg",
    title: "Save time",
    body: "by providing your information in one place.",
  },
  {
    icon: "hifi-apply-icon-explore.svg",
    title: "Explore more options",
    body: "for early learning, child care, and family support.",
  },
];

const earlyLearning = [
  {
    name: "Universal Pre-K (UPK)",
    body: ": Free preschool for eligible Colorado children.",
  },
  {
    name: "CCCAP",
    body: ": Helps eligible families pay for child care.",
  },
];

const homeVisiting = [
  {
    name: "Parents as Teachers",
    body: ": Provides families with information and support to help children learn and grow.",
  },
  {
    name: "HIPPY",
    body: ": Helps parents prepare young children for success in school and beyond.",
  },
  {
    name: "Nurse-Family Partnership (NFP)",
    body: ": Provides support from trained nurses to eligible first-time parents.",
  },
  {
    name: "Child First",
    body: ": Connects families with support to promote healthy child development and family well-being",
  },
  {
    name: "SafeCare",
    body: ": Helps parents build skills to keep their children safe, healthy, and thriving.",
  },
];

function ApplyActions() {
  return (
    <div className="flex items-center gap-10">
      <Button href="/apply/register" variant="navy" className="leading-4">
        Start my application
        <Icon name="icon-east-white.svg" size={20} />
      </Button>
      <Button
        href="/dashboard/login"
        variant="navy-outline"
        className="border! leading-4"
      >
        Log in to my dashboard
      </Button>
    </div>
  );
}

function ProgramGroup({
  label,
  items,
}: {
  label: string;
  items: { name: string; body: string }[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-heavy text-base leading-[normal] text-[#1d1d1d]">
        {label}
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-start gap-4 text-base leading-[normal] text-[#1d1d1d]"
          >
            <Icon name="hifi-apply-icon-check.svg" size={24} />
            <p>
              <span className="font-heavy text-[#363a61] underline">
                {item.name}
              </span>
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="relative h-[292px] w-[532px] shrink-0" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/hifi-apply-hero-doorway.svg"
        alt=""
        width="497.794"
        height="245.309"
        className="absolute top-0 left-[34.206px] max-w-none"
        style={{ width: "497.794px", height: "245.309px" }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/hifi-apply-hero-people.svg"
        alt=""
        width="271.193"
        height="212.792"
        className="absolute top-[79.391px] left-0 max-w-none"
        style={{ width: "271.193px", height: "212.792px" }}
      />
    </div>
  );
}

export default function ApplyPage() {
  return (
    <PageShell>
      <section className="w-full bg-[#e3f3ed]">
        <div className="mx-auto flex h-[352px] w-full max-w-[1440px] items-center justify-between px-32">
          <div className="flex w-[567px] shrink-0 flex-col gap-8 text-[#363a61]">
            <div className="flex flex-col gap-2">
              <h1 className="font-heavy text-[40px] leading-[normal]">
                Apply once. Get connected to more programs.
              </h1>
              <p className="text-lg leading-[normal]">
                With one application, you can apply for Universal Pre-K, CCCAP,
                and five home visiting programs that support Colorado families
                and young children.
              </p>
            </div>
            <ApplyActions />
          </div>
          <HeroIllustration />
        </div>
      </section>

      <div className="flex flex-col items-center gap-2 pt-[60px] pb-[60px]">
        <section className="flex w-[1160px] flex-col items-center gap-10 pb-[60px]">
          <div className="flex w-full flex-col gap-2 text-[#1d1d1d]">
            <h2 className="font-heavy text-2xl leading-[normal]">
              One application, more opportunities
            </h2>
            <p className="text-lg leading-6">
              You don’t need to apply separately for every program. Complete one
              application to be considered for multiple Colorado programs that
              may support your family..
            </p>
          </div>
          <div className="flex w-full items-start gap-12">
            {benefitCards.map((card) => (
              <article
                key={card.title}
                className="flex min-w-0 flex-1 flex-col gap-9 rounded-2xl border border-[#e0e0e0] bg-white p-6"
              >
                <Icon name={card.icon} size={80} />
                <p className="text-lg leading-[normal] text-[#363a61]">
                  <span className="font-heavy">
                    {card.title}
                    <br />
                  </span>
                  <span className="font-normal">{card.body}</span>
                </p>
              </article>
            ))}
          </div>
          <ApplyActions />
        </section>

        <section className="flex w-[1160px] flex-col gap-10 pb-10 text-[#1d1d1d]">
          <div className="flex flex-col gap-2">
            <h2 className="font-heavy text-2xl leading-[normal]">
              One application, seven programs
            </h2>
            <p className="text-lg leading-6">
              Your application can connect you with programs that support
              children and families at different stages*.
            </p>
          </div>
          <ProgramGroup
            label="EARLY LEARNING & CHILD CARE"
            items={earlyLearning}
          />
          <ProgramGroup label="HOME VISITING PROGRAMS" items={homeVisiting} />
          <p className="text-sm leading-[18px] italic">
            * Eligibility varies by program. Completing an application does not
            guarantee enrollment.
          </p>
        </section>

        <section className="w-[1170px] py-10">
          <div className="flex items-center gap-9 rounded-2xl bg-[#f2c679] px-12 py-6 text-[#1d1d1d]">
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <h2 className="font-heavy text-2xl leading-[normal]">
                Ready to see what your family may qualify for?
              </h2>
              <p className="text-lg leading-[normal]">
                Complete one application to apply for multiple Colorado
                programs. It takes about [X minutes] to get started and you can
                save your progress and come back later.
              </p>
            </div>
            <Button
              href="/apply/register"
              variant="navy"
              className="shrink-0 leading-4"
            >
              Apply now
              <Icon name="icon-east-white.svg" size={20} />
            </Button>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
