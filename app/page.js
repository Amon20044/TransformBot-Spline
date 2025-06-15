import Spline from '@splinetool/react-spline/next';
import OptimizedLoader from './components/LoaderClient';

export default function Home() {
  return (
    <div className="relative w-screen">
      {/* Client-side Loader Component */}
      <OptimizedLoader />

      {/* Spline Container */}
      <div className="spline-container" id="splineContainer">
        <div className="spline w-screen h-screen top-0 left-0">
          <Spline
            scene="https://prod.spline.design/no2TF-PIICSPnVho/scene.splinecode"
            className="top-0 w-screen left-0 h-screen"
          />
        </div>

      </div>
    </div>
  );
}