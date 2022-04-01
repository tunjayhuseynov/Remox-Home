
export default function Navbar() {
  return <div className="h-[75px] w-full px-24">
      <div className="flex justify-between items-center h-full">
          <div>
              <img src="/logo_white.png" className="w-[9.375rem]"/>
          </div>
          <div className="self-center">
              <a href="https://app.remox.io" className="bg-primary px-8 py-2 font-semibold rounded-md text-white hover:bg-transparent hover:text-primary transition-all duration-400" target="_blank">Enter App</a>
          </div>
      </div>
  </div>
}
