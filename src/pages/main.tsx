import {auth} from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Main = () => {

    const [user] = useAuthState(auth);

    const SignOutUser = async ()  => {
          await signOut(auth);
    }

     return (<div>

             {user && <>
                 <p> {user?.displayName} </p>
                 <p> <img src={(user?.photoURL == null) ? "" : user?.photoURL} alt="" />   </p>
                 <button onClick={SignOutUser}>Log Out</button>
             </>}

           <h1>Home Page</h1>
     </div>);
}