"use client";

import { Sidebar } from "flowbite-react";
import type { FC } from "react";
import { twMerge } from "tailwind-merge";
import { useSidebarContext } from "../../components/navbar/SidebarContext";

export const DashboardSidebar: FC = function () {
  // Obtém o estado de abertura da barra lateral do contexto
  const { isCollapsed } = useSidebarContext();

  return (
    <>
      {/* Barra lateral */}
      <Sidebar
        aria-label="Sidebar de navegação lateral"
        collapsed={isCollapsed}
        id="sidebar"
        className={twMerge(
          "fixed inset-y-0 left-0 z-20 mt-16 flex h-full shrink-0 flex-col border-r border-gray-200 dark:bg-[#002266] lg:flex",
          isCollapsed && "hidden w-16",
        )}
      >
        {/* Itens da barra lateral */}
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">Reggaeton</Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">Em breve</Sidebar.Item>
            <Sidebar.Item href="#">Em breve</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};
