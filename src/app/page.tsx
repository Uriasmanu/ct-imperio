import { AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-800 flex sm:flex-row py-4">
      <footer className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/image/logo.png"
            alt="logo do ct imperio"
            className="w-10 h-10"
            width={180} // largura desejada em pixels
            height={180} // altura desejada em pixels
          />
          <h2 className="font-2xl text-white font-medium">Professores</h2>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="flex gap-4 ml-0 w-20 h-auto "> {/* Ajuste no gap para maior separação */}
            <CarouselItem className="p-2 flex flex-col items-center ml-0 ">
              <Avatar>
                <AvatarImage
                  className="rounded-full "
                  src="https://images.unsplash.com/photo-1610041321420-a596dd14ebc9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <AvatarFallback>DV</AvatarFallback>
              </Avatar>
              <p className="font-2xl text-white font-medium mt-2 text-center">Fulano</p> {/* Alinhamento do nome */}
            </CarouselItem>

            <CarouselItem className="p-2 flex flex-col items-center">
              <Avatar>
                <AvatarImage
                  className="rounded-full"
                  src="https://images.unsplash.com/photo-1610041321420-a596dd14ebc9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <AvatarFallback>DV</AvatarFallback>
              </Avatar>
              <p className="font-2xl text-white font-medium mt-2 text-center">Fulano</p> {/* Alinhamento do nome */}
            </CarouselItem>

            <CarouselItem className="p-2 flex flex-col items-center">
              <Avatar>
                <AvatarImage
                  className="rounded-full"
                  src="https://images.unsplash.com/photo-1610041321420-a596dd14ebc9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <AvatarFallback>DV</AvatarFallback>
              </Avatar>
              <p className="font-2xl text-white font-medium mt-2 text-center">Fulano</p> {/* Alinhamento do nome */}
            </CarouselItem>

            <CarouselItem className="p-2 flex flex-col items-center">
              <Avatar>
                <AvatarImage
                  className="rounded-full"
                  src="https://images.unsplash.com/photo-1610041321420-a596dd14ebc9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <AvatarFallback>DV</AvatarFallback>
              </Avatar>
              <p className="font-2xl text-white font-medium mt-2 text-center">Fulano</p> {/* Alinhamento do nome */}
            </CarouselItem>

            <CarouselItem className="p-2 flex flex-col items-center">
              <Avatar>
                <AvatarImage
                  className="rounded-full"
                  src="https://images.unsplash.com/photo-1610041321420-a596dd14ebc9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <AvatarFallback>DV</AvatarFallback>
              </Avatar>
              <p className="font-2xl text-white font-medium mt-2 text-center">Fulano</p> {/* Alinhamento do nome */}
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </footer>
    </div>
  );
}
