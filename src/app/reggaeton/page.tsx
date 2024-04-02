"use client";
export default function Reggaeton() {
  return (
    <>
      <div className="relative h-full w-full overflow-y-auto bg-gray-50">
        <div className="px-4 pt-4">
          {/* seção 1 */}
          <section>
            <h1>Reggaeton</h1>
          </section>

          <div className="my-4 grid grid-cols-1 xl:gap-4 2xl:grid-cols-2">
            {/* seção 2 */}
            <section>
              <h2>Seção aqui</h2>
            </section>
            {/* seção 3 */}
            <section className="dark:text-azul-100">
              <h2>Seção aqui</h2>
            </section>
          </div>

          <div className="my-4 grid grid-cols-1 xl:gap-4 2xl:grid-cols-2">
            {/* seção 4 */}
            <section className="dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              <h2>Seção aqui</h2>
            </section>
            {/* seção 5 */}
            <section className="dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              <h2>Seção aqui</h2>
            </section>
          </div>
        </div>

        {/* <app-footer /> */}
      </div>
    </>
  );
}
