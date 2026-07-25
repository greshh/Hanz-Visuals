import { micdUpProjects } from "./college-sport-micd-up-volleyball/projects";
import { seniorPrems2026Projects } from "./college-sport-senior-premier-basketball-2026/projects";

export interface Project {
  name?: string;
  key?: string;
  round?: number;
  home?: string;
  away?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  tags?: string[];
  link?: string;
  file?: string;
} 

const formatDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

export const calculateDates = (projects: Project[]) => {
  if (!projects || projects.length === 0) {
    return { startDate: null as string | null, endDate: null as string | null };
  }
  
  let minDate: string;
  let maxDate: string;

  if (projects[0].startDate) {
    minDate = projects[0].startDate;
    maxDate = projects[0].endDate;

    projects.forEach(p => {
      if (p.startDate < minDate) minDate = p.startDate;
      if (p.endDate > maxDate) maxDate = p.endDate;
    });
  } else if (projects[0].date) {
    minDate = projects[0].date;
    maxDate = projects[0].date;

    projects.forEach(p => {
      if (p.date < minDate) minDate = p.date;
      if (p.date > maxDate) maxDate = p.date;
    });
  }

  return { startDate: formatDate(new Date(minDate)), endDate: formatDate(new Date(maxDate)) };
}

export const projects: Project[] = [
  {
    "name": "Volleyball Club Nats",
    "key": "volleyball-club-nats-25",
    "startDate": "2025-10-01",
    "endDate": "2025-10-04",
    "tags": ["photos", "volleyball"],
    "link": "https://photos.app.goo.gl/19xGJSzqcibqQQZb6"
  },
  {
    "name": "UNIM8S Semester 2 2025",
    "key": "unim8s-semester-2-2025",
    "startDate": "2025-10-13",
    "endDate": "2025-10-17",
    "tags": ["photos", "basketball", "volleyball", "other"],
    "link": "/projects/unim8s-semester-2-2025"
  },
  {
    "name": "ABS Jnr Invitational",
    "key": "abs-jnr-invitational-25",
    "startDate": "2025-11-04",
    "endDate": "2025-11-05",
    "tags": ["photos", "basketball"],
    "link": "https://photos.app.goo.gl/7Zk4L7zh2xEwvyZD7"
  },
  {
    "name": "ABS Superhoops 3x3",
    "key": "abs-superhoops-3x3",
    "startDate": "2025-11-15",
    "tags": ["photos", "basketball"],
    "link": "https://photos.app.goo.gl/ehdcL9GNXbguT8iC6"
  },
  {
    "name": "Cook Islands U17 Exhibition Games",
    "key": "cook-islands-u17-exhibition-games",
    "startDate": "2025-12-03",
    "endDate": "2025-12-04",
    "tags": ["photos", "basketball"],
    "link": "https://photos.app.goo.gl/4Gc6voBe88ikn99v9"
  },
  {
    "name": "Spikefest",
    "key": "spikefest-25",
    "startDate": "2025-11-22",
    "endDate": "2025-11-23",
    "tags": ["photos", "volleyball"],
    "link": "https://photos.app.goo.gl/Axs6DSNCr3djNvD88"
  },
  {
    "name": "U15s IPC",
    "key": "u15s-ipc-25",
    "startDate": "2025-12-13",
    "endDate": "2025-12-15",
    "tags": ["photos", "volleyball"],
    "link": "https://photos.app.goo.gl/uX2vLgrZU5QzUJcp8"
  },
  {
    "name": "Prems Volleyball 2026",
    "key": "prems-volleyball-26",
    "startDate": "2026-02-20",
    "endDate": "2026-03-06",
    "tags": ["photos", "volleyball"],
    "link": "https://photos.app.goo.gl/3Zqc3EKpQU5i8gor6"
  },
  {
    "name": "Auckland Champs",
    "key": "volleyball-auckland-champs-26",
    "startDate": "2026-03-11",
    "endDate": "2026-03-13",
    "tags": ["photos", "volleyball"],
    "link": "https://photos.app.goo.gl/Y9FdguWWQfCR4xsKA"
  },
  {
    "name": "Camp David U16",
    "key": "camp-david-u16",
    "startDate": "2026-03-04",
    "tags": ["graphics", "basketball"],
    "file": "camp-david-u16.png"
  },
  {
    "name": "Tate Mixtape",
    "key": "tate-mixtape",
    "startDate": "2026-03-06",
    "tags": ["videos", "volleyball"],
    "link": "https://drive.google.com/file/d/1bW6QCvVR-m6OrCqIqnpjNChdQBFucU9X/view?usp=drive_link"
  },
  {
    "name": "EJ Mixtape",
    "key": "ej-mixtape",
    "startDate": "2026-01-26",
    "tags": ["videos", "basketball"],
    "link": "https://drive.google.com/file/d/1AqKSnogfCzC2nEYg0GEYekasFP9yk04K/view?usp=drive_link"
  },
  {
    "name": "Selwyn Mixtape",
    "key": "selwyn-mixtape",
    "startDate": "2026-03-13",
    "tags": ["videos", "volleyball"],
    "link": "https://drive.google.com/file/d/18eMH_t4GXwZG-gkN6WiRaCOfzPgFwOWX/view?usp=drive_link"
  },
  {
    "name": "SSNI Satellite 2026",
    "key": "ssni-satellite-26",
    "startDate": "2026-03-26",
    "endDate": "2026-03-27",
    "tags": ["photos", "volleyball"],
    "link": "https://photos.app.goo.gl/Z1Ep3xjLMCcXUgSy8"
  },
  {
    "name": "Roller Blacks Camps",
    "key": "roller-blacks",
    "startDate": "2026-03-22",
    "endDate": "2026-05-02",
    "tags": ["photos", "videos", "basketball"],
    "link": "/projects/roller-blacks"
  },
  {
    "name": "Micd Up",
    "key": "college-sport-micd-up-volleyball",
    "startDate": calculateDates(micdUpProjects).startDate,
    "endDate": calculateDates(micdUpProjects).endDate,
    "tags": ["videos", "volleyball"],
    "link": "/projects/college-sport-micd-up-volleyball"
  },
  {
    "name": "Senior Premier Szn 2026",
    "key": "college-sport-senior-premier-basketball-2026",
    "startDate": calculateDates(seniorPrems2026Projects).startDate,
    "endDate": calculateDates(seniorPrems2026Projects).endDate,
    "tags": ["photos", "graphics", "basketball"],
    "link": "/projects/college-sport-senior-premier-basketball-2026"
  },
  {
    "name": "UTSNZ 3x3 National Champs",
    "key": "utsnz-3x3-basketball-tertiary-national-championships-2026",
    "startDate": "2026-05-16",
    "endDate": "2026-05-17",
    "tags": ["photos", "basketball"],
    "link": "/projects/utsnz-3x3-basketball-tertiary-national-championships-2026"
  },
  {
    "name": "UNIM8S Semester 1 2026",
    "key": "unim8s-semester-1-2026",
    "startDate": "2026-05-20",
    "endDate": "2026-05-28",
    "tags": ["photos", "basketball", "volleyball", "other"],
    "link": "/projects/unim8s-semester-1-2026"
  },
  {
    "name": "Gilas Pilipinas vs Franklin Bulls",
    "key": "gilas-pilipinas-vs-franklin-bulls",
    "startDate": "2026-06-30",
    "tags": ["photos", "basketball"],
    "link": "https://photos.app.goo.gl/sXdLJ8B9Mn2v9LV68"
  },
  {
    "name": "U18s Nationals",
    "key": "18sNationals-471",
    "startDate": "2026-07-08",
    "endDate": "2026-07-11",
    "tags": ["photos", "basketball"],
    "link": "https://photos.app.goo.gl/8KjXGDimUFm8rVRE7"
  },
]
