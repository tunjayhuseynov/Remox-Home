import React from 'react';

export default function Header() {
  return <div>
      <div className="text-center flex flex-col space-y-12 tracking-wider h-[350px] sm:h-[450px] justify-center">
          <div className="text-primary font-medium text-sm">
              For Permissionless Economy
          </div>
          <div className="text-5xl font-semibold text-white">
              Contributor and Treasury <br/>
              Management Platform
          </div>
          <h2 className="text-white font-medium text-xl px-1 text-center tracking-wide break-words md:px-0">
              Remox provides all-in-one tool for <span className="text-primary">crypto native organizations</span> <br/>
              to manage their contributor payments and treasury needs.
          </h2>
          <div className="self-center block sm:hidden">
              <a href="https://app.remox.io" className="bg-primary px-8 py-2 font-semibold rounded-md text-white hover:bg-transparent hover:text-primary transition-all duration-400" target="_blank">Enter App</a>
          </div>
      </div>

  </div>
}
