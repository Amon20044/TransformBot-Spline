

import Spline from '@splinetool/react-spline/next';
import OptimizedLoader from './components/LoaderClient';
export default async function Home() {
  
  return (
    <div className="relative w-screen bg-[#fffaef] h-screen overflow-x-hidden">
      {/* Fixed Centered Spline Card */}
      <OptimizedLoader/>
      <div className="w-screen h-screen">
        <Spline
          scene="https://prod.spline.design/no2TF-PIICSPnVho/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
