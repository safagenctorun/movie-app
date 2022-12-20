import { ReactNode, FC, createContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}


const useContext = () => {
    const [selectedMovieProperties, setSelectedMovieProperties] = useState<any[]>([])

  return {
    setSelectedMovieProperties,
    selectedMovieProperties
  };
};

export const Context = createContext({} as ReturnType<typeof useContext>);

const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <Context.Provider value={useContext()}>
      {children}
    </Context.Provider>
  );
};

export default Provider;