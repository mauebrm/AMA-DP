var config = {
  logo: "https://cdn.glitch.global/f234805b-7a88-450e-b0cb-9559cdfbb791/logoama.png?v=1750943780415",
  style: 'mapbox://styles/mauberm/cmcdezgc802no01s6gbcg3p9o',
  accessToken: "pk.eyJ1IjoibWF1YmVybSIsImEiOiJjbDkwandiMXAwdDJkM3ZvNjhyNGtyYmtvIn0.f8f_PAURro1hU-sh_xnAuA",
  showMarkers: false,
  theme: "ama",
  alignment: "right",
  title: "DISTRITO PERSEVERANCIA",
  subtitle: "",
  byline: "Asuncion, Paraguay",
  
  footer: 'Storymap built by Cities of the Future.<div style="text-align:center; margin-top:10px;"><img src="https://cdn.glitch.global/f234805b-7a88-450e-b0cb-9559cdfbb791/rect4-6-0-1.png?v=1750090350355" alt="Logo AMA" style="height:30px;"></div>',

  chapters: [
    {
      id: "chap-1",
      title: "Urban Valley",
      image: "https://cdn.glitch.global/2a3ffa3c-0397-4f7e-845c-566d78d6a35b/00_Distrito_la_Perseveranci_Sordo_Madaleno_a25eef3bdc.jpg?v=1747937069489",
      description: "Urban valley in the capital of Paraguay.",
      location: {
        center: [-59.855, -16.72882],
        zoom: 2.3,
        pitch: 0,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
         { layer: "caero", opacity: 0 },
        { layer: "distritop", opacity: 1 },
        { layer: "py-1", opacity: 0 },
        { layer: "aero", opacity: 0 },
        { layer: "EXP", opacity: 0 },
        { layer: "R1", opacity: 0 },
        { layer: "caminos", opacity: 0 },
        { layer: "rio", opacity: 0 },
        { layer: "caminos", opacity: 0 },
        { layer: "rioop", opacity: 0 },
        { layer: "oficinas-cg7ao1", opacity: 0 },
        { layer: "map-7-00pvbd", opacity: 0 },
        { layer: "dp-com", opacity: 0 },
        { layer: "sombras-dp", opacity: 0 },
        { layer: "distritopy", opacity: 0 },
        { layer: "dp-completo-84d3yb copy 1", opacity: 0 }
      ],
      onChapterExit: []
    },
    {
      id: "chap-2",
      title: "Paraguay",
      image: "https://cdn.glitch.global/f234805b-7a88-450e-b0cb-9559cdfbb791/dht43v4-e8341401-6a74-4f2e-9469-062c6cf1dbe6.png?v=1750033925053",
      description: "This is Paraguay — a landlocked country between Brazil, Argentina, and Bolivia, home to 6.8 million people.",
      location: {
        center: [-59.97444, -27.11891],
        zoom: 4.4,
        pitch: 0,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "py-1", opacity: 1 }
      ],
      onChapterExit: []
    },
    {
      id: "chap-3",
      title: "Paraguay River",
      image: "https://cdn.glitch.global/f234805b-7a88-450e-b0cb-9559cdfbb791/Screenshot%202025-06-15%20183954.png?v=1750034445387",
      description: "The Paraguay River divides the country and eventually flows into the Atlantic Ocean after passing by Buenos Aires.",
      location: {
        center: [-59.97444, -27.11891],
        zoom: 4.45,
        pitch: 0,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "rio", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "rio", opacity: 0.4 }
      ]
    },
    {
      id: "chap-4",
      title: "Asunción",
      image: "https://cdn.glitch.global/2a3ffa3c-0397-4f7e-845c-566d78d6a35b/52378598462_82cf6aac02_b.jpg?v=1747936955347",
      description: "Asunción, the capital of Paraguay, is home to around 525,000 people.",
      location: {
        center: [-57.5991, -25.269],
        zoom: 9.58,
        pitch: 0,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "py-1", opacity: 0.6 }
      ],
      onChapterExit: []
    },
    {
      id: "chap-5",
      title: "Strategic Location",
      image: "https://cdn.glitch.global/2a3ffa3c-0397-4f7e-845c-566d78d6a35b/5-1920x1280.jpg?v=1747936552207",
      description: "Just 15 minutes from Asunción’s international airport.",
      location: {
        center: [-57.599, -25.269],
        zoom: 12.5,
        pitch: 52,
        bearing: 52,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "caero", opacity: 1 },
        { layer: "aero", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "camino-aero", opacity: 0 },
        { layer: "caminos", opacity: 1 },
        { layer: "aero", opacity: 0 }
      ]
    },
    {
      id: "chap-6.1",
      title: "Future train and linear park ",
      image: "https://cdn.glitch.global/f234805b-7a88-450e-b0cb-9559cdfbb791/Screenshot%202025-06-24%20072435.png?v=1750771527933",
      description: "",
      location: {
        center: [-57.599, -25.269],
        zoom: 12,
        pitch: 45,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "camino-centro-3rqkc7", opacity: 1 }
      ],
      onChapterExit: []
    },
    {
      id: "chap-6",
      title: "Proximity to Downtown",
      image: "https://cdn.glitch.global/f234805b-7a88-450e-b0cb-9559cdfbb791/Screenshot%202025-06-05%20132945.png?v=1749151818723",
      description: "Just 10 minutes from downtown Asunción.",
      location: {
        center: [-57.599, -25.269],
        zoom: 12,
        pitch: 45,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "camino-centro-3rqkc7", opacity: 1 }
      ],
      onChapterExit: []
    },
    {
      id: "chap-7",
      title: "Urban Valley",
      image: "https://cdn.glitch.global/2a3ffa3c-0397-4f7e-845c-566d78d6a35b/valle.png?v=1747937083638",
      description: "The urban valley.",
      location: {
        center: [-57.59607305, -25.26713414],
        zoom: 15.5,
        pitch: 65,
        bearing: 35,
        duration: 8000
      },
      onChapterEnter: [
        { layer: "dp-com", opacity: 1 }
      ],
      onChapterExit: []
    },
    {
      id: "chap-8",
      title: "Commercial Core",
      image: "https://cdn.glitch.global/2a3ffa3c-0397-4f7e-845c-566d78d6a35b/Screenshot%202024-08-17%20085849.png?v=1747452754443",
      description: "Where experiences converge.",
      location: {
        center: [-57.59607305, -25.26713414],
        zoom: 16,
        pitch: 35,
        bearing: 35,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "EXP", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "EXP", opacity: 0 }
      ]
    },
    {
      id: "chap-9",
      title: "Commercial Area",
      image: "https://cdn.glitch.global/2a3ffa3c-0397-4f7e-845c-566d78d6a35b/04_ISO_COMERCIO_033e888810.jpg?v=1747452879649",
      description: "50,000 m² of commercial areas.",
      location: {
        center: [-57.5958, -25.26725], // fixed
        zoom: 17,
        pitch: 50,
        bearing: 120,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "chap-10",
      title: "Victoria Regia",
      image: "https://cdn.glitch.global/f234805b-7a88-450e-b0cb-9559cdfbb791/victoria-front-DbsLk1CQ.webp?v=1749149046335",
      description: "First residential buildings - 60 to 433 m2 - 100% sold",
      location: {
        center: [-57.59512, -25.26674],
        zoom: 17.56,
        pitch: 69.50,
        bearing: 102.14,
        duration: 8000
      },
      onChapterEnter: [
        { layer: "R1", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "R1", opacity: 0 }
      ]
    },
    {
      id: "chap-11",
      title: "Residential - GUEMBE",
      image: "https://cdn.glitch.global/f234805b-7a88-450e-b0cb-9559cdfbb791/hero-residencias-guembe-DxGBSTK8.webp?v=1749149243888",
      description: "Residential tower R2 detail.",
      location: {
        center: [-57.59515, -25.26718],
        zoom: 17.71,
        pitch: 63.5,
        bearing: 99.6,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "chap-12",
      title: "LAS PALMAS",
      image: "https://cdn.glitch.global/2a3ffa3c-0397-4f7e-845c-566d78d6a35b/10_722_View_04_Low_b9b5e9efa6.jpg?v=1747453080439",
      description: ".",
      location: {
        center: [-57.59627, -25.26751],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "chap-13",
      title: "BULNESIA",
      image: "https://cdn.glitch.global/2a3ffa3c-0397-4f7e-845c-566d78d6a35b/bulnesia-paraguay-estudio-ama_dezeen_2364_col_3-852x1515%20(1).webp?v=1747934634964",
      description: "R4 - 15% SOLD",
      location: {
        center: [-57.59627, -25.26751],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    // ... Remaining chapters unchanged
  ]
};
