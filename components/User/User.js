import auth from "../firebase.init";
import { useSignInWithGoogle, useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useState } from "react";
const User = () => {
  const [user, loading, error] = useAuthState(auth);

  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [clicked, setClicked] = useState(false);
  if (loading || loadingGoogle) {
    return <h1>loading</h1>;
  }
  return (
    <div className="relative">
      {/* modal  */}
      {user && (
        <div className={clicked ? "hidden" : "block"}>
          <div className="flex flex-col justify-center items-center absolute card rounded bg-white z-50 top-[10vh] right-0 w-[16rem] p-5">
            <div className="mb-3">
              <img
                src={user?.photoURL}
                alt=""
                className="rounded-full shadow-md h-16 w-16"
              />
            </div>
            {/* display users name  */}
            <div className="text-gray-700 font-medium text-lg mb-1">
              {user?.displayName}
            </div>
            {/* display users email  */}
            <div className="text-gray-500 font-medium text-sm mb-5">
              {user?.email}
            </div>
            <div>
              {" "}
              <button
                onClick={() => signOut(auth)}
                className="bg-red-500 text-sm px-3 py-2 rounded font-medium text-gray-50 hover:bg-red-400 hover:scale-110 duration-300 btn-shadow w-full"
              >
                logout
              </button>
            </div>
          </div>
        </div>
      )}
      {!user ? (
        <button
          onClick={async () => await signInWithGoogle()}
          className="bg-blue-500 text-sm px-3 py-2 rounded font-medium text-gray-50 hover:bg-blue-400 hover:scale-110 duration-300 btn-shadow"
        >
          Sign In
        </button>
      ) : (
        <div className="my-2">
          <img
            onClick={() => setClicked(!clicked)}
            src={user?.photoURL}
            alt=""
            className="w-12 h-12 rounded-full hover:ring-2 hover:ring-gray-300"
          />
        </div>
      )}
    </div>
  );
};

export default User;
