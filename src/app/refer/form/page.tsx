"use client";

import { FormEvent, InputHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SiteFooter } from "@/components/SiteChrome";
import { Button, SelectField, TextField } from "@/components/ui";

const programOptions = [
  "Parents as Teachers (PAT) - Early childhood development",
  "Home Instruction for Parents of Preschool Youngsters (HIPPY) - School readiness",
  "Nurse-Family Partnership (NFP) - Maternal & infant health",
  "Child First - Family mental health",
  "SafeCare - Safe & nurturing homes",
];

const counties = [
  "Adams",
  "Arapahoe",
  "Denver",
  "Douglas",
  "El Paso",
  "Jefferson",
  "Larimer",
  "Weld",
];

function OutlineCheckbox({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <span
      className={`relative inline-flex size-6 shrink-0 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#363a61] ${className}`}
    >
      <input
        type="checkbox"
        className="peer absolute inset-0 z-10 size-6 cursor-pointer opacity-0"
        {...props}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/hifi-refer-form-checkbox.svg"
        alt=""
        className="peer-checked:invisible"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/icon-checkbox-checked.svg"
        alt=""
        className="absolute top-0 left-0 hidden peer-checked:block"
      />
    </span>
  );
}

function Section({
  title,
  description,
  required = false,
  children,
  className = "gap-4",
}: {
  title: string;
  description: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`flex w-full flex-col ${className}`}>
      <div className="flex items-center gap-6">
        <h2 className="min-w-0 flex-1 font-heavy text-lg leading-6 text-[#1d1d1d]">
          {title}
        </h2>
        {required ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/assets/icon-emergency.svg" alt="Required" />
        ) : null}
      </div>
      <p className="text-lg leading-6 text-[#1d1d1d]">{description}</p>
      {children}
    </section>
  );
}

export default function ReferralFormPage() {
  const router = useRouter();

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    router.push("/refer/submitted");
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f3f6fa]">
      <header className="border-b border-[#e0e0e0] bg-white">
        <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center px-6">
          <Link href="/" className="relative h-[60px] w-[130px] shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-raising-co-kids.png"
              alt="Raising CO Kids"
              className="size-full object-contain"
            />
          </Link>
        </div>
      </header>

      <main className="w-full flex-1">
        <div className="mx-auto flex w-full max-w-[1170px] flex-col px-4 pt-4 pb-16 sm:px-0">
          <Link
            href="/refer"
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-[4px] px-4 py-2.5 text-sm leading-none text-[#363a61]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/hifi-refer-form-west.svg" alt="" />
            Back
          </Link>

          <form
            onSubmit={onSubmit}
            className="w-full border border-[#e0e0e0] bg-white"
          >
            <div className="border-b border-[#e0e0e0] px-6 py-4">
              <h1 className="font-heavy text-2xl leading-8 text-[#1d1d1d]">
                Home visiting referral form
              </h1>
            </div>

            <div className="flex flex-col gap-10 p-4">
              <p className="text-base leading-6 text-[#1d1d1d]">
                Share the details below and a state child care specialist will
                contact the family to help them enroll in a home visiting
                program.
              </p>

              <Section
                title="About you"
                required
                description="The professional making this referral"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10">
                  <TextField label="First name" name="referrerFirstName" required />
                  <TextField label="Last name" name="referrerLastName" required />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10">
                  <TextField
                    label="Organization"
                    name="organization"
                    required
                  />
                  <TextField
                    label="Role or title"
                    name="role"
                    placeholder="e.g. Nurse or social worker"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10">
                  <TextField
                    label="Work email"
                    name="workEmail"
                    type="email"
                    required
                  />
                  <TextField label="Phone" name="referrerPhone" type="tel" required />
                </div>
              </Section>

              <Section
                title="About the family"
                required
                description="Enough for a specialist to contact them. Only share what the family has agreed to."
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10">
                  <TextField
                    label="Parent / guardian name"
                    name="guardianName"
                    required
                  />
                  <TextField
                    label="Phone"
                    name="familyPhone"
                    type="tel"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10">
                  <TextField
                    label="Email (optional)"
                    name="familyEmail"
                    type="email"
                  />
                  <SelectField
                    label="County"
                    name="county"
                    value=""
                    required
                    options={["", ...counties]}
                    className="!min-w-0 w-full"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10">
                  <TextField label="Zip code" name="zip" required />
                  <SelectField
                    label="Preferred language"
                    name="language"
                    value=""
                    required
                    options={["", "English", "Spanish"]}
                    className="!min-w-0 w-full"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10">
                  <SelectField
                    label="Best time to reach them"
                    name="bestTime"
                    value="No preference"
                    options={[
                      "No preference",
                      "Morning",
                      "Afternoon",
                      "Evening",
                    ]}
                    className="!min-w-0 w-full"
                  />
                  <TextField
                    label="Children’s ages"
                    name="childrenAges"
                    placeholder="e.g. Pregnant, 2 years"
                    required
                  />
                </div>
              </Section>

              <Section
                title="Program interest"
                required
                description="Select any that fit. Not sure? Leave them blank and a specialist will help the family choose."
              >
                <div className="flex flex-col gap-2">
                  {programOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-1 border border-[#f3f6fa] bg-[#f3f6fa] px-3 py-2"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center">
                        <OutlineCheckbox name="programs" value={option} />
                      </span>
                      <span className="text-base leading-6 text-[#1d1d1d]">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </Section>

              <section className="flex w-full flex-col gap-3">
                <h2 className="font-heavy text-lg leading-6 text-[#1d1d1d]">
                  Additional notes
                </h2>
                <p className="text-lg leading-6 text-[#1d1d1d]">
                  Optional context that would help a specialist support this
                  family.
                </p>
                <div className="relative h-[124px] border-b border-[#9e9e9e] bg-[#eee]">
                  <textarea
                    name="notes"
                    placeholder="e.g. Family speaks mostly Spanish; new to the area and looking for parenting support"
                    className="size-full resize-none bg-transparent px-4 py-3 text-lg leading-6 text-[#1d1d1d] outline-none placeholder:text-[#9e9e9e]"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/hifi-refer-form-grabber.svg"
                    alt=""
                    className="pointer-events-none absolute right-0.5 bottom-0.5"
                  />
                </div>
              </section>

              <label className="flex items-start gap-4 py-4">
                <OutlineCheckbox name="attestation" required className="mt-0" />
                <span className="text-base leading-6 text-[#1d1d1d]">
                  I confirm the family has agreed to be contacted about home
                  visiting programs, and that the information above is accurate
                  to the best of my knowledge.
                </span>
              </label>

              <div className="flex items-start justify-between">
                <Button
                  href="/refer"
                  variant="navy-outline"
                  size="sm"
                  className="!rounded-[4px] !border !border-[#363a61] bg-white"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="navy"
                  size="sm"
                  className="!rounded-[4px]"
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
