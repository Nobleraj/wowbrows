import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image
        src="/wowbrows.png"
        alt="WowBrows Logo"
        width={400}
        height={100}
        priority
      />
    </main>
  );
}
