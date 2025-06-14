import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Fullscreen 3D Scene */}
      <Spline
        scene="https://prod.spline.design/no2TF-PIICSPnVho/scene.splinecode"
        className="absolute top-0 left-0 w-full h-full"
      />

    </div>
  );
}
