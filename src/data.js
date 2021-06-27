import generalData from './components/general.json';

// with personal data
// import personaliaData from './components/personalia.json';
// const content = {...generalData, personalia: personaliaData }

// without personal data
const content = generalData

const {
  slogan,
  personalia,
  workExperience,
  education,
  languageProficiencies,
  hobbiesAndInterests,
  codingProficiencies,
  toolProficiencies,
} = content;

const vanDenAkkerEngineering = get({ company: 'Van Den Akker Engineering' });
const istDsorLab = get({
  company: 'IST Dynamical Systems and Ocean Robotics Lab',
});
const prodrive = get({ company: 'Prodrive' });

function get({ company }) {
  return workExperience.find((e) => e.company.includes(company));
}

export default {
  slogan,
  personalia,
  workExperience,
  education,
  languageProficiencies,
  hobbiesAndInterests,
  codingProficiencies,
  toolProficiencies,
  vanDenAkkerEngineering,
  istDsorLab,
  prodrive,
};
