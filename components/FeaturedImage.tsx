import Image from "next/image";
import JustiLegueImage from "@/public/images/Justice-League-New-52-Reading-Order.jpg";

export default function FeatauredImage() {
  return (
    <div className="object-cover py-18 max-h-[70vh] overflow-hidden">
      <Image
        src={JustiLegueImage}
        alt="Picture of the author"
        width={500}
        height={500}
        className="w-full h-full"
      />
    </div>
  );
}
