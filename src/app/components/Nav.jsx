"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { MdReport } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <Disclosure as="nav">
        <Disclosure.Button className="group peer absolute right-4 top-4 inline-flex items-center justify-center rounded-r text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <GiHamburgerMenu
            className="block h-6 w-6 md:hidden"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="peer:transition fixed -left-96 top-0 z-20 h-screen w-1/2 rounded-2xl border-l-rose-600 bg-[#8ec5fc] p-6 font-sans delay-150 duration-200 ease-out peer-focus:left-0 lg:left-0 lg:w-60">
          <div className="flexP item-center  flex-col justify-start">
            <h1 className="span loader m-auto flex w-full justify-center border-b border-gray-100 pb-4">
              {/* <span class='m'>&nbsp;</span> Caso queira usar espaço  */}
              <Link href="/">
                <span>V</span>
                <span>i</span>
                <span>b</span>
                <span>e</span>
                <span>s</span>
                <span>s</span>
              </Link>
            </h1>

            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="group  m-auto mb-2 flex  items-center justify-start gap-4 rounded-md p-2 pl-5 hover:bg-gray-900 hover:shadow-lg">
                <h3 className="cursor-pointer text-base font-semibold text-gray-800 group-hover:text-white ">
                  <Link href="/reggaeton">Reggaeton</Link>
                </h3>
              </div>
              <div className="group  m-auto mb-2 flex  items-center justify-start gap-4 rounded-md p-2 pl-5 hover:bg-gray-900 hover:shadow-lg">
                <h3 className="cursor-pointer text-base font-semibold text-gray-800 group-hover:text-white ">
                  <a href="/trap">trap</a>
                </h3>
              </div>
            </div>

            {/* logout */}
            <div className=" my-4">
              <div className="group  m-auto mb-2 flex cursor-pointer items-center justify-start gap-4 rounded-md p-2 pl-5 hover:bg-gray-900 hover:shadow-lg">
                <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                  Em breve
                </h3>
              </div>
              <div className="group  m-auto mb-2 flex cursor-pointer items-center justify-start gap-4 rounded-md p-2 pl-5 hover:bg-gray-900 hover:shadow-lg">
                <FaRegComments className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                  <a href="">Sugestões</a>
                </h3>
              </div>
              <div className="group m-auto mb-2 flex cursor-pointer items-center justify-start gap-4 rounded-md p-2 pl-5 hover:bg-gray-900 hover:shadow-lg">
                <MdReport className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                  <a href="">Reportar Erro</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </>
  );
};
export default Nav;
