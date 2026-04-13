// import { section } from "framer-motion/client";
// import { useState } from "react";

// const TITLE = "Connect Apps With Your Dashboard";
// const SUBTITLE =
//   "Complete these simple steps to get your studio up and running";

// const STEPS = [
//   {
//     id: 1,
//     title: "Connect to Facebook & Instagram",
//     description: "Take the first step to get hired and viewed by companies",
//     connected: true,
//   },
//   {
//     id: 2,
//     title: "Connect to TikTok",
//     description: "Take the first step to get hired and viewed by companies",
//     connected: false,
//   },
//   {
//     id: 3,
//     title: "Connect to Google Ad",
//     description: "Take the first step to get hired and viewed by companies",
//     connected: false,
//   },
//   {
//     id: 4,
//     title: "Connect to Amazon",
//     description: "Take the first step to get hired and viewed by companies",
//     connected: false,
//   },
// ];

export default function IntegrationContent() {
  //   const [steps, setSteps] = useState(STEPS);

  //   const handleConnect = (id: number) => {
  //     setSteps((prev) =>
  //       prev.map((step) =>
  //         step.id === id ? { ...step, connected: true } : step,
  //       ),
  //     );
  //   };

  return (
    // <section className='min-h-screen bg-white flex items-center justify-center px-4'>
    //   <div className='w-full max-w-2xl'>
    //     {/* Header */}
    //     <div className='text-center mb-12'>
    //       <h1 className='text-3xl font-semibold text-gray-900 mb-2'>{TITLE}</h1>
    //       <p className='text-sm text-gray-400'>{SUBTITLE}</p>
    //     </div>

    //     {/* Steps */}
    //     <div className='flex flex-col gap-4'>
    //       {steps.map((step) => (
    //         <div
    //           key={step.id}
    //           className='flex items-center justify-between py-4'>
    //           {/* Left: Number + Text */}
    //           <div className='flex items-center gap-4'>
    //             <div className='w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-sm text-gray-500 font-medium flex-shrink-0'>
    //               {step.id}
    //             </div>
    //             <div>
    //               <p className='text-sm font-medium text-gray-800'>
    //                 {step.title}
    //               </p>
    //               <p className='text-xs text-gray-400 mt-0.5'>
    //                 {step.description}
    //               </p>
    //             </div>
    //           </div>

    //           {/* Right: Button or Checkmark */}
    //           {step.connected ? (
    //             <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0'>
    //               <svg
    //                 className='w-4 h-4 text-green-500'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth={2.5}
    //                 viewBox='0 0 24 24'>
    //                 <path
    //                   strokeLinecap='round'
    //                   strokeLinejoin='round'
    //                   d='M5 13l4 4L19 7'
    //                 />
    //               </svg>
    //             </div>
    //           ) : (
    //             <button
    //               onClick={() => handleConnect(step.id)}
    //               className='flex items-center gap-1.5 px-4 py-2 rounded-md border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors flex-shrink-0'>
    //               <svg
    //                 className='w-3.5 h-3.5'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth={2}
    //                 viewBox='0 0 24 24'>
    //                 <path
    //                   strokeLinecap='round'
    //                   strokeLinejoin='round'
    //                   d='M12 4v16m8-8H4'
    //                 />
    //               </svg>
    //               Connect
    //             </button>
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section></section>
  );
}
