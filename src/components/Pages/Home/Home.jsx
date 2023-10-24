import Statistics from "../Statistics";

export default function Home() {
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-[#161429]  to-[#173f32] lg:px-[180px] ">
  <div className="hero-content flex-col lg:flex-row ">
   
    <div className="lg:-mt-[50px] mt-[100px]">
      <h1 className="text-[32px] font-[700]  text-[#00FFA3]">GEO SMM Panel - #1</h1>
      <h2 className=" text-white text-[48px] font-[700]">Cheap SMM Panel</h2>
<p className="text-white text-[18px] font-[400]">Boost your online presence today with our Cheap SMM Panel – the ultimate solution for social media success! Growfollows is a SMM Panel with more then 3 years on the market and 926943 Orders processed successfully until now!</p>

{/* input field */}

<div className="lg:flex  gap-7 mt-4">
<div className="form-control ">

  <input type="text" placeholder="Type here" className="input input-bordered lg:w-full  " />
  
  <div className="flex items-center mt-3 gap-2">
  <input type="checkbox" className="checkbox checkbox-sm bg-white border-white" /> 
 <span className=" text-white font-[400] ">Remember Me</span>
    </div> 

  
</div>

<div className="form-control ">

  <input type="text" placeholder="Type here" className="input input-bordered lg:w-full mt-2 lg:mt-0" />
  
  <div className="flex items-center mt-3 gap-2">
  
 <p className=" text-white font-[400]">Forgot Password? <span className="text-[#00FFA3]">Reset</span></p>
    </div> 

  
</div>
</div>

{/* signIn button */}

   <div className="flex lg:flex-row flex-col items-center  lg:justify-start justify-center lg:gap-8">
   <button className="text-black lg:w-[300px] w-full font-bold text-[18px] bg-[#00FFA3] border-none mt-8">Sign in</button>
   <p className="text-white lg:mt-7 mt-5">Don't have an account? <span className="text-[#00FFA3]">Sign Up</span></p>
   </div>
    </div>
  <div className="lg:w-1/2 lg:ml-[100px] ml-0">
  <img src="https://cdn.mypanel.link/770smr/1t1zbubh5dpotu9l.webp" alt="human" className="max-w-sm rounded-lg shadow-2xl lg:flex md:hidden" />
  </div>
  </div>
  
</div>
<Statistics></Statistics>
    </div>
  )
}
