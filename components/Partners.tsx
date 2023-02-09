import Image from "next/image";
import { useEffect, useState } from "react";

export default function Partners() {
  const heroImages = [
    {
      name: "Bat Family",
      imagePath: "/images/s-l1600.jpg",
    },
    {
      name: "Teen Titans",
      imagePath: "/images/ezgif.com-webp-to-jpg (1).webp",
    },
    {
      name: "Justice League Dark",
      imagePath:
        "/images/the_magic_of_earth_27__commission__by_roysovitch_dat46bl-pre.jpg",
    },
  ];

  const [heros, setHeros] = useState<typeof heroImages>();

  useEffect(() => setHeros(heroImages), []);

  return (
    <div className="container px-8 mx-auto mt-8 py-18 lg:max-w-7xl">
      {/* heading  */}
      <h1 className="text-3xl font-bold text-center text-zince-800">
        Partners
      </h1>

      {/* gird container */}
      <div className="flex flex-col gap-8 my-12">
        {heros &&
          heros.map((item, index) => {
            return (
              <figure
                key={index}
                className="relative w-full overflow-hidden shadow-2xl rounded-xl h-96"
              >
                <Image
                  src={item.imagePath}
                  width={300}
                  height={400}
                  alt={item.name}
                  className="object-cover object-top w-full h-full"
                />
                <span className="absolute bottom-0 right-0 px-6 py-3 text-3xl font-semibold bg-zinc-900 text-zinc-100">
                  {item.name}
                </span>
              </figure>
            );
          })}
      </div>
    </div>
  );
}
