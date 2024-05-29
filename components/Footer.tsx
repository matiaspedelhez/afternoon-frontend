function Footer() {
  return (
    <div className="pt-16">
      <div className="w-full border-gray-300 border-t lg:max-w-7xl md:w-11/12 lg:mx-auto md:mx-auto">
        <div className="container mx-auto py-12">
          <div className="xl:flex lg:flex md:flex pt-6 justify-between">
            <div className="w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0">
              <div className="flex items-center mb-6 xl:mb-0 lg:mb-0">
                <p className="ml-3 font-bold text-xl pl-2">
                  Afternoon Roastery
                </p>
              </div>
              <p className="p-5 ">
                En nuestro tostadero de café de especialidad en Corrientes
                Capital, nos apasiona seleccionar los granos más finos y
                tostarlos con maestría para ofrecerte una experiencia única en
                cada taza. Descubrí el arte del café con nosotros y dejate
                cautivar por el aroma y el sabor incomparables de nuestras
                mezclas exclusivas <br />
              </p>
            </div>
            <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0   sm:pl-0">
              <p className="text-gray-800 font-bold text-xl mb-6 pl-5">
                Comunidad
              </p>
              <ul className="p-5">
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a href="">Acerca de</a>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a
                    href="https://www.instagram.com/afternoon_ar/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Nuestro Instagram
                  </a>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a href="mailto:contacto@afternoon.com.ar">
                    Unite a nosotros
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="xl:flex flex-wrap justify-between xl:mt-8 mt-16 pb-6  sm:pl-0">
            <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0 pl-5 ">
              <p className="text-gray-800 text-base">
                Afternoon Roastery @ 2024
              </p>
            </div>
            {/* <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0">
              <ul className="xl:flex lg:flex md:flex sm:flex justify-between">
                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                  <a href="">Terms of service</a>
                </li>
                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                  <a href="">Privacy Policy</a>
                </li>
                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                  <a href="">Security</a>
                </li>
                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                  <a href="">Sitemap</a>
                </li>
              </ul>
            </div> */}
            {/* <div className="w-11/12 xl:w-1/6 lg:w-1/6 sm:w-11/12 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0 mt-8 lg:mt-8 xl:mt-0">
              <div className="flex justify-start sm:justify-start xl:justify-end space-x-6 pr-2 xl:pr-0 lg:pr-0 md:pr-0 sm:pr-0">
                <div>
                  <a
                    href="https://github.com/matiaspedelhez"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://img.icons8.com/material-rounded/344/github.png"
                      layout="fixed"
                      height="32"
                      width="32"
                      alt="github"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/matias-pedelhez-a84b061b4/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://img.icons8.com/ios-filled/344/linkedin-circled--v1.png"
                      layout="fixed"
                      height="32"
                      width="32"
                      alt="linkedin"
                    />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
