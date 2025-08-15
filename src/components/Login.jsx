import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const toggleIsSignIn = () => {
    setIsSignIn((prevState)=>!prevState);
  };
  return (
    <>
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
        alt=""
      />
      <form className="absolute bg-black p-12 w-1/4 my-40 mx-auto left-0 right-0 flex flex-col opacity-80 m-2 text-white font-medium">
        <div className="font-extrabold text-2xl px-2 py-3">{isSignIn? "Sign In" : "Sign Up"}</div>
        {!isSignIn && <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="p-2 m-2 bg-slate-700"
        />}
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email or mobile number"
          className="p-2 m-2 bg-slate-700"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="p-2 m-2 bg-slate-700"
        />
        <button className="m-2 p-2 bg-red-700 opacity-100">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn ? (
          <div className="p-2 font-medium">
            {" "}
            Not registred yet?{" "}
            <span className="cursor-pointer font-extrabold" onClick={toggleIsSignIn}>Sign Up</span>
          </div>
        ) : (
          

          <div className="p-2 font-medium">
            Alredy registred?{" "}
            <span className="cursor-pointer font-extrabold" onClick={toggleIsSignIn}>Sign In</span>
          </div>
        )}
      </form>
    </>
  );
};

export default Login;
