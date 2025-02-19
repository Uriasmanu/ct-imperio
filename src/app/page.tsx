import { CalendarClock, Clock } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-800 flex flex-col items-center w-full">
      <section>
        <div className="flex flex-col justify-center w-full h-[15rem] relative md:h-[25rem] sm:h-[22rem] lg:h-[30rem] xl:h-[35rem] 2xl:h-[40rem] gap-3">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-medium w-[80%] 2xl:w-[65%] xl:w-[60%] 
          lg:w-[60%] md:w-[60%] px-8 relative z-10 md:left-[10%] sm:left-[10%] sm:w-[60%]">
            Infelizmente para eu sorrir, vocês terão que sofrer.
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white w-[75%] 2xl:w-[50%] xl:w-[50%] lg:w-[50%] px-8 relative z-10 md:left-[10%] md:w-[60%] sm:left-[10%] sm:w-[60%]">
            50 abdominais, passada, flexão, super-man, flexão diamante, 100 chutes cada perna.
          </p>


          <div className="absolute inset-0">
            <Image
              src="/image/banner.jpg"
              alt="Banner"
              fill
              sizes="100vw"
              priority
              className="object-cover opacity-60"
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

        <section className="w-full flex flex-col justify-center py-6 sm:py-10 gap-2 ">
          <h2 className="text-1xl sm:text-2xl text-white font-medium px-8 relative z-10 text-center">Um Pouco da Nossa Historia</h2>
          <p className="text-xs sm:text-[18px] text-white px-8 relative z-10 text-center sm:w-[60%] sm:left-[20%]">
            São 20 anos de história! O CT começou com a missão de difundir o ensinamento das artes marciais, formando atletas e incentivando o desenvolvimento pessoal.
            Ao longo dos anos, nos tornamos referência, promovendo disciplina, respeito e evolução constante.
          </p>
        </section>

        <section className="flex flex-col sm:w-[90vw] sm:relative sm:left-[7%] sm:overflow-hidden">

          <div className="w-full flex flex-col justify-center items-center py-6 ">
            <div className="bg-gray-600 w-[90vw] h-[200px] rounded-3xl p-4 relative">

              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url("/image/treining.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.8,
                }}
              ></div>

              <div className="absolute inset-0 bg-black opacity-40"></div>

              <div className="absolute bottom-4 w-[80%] flex justify-between ">
                <p className="font-semibold text-white text-lg">Personal Training</p>
                <div className="flex gap-4 items-end text-white">
                  <Clock />
                  <CalendarClock />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center py-6 ">
            <div className="bg-gray-600 w-[90vw] h-[200px] rounded-3xl p-4 relative">

              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url("/image/treining.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.8,
                }}
              ></div>

              <div className="absolute inset-0 bg-black opacity-40"></div>

              <div className="absolute bottom-4 w-[80%] flex justify-between ">
                <p className="font-semibold text-white text-lg">Jiu-Jitsu</p>
                <div className="flex gap-4 items-end text-white">
                  <Clock />
                  <CalendarClock />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center py-6 ">
            <div className="bg-gray-600 w-[90vw] h-[200px] rounded-3xl p-4 relative">

              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url("/image/treining.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.8,
                }}
              ></div>

              <div className="absolute inset-0 bg-black opacity-40"></div>

              <div className="absolute bottom-4 w-[80%] flex justify-between ">
                <p className="font-semibold text-white text-lg">Muay Thai</p>
                <div className="flex gap-4 items-end text-white">
                  <Clock />
                  <CalendarClock />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center py-6 ">
            <div className="bg-gray-600 w-[90vw] h-[200px] rounded-3xl p-4 relative">

              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url("/image/treining.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.8,
                }}
              ></div>

              <div className="absolute inset-0 bg-black opacity-40"></div>

              <div className="absolute bottom-4 w-[80%] flex justify-between ">
                <p className="font-semibold text-white text-lg">Boxe</p>
                <div className="flex gap-4 items-end text-white">
                  <Clock />
                  <CalendarClock />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center py-6 ">
            <div className="bg-gray-600 w-[90vw] h-[200px] rounded-3xl p-4 relative">

              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url("/image/treining.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.8,
                }}
              ></div>

              <div className="absolute inset-0 bg-black opacity-40"></div>

              <div className="absolute bottom-4 w-[80%] flex justify-between ">
                <p className="font-semibold text-white text-lg">Karate</p>
                <div className="flex gap-4 items-end text-white">
                  <Clock />
                  <CalendarClock />
                </div>
              </div>
            </div>
          </div>

        </section>

      </section>
      <footer className="w-full flex flex-col justify-center items-center">
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

        <section className="flex overflow-x-auto gap-4 p-4 scrollbar-hide">
          <div className="flex flex-col justify-center items-center gap-2 shrink-0">
            <Image
              src="/image/treining.jpg"
              alt="Professor do CT"
              className="w-24 h-24 rounded-full"
              width={180}
              height={180}
            />
            <p className="text-lg text-white font-medium">Siclano</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 shrink-0">
            <Image
              src="/image/treining.jpg"
              alt="Professor do CT"
              className="w-24 h-24 rounded-full"
              width={180}
              height={180}
            />
            <p className="text-lg text-white font-medium">Siclano</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 shrink-0">
            <Image
              src="/image/treining.jpg"
              alt="Professor do CT"
              className="w-24 h-24 rounded-full"
              width={180}
              height={180}
            />
            <p className="text-lg text-white font-medium">Siclano</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 shrink-0">
            <Image
              src="/image/treining.jpg"
              alt="Professor do CT"
              className="w-24 h-24 rounded-full"
              width={180}
              height={180}
            />
            <p className="text-lg text-white font-medium">Siclano</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 shrink-0">
            <Image
              src="/image/treining.jpg"
              alt="Professor do CT"
              className="w-24 h-24 rounded-full"
              width={180}
              height={180}
            />
            <p className="text-lg text-white font-medium">Siclano</p>
          </div>
        </section>

      </footer>
    </div>
  );
}
