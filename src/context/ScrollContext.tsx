// src/context/ScrollContext.tsx
"use client";

import { createContext, useContext, useRef, RefObject, ReactNode } from "react";

// Definição do tipo do contexto
interface ScrollContextType {
  sobreRef: RefObject<HTMLElement>;
  aulasRef: RefObject<HTMLElement>;
  professoresRef: RefObject<HTMLElement>;
  scrollToSection: (ref: RefObject<HTMLElement>) => void;
}


// Criamos o contexto e passamos um valor inicial
const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

// Provedor do contexto
export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const sobreRef = useRef<HTMLElement>(null);
  const aulasRef = useRef<HTMLElement>(null);
  const professoresRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={{ sobreRef, aulasRef, professoresRef, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

// Hook para usar o contexto
export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll deve ser usado dentro de um ScrollProvider");
  }
  return context;
};
