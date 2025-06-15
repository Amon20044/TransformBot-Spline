"use client"
import Spline from '@splinetool/react-spline/next';

function loader(){
  return(
    <h3 className="text-2xl text-center text-gray-700 font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100]">
      Please wait while the 3D scene loads...
    </h3>
  )
}

export default function Home() {
  
  return (
    <div className="relative w-screen bg-[#fffaef] h-screen overflow-x-hidden">
      {/* Fixed Centered Spline Card */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[97vw] h-[98vh] z-10 rounded-3xl overflow-hidden shadow-xl border border-black bg-white">
        <Spline
          scene="https://prod.spline.design/no2TF-PIICSPnVho/scene.splinecode"
          onLoad={loader}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
