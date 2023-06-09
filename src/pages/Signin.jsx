import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import Logo from "../images/logo.svg";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <main className="bg-white">
      <div className="relative md:flex">
        <div className="md:w-1/2">
          <div className="min-h-screen h-full flex flex-col after:flex-1">
            <div className="flex-1">
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                <p className="block" to="/">
                  <img
                    src={Logo}
                    width="50"
                    height="50"
                    className="cursor-pointer duration-500 hover:rotate-[360deg]"
                  />
                </p>
              </div>
            </div>
            <div className="max-w-sm mx-auto px-4 py-8">
              <h1 className="text-3xl text-slate-800 font-bold mb-6">
                Welcome back in our app
              </h1>
              <form onSubmit={signIn}>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input w-full"
                      type="email"
                      autoComplete="on"
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-input w-full"
                      type="password"
                      autoComplete="on"
                      placeholder="Your password"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <p className="text-sm underline hover:no-underline cursor-pointer">
                      Forgot Password?
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 cursor-pointer"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <div className="pt-5 mt-6 border-t border-slate-200">
                <div className="text-sm">
                  Don’t you have an account?
                  <a
                    className="font-medium text-indigo-500 hover:text-indigo-600 cursor-pointer"
                    href="/signup"
                  >
                    {" "}
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
          aria-hidden="true"
        >
          <img
            className="object-cover object-center w-full h-full duration-1000 hover:rotate-[360deg]"
            src={Logo}
            width="760"
            height="1024"
            alt="Authentication"
          />
        </div>
      </div>
    </main>
  );
}

export default Signin;
