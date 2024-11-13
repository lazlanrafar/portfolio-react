import Image from "next/image";

export default function HomeWelcome() {
  const lanes = ["Let Me Introduce", "My self meme1", "As Developer."];

  return (
    <section className="flex flex-col w-full h-full px-10 py-[10rem] md:py-20">
      <div className="font-playfair my-auto text-center font-display text-5xl md:text-8xl xl:text-8xl 2xl:text-[8rem]">
        {lanes.map((lane, laneIndex) => (
          <h1 key={laneIndex}>
            {lane.split(" ").map((letter, letterIndex) => (
              <span
                className="inline-block overflow-hidden"
                key={`${letter}-${laneIndex}-${letterIndex}`}
              >
                {letter == "meme1" ? (
                  <span className="inline-block overflow-hidden">
                    {/* <span className="hidden h-[130px] w-[130px] overflow-hidden md:block">
                      <Image
                        src={"/meme/1.webp"}
                        alt="meme"
                        width={150}
                        height={150}
                        className="h-full w-full object-cover"
                      />
                    </span> */}
                  </span>
                ) : (
                  <span>{letter}</span>
                )}

                <span className="">&nbsp;</span>
              </span>
            ))}
          </h1>
        ))}
      </div>
    </section>
  );
}
