interface Work {
  date: string;
  company: string;
  job: string;
  content: string;
  buttonLink: ButtonLink[];
}

interface ButtonLink {
  link: string;
  text: string;
}

export const Data: Work[] = [
  {
    date: "NOV 2021 - NOV 2022",
    company: "Lullaby Cake Studio",
    job: "Partner & Digital Marketer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    buttonLink: [
      {
        link: "https://lullabycakestudio.com/",
        text: "Detail",
      },
      {
        link: "https://www.behance.net/gallery/155438069/LULLABY-CAKE-STUDIO-Brand-Identity",
        text: "Behance",
      },
    ],
  },
  {
    date: "SEP 2019 – APR 2020",
    company: "ako.ai",
    job: "Front End Developer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",

    buttonLink: [
      {
        link: "/posts/ako",
        text: "More",
      },
    ],
  },
  {
    date: "FEB 2019 – AUG 2019",
    company: "Aimy Plus",
    job: "Front End Developer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    buttonLink: [
      {
        link: "/posts/aimy",
        text: "More",
      },
    ],
  },
];
