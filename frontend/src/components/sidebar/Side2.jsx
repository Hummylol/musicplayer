import React from 'react'

const Side2 = () => {
  return (
    <div className='h-[73%] w-full mt-2 ml-2 rounded-lg text-white bg-[#121212] flex flex-col items-center'>
      <div className="lib h-[10%] mt-3 w-[85%] " >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
          <svg data-encore-id="icon" fill='#cecece' height={"26px"} width={"26px"} role="img" aria-hidden="true" viewBox="0 0 24 24" className="Svg-sc-ytk21e-0 bneLcE">
          <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
        </svg>
        <span className='text-[#cecece] font-semibold ' >Your Library</span>
          </div>
          <svg fill='#cecece' height={"17px"} width={"17px"} data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>
        </div>
      </div>
      <div className="playlists h-[20%] overflow-y-scroll w-[96%] rounded-lg bg-[#1F1F1F] p-4 pt-8">
      <div className='text-white font-medium'>Create your first playlist</div>
      <div className="text-sm mt-2">it's easy,we'll help you</div>
      <button className='bg-white text-black pl-3 pr-3 pt-1 pb-1 rounded-full text-sm font-semibold mt-3'>Create playlist</button>
      </div>

      <div className="footer h-[60%] w-[100%] bg-[#121212] text-[#B3ACAE] text-[11px] pt-10 pl-5">
        <div className="">
          <span><a href="">Legal</a></span>
          <span className='ml-3'><a href="">Safety&Privacy Center</a></span>
        </div>
        <div className="mt-4">
          <span><a href="">Privacy Policy</a></span><span className='ml-3'><a href="">Cookies</a></span><span className='ml-3'><a href="">About Ads</a></span>
        </div>
        <div className="mt-4">
          <a href="">Accessibility</a>
        </div>
        <div className="mt-12">
          <button className='flex gap-1 items-center border-[1px] pl-3 pr-3 pt-1 pb-1 rounded-full'>
          <svg data-encore-id="icon" height={"17px"} width={"17px"} fill='white' role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M8.152 16H8a8 8 0 1 1 .152 0zm-.41-14.202c-.226.273-.463.713-.677 1.323-.369 1.055-.626 2.496-.687 4.129h3.547c-.06-1.633-.318-3.074-.687-4.129-.213-.61-.45-1.05-.676-1.323-.194-.235-.326-.285-.385-.296h-.044c-.055.007-.19.052-.391.296zM4.877 7.25c.062-1.771.34-3.386.773-4.624.099-.284.208-.554.329-.806a6.507 6.507 0 0 0-4.436 5.43h3.334zm-3.334 1.5a6.507 6.507 0 0 0 4.436 5.43 7.974 7.974 0 0 1-.33-.806c-.433-1.238-.71-2.853-.772-4.624H1.543zm4.835 0c.061 1.633.318 3.074.687 4.129.214.61.451 1.05.677 1.323.202.244.336.29.391.297l.044-.001c.06-.01.19-.061.385-.296.226-.273.463-.713.676-1.323.37-1.055.626-2.496.687-4.129H6.378zm5.048 0c-.061 1.771-.339 3.386-.772 4.624-.082.235-.171.46-.268.674a6.506 6.506 0 0 0 4.071-5.298h-3.03zm3.031-1.5a6.507 6.507 0 0 0-4.071-5.298c.097.214.186.44.268.674.433 1.238.711 2.853.772 4.624h3.031z"></path></svg>
            <p className='font-bold text-white text-[12px]'>English</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Side2
