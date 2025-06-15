
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  
  return (
    <div className="relative w-screen bg-[#fffaef] h-screen overflow-x-hidden">
      {/* Fixed Centered Spline Card */}
      <div className="w-screen h-screen">
        <Spline
          scene="https://prod.spline.design/no2TF-PIICSPnVho/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
