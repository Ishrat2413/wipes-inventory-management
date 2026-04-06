import PageTitle from "@/components/shared/page-title/page-title";

export default function TrackTitle() {
  return (
    <section className='mt-30 mx-6'>
      <div className='my-8'>
        <PageTitle
          align='center'
          title='Track Your Order'
          titleClassName='text-[#474747]! font-medium!'
        />
      </div>
    </section>
  );
}
