import React from 'react';

export default function Sponsor() {
    return <div className="bg-sec py-5">
        <div className="min-h-[230px] py-4 flex flex-col space-y-10 px-12 lg:px-48">
            <div className="text-white text-center font-semibold text-lg tracking-wider h-[28px]">Supported by</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 grow gap-9 sm:gap-3">
                <div className="justify-self-center">
                    <img src="/flori.png" className=" h-[100px] w-[250px]" />
                </div>
                <div className="justify-self-center">
                    <img src="/celo_logo.png" className=" h-[100px] w-[200px]" />
                </div>
            </div>
        </div>

    </div>
}
