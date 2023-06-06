import Logo from "../images/logo.svg";

const NotFound = () => {
  return (
    <div>
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
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                  <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                      <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">
                      Sorry, we couldn&apos;t find this page.
                    </p>
                    <p className="mt-4 mb-8 dark:text-gray-400">
                      But dont worry, you can find plenty of other things on our
                      homepage.
                    </p>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="px-8 py-3 font-semibold rounded  bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap cursor-pointer"
                    >
                      Back to homepage
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
    </div>
  );
};

export default NotFound;
