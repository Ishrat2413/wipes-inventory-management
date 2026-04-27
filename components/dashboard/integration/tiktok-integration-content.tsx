import { BadgeInfo, BarChart3, ChevronLeft, Lock, SquarePlus, Users } from "lucide-react";
import Link from "next/link";

function TiktokBrandIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="h-9 w-9 sm:h-10 sm:w-10">
      <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" />
    </svg>
  );
}

export default function TiktokIntegrationContent() {
  return (
    <section className="min-h-screen bg-white px-4 pb-16">
      <div className="max-w-7xl mx-auto mt-5">
        <Link
          href="/dashboard/integration"
          className="inline-flex items-center gap-1 text-sm text-[#8d8d8d] transition-colors hover:text-[#5e5e5e]"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Integrations
        </Link>

        {/* Dynamic Content Container */}
        <div className="mx-auto mt-6 w-full sm:mt-10 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 sm:gap-5">
              <TiktokBrandIcon />
            </div>

            <h1 className="mt-4 text-xl font-semibold leading-tight text-[#1f1f1f] sm:text-2xl md:text-[28px]">
              Connect with TikTok
            </h1>
            <p className="mx-auto mt-2 max-w-70 text-sm text-[#9A9AA0] sm:max-w-md sm:text-base">
              Connect your TikTok account to sync profile, manage content, and track performance.
            </p>
          </div>

          <div className="mt-10 sm:mt-16">
            <h2 className="text-center text-base font-medium text-[#262626] sm:text-left sm:text-lg">
              Benefits of Connecting TikTok
            </h2>

            <div className="mt-6 space-y-4 md:space-y-6">
              {/* Feature 1 */}
              <div className="flex flex-col gap-4 rounded-2xl border border-gray-50 bg-gray-50/50 p-5 md:flex-row md:items-center md:justify-between md:border-none md:bg-transparent md:p-0">
                <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:text-left md:gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D6E2F2] bg-[#EFF6FF]">
                    <SquarePlus className="h-6 w-6 text-[#3B82F6]" />
                  </span>
                  <div>
                    <p className="text-base font-medium text-[#3b3b3b]">
                      Sync Your Content
                    </p>
                    <p className="text-xs text-[#9a9a9a] sm:text-sm">
                      Automatically sync your TikTok videos and profile information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col gap-4 rounded-2xl border border-gray-50 bg-gray-50/50 p-5 md:flex-row md:items-center md:justify-between md:border-none md:bg-transparent md:p-0">
                <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:text-left md:gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D6E2F2] bg-[#EFF6FF]">
                    <BarChart3 className="h-6 w-6 text-[#3B82F6]" />
                  </span>
                  <div>
                    <p className="text-base font-medium text-[#3b3b3b]">
                      Track Performance
                    </p>
                    <p className="text-xs text-[#9a9a9a] sm:text-sm">
                      Monitor your content performance and audience insights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col gap-4 rounded-2xl border border-gray-50 bg-gray-50/50 p-5 md:flex-row md:items-center md:justify-between md:border-none md:bg-transparent md:p-0">
                <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:text-left md:gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D6E2F2] bg-[#EFF6FF]">
                    <Users className="h-6 w-6 text-[#3B82F6]" />
                  </span>
                  <div>
                    <p className="text-base font-medium text-[#3b3b3b]">
                      Engage Your Audience
                    </p>
                    <p className="text-xs text-[#9a9a9a] sm:text-sm">
                      Reply to comments and messages all in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TikTok Connect Card */}
          <div className="mt-10 rounded-2xl border border-[#E5E7EB] bg-[#FBFBFB] p-6 text-center sm:p-8 sm:text-left md:mt-12 md:rounded-xl">
            <h3 className="text-lg font-semibold leading-tight text-[#3a3a3a] sm:text-xl">
              Connect Your TikTok Account
            </h3>
            <p className="mt-2 text-sm text-[#9a9a9a] sm:text-base">
              You&apos;ll be redirected to TikTok to authorize access.
            </p>

            <button
              type="button"
              className="mt-6 h-12 w-full rounded-xl bg-[#1F3A5F] px-8 text-base font-medium text-white transition-all active:scale-95 md:rounded-md"
            >
              Connect TikTok
            </button>

            <p className="mt-5 flex items-center justify-center gap-2 text-xs text-[#9A9AA0] sm:justify-start sm:text-sm">
              <Lock className="h-3.5 w-3.5" />
              We respect your privacy. Your data is secure with us.
            </p>
          </div>

          {/* Privacy Alert */}
          <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-[#AFC3DA] bg-[#EEF4FB] p-5 text-center sm:flex-row sm:items-start sm:text-left">
            <BadgeInfo className="h-6 w-6 shrink-0 text-[#1F3A5F]" />
            <div>
              <p className="text-sm font-bold text-[#1F3A5F]">We respect your privacy</p>
              <p className="mt-1 text-xs leading-relaxed text-[#1F3A5F]/80 sm:text-sm">
                You can disconnect your account at any time from the integration settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}