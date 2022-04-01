import React from 'react';

export default function Footer() {
    return <div className="h-[150px] bg-sec">
        <div className="flex justify-between px-8 md:px-48 pt-12">
            <div>
                <div className="flex flex-col items-center space-y-5">
                    <div>
                        <img src="/logo_white.png" className="w-[150px]" alt="" />
                    </div>
                    <div className="text-white">
                    &#10084;&#65039; DAO &#10084;&#65039;

                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center space-y-2">
                    <div className="text-neutral-500">
                        Connect
                    </div>
                    <div>
                        <div className="flex space-x-5 items-center">
                            <div><a href="https://discord.gg/zMZwqYZbbN" target="_blank"><img className="w-[25px]" src="/footer/discord.png" alt=""  /></a></div>
                            <div><a href="https://twitter.com/useremox"  target="_blank"><img className="w-[25px]" src="/footer/twitter.png" alt="" /></a></div>
                            {/* <div><a href=""><img className="w-[25px]" src="/footer/gitbook.png" alt="" target="_blank" /></a></div>
                            <div><a href=""><img className="w-[25px]" src="/footer/mirror.png" alt="" target="_blank" /></a></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
