"use client";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import type { FC } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { isSmallScreen } from "../../helpers/is-small-screen";
import { useSidebarContext } from "./SidebarContext";

export const DashboardNavbar: FC<Record<string, never>> = function () {
  // Obtém o estado e função para alternar a barra lateral
  const { isCollapsed: isSidebarCollapsed, setCollapsed: setSidebarCollapsed } =
    useSidebarContext();

  return (
    <header>
      {/* Barra de navegação superior */}
      <Navbar
        fluid
        className="fixed top-0 z-30 w-full border-b border-gray-200 bg-white p-0 dark:border-gray-700 dark:bg-azulMarinho-100 sm:p-0"
      >
        {/* Conteúdo da barra de navegação */}
        <div className="w-full p-3 pr-4">
          {/* Seção com logo e botão da barra lateral */}
          <div className="flex justify-between text-center">
            <div className="flex items-center">
              {/* Botão para alternar a barra lateral */}
              <button
                aria-controls="sidebar"
                aria-expanded
                className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-azulMarinho-100 dark:hover:text-white dark:focus:bg-azulMarinho-100 dark:focus:ring-azulMarinho-100"
                onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
              >
                {/* Ícone da barra lateral */}
                {isSidebarCollapsed || !isSmallScreen() ? (
                  <HiMenuAlt1 className="h-6 w-6" />
                ) : (
                  <HiX className="h-6 w-6" />
                )}
              </button>
              {/* Logo da aplicação */}

              <h1>Vibess</h1>
            </div>

            <div>
              {/* Botão para alternar tema escuro */}
              <DarkThemeToggle className="pl-4" />
            </div>
          </div>
        </div>
      </Navbar>
    </header>
  );
};
