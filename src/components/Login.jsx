import { useRef, useState } from "react";
import { ValidateForm } from "../utils/FormValidations";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [error, setError] = useState(null);
  const toggleIsSignIn = () => {
    setIsSignIn((prevState) => !prevState);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleFormSubmit = () => {
    const validation = !isSignIn
      ? ValidateForm(
          name.current.value,
          email.current.value,
          password.current.value
        )
      : ValidateForm(email.current.value, password.current.value);
    setError(validation);
  };

  return (
    <>
      <img
        className="absolute w-screen h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
        alt="background"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black p-12 w-1/4 my-40 mx-auto left-0 right-0 flex flex-col opacity-80 m-2 text-white font-medium"
      >
        <div className="font-extrabold text-2xl px-2 py-3">
          {isSignIn ? "Sign In" : "Sign Up"}
        </div>
        {!isSignIn && (
          <input
            type="text"
            name="name"
            ref={name}
            id="name"
            placeholder="Name"
            className="p-2 m-2 bg-slate-700"
          />
        )}
        <input
          type="text"
          name="email"
          id="email"
          ref={email}
          placeholder="Email or mobile number"
          className="p-2 m-2 bg-slate-700"
        />
        <input
          type="password"
          name="password"
          id="password"
          ref={password}
          placeholder="Password"
          className="p-2 m-2 bg-slate-700"
        />
        <p className="px-2 text-red-600">{error}</p>
        <button
          className="m-2 p-2 bg-red-700 opacity-100"
          onClick={handleFormSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn ? (
          <div className="p-2 font-medium">
            {" "}
            Not registred yet?{" "}
            <span
              className="cursor-pointer font-extrabold"
              onClick={toggleIsSignIn}
            >
              Sign Up
            </span>
          </div>
        ) : (
          <div className="p-2 font-medium">
            Alredy registred?{" "}
            <span
              className="cursor-pointer font-extrabold"
              onClick={toggleIsSignIn}
            >
              Sign In
            </span>
          </div>
        )}
      </form>
    </>
  );
};

export default Login;
