import Right from "@/components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="hero mt-8" >
        <div className="py-8">
          <h1 className="text-6xl gap-6 font-semibold leading-normal">
            Everything <br/> is Better <br/> With a&nbsp; 
            <span className="text-primary"> Pizza </span>
          </h1>
          <p className="text-1xl mt-4 gap-2 text-gray-500 py-2">
            Pizza is the missing piece that makes every day complete, a simple
            yet delicious joy in life.
          </p>

          <div className="flex gap-4 py-3">
            <button className="bg-primary text-sm items-center uppercase
             flex gap-2  text-white px-4 py-2
             rounded-full">
              Order Now
              <Right />
            </button>
            <button className="flex gap-2 border-0 py-2 text-gray-600 font-semibold">
             Learn More
             <Right/>
            </button>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/pizza.png"
            layout="fill"
            objectFit="contain"
            alt="pizza"
          />
        </div>
      </section>
    </>
  );
}