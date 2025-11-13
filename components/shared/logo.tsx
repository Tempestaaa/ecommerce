import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 mr-2">
      <Image src="/vercel.svg" alt="Logo" width={20} height={20} />
      <h1 className="font-bold text-2xl uppercase hidden md:block">Lavenga</h1>
    </Link>
  );
}
