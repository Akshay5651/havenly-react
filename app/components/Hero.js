import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen w-full flex justify-center'>
      <div className='relativeh-[110%] w-[100%] bg-contain bg-[url("https://images.havenly.com/unsafe/2018x1682/filters:format(webp):quality(90)/https://static.havenly.com/home/hero/chris-shelby.jpg")]'></div>
      <div className='absolute p-5 left-20 top-28 h-[75vh] w-[36vw] bg-[#F3F0EB]'>
        <div className='h-[8.5rem] w-[6.1rem] p-2 flex flex-col items-center -mt-9  bg-no-repeat bg-[url("https://havenly.com/static/label.svg")]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="39" height="44" viewBox="0 0 39 44" fill="none"><path d="M22.291 43.179H39v-2.173l-2.725-.24c-2.602-.241-3.27-1.629-3.27-4.404V0h-1.697c-1.633 2.712-4.48 4.764-8.598 6.088l.302 1.99c1.452-.362 3.207-.843 4.055-.843 1.092 0 1.394.602 1.394 2.35v26.772c0 2.774-.848 4.162-3.63 4.403l-2.545.24v2.173l.005.006ZM7.298 21.696h7.505l-1.369 9.673H5.929l1.369-9.673Zm4.463 21.483h.862l1.524-10.972h5.325v-.832h-5.17l1.37-9.674h5.22v-.831H15.77l1.42-9.727h-.862l-1.369 9.727H7.401l1.42-9.727H7.96L6.59 20.87H1.42v.831h5.021l-1.369 9.674H0v.832h4.969L3.399 43.18h.862l1.524-10.972h7.557l-1.57 10.972h-.011Z" fill="#362B24"></path></svg>
          <span className='text-[0.6rem] py-2 flex flex-col items-center justify-center'>
            <div className='font-["Graphik"] uppercase'>Interior</div>
            <div className='font-["Graphik"] uppercase'>Design Service</div>
          </span>
        </div>
        <h1 className='text-5xl -mt-2 leading-[3.6rem] font-["Simula"]'>Stunning interior design services, now within reach.</h1>
        <button className='text-[0.9rem] font-semibold mt-8 px-[1.9rem] py-[1rem] tracking-widest border-2 bg-[#E59400] rounded-full'>FIND YOUR STYLE</button>
      </div>
    </div>
  )
}

export default Hero