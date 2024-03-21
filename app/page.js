import ObjectDetection from "@/components/object-detection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="gradient-title font-extrabold text-4xl md:text-4xl lg:text-4xl tracking-tighter md:px-6 text-center ">
        Thief &nbsp; Detection Alarm
      </h1>
      <ObjectDetection />
    </main>
  );
}
