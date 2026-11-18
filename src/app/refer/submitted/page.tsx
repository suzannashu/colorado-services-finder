import { PageShell } from "@/components/SiteChrome";
import { Button, Icon } from "@/components/ui";

export default function ReferralSubmittedPage() {
  return (
    <PageShell active="refer" className="bg-[#f3f6fa]">
      <section className="flex flex-col items-center py-16">
        <div className="flex w-full max-w-[720px] flex-col items-center gap-6 rounded-2xl border border-[#e0e0e0] bg-white p-12 text-center">
          <Icon name="icon-check-circle-success.svg" size={64} />
          <h2 className="font-heavy text-[28px] leading-10 text-[#1d1d1d]">
            Referral received
          </h2>
          <p className="text-lg text-[#1d1d1d]">
            Thank you. A state child care specialist will review this referral
            and reach out to the family directly to help them enroll in a home
            visiting program. You&apos;ll get a confirmation copy by email.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button href="/refer" variant="navy-outline">
              ← Back to Refer a family
            </Button>
            <Button href="/refer/form" variant="navy">
              Refer another family
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
