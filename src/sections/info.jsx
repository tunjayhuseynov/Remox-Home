import React from 'react';

export default function Info() {

  const arr = [
    {
      title: 'Multi-currency Mass payouts',
      content: 'Help you run on-chain payroll with multiple currencies.',
      className: ''
    },
    {
      title: "Multisig interface",
      content: "Help you securely hold your assets with all owner's collaboration.",
      className: ''
    },
    {
      title: "Request payment",
      content: "Help you handle your part-time contributor payments with ease.",
      className: ''
    },
    {
      title: "Yield Optimisation",
      content: "Coming soon...",
      className: 'text-neutral-500'
    },
    {
      title: "Token Buybacks",
      content: "Coming soon...",
      className: 'text-neutral-500'
    },
    {
      title: "Asset Management and Risk Assessment",
      content: "Coming soon...",
      className: 'text-neutral-500'
    },
  ]

  return <div className="px-20 xl:px-40 text-white py-24">
    <div className="flex flex-col space-y-[120px]">
      <div className="text-center text-2xl font-bold">
        The features automate your financial operations
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {Object.values(arr).map(({ title, content, className }) => <Card title={title} content={content} className={className} />)}
      </div>
    </div>

  </div>
}

const Card = ({ title, content, className }) => {

  return <div className="card bg-sec min-h-[250px] px-1 justify-center items-center rounded-xl">
    <div className="py-5 grid grid-rows-2 gap-y-8 ">
      <div className="text-2xl text-center h-[80px] px-1">
        {title}
      </div>
      <div className={`text-base ${className} text-white text-center px-8`}>
        {content}
      </div>
    </div>
  </div>
}