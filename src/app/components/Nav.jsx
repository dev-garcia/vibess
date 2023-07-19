"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { MdReport } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <Disclosure as="nav" className="font-sans">
        <Disclosure.Button className="group peer absolute right-4 top-4 inline-flex items-center justify-center rounded-r text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <GiHamburgerMenu
            className="block h-6 w-6 md:hidden"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div
          className="peer:transition fixed -left-96 top-0 z-20 mb-20 mt-20 rounded-2xl bg-[#333333] delay-150 duration-200 ease-out peer-focus:left-0 lg:left-0 lg:w-60"
          role="navigation"
        >
          <div className="item-center flex flex-col justify-start">
            <div className=" my-4 border-b border-gray-100 pb-4">
              <h2 className="text-base font-semibold text-white">Menu</h2>
              <ul className="list-reset group mt-4">
                <li className="justify-start py-2 pl-8 text-left">
                  <Link
                    href="/"
                    className="cursor-pointer text-base font-semibold text-white"
                  >
                    Início
                  </Link>
                </li>
                <li className="justify-start py-2 pl-8 text-left">
                  <Link
                    href="/top-brasil"
                    className="cursor-pointer text-base font-semibold text-white"
                  >
                    Top Brasil
                  </Link>
                </li>
                <li className="justify-start py-2 pl-8 text-left">
                  <Link
                    href="/reggaeton"
                    className="cursor-pointer text-base font-semibold text-white"
                  >
                    Reggaeton
                  </Link>
                </li>
                <li className="justify-start py-2 pl-8 text-left">
                  <Link
                    href="/trap"
                    className="cursor-pointer text-base font-semibold text-white"
                  >
                    trap
                  </Link>
                </li>
              </ul>
            </div>

            {/* logout */}
            <div>
              <ul className="list-reset group mt-4">
                <li className="justify-start py-2 pl-4 text-left">
                  <a
                    href=""
                    className="flex text-base font-semibold text-white"
                  >
                    <CgProfile className="m-2" />
                    Em breve
                  </a>
                </li>
                <li className="justify-start py-2 pl-4 text-left">
                  <a
                    href=""
                    className="flex  text-base font-semibold text-white"
                  >
                    <MdReport className="m-2" /> Em breve
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Disclosure>
    </>
  );
};

export default Nav;
