import PageTitle from "@/components/shared/page-title/page-title";

export default function Section1() {
  return (
    <section className='mx-5 md:mx-10 lg:mx-20 xl:mx-40 md:mt-30'>
      <div className='flex flex-col lg:flex-row justify-between md:gap-x-10 lg:gap-x-20 xl:gap-x-50 gap-y-20 items-center'>
        <div>
          <PageTitle
            title='.....Because dry paper was never the answer!'
            subtitle='Water cleans. Dry paper spreads. ZilkyWipes leaves you genuinely clean — safely, gently, responsibly.'
            subtitleClassName='mt-8 max-w-100! text-[18px]'
          />
        </div>
        <div className='w-full max-w-180'>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster='home/banner.png'
            className='w-full h-auto aspect-37/45 rounded-[40px] sm:rounded-[72px] lg:rounded-[120px] object-cover'>
            <source src='home/section1.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
