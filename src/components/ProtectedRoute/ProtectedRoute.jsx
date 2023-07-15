import { Navigate } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";

export default function ProtectedRoute({ isLogged, loggedUser, ...props }) {
  return (isLogged ?
    <>
      <Header loggedUser={loggedUser} />
      <Main name="content" {...props} />
    </>
    : 
    <Navigate to={"/sign-in"} replace />
  );
}
