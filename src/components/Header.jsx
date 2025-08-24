import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state)=>state?.user)

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        navigate("/browse");
      } else {
        dispatch(removeUser(null));
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then()
      .catch((error) => {});
  };

  return (
    <>
      <div className="absolute py-2 px-10 bg-gradient-to-b w-screen from-black z-10 flex justify-between">
        <img
          className="w-44"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        {user && (
          <div className="flex gap-4">
            <div
              className="h-10 p-2 rounded-lg text-white bg-[#E50914] text-sm cursor-pointer"
              onClick={()=>navigate("/gptSearch")}
            >
              GPT Search
            </div>
            <div
              className="h-10 p-2  rounded-lg text-white bg-[#E50914] text-sm cursor-pointer"
              onClick={handleSignOut}
            >
              Logout
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
