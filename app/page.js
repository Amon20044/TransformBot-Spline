
import Spline from '@splinetool/react-spline/next';
}

export default function Home() {
  
  return (
    <div className="relative w-screen bg-[#fffaef] h-screen overflow-x-hidden">
      {/* Fixed Centered Spline Card */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[97vw] h-[98vh] z-10 rounded-3xl overflow-hidden shadow-xl border border-black bg-white">
        <Spline
          scene="https://prod.spline.design/no2TF-PIICSPnVho/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
