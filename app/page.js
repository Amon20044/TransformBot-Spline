import Spline from '@splinetool/react-spline/next';
import  OptimizedLoader from './components/LoaderClient';

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Client-side Loader Component */}
      <OptimizedLoader />

      {/* Spline Container */}
      <div className="spline-container" id="splineContainer">
        <Spline
          scene="https://prod.spline.design/no2TF-PIICSPnVho/scene.splinecode"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
}