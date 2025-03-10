"use client";

import { useScroll } from "@/context/ScrollContext";
import { CalendarClock, Clock } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {

  const [showOverlay, setShowOverlay] = useState(false)

  const { sobreRef, aulasRef, professoresRef, } = useScroll();

  const [bgSize, serBgSize] = useState("contain");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      serBgSize(window.innerWidth <= 640 ? "cover" : "contain");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, []);

  return (
    <div className="bg-slate-800 flex flex-col items-center w-full">

      <section>
        <div className="flex flex-col justify-center w-full h-[15rem] relative md:h-[25rem] sm:h-[22rem] lg:h-[30rem] xl:h-[35rem] 2xl:h-[40rem] gap-3">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-medium w-[80%] 2xl:w-[65%] xl:w-[60%] 
          lg:w-[60%] md:w-[60%] px-8 relative z-10 md:left-[10%] sm:left-[10%] sm:w-[60%]">
            Sem limites, sem desculpas, só evolução!
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white w-[75%] 2xl:w-[50%] xl:w-[50%] lg:w-[50%] px-8 relative z-10 md:left-[10%] md:w-[60%] sm:left-[10%] sm:w-[60%]">
            Vença cada desafio, quebre barreiras e torne-se a sua melhor versão a cada dia!
          </p>


          <div className="absolute inset-0">
            <Image
              src="/image/banner.png"
              alt="Banner"
              fill
              sizes="100vw"
              priority
              className="object-cover opacity-60 sm:object-top"
            />

          </div>

          <div className="w-full flex justify-center absolute top-[90%] sm:top-[96%]">
            <Image
              src="/image/logo.png"
              alt="logo do ct imperio"
              className="w-10 h-10 sm:w-14 sm:h-14"
              width={180}
              height={180}
            />
          </div>

        </div>

        <section ref={sobreRef} className="w-full flex flex-col justify-center py-6 sm:py-10 gap-2 ">
          <h2 className="text-1xl sm:text-2xl text-white font-medium px-8 relative z-10 text-center">Um Pouco da Nossa Historia</h2>
          <p className="text-xs sm:text-[18px] text-white px-8 relative z-10 text-center sm:w-[60%] sm:left-[20%]">
            São 20 anos de história! O CT começou com a missão de difundir o ensinamento das artes marciais, formando atletas e incentivando o desenvolvimento pessoal.
            Ao longo dos anos, nos tornamos referência, promovendo disciplina, respeito e evolução constante.
          </p>
        </section>

        <section ref={aulasRef} className="flex flex-col sm:w-[90vw] sm:relative sm:left-[7%] sm:overflow-hidden" id="aulas">

          <div className="w-full flex flex-col justify-center items-center py-6 ">
            <div className="bg-gray-600 w-[90vw] h-[250px] rounded-3xl p-4 relative sm:h-[350px]">

              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url("/image/treining.jpg")',
                  backgroundSize: bgSize,
                  backgroundPosition: 'center',
                  opacity: 0.8,
                }}
              ></div>

              <div className="absolute inset-0 bg-black opacity-40"></div>

              <div className="absolute bottom-4 w-[80%] flex justify-between sm:w-[95%]">
                <p className="font-semibold text-white text-lg sm:text-2xl">Personal Training</p>
                <div className="flex gap-4 items-end text-white">

                  <button onClick={() => setShowOverlay(true)}>
                    <Clock />
                  </button>

                  <button>
                    <CalendarClock />
                  </button>

                </div>
              </div>
            </div>
          </div>

          {showOverlay && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
              <div className="relative">
                <button
                  className="absolute top-4 right-4 bg-white p-2 rounded-full"
                  onClick={() => setShowOverlay(false)}
                >
                  X
                </button>
                <Image
                  src="/image/MuayThai.jpg"
                  alt="logo do ct imperio"
                  className="w-300 h-300 sm:w-400 sm:h-400"
                  width={300}
                  height={380}
                />
              </div>
            </div>
          )}

          <div className="w-full flex flex-col justify-center items-center py-6 ">
            <div className="bg-gray-600 w-[90vw] h-[250px] rounded-3xl p-4 relative sm:h-[350px]">

              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url("/image/jiu.jpg")',
                  backgroundSize: bgSize,
                  backgroundPosition: 'center',
                  backgroundRepeat: "repeat-x",
                  opacity: 0.8,
                }}
              ></div>

              <div className="absolute inset-0 bg-black opacity-40"></div>

              <div className="absolute bottom-4 w-[80%] flex justify-between sm:w-[95%]">
                <p className="font-semibold text-white text-lg sm:text-2xl">Jiu-Jitsu</p>
                <div className="flex gap-4 items-end text-white">

                  <button onClick={() => setShowOverlay(true)}>
                    <Clock />
                  </button>

                  <button>
                    <CalendarClock />
                  </button>

                </div>
              </div>
            </div>
          </div>

          {showOverlay && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
              <div className="relative">
                <button
                  className="absolute top-4 right-4 bg-white p-2 rounded-full"
                  onClick={() => setShowOverlay(false)}
                >
                  X
                </button>
                <Image
                  src="/image/MuayThai.jpg"
                  alt="logo do ct imperio"
                  className="w-300 h-300 sm:w-400 sm:h-400"
                  width={300}
                  height={380}
                />
              </div>
            </div>
          )}

          <div className="w-full flex flex-col justify-center items-center py-6 ">
            <div className="bg-gray-600 w-[90vw] h-[250px] rounded-3xl p-4 relative sm:h-[350px]">

              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url("/image/thai.jpg")',
                  backgroundSize: bgSize,
                  backgroundPosition: 'center',
                  opacity: 0.8,
                }}
              ></div>

              <div className="absolute inset-0 bg-black opacity-40"></div>

              <div className="absolute bottom-4 w-[80%] flex justify-between sm:w-[95%]">
                <p className="font-semibold text-white text-lg sm:text-2xl">Muay Thai</p>
                <div className="flex gap-4 items-end text-white">

                  <button onClick={() => setShowOverlay(true)}>
                    <Clock />
                  </button>

                  <button>
                    <CalendarClock />
                  </button>

                </div>
              </div>
            </div>
          </div>

          {showOverlay && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
              <div className="relative">
                <button
                  className="absolute top-4 right-4 bg-white p-2 rounded-full"
                  onClick={() => setShowOverlay(false)}
                >
                  X
                </button>
                <Image
                  src="/image/MuayThai.jpg"
                  alt="logo do ct imperio"
                  className="w-300 h-300 sm:w-400 sm:h-400"
                  width={300}
                  height={380}
                />
              </div>
            </div>
          )}

          <div className="w-full flex flex-col justify-center items-center py-6 ">
            <div className="bg-gray-600 w-[90vw] h-[250px] rounded-3xl p-4 relative sm:h-[350px]">

              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url("/image/thai.jpg")',
                  backgroundSize: bgSize,
                  backgroundPosition: 'center',
                  opacity: 0.8,
                }}
              ></div>

              <div className="absolute inset-0 bg-black opacity-40"></div>

              <div className="absolute bottom-4 w-[80%] flex justify-between sm:w-[95%]">
                <p className="font-semibold text-white text-lg sm:text-2xl">Karate</p>
                <div className="flex gap-4 items-end text-white">

                  <button onClick={() => setShowOverlay(true)}>
                    <Clock />
                  </button>

                  <button>
                    <CalendarClock />
                  </button>

                </div>
              </div>
            </div>
          </div>

          {showOverlay && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
              <div className="relative">
                <button
                  className="absolute top-4 right-4 bg-white p-2 rounded-full"
                  onClick={() => setShowOverlay(false)}
                >
                  X
                </button>
                <Image
                  src="/image/MuayThai.jpg"
                  alt="logo do ct imperio"
                  className="w-300 h-300 sm:w-400 sm:h-400"
                  width={300}
                  height={380}
                />
              </div>
            </div>
          )}


          <div className="w-full flex flex-col justify-center items-center py-6 ">
            <div className="bg-gray-600 w-[90vw] h-[250px] rounded-3xl p-4 relative sm:h-[350px]">

              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url("/image/thai.jpg")',
                  backgroundSize: bgSize,
                  backgroundPosition: 'center',
                  opacity: 0.8,
                }}
              ></div>

              <div className="absolute inset-0 bg-black opacity-40"></div>

              <div className="absolute bottom-4 w-[80%] flex justify-between sm:w-[95%]">
                <p className="font-semibold text-white text-lg sm:text-2xl">Boxe</p>
                <div className="flex gap-4 items-end text-white">

                  <button onClick={() => setShowOverlay(true)}>
                    <Clock />
                  </button>

                  <button>
                    <CalendarClock />
                  </button>

                </div>
              </div>
            </div>
          </div>

          {showOverlay && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
              <div className="relative">
                <button
                  className="absolute top-4 right-4 bg-white p-2 rounded-full"
                  onClick={() => setShowOverlay(false)}
                >
                  X
                </button>
                <Image
                  src="/image/MuayThai.jpg"
                  alt="logo do ct imperio"
                  className="w-300 h-300 sm:w-400 sm:h-400"
                  width={300}
                  height={380}
                />
              </div>
            </div>
          )}

        </section>

      </section>
      <footer ref={professoresRef} className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/image/logo.png"
            alt="logo do ct imperio"
            className="w-14 h-14"
            width={180} // largura desejada em pixels
            height={180} // altura desejada em pixels
          />
          <h2 className="text-2xl text-white font-medium">Professores</h2>
        </div>

        <section className="flex overflow-x-auto gap-4 p-4 scrollbar-hide sm:gap-6 w-100vw">
          <div className="flex flex-col justify-center items-center gap-2 shrink-0">
            <Image
              src="/image/will.jpg"
              alt="Professor do CT"
              className="w-24 h-24 rounded-full sm:w-36 sm:h-36"
              width={180}
              height={180}
            />
            <p className="text-lg text-white font-medium">Will</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 shrink-0">
            <Image
              src="/image/aline.jpg"
              alt="Professor do CT"
              className="w-24 h-24 rounded-full sm:w-36 sm:h-36"
              width={180}
              height={180}
            />
            <p className="text-lg text-white font-medium">Aline</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 shrink-0">
            <Image
              src="/image/rui.jpg"
              alt="Professor do CT"
              className="w-24 h-24 rounded-full sm:w-36 sm:h-36"
              width={180}
              height={180}
            />
            <p className="text-lg text-white font-medium">Rui</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 shrink-0">
            <Image
              src="/image/maradona.jpg"
              alt="Professor do CT"
              className="w-24 h-24 rounded-full sm:w-36 sm:h-36"
              width={180}
              height={180}
            />
            <p className="text-lg text-white font-medium">Maradona</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 shrink-0">
            <Image
              src="/image/jagunco.jpg"
              alt="Professor do CT"
              className="w-24 h-24 rounded-full sm:w-36 sm:h-36"
              width={180}
              height={180}
            />
            <p className="text-lg text-white font-medium">Jagunço</p>
          </div>
        </section>

      </footer>
    </div>
  );
}
