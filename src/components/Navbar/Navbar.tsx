import { useState, useContext, useRef } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MenuList } from ".";
import { SearchContext } from "@/context/SearchContextProvider";
import Link from "next/link";
import { Pacifico } from "next/font/google";
import { Dialog } from "@headlessui/react";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { triggerFocus } = useContext(SearchContext);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearchClick = () => {
    const searchSection = document.getElementById("search-section");
    if (searchSection) {
      const offset = 50;
      const elementPosition = searchSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        triggerFocus();
      }, 500);
    }
  };

  return (
    <>
      <nav className="py-6" aria-label="Global">
        <div className="flex items-center justify-between gap-8">
          <div className="flex lg:flex-1">
            <Link
              className={`${pacifico.className} text-2xl lg:text-3xl hover:text-gray-600 transition-colors`}
              href="/"
            >
              Colored Icons
            </Link>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <MenuList className="flex items-center gap-8 text-sm font-semibold text-gray-600" />
          </div>

          <div className="flex flex-1 items-center justify-end gap-4">
            <button
              onClick={handleSearchClick}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Search"
            >
              <CiSearch className="text-gray-700 text-xl" />
            </button>

            <button
              type="button"
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <RxHamburgerMenu className="text-xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={isMenuOpen}
        onClose={setIsMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              className={`${pacifico.className} text-2xl`}
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Colored Icons
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <RxCross2 className="text-xl" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <MenuList
                className="flex flex-col space-y-2 py-6 text-base font-semibold text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Navbar;
