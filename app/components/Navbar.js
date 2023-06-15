import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light justify-content-between px-5">
        <a className="navbar-brand">AAA</a>
        <ul className="font-medium flex flex-col  md:flex-row md:space-x-8">
          <li>
            <Link href={""} className="block text-gray-500" aria-current="page">
              feedback
            </Link>
          </li>
          <li>
            <Link href={""} className="block text-gray-500">
              Support
            </Link>
          </li>
        </ul>
      </nav>

      {/* <header className="relative">
        <nav class="bg-white border-b dark:border-gray-200 dark:bg-gray-50">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <span class="self-center text-2xl whitespace-nowrap dark:text-dark">
              AAA
            </span>

            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col md:p-0 mt-3 md:flex-row md:space-x-8 md:mt-0">
                <li>
                  <Link
                    href={"/"}
                    class="block text-gray-500 md:p-0"
                    aria-current="page"
                  >
                    feedback
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contact"}
                    class="block text-gray-500 md:p-0"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header> */}
    </>
  );
};

export default Navbar;
