import Logo from "../images/logo.svg";

function Signup() {
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
              <h1 className="text-3xl  text-slate-800 font-bold mb-6">
                Create your Account
              </h1>
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      className="form-input w-full"
                      type="email"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      className="form-input w-full"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1 "
                      htmlFor="role"
                    >
                      Your Role <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="role"
                      className="form-select w-full cursor-pointer"
                    >
                      <option>Admin</option>
                      <option>Human Resources - manager</option>
                      <option>Human Resources - spacialist</option>
                      <option>Logistic - manager</option>
                      <option>Logistic - spacialist</option>
                      <option>Maintanance - manager</option>
                      <option>Maintanance - spacialist</option>
                      <option>Intern</option>
                    </select>
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
                      className="form-input w-full"
                      type="password"
                      autoComplete="on"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox cursor-pointer"
                      />
                      <span className="text-sm ml-2">Email me about news</span>
                    </label>
                  </div>
                  <p
                    className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap cursor-pointer"
                    to="/"
                  >
                    Sign Up
                  </p>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200">
                <div className="text-sm">
                  Have an account?
                  <p
                    className="font-medium text-indigo-500 hover:text-indigo-600 cursor-pointer"
                    to="/signin"
                  >
                    Sign In
                  </p>
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

export default Signup;
