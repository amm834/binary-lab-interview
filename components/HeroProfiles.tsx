import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroProfiles() {
  const heroImages = [
    { name: "Superman", imagePath: "/images/superman.png" },
    { name: "Superman", imagePath: "/images/flash.png" },
    { name: "Superman", imagePath: "/images/batman.png" },
    { name: "Superman", imagePath: "/images/wonderwoman.png" },
    { name: "Superman", imagePath: "/images/cyborg.png" },
    { name: "Superman", imagePath: "/images/green_lantern.png" },
    { name: "Superman", imagePath: "/images/aquaman.png" },
  ];

  const [heros, setHeros] = useState<typeof heroImages>();

  useEffect(() => setHeros(heroImages), []);

  return (
    <div className="container px-8 mx-auto mt-8 py-18 lg:max-w-7xl">
      {/* heading  */}
      <h1 className="text-3xl font-bold text-center text-zince-800">Heros</h1>

      {/* gird container */}
      <div className="grid grid-cols-1 gap-8 my-12 lg:grid-cols-3">
        {heros &&
          heros.map((item, index) => {
            return (
              <figure
                key={index}
                className="flex flex-col items-center justify-center gap-y-4"
              >
                <Image
                  src={item.imagePath}
                  alt="JustiLegueImage"
                  width={340}
                  height={340}
                  className="object-fill"
                />
                <caption className="text-xl font-bold text-zince-700">
                  Superman
                </caption>
              </figure>
            );
          })}
      </div>
    </div>
  );
}
