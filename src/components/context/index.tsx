import { createContext, useState, useEffect, useContext } from "react";
import Cookie from "js-cookie";

interface IUserContext {

  token: string | undefined;
  idUser: string | undefined;
  clearToken: () => void;
  clearIdUser: () => void;
}

const userContext = createContext<IUserContext>({
  token: undefined,
  idUser: undefined,
  clearToken: () => {},
  clearIdUser: ()=> {},
});

const UserProvider = ({ children }: any) => {
  const [token, setTokenState] = useState<string | undefined>(Cookie.get("token"));
  const [idUser, setIdUser] = useState<string | undefined>(Cookie.get("idUser"));

  const clearToken = () => {
    setTokenState(undefined);
    Cookie.remove("token");
  };

  const clearIdUser = ()=>{
    setIdUser(undefined);
    Cookie.remove("idUser");
  }

  useEffect(() => {
    const tokenFromCookie = Cookie.get("token");
    const idUserFromCookie = Cookie.get("idUser");

    if (tokenFromCookie) {
      setTokenState(tokenFromCookie);}
    if(idUserFromCookie){
      setIdUser(idUserFromCookie);}
    }, []);

  return (
    <userContext.Provider value={{ token, clearToken, idUser, clearIdUser }}>
      {children}
    </userContext.Provider>
  );
};

const useUserContext = () => useContext(userContext);

export { UserProvider, useUserContext };
