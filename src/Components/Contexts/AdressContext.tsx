import { createContext, ReactNode, useState } from "react"

interface AdressContextProviderProps {
    children: ReactNode
}

export interface AdressContextProps {
    setRua: (rua: string) => void,
    setNumero: (numero: number) => void,
    setBairro: (bairro: string) => void,
    setCidade: (cidade: string) => void,
    setUf: (uf: string) => void,

    rua: string,
    numero: number,
    bairro: string,
    cidade: string,
    uf: string
  }
  //Aqui é feita a tipagem para ser utilizada no createContext

export const AdressContext = createContext({} as AdressContextProps)

export function AdressContextProvider({children} : AdressContextProviderProps) {
    const [rua, setRua] = useState<string>("");
    const [numero, setNumero] = useState<number>(0);
    const [bairro, setBairro] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [uf, setUf] = useState<string>("");

    return (
        <AdressContext.Provider value={{setRua, setNumero, setBairro, setCidade, setUf, rua, numero, bairro, cidade, uf}}>
            {children}
        </AdressContext.Provider>
    )
}