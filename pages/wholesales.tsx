import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = ({ products }: any) => {
  return (
    <>
      <Head>
        <title>{`Para cafeterías - Afternoon Roastery`}</title>
        <meta property="og-locale" content="es_ES"></meta>
        <meta property="og:title" content={`Inicio`} key="title" />
        <meta
          name="keywords"
          content="Café, Colombia, Brasil, 250gr, Tostadores, Cafe tostado, cafe de especialidad"
        ></meta>
        <meta
          name="description"
          content={`Sumá tu cafetería a Afternoon Roastery y te proveemos con el mejor café de especialidad, a un precio justo.`}
        ></meta>
      </Head>
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto  lg:mx-0 border-b border-gray-900/10 pb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¿Planeás abrir una cafetería?
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            También somos mayoristas de café de especialidad. Contactanos para
            conocer más.
          </p>
        </div>
        <form>
          <div className="space-y-12">
            <div className="">
              <div className="pb-12 mt-12 max-w-screen-md">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Información de contacto
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Use un correo permanente donde puedas recibir correos.
                </p>

                <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nombre
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        required
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Apellido
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Correo electrónico
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mensaje
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        style={{ minHeight: "48px" }}
                        className="block w-full h-24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-700 sm:text-sm sm:leading-6 max-h-48"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-start gap-x-6">
              <button
                type="submit"
                className="rounded-md bg-amber-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
              >
                Enviar
              </button>
              <p>Mensaje enviado correctamente.</p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
