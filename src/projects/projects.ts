import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    customerName: 'NAV',
    keyTechnologies: [],
    projectName: 'Effektivisering av klageprosessen',
    description:
      'Utvikling av et digitalt klage- og ankeskjema for brukere av NAV, samt et nytt digitalt saksbehandlersystem som en del av effektivisering av klageprosessen i NAV, både for brukere og for saksbehandlere.',
    from: new Date(2020, 3),
    to: new Date(2022, 2),
    website: 'https://www.nav.no/',
    logoUrl: 'https://seeklogo.com/images/N/nav-norwegian-labour-and-welfare-logo-6B5873D1FD-seeklogo.com.png',
  },
  {
    customerName: 'Elbilforeningen',
    keyTechnologies: [],
    projectName: 'Elbilvelgeren',
    description:
      'Målet med Elbilvelgeren er å hjelpe kunder og medlemmer av Norsk elbilforening med å velge elbil som passer deres behov. Den skal ikke påvirkes av kjøpte promoteringer eller andre økonomiske interesser. Den skal ha en lav terskel for bruk, og være beregnet for de som har allmenn kunnskap om elbiler.',
    from: new Date(2019, 11),
    to: new Date(2020, 1),
    website: 'https://elbilvelgeren.elbil.no/',
  },
];
