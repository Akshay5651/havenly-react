import React from 'react'

const Nav = () => {
  return (
    <div className='nav fixed h-20 w-full px-8 py-4 flex items-center justify-between gap-8 bg-transparent'>
        <div className='text-4xl'>HAVENLY</div>
        <div className='text-sm flex -ml-16 items-center justify-between gap-6 tracking-wide'>
            <h3>HOW IT WORKS</h3>
            <h3>BLOG</h3>
            <h3>PORTFOLIO</h3>
            <h3>GIFT CARDS</h3>
            <h3>SHOP</h3>
        </div>
        <div className='ml-12 flex justify-items-end gap-4'>
            <button className='text-[0.85rem] font-bold px-12 py-[0.5rem] tracking-wider border-[1px] border-orange-400 rounded-full'>LOGIN</button>
            <button className='text-[0.85rem] font-bold px-6 py-[0.6rem] tracking-wider border-2 bg-[#E59400] rounded-full'>GET STARTED</button>
        </div>
    </div>
  )
}

export default Nav