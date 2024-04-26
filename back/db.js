module.exports = {
  products: [
    {
      id: 1,
      handle: "colombia-excelso",
      title: "Café Colombia Excelso",
      description:
        "Descubre el encanto de nuestro café premium colombiano: un viaje sensorial donde la suavidad del tueste medio se fusiona con notas frutales, ofreciendo una experiencia seductora y vibrante en cada sorbo.",
      highlights: [
        "Café premium de Colombia, cultivado en tierras fértiles para un sabor superior.",
        "Tostado medio perfectamente balanceado para destacar sus sabores naturales.",
        "Textura cremosa y cuerpo seductor en cada taza, una experiencia sensorial única.",
      ],
      details: "Altura: 1400 - 1700 msnm. Cantidad: 250 gramos.",
      reviewsNumber: 2,
      images: [
        {
          id: "1",
          url: "/files/cafe-colombia/1.jpg",
          altText: "Example image",
          width: 100,
          height: 100,
        },
        {
          id: "2",
          url: "/files/cafe-colombia/2.webp",
          altText: "Example image",
          width: 100,
          height: 100,
        },
        {
          id: "3",
          url: "/files/cafe-colombia/3.jpg",
          altText: "Example image",
          width: 100,
          height: 100,
        },
        {
          id: "4",
          url: "/files/cafe-colombia/4.jpg",
          altText: "Example image",
          width: 100,
          height: 100,
        },
      ],
      priceRange: {
        maxVariantPrice: {
          amount: "11.900,00",
        },
        minVariantPrice: {
          amount: "11.900,00",
        },
      },

      options: [
        {
          name: "Size",
          values: [
            "Grano",
            "Fina",
            "Media fina",
            "Media",
            "Media gruesa",
            "Gruesa",
          ],
        },
      ],
    },
    {
      id: 2,
      handle: "brasil-santos",
      title: "Café Brasil Santos Ilado",
      description:
        "Embárcate en un viaje sensorial hacia la exuberante selva tropical de Brasil con nuestro café Santos Ilado. Experimenta la fusión perfecta entre la intensidad del tostado medio-alto y la rica herencia de los granos brasileños, donde cada sorbo te transporta a un mundo de sabores profundos y aromas cautivadores. Sumérgete en la suavidad seductora de este café, donde las notas de cacao oscuro y frutas tropicales se entrelazan en una danza exquisita en tu paladar, creando una experiencia única en cada taza.",
      highlights: [
        "Seleccionado de las regiones más fértiles del país, donde el sol tropical y la tierra rica producen un grano excepcionalmente robusto y aromático.",
        "Tostado medio-alto con precisión artesanal para resaltar las cualidades distintivas de los granos brasileños, desde su profunda complejidad hasta su sutil dulzura, ofreciendo una experiencia de café intensa y satisfactoria.",
        "Disfruta de una textura sedosa y un cuerpo completo en cada taza, que te transporta a las profundidades de la selva amazónica con cada sorbo, ofreciéndote una experiencia de café verdaderamente envolvente y memorable.",
      ],
      details: "Altura: 1050 msnm. Cantidad: 250 gramos.",
      reviewsNumber: 1,
      images: [
        {
          id: "1",
          url: "/files/cafe-brasil/1.jpg",
          altText: "Example image",
          width: 1,
          height: 1,
        },
        {
          id: "2",
          url: "/files/cafe-brasil/2.jpg",
          altText: "Example image",
          width: 1,
          height: 1,
        },
        {
          id: "3",
          url: "/files/cafe-brasil/3.jpg",
          altText: "Example image",
          width: 1,
          height: 1,
        },
        {
          id: "4",
          url: "/files/cafe-brasil/4.jpg",
          altText: "Example image",
          width: 1,
          height: 1,
        },
      ],
      priceRange: {
        maxVariantPrice: {
          amount: "8.900,00",
        },
        minVariantPrice: {
          amount: "8.900,00",
        },
      },

      options: [
        {
          name: "Size",
          values: [
            "Grano",
            "Fina",
            "Media fina",
            "Media",
            "Media gruesa",
            "Gruesa",
          ],
        },
      ],
    },
  ],
};
