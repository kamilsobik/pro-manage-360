import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import Logo from "../images/logo.svg";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { BiErrorAlt } from "react-icons/bi";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const notify = (errorMessage) =>
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-red-200 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex pt-0.5 text-red-600  text-lg font-medium">
              <BiErrorAlt />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {errorMessage}
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));

  const signIn = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          notify("Wrong password. Try again.");
        } else if (error.code === "auth/user-not-found") {
          notify(
            "User's email address is not in the database. Make sure you enter the correct email address."
          );
        } else if (error.code === "auth/too-many-requests") {
          notify(
            "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
          );
        } else notify(error.message);
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
                <Toaster position="top-center" reverseOrder={false} />
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
          className="flex items-center justify-between mt-6"
          aria-hidden="true"
        >
          <img
            className="object-cover object-center align-middle max-w-full max-h-full m-5 duration-1000 hover:rotate-[360deg]"
            src={Logo}
            width="700"
            height="700"
            alt="Authentication"
          />
        </div>
      </div>
    </main>
  );
}

export default Signin;
