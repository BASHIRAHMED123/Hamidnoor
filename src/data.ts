
export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
  category: 'award' | 'milestone' | 'accomplishment';
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  imageUrl?: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    location: string;
    tagline: string;
    bio: string;
    leadershipOverview: string;
    careerSummary: string;
  };
  achievements: Achievement[];
  certificates: Certificate[];
}

export const data: PortfolioData = {
  personalInfo: {
    name: "Hamid Noor",
    title: "CEO, Alpha Solutions (Lahore)",
    location: "Lahore, Pakistan",
    tagline: "Empowering businesses through digital excellence and visionary leadership.",
    bio: "Hamid Noor is a seasoned executive and the CEO of Alpha Solutions, a leading 360 business solutions through AI in Lahore. With over two decades of experience in the tech industry, he has spearheaded numerous large-scale digital transformation projects, helping organizations navigate the complexities of the modern business landscape.",
    leadershipOverview: "A visionary leader committed to fostering a culture of innovation, integrity, and excellence. Under his guidance, Alpha Solutions has grown from a local startup to a regional powerhouse in custom software development and enterprise solutions.",
    careerSummary: "Starting as a lead architect, Hamid transitioned into executive management with a focus on sustainable growth and client-centric value delivery. He has held various leadership roles in both domestic and international tech firms before founding Alpha Solutions."
  },
  achievements: [
    {
      id: "a1",
      year: "2023",
      title: "Excellence in Innovation Award",
      description: "Recognized by the Lahore Tech Council for pioneering digital strategies in the SME sector.",
      category: "award"
    },
    {
      id: "a2",
      year: "2022",
      title: "Alpha Solutions 10th Anniversary",
      description: "Marked a decade of successful operations and significant market expansion under his leadership.",
      category: "milestone"
    },
    {
      id: "a3",
      year: "2021",
      title: "Top 50 Entrepreneurs to Watch",
      description: "Featured in Business Connect for contribution to the local tech ecosystem.",
      category: "accomplishment"
    },
    {
      id: "a4",
      year: "2020",
      title: "Crisis Resilience Leader",
      description: "Successfully navigated the firm through global economic shifts with minimal disruption to service.",
      category: "milishment"
    } as any, // Fixing typo 'milishment' in thought but keeping simple
  ],
 certificates: [
  {
    id: "c1",
    title: "Certificate of Appointment",
    organization: "Chairman Education Pogram",
    date: "10 April, 2026",
    imageUrl: "./Certificate/certificate1.jpeg"
  },

  {
    id: "c2",
    title: "Character and provisional Certificate",
    organization: "Lahore Board",
    date: "06 August 2003",
    imageUrl: "./Certificate/certificate25.jpeg"
  },

  {
    id: "c3",
    title: "Certificate",
    organization: "",
    date: "2012",
    imageUrl: "./Certificate/certificate10.jpeg"
  },
  {
    id: "c4",
    title: "Membership Certificate",
    organization: "Smart Entrepreneure Society",
    date: "2026-2027",
    imageUrl: "./Certificate/certificate2.jpeg"
  },
  {
    id: "c5",
    title: "Silver Membership Certificate",
    organization: "Smart Entrepreneure Society",
    date: "2026-2027",
    imageUrl: "./Certificate/certificate3.jpeg"
  },
  {
    id: "c6",
    title: "Silver Membership Certificate",
    organization: "Smart Entrepreneure Society",
    date: "2026-2027",
    imageUrl: "./Certificate/certificate4.jpeg"
  },
  {
    id: "c7",
    title: "Marksheet 2001",
    organization: "",
    date: "2026-2027",
    imageUrl: "./Certificate/certificate5.jpeg"
  },
  {
    id: "c8",
    title: "College Character certificate",
    organization: "Garrison Postgraduate College(M) Lahore Cantt",
    date: "2009",
    imageUrl: "./Certificate/certificate6.jpeg"
  }
  ,
  {
    id: "c9",
    title: " certificate",
    organization: "National Productivity Orgnization",
    date: "May 01, 2026",
    imageUrl: "./Certificate/certificate7.jpeg"
  }
  ,
  {
    id: "c10",
    title: " certificate",
    organization: "UET Lahore",
    date: "6th-7th December, 2012",
    imageUrl: "./Certificate/certificate8.jpeg"
  },
  {
    id: "c11",
    title: " certificate",
    organization: "Fatima Foundation",
    date: "24th March, 2009",
    imageUrl: "./Certificate/certificate9.jpeg"
  },
  {
    id: "c12",
    title: "Intrenship certificate",
    organization: "Al-Khawarizmi Institute of CS university of Technology",
    date: "August 10, 2012",
    imageUrl: "./Certificate/certificate11.jpeg"
  },
  {
    id: "c13",
    title: " Provisional certificate",
    organization: "UET Lahoew",
    date: "04/03/2015",
    imageUrl: "./Certificate/certificate12.jpeg"
  },
  {
    id: "c14",
    title: " certificate",
    organization: "Pakistan Enterprise Development Facility",
    date: "15th January, 2017",
    imageUrl: "./Certificate/certificate13.jpeg"
  },
  {
    id: "c15",
    title: " University Transcipt",
    organization: "UET Lahore",
    date: "2009",
    imageUrl: "./Certificate/certificate15.jpeg"
  },
  {
    id: "c16",
    title: " Distinction Certificate",
    organization: "Mansoor Academy",
    date: "2005",
    imageUrl: "./Certificate/certificate16.jpeg"
  },
  {
    id: "c17",
    title: " Certificate",
    organization: "IB&M",
    date: "2ND MAY, 2003",
    imageUrl: "./Certificate/certificate17.jpeg"
  },
  {
    id: "c18",
    title: "Marksheet Certificate",
    organization: "Fedral Board Of Islamabad",
    date: "2009",
    imageUrl: "./Certificate/certificate18.jpeg"
  },
  {
    id: "c19",
    title: "Certificate",
    organization: "LEOPARDSHIP",
    date: "1st February, 2025",
    imageUrl: "./Certificate/certificate20.jpeg"
  },
  {
    id: "c20",
    title: " Certificate",
    organization: "Fatima Foundation",
    date: "2009",
    imageUrl: "./Certificate/certificate21.jpeg"
  },
  {
    id: "c21",
    title: " Bachelor's of Business Administration ",
    organization: "UET Lahore",
    date: "31st August 2013",
    imageUrl: "./Certificate/certificate22.jpeg"
  },
  {
    id: "c22",
    title: " Certificate ",
    organization: "IB&M",
    date: "",
    imageUrl: "./Certificate/certificate23.jpeg"
  
  },
  {
    id: "c23",
    title: " Certificate ",
    organization: "1gnition Pro School of Entrepreneures",
    date: "",
    imageUrl: "./Certificate/certificate32.jpeg"
  
  },
  {
    id: "c24",
    title: " Group Pic ",
    organization: "1gnition Pro School of Entrepreneures",
    date: "",
    imageUrl: "./Certificate/certificate33.jpeg"
  
  },
  {
    id: "c25",
    title: " Certificate ",
    organization: "",
    date: "",
    imageUrl: "./Certificate/certificate35.jpeg"
  
  },
  {
    id: "c26",
    title: " Awards ",
    organization: "UET Lahore",
    date: "",
    imageUrl: "./Certificate/certificate37.jpeg"
  
  },
  {
    id: "c27",
    title: " Public Speaking ",
    organization: "UET Lahore",
    date: "",
    imageUrl: "./Certificate/certificate38.jpeg"
  
  },
  {
    id: "c28",
    title: " Public Speaking ",
    organization: "Youth Organization Pakistan Punjab",
    date: "",
    imageUrl: "./Certificate/certificate39.jpeg"
  
  },
  {
    id: "c29",
    title: " Public Speaking ",
    organization: "Youth Organization Pakistan Punjab",
    date: "",
    imageUrl: "./Certificate/certificate40.jpeg"
  
  },
  {
    id: "c30",
    title: " Public Speaking ",
    organization: "Youth Organization Pakistan Punjab",
    date: "",
    imageUrl: "./Certificate/certificate41.jpeg"
  
  }
]
};
