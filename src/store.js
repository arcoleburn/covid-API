'use strict';

const lastGeneralUpdate = '03-03-2021';

//if you update/check ALL of the state data, please update the variable above

const stateData = [
  {
    name: 'ALABAMA',
    abbr: 'AL',
    fullPlan: true,
    url:
      'https://www.alabamapublichealth.gov/covid19vaccine/assets/adph-covid19-vaccination-allocation-plan.pdf',
    fullTimeline: true,
    phases: [
      {
        name: '1A',
        criteria: [{ occupation: ['frontline healthcare'] }],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          {
            age: 75,
          },
          {
            occupation: [
              'first responder',
              'frontline essential',
              'congregate living',
            ],
          },
          {
            living: ['congregate living'],
          },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [{ age: 65 }, { age: 16, medicalCondition: 1 }],
        current: true,
      },
      {
        name: '2',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: '05-15-2021',
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'ALASKA',
    abbr: 'AK',
    fullPlan: false,
    url:
      'http://dhss.alaska.gov/dph/Epi/id/SiteAssets/Pages/HumanCoV/COVIDvaccine_AlaskaAllocationGuidelines.pdf',
    fullTimeline: false,
    phases: [
      {
        name: '1A',
        criteria: [
          {
            occupation: [
              'LTC',
              'frontline healthcare',
              'healthcare',
              'first responder',
            ],
          },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { age: 55 },
          { age: 50, occupation: ['frontline essential'] },
          { age: 40, medicalCondition: 1 },
          {
            occupation: [
              'edu',
              'congregate living',
              'pandemic response',
            ],
          },
          {
            age: 16,
            living: [
              'unserved community',
              'multigenerational household',
            ],
          },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [{ age: 16, medicalCondition: 1 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'ARIZONA',
    abbr: 'AZ',
    fullPlan: true,
    url:
      'https://www.azdhs.gov/documents/preparedness/epidemiology-disease-control/infectious-disease-epidemiology/novel-coronavirus/vaccine/covid19-vp-infographic-eng.pdf',
    fullTimeline: true,
    phases: [
      {
        name: '1A',
        criteria: [
          {
            occupation: ['healthcare', 'EMS', 'LTC'],
          },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          {
            occupation: [
              'education',
              'first responders',
              'essential',
            ],
          },
          {
            age: 65,
          },
          {
            age: 16,
            medicalCondition: 1,
            living: ['congregate living'],
          },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [
          { age: 16, medicalCondition: 1 },
          { age: 16, living: ['congregate'] },
        ],
        current: false,
        effectiveDate: '04-15-2021',
      },
      {
        name: '2',
        criteria: [
          {
            age: 16,
          },
        ],
        current: false,
        effectiveDate: '06-15-2021',
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'ARKANSAS',
    abbr: 'AR',
    fullPlan: false,
    url:
      'https://www.healthy.arkansas.gov/programs-services/topics/covid-19-vaccination-plan',
    fullTimeline: false,
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC', 'first responders'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { age: 70 },
          { occupation: ['education', 'frontline essential'] },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [
          { age: 65 },
          { age: 16, medicalCondition: 1 },
          { occupation: ['essential'] },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'CALIFORNIA',
    abbr: 'CA',
    fullPlan: false,
    fullTimeline: true,
    url: 'https://covid19.ca.gov/vaccines/#When-can-I-get-vaccinated',
    phases: [
      {
        name: '1A',
        criteria: [
          {
            occupation: ['healthcare', 'LTC'],
          },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { age: 65 },
          {
            occupation: ['first responder', 'education', 'essential'],
          },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [{ age: 16, medicalCondition: 1 }],
        current: false,
        effectiveDate: '03-15-2021',
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'COLORADO',
    abbr: 'CO',
    fullPlan: true,
    fullTimeline: false,
    url:
      'https://covid19.colorado.gov/for-coloradans/vaccine/vaccine-for-coloradans',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['frontline healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B1',
        criteria: [
          { age: 70 },
          { occupation: ['healthcare', 'first responder'] },
        ],
        current: true,
      },
      {
        name: '1B2',
        criteria: [
          { age: 65 },
          { occupation: ['education', 'govt essential'] },
        ],
        current: true,
      },
      {
        name: '1B3',
        criteria: [
          { occupation: ['frontline essential'] },
          { age: 16, medicalCondition: 2 },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '2',
        criteria: [
          { age: 60 },
          { age: 16, medicalCondition: 1 },
          { occupation: ['govt'] },
          {
            age: 16,
            special:
              'received placebo during COVID-19 vaccine clinical trial',
          },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '3',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'CONNECTICUT',
    abbr: 'CT',
    fullPlan: true,
    fullTimeline: true,
    url: 'https://portal.ct.gov/Coronavirus/covid-19%20vaccinations',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { occupation: ['first responder', 'congregate living'] },
          { age: 65 },
          { living: ['congregate living'] },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [
          { age: 55 },
          { occupation: ['frontline essential', 'education'] },
          { age: 16, medicalCondition: 1 },
        ],
        current: true,
      },
      {
        name: '2',
        criteria: [{ age: 45 }],
        current: false,
        effectiveDate: '03-22-2021',
      },
      {
        name: '3',
        criteria: [{ age: 35 }],
        current: false,
        effectiveDate: '04-12-2021',
      },
      {
        name: '4',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: '05-03-2021',
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'DELAWARE',
    abbr: 'DE',
    fullPlan: true,
    fullTimeline: false,
    url: 'https://coronavirus.delaware.gov/vaccine/',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'first responder', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { age: 65 },
          { occupation: ['frontline essential'] },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [
          { age: 16, medicalCondition: 1 },
          { living: ['congregate living'] },
          { occupation: ['essential', 'congregate living'] },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '2',
        criteria: [{ age: 50 }],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '3',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'WASHINGTON DC',
    abbr: 'DC',
    fullPlan: true,
    fullTimeline: false,
    url: 'https://coronavirus.dc.gov/vaccinatedc',
    phases: [
      {
        name: '1A',
        criteria: [
          {
            occupation: ['frontline healthcare', 'first responders'],
          },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { age: 16, medicalCondition: 1 },
          { age: 65, living: ['congregate living'] },
        ],
        current: true,
      },
      {
        name: '2',
        criteria: [
          {
            occupation: [
              'education',
              'frontline essential',
              'essential',
            ],
          },
          { living: ['congregate living'] },
          { age: 65 },
        ],
        current: true,
      },
      {
        name: '3',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'FLORIDA',
    abbr: 'FL',
    fullPlan: false,
    fullTimeline: false,
    url:
      'https://floridahealthcovid19.gov/covid-19-vaccines-in-florida/',
    phases: [
      {
        name: 'N/A',
        criteria: [
          { living: ['LTC'] },
          { occupation: ['healthcare', 'LTC'] },
          { age: 65 },
          { age: 16, medicalCondition: 1 },
          {
            occupation: ['first responder', 'education'],
            age: 50,
          },
        ],
        current: true,
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'GEORGIA',
    abbr: 'GA',
    fullPlan: false,
    fullTimeline: false,
    url: 'https://dph.georgia.gov/covid-vaccine',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC', 'first responders'] },
          { living: ['LTC'] },
          { age: 65 },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [{ occupation: ['essential'] }],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '1C',
        criteria: [{ age: 16, medicalCondition: 1 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'HAWAII',
    abbr: 'HI',
    fullPlan: true,
    fullTimeline: true,
    url: 'https://hawaiicovid19.com/vaccine/',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { occupation: ['first responder', 'frontline essential'] },
          { age: 75 },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [
          { age: 65 },
          { age: 16, medicalCondition: 1 },
          { occupation: ['essential'] },
        ],
        current: false,
        effectiveDate: '04-15-2021',
      },
      {
        name: '2',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: '06-20-2021',
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'IDAHO',
    abbr: 'ID',
    fullPlan: true,
    fullTimeline: true,
    url: 'https://healthandwelfare.idaho.gov/covid-19-vaccination',
    phases: [
      {
        name: '1',
        criteria: [
          { age: 65 },
          {
            occupation: [
              'healthcare',
              'LTC',
              'first responder',
              'education',
            ],
          },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '2',
        criteria: [{ occupation: ['essential'] }],
        current: false,
        effectiveDate: '04-01-2021',
      },
      {
        name: '3',
        criteria: [{ age: 16, medicalCondition: 1 }],
        current: false,
        effectiveDate: '04-20-2021',
      },
      {
        name: '4',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: '05-15-2021',
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'US VIRGIN ISLANDS',
    abbr: 'USVI',
    fullPlan: true,
    fullTimeline: false,
    url: 'https://www.covid19usvi.com/vaccines',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'first responder', 'LTC'] },
          { age: 65 },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { age: 16, medicalCondition: 1 },
          {
            occupation: [
              'frontline essential',
              'essential',
              'govt essential',
            ],
          },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [{ occupation: ['govt', 'retail'] }],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '2 and 3',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'ILLINOIS',
    abbr: 'IL',
    fullPlan: true,
    fullTimeline: false,
    url: 'https://www.dph.illinois.gov/covid19/vaccination-plan',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { age: 65 },
          { occupation: ['frontline essential'] },
          { living: ['congregate living'] },
          { age: 16, medicalCondition: 1 },
        ],
        current: true,
      },
      {
        name: '2',
        criteria: { age: 16 },
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'INDIANA',
    abbr: 'IN',
    fullPlan: false,
    fullTimeline: true,
    url: 'https://www.coronavirus.in.gov/vaccine/',
    phases: [
      {
        name: '1A',
        criteria: [
          {
            occupation: [
              'healthcare',
              'LTC',
              'first responder',
              'congregate living',
              'corrections',
            ],
          },
          {
            living: ['LTC', 'congregate living'],
          },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [{ age: 50 }, { age: 16, medicalCondition: 1 }],
        current: true,
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'IOWA',
    abbr: 'IA',
    fullPlan: false,
    fullTimeline: true,
    url:
      'https://idph.iowa.gov/Emerging-Health-Issues/Novel-Coronavirus/Vaccine/Information-for-the-Public',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { age: 65 },
          {
            occupation: [
              'first responder',
              'education',
              'frontline essential',
              'govt essential',
              'corrections',
            ],
          },
          { living: ['congregate living'] },
        ],
        current: true,
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'KANASAS',
    abbr: 'KS',
    fullPlan: true,
    fullTimeline: true,
    url:
      'https://www.kansasvaccine.gov/DocumentCenter/View/120/Vaccine-Phase-Chart-PDF-',
    phases: [
      {
        name: '1',
        criteria: [
          {
            occupation: [
              'healthcare',
              'LTC',
              'critical pandemic response',
            ],
          },
        ],
        current: true,
      },
      {
        name: '2',
        criteria: [
          { age: 65 },
          { living: ['congregate living'] },
          {
            occupation: ['congregate living', 'frontline essential'],
          },
        ],
        current: true,
      },
      {
        name: '3',
        criteria: [
          { age: 16, medicalCondition: 2 },
          { occupation: ['essential'] },
        ],
        current: true,
      },
      {
        name: '4',
        criteria: [{ age: 16, medicalCondition: 1 }],
        current: false,
        effectiveDate: '05-01-2021',
      },
      {
        name: '5',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: '06-01-2021',
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'KENTUCKY',
    abbr: 'KY',
    fullPlan: true,
    fullTimeline: false,
    url: 'https://govstatus.egov.com/ky-covid-vaccine',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { age: 70 },
          { occupation: ['first responder', 'education'] },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [
          { age: 60 },
          { age: 16, medicalCondition: 1 },
          { occupation: ['frontline essential', 'essential'] },
        ],
        current: true,
      },
      {
        name: '2',
        criteria: [{ age: 40 }],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '3',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-03-2021',
  },
  {
    name: 'LOUISIANA',
    abbr: 'LA',
    fullPlan: false,
    fullTimeline: false,
    url: 'https://ldh.la.gov/covidvaccine/',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['frontline healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B1',
        criteria: [
          { age: 65 },
          {
            occupation: [
              'healthcare',
              'first responder',
              'education',
            ],
          },
          { age: 55, medicalCondition: 1 },
          { special: ['pregnant'] },
        ],
        current: true,
      },
      {
        name: '1B2',
        criteria: [
          {
            occupation: [
              'frontline essential',
              'essential',
              'higher ed',
            ],
          },
        ],
        current: true,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-04-2021',
  },
  {
    name: 'MAINE',
    abbr: 'ME',
    fullPlan: true,
    fullTimeline: true,
    url: 'https://www.maine.gov/covid19/vaccines',
    phases: [
      {
        name: '1A',
        criteria: [
          {
            occupation: [
              'frontline healthcare',
              'LTC',
              'first responder',
            ],
          },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B1',
        criteria: [
          { age: 70 },
          { age: 16, medicalCondition: 1 },
          { occupation: ['frontline essential'] },
        ],
        current: true,
      },
      {
        name: '1B2',
        criteria: [{ age: 60 }],
        current: true,
      },
      {
        name: '1B3',
        criteria: [{ age: 50 }],
        current: false,
        effectiveDate: '04-01-2021',
      },
      {
        name: '1C1',
        criteria: [{ age: 40 }, { occupation: ['essential'] }],
        current: false,
        effectiveDate: '05-01-2021',
      },
      {
        name: '1C2',
        criteria: [{ age: 30 }],
        current: false,
        effectiveDate: '06-01-2021',
      },
      {
        name: '2',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: '07-01-2021',
      },
    ],
    lastUpdate: '03-04-2021',
  },
  {
    name: 'MARYLAND',
    abbr: 'MD',
    fullPlan: true,
    fullTimeline: false,
    url: 'https://covidlink.maryland.gov/content/vaccine/',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC', 'first responder'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { age: 75 },
          {
            occupation: [
              'congregate living',
              'education',
              'govt essential',
            ],
          },
          { special: ['developmental disability'] },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [
          { age: 65 },
          { occupation: ['frontline essential'] },
        ],
        current: true,
      },
      {
        name: '2',
        criteria: [
          { age: 16, medicalCondition: 1 },
          { occupation: ['essential'] },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '3',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-04-2021',
  },
  {
    name: 'MASSACHUSETTS',
    abbr: 'MA',
    fullPlan: true,
    fullTimeline: true,
    url:
      'https://www.mass.gov/info-details/massachusetts-covid-19-vaccination-phases',
    phases: [
      {
        name: '1',
        criteria: [
          { occupation: ['first responder', 'healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '2 Group 1',
        criteria: [{ age: 75 }],
        current: true,
      },
      {
        name: '2 Group 2',
        criteria: [
          { age: 65 },
          { age: 16, medicalCondition: 2 },
          { occupation: ['congregate living'] },
          { living: ['congregate living'] },
        ],
        current: true,
      },
      {
        name: '2 Group 3',
        criteria: [
          {
            occupation: [
              'education',
              'frontline essential',
              'essential',
            ],
          },
        ],
        current: false,
        effectiveDate: '03-15-2021',
      },
      {
        name: '2 Group 4',
        criteria: [{ age: 16, medicalCondition: 1 }],
        current: false,
        effectiveDate: '04-01-2021',
      },
      {
        name: '3',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: '04-15-2021',
      },
    ],
    lastUpdate: '03-04-2021',
  },
  {
    name: 'MICHIGAN',
    abbr: 'MI',
    fullPlan: true,
    fullTimeline: true,
    url:
      'https://www.michigan.gov/documents/coronavirus/MI_COVID-19_Vaccination_Prioritization_Guidance_710349_7.pdf',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B1',
        criteria: [
          { age: 75 },
          {
            occupation: [
              'first responder',
              'education',
              'corrections',
            ],
          },
        ],
        current: true,
      },
      {
        name: '1B2',
        criteria: [{ occupation: ['frontline essential'] }],
        current: true,
      },
      {
        name: '1C1',
        criteria: [{ age: 65 }],
        current: true,
      },
      {
        name: '1C2',
        criteria: [
          { age: 16, medicalCondition: 1 },
          { occupation: ['essential'] },
        ],
        current: false,
        effectiveDate: '05-01-2021',
      },
      {
        name: '2',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: '07-01-2021',
      },
    ],
    lastUpdate: '03-04-2021',
  },
  {
    name: 'MINNESOTA',
    abbr: 'MN',
    fullPlan: true,
    fullTimeline: false,
    url:
      'https://www.health.state.mn.us/diseases/coronavirus/vaccine/plan.html',
    phases: [
      {
        name: '1A',
        criteria: [
          {
            occupation: [
              'healthcare',
              'LTC',
              'first responder',
              'pandemic response',
            ],
          },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B1',
        criteria: [{ age: 65 }, { occupation: ['education'] }],
        current: true,
      },
      {
        name: '1B2',
        criteria: [
          { age: 16, special: ['rare/ high risk condition'] },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '1B3',
        criteria: [
          { age: 45, medicalCondition: 1 },
          { age: 16, medicalCondition: 2 },
          { age: 50, living: ['multigenerational household'] },
          { occupation: ['frontline essential'] },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '1B4',
        criteria: [{ age: 16, medicalCondition: 1 }, { age: 50 }],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '1C',
        criteria: [{ occupation: ['essential'] }],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '2',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-04-2021',
  },
  {
    name: 'MISSISSIPPI',
    abbr: 'MS',
    fullPlan: false,
    fullTimeline: false,
    url: 'https://msdh.ms.gov/msdhsite/_static/14,22816,420,976.html',
    phases: [
      {
        name: 'N/A',
        criteria: [
          { age: 50 },
          { age: 16, medicalCondition: 1 },
          {
            occupation: [
              'first responder',
              'healthcare',
              'LTC',
              'education',
            ],
          },
          { living: ['LTC'] },
        ],
      },
    ],
    lastUpdate: '03-04-2021',
  },
  {
    name: 'MISSOURI',
    abbr: 'MO',
    fullPlan: true,
    fullTimeline: false,
    url: 'https://covidvaccine.mo.gov/',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B1',
        criteria: [{ occupation: ['first responder'] }],
        current: true,
      },
      {
        name: '1B2',
        criteria: [{ age: 65 }, { age: 16, medicalCondition: 1 }],
        current: true,
      },
      {
        name: '1B3',
        criteria: [{ occupation: ['frontline essential'] }],
        current: false,

        effectiveDate: 'TBD',
      },
      {
        name: '2',
        criteria: [
          { occupation: ['essential', 'govt', 'higher ed'] },
          { special: ['disproportionately affected populations'] },
          { living: ['homeless'] },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '3',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-04-2021',
  },
  {
    name: 'MONTANA',
    abbr: 'MT',
    fullPlan: true,
    fullTimeline: true,
    url:
      'https://dphhs.mt.gov/Portals/85/Documents/Coronavirus/COVID-19VaccineAllocationPlan.pdf',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { age: 75 },
          { living: ['congregate living'] },
          {
            occupation: ['congregate living', 'frontline essential'],
          },
          { special: ['high risk populations'] },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [
          { age: 65 },
          { age: 16, medicalCondition: 1 },
          { occupation: ['essential'] },
        ],
        current: false,
        effectiveDate: '03-15-2021',
      },
      {
        name: '2',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: '07-01-2021',
      },
    ],
    lastUpdate: '03-04-2021',
  },
  {
    name: 'NEBRASKA',
    abbr: 'NE',
    fullPlan: true,
    fullTimeline: true,
    url:
      'https://dhhs.ne.gov/Pages/COVID-19-Vaccine-Information.aspx',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { age: 65 },
          { occupation: ['frontline essential', 'essential'] },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [
          { occupation: ['congregate living'] },
          { living: ['congregate living'] },
        ],
        current: false,
        effectiveDate: '03-15-2021',
      },
      {
        name: '2A',
        criteria: [{ age: 50 }],
        current: false,
        effectiveDate: '04-01-2021',
      },
      {
        name: '2B',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: '05-01-2021',
      },
    ],
    lastUpdate: '03-04-2021',
  },
  {
    name: 'NEVADA',
    abbr: 'NV',
    fullPlan: true,
    fullTimeline: false,
    url:
      'https://www.immunizenevada.org/county-specific-covid-19-vaccine-plan',
    phases: [
      {
        name: '1',
        criteria: [
          {
            occupation: ['healthcare', 'LTC', 'frontline essential'],
          },
          { age: 65 },
          { age: 16, medicalCondition: 1 },
        ],
        current: true,
      },
      {
        name: '2',
        criteria: [{ occupation: ['essential'] }],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '3',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-04-2021',
  },
  {
    name: 'NEW HAMPSHIRE',
    abbr: 'NH',
    fullPlan: true,
    fullTimeline: true,
    url:
      'dhhs.nh.gov/dphs/cdcs/covid19/documents/covid19-vaccine-allocation-plan-summary.pdf',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['first responder', 'healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { age: 65 },
          { age: 16, medicalCondition: 2 },
          { occupation: ['congregate living'] },
          { living: ['congregate living'] },
        ],
        current: true,
      },
      {
        name: '2A',
        criteria: [{ occupation: ['education'] }],
        current: true,
      },
      {
        name: '2B',
        criteria: [{ age: 50 }],
        current: false,
        effectiveDate: '04-01-2021',
      },
      {
        name: '3A',
        criteria: [{ age: 16, medicalCondition: 1 }],
        current: false,
        effectiveDate: '05-01-2021',
      },
      {
        name: '3B',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: '06-01-2021',
      },
    ],
    lastUpdate: '03-04-2021',
  },
  {
    name: 'NEW JERSEY',
    abbr: 'NJ',
    fullPlan: true,
    fullTimeline: false,
    url:
      'https://covid19.nj.gov/faqs/nj-information/slowing-the-spread/who-is-eligible-for-vaccination-in-new-jersey-who-is-included-in-the-vaccination-phases',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { occupation: ['first responder'] },
          { age: 65 },
          { age: 16, medicalCondition: 1 },
        ],
        current: true,
      },
      {
        name: '2',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'NORTH CAROLINA',
    abbr: 'NC',
    fullPlan: true,
    fullTimeline: false,
    url: 'https://covid19.ncdhhs.gov/vaccines',
    phases: [
      {
        name: '1',
        criteria: [
          { occupation: ['healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '2',
        criteria: [{ age: 65 }],
        current: true,
      },
      {
        name: '3',
        criteria: [{ occupation: ['frontline essential'] }],
        current: true,
      },
      {
        name: '4',
        criteria: [{ age: 16, medicalCondition: 1 }],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '5',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'NORTH DAKOTA',
    abbr: 'ND',
    fullPlan: false,
    fullTimeline: false,
    url: 'https://www.health.nd.gov/covid-19-vaccine-priority-groups',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC', 'first responder'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { age: 75 },
          { age: 65, medicalCondition: 1 },
          { age: 16, medicalCondition: 2 },
          { occupation: ['education', 'congregate living'] },
          { living: ['congregate living'] },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [
          { occupation: ['frontline essential', 'essential'] },
          { age: 16, medicalCondition: 1 },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'NEW MEXICO',
    abbr: 'NM',
    fullPlan: true,
    fullTimeline: false,
    url: 'https://cv.nmhealth.org/covid-vaccine/',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [{ age: 75 }, { age: 16, medicalCondition: 1 }],
        current: true,
      },
      {
        name: '1C',
        criteria: [
          { age: 60 },
          { occupation: ['frontline essential', 'essential'] },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '2',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'NEW YORK',
    abbr: 'NY',
    fullPlan: true,
    fullTimeline: false,
    url:
      'https://covid19vaccine.health.ny.gov/phased-distribution-vaccine',
    phases: [
      {
        name: '1A and 1B',
        criteria: [
          { age: 65 },
          { age: 16, medicalCondition: 1 },
          {
            occupation: [
              'healthcare',
              'LTC',
              'first responder',
              'education',
              'frontline essential',
              'essential',
              'congregate living',
            ],
          },
          { living: ['LTC', 'congregate living'] },
        ],
        current: true,
      },
      {
        name: '2',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'OHIO',
    abbr: 'OH',
    fullPlan: false,
    fullTimeline: true,
    url:
      'https://coronavirus.ohio.gov/wps/portal/gov/covid-19/covid-19-vaccination-program',
    phases: [
      {
        name: '1A',
        criteria: [
          {
            occupation: [
              'healthcare',
              'LTC',
              'first responder',
              'congregate living',
            ],
          },
          { living: ['LTC', 'congregate living'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { age: 65 },
          { age: 16, medicalCondition: 1 },
          { occupation: ['education'] },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [
          { occupation: ['fronline essential', 'essential'] },
        ],
        current: true,
      },
      {
        name: '2',
        criteria: [{ age: 60 }],
        current: true,
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'OKLAHOMA',
    abbr: 'OK',
    fullPlan: true,
    fullTimeline: false,
    url: 'https://oklahoma.gov/covid19/vaccine-information.html',
    phases: [
      {
        name: '1',
        criteria: [
          { occupation: ['frontline healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '2',
        criteria: [
          {
            occupation: [
              'first responder',
              'healthcare',
              'education',
              'congregate living',
            ],
          },
          { age: 65 },
          { age: 16, medicalCondition: 1 },
          { living: ['congregate living'] },
        ],
        current: true,
      },
      {
        name: '3',
        criteria: [
          {
            occupation: [
              'higher ed',
              'frontline essential',
              'essential',
            ],
          },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '4',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'OREGON',
    abbr: 'OR',
    fullPlan: true,
    fullTimeline: true,
    url: 'https://covidvaccine.oregon.gov/',
    phases: [
      {
        name: '1A',
        criteria: [
          {
            occupation: [
              'healthcare',
              'LTC',
              'first responder',
              'congregate living',
            ],
          },
          { living: ['LTC', 'congregate living'] },
        ],
        current: true,
      },
      {
        name: '1B Groups 1-5',
        criteria: [{ age: 65 }, { occupation: ['education'] }],
        current: true,
      },
      {
        name: '1B Group 6',
        criteria: [
          { age: 45, medicalCondition: 1 },
          { occupation: ['frontline essential'] },
        ],
        current: false,
        effectiveDate: '03-29-2021',
      },
      {
        name: '1B Group 7',
        criteria: [
          { occupation: ['essential'] },
          { age: 16, medicalCondition: 1 },
          { living: ['multigenerational household'] },
        ],
        current: false,
        effectiveDate: '05-01-2021',
      },
      {
        name: '2 Group 1',
        criteria: [{ age: 45 }],
        current: false,
        effectiveDate: '06-01-2021',
      },
      {
        name: '2 Group 2',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: '07-01-2021',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'PENNSYLVANIA',
    abbr: 'PA',
    fullPlan: true,
    fullTimeline: false,
    url:
      'https://www.health.pa.gov/topics/disease/coronavirus/Vaccine/Pages/Vaccine.aspx',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC', 'first responder'] },
          { living: ['LTC'] },
          { age: 65 },
          { age: 16, medicalCondition: 1 },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          {
            occupation: [
              'congregate living',
              'frontline essential',
              'education',
            ],
          },
          { living: ['congregate living'] },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '1C',
        criteria: [
          {
            occupation: ['essential'],
          },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '2',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'PUERTO RICO',
    abbr: 'PR',
    fullPlan: true,
    fullTimeline: false,
    url:
      'http://www.salud.gov.pr/PublishingImages/Pages/coronavirus/vacuna%20fases%20web.png',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          {
            occupation: [
              'first responder',
              'frontline essential',
              'education',
            ],
          },
          { age: 65, medicalCondition: 1 },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [
          { age: 16, medicalCondition: 1 },
          {
            occupation: [
              'congregate living',
              'essential',
              'higher ed',
            ],
          },
          { living: ['congregate living'] },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '2',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'RHODE ISLAND',
    abbr: 'RI',
    fullPlan: true,
    fullTimeline: true,
    url: 'https://covid.ri.gov/vaccination',
    phases: [
      {
        name: '1',
        criteria: [
          {
            occupation: [
              'healthcare',
              'LTC',
              'first responder',
              'congregate living',
            ],
          },
          { living: ['LTC', 'congregate living'] },
        ],
        current: true,
      },
      {
        name: '2',
        criteria: [{ age: 75 }],
        current: true,
      },
      {
        name: '3',
        criteria: [{ age: 65 }],
        current: true,
      },
      {
        name: '4',
        criteria: [{ age: 16, medicalCondition: 1 }, { age: 60 }],
        current: false,
        effectiveDate: '03-15-2021',
      },
      {
        name: '5',
        criteria: [{ age: 50 }],
        current: false,
        effectiveDate: '04-15-2021',
      },
      {
        name: '6',
        criteria: [{ age: 40 }],
        current: false,
        effectiveDate: '05-15-2021',
      },
      {
        name: '7',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: '06-15-2021',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'SOUTH CAROLINA',
    abbr: 'SC',
    fullPlan: true,
    fullTimeline: true,
    url: 'https://scdhec.gov/covid19/covid-19-vaccine',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC'] },
          { age: 65 },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [{ occupation: ['frontline essential'] }],
        current: true,
      },
      {
        name: '1C',
        criteria: [
          {
            age: 16,
            medicalCondition: 1,
          },
          { occupation: ['essential'] },
        ],
        current: false,
        effectiveDate: '04-08-2021',
      },
      {
        name: '2',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: '05-03-21',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'SOUTH DAKOTA',
    abbr: 'SD',
    fullPlan: true,
    fullTimeline: true,
    url:
      'https://doh.sd.gov/documents/COVID19/Vaccine/COVIDVaccineAvailability_Distribution.pdf',
    phases: [
      {
        name: '1A',
        criteria: [{ occupation: ['frontline healthcare', 'LTC'] }],
        current: true,
      },
      {
        name: '1B',
        criteria: [{ living: ['LTC'] }],
        current: true,
      },
      {
        name: '1C',
        criteria: [{ occupation: ['first responder', 'healthcare'] }],
        current: true,
      },
      {
        name: '1D',
        criteria: [
          { occupation: ['congregate living', 'education'] },
          { living: ['congregate living'] },
          { age: 16, medicalCondition: 1 },
          { age: 65 },
        ],
        current: true,
      },
      {
        name: '1E',
        criteria: [
          { occupation: ['frontline essential', 'essential'] },
        ],
        current: false,
        effectiveDate: '04-15-2021',
      },
      {
        name: '2',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: '05-01-2021',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'TENNESSEE',
    abbr: 'TN',
    fullPlan: true,
    fullTimeline: true,
    url: 'https://covid19.tn.gov/covid-19-vaccines/vaccine-phases/',
    phases: [
      {
        name: '1A1',
        criteria: [
          {
            occupation: [
              'frontline healthcare',
              'LTC',
              'first responder',
            ],
          },
          { living: ['LTC'] },
          { age: 75 },
        ],
        current: true,
      },
      {
        name: '1A1',
        criteria: [{ occupation: ['healthcare'] }, { age: '70' }],
        current: true,
      },
      {
        name: '1B',
        criteria: [{ occupation: ['education'] }, { age: 65 }],
        current: true,
      },
      {
        name: '1C',
        criteria: [{ age: 16, medicalCondition: 1 }, { age: 55 }],
        current: true,
      },
      {
        name: '2A',
        criteria: [
          { occupation: ['frontline essential'] },
          { age: 45 },
        ],
        current: false,
        effectiveDate: '05-01-2021',
      },
      {
        name: '2B',
        criteria: [{ occupation: ['essential'] }, { age: 45 }],
        current: false,
        effectiveDate: '07-01-2021',
      },
      {
        name: '3',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'TEXAS',
    abbr: 'TX',
    fullPlan: false,
    fullTimeline: true,
    url:
      'https://www.dshs.state.tx.us/coronavirus/immunize/vaccine.aspx',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [{ age: 65 }, { age: 16, medicalCondition: 1 }],
        current: true,
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'UTAH',
    abbr: 'UT',
    fullPlan: true,
    fullTimeline: true,
    url:
      'https://coronavirus-download.utah.gov/Health/Vaccine_Timeline.pdf',
    phases: [
      {
        name: '1',
        criteria: [
          {
            occupation: [
              'healthcare',
              'education',
              'first responder',
              'LTC',
            ],
          },
          { age: 65 },
          { age: 16, medicalCondition: 1 },
        ],
        current: true,
      },
      {
        name: '2',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: '07-01-2021',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'VERMONT',
    abbr: 'VT',
    fullPlan: false,
    fullTimeline: true,
    url:
      'https://www.healthvermont.gov/covid-19/vaccine/about-covid-19-vaccines-vermont#eligiblenow',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'first responder', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [{ occupation: ['education'] }],
        current: false,
        effectiveDate: '03-08-2021',
      },
      {
        name: '2-4',
        criteria: [{ age: 65 }],
        current: true,
      },
      {
        name: '5A',
        criteria: [{ age: 55, medicalCondition: 1 }],
        current: false,
        effectiveDate: '03-08-2021',
      },
      {
        name: '5B',
        criteria: [{ age: 16, medicalCondition: 1 }],
        current: false,
        effectiveDate: '03-15-2021',
      },
      {
        name: '6',
        criteria: [{ age: 60 }],
        current: false,
        effectiveDate: '04-01-2021',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'VIRGINIA',
    abbr: 'VA',
    fullPlan: false,
    fullTimeline: false,
    url: 'https://www.vdh.virginia.gov/covid-19-vaccine/',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          {
            occupation: ['frontline essential', 'congregate living'],
          },
          { living: ['congregate living'] },
          { age: 65 },
          { age: 16, medicalCondition: 1 },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [{ occupation: ['essential'] }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'WASHINGTON',
    abbr: 'WA',
    fullPlan: false,
    fullTimeline: true,
    url:
      'https://www.doh.wa.gov/Emergencies/COVID19/vaccine#:~:text=COVID%2D19%20Vaccine&text=The%20vaccine%20is%20available%20to,live%20in%20a%20multigenerational%20household',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'first responder', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B1',
        criteria: [
          { occupation: ['education'] },
          { age: 65 },
          { age: 50, living: ['multigenerational household'] },
        ],
        current: true,
      },
      {
        name: '1B2',
        criteria: [{ occupation: ['frontline essential'] }],
        current: false,
        effectiveDate: '03-22-2021',
      },
      {
        name: '1B3',
        criteria: [{ age: 16, medicalCondition: 2 }],
        current: false,
        effectiveDate: '04-12-2021',
      },
      {
        name: '1B4',
        criteria: [
          { occupation: ['congregate living'] },
          { living: ['congregate living'] },
        ],
        current: false,
        effectiveDate: '04-26-2021',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'WEST VIRGINIA',
    abbr: 'WV',
    fullPlan: true,
    fullTimeline: false,
    url: 'https://dhhr.wv.gov/COVID-19/Pages/Vaccine.aspx#timeline',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['frontline healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { occupation: ['frontline essential', 'first responder'] },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [{ age: 50 }, { occupation: ['healthcare'] }],
        current: true,
      },
      {
        name: '1D',
        criteria: [
          { occupation: ['frontline essential', 'education'] },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '2A',
        criteria: [{ age: 16, medicalCondition: 1 }, { age: 50 }],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '2B',
        criteria: [{ occupation: ['essential'] }],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '2C',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'WISCONSIN',
    abbr: 'WI',
    fullPlan: false,
    fullTimeline: true,
    url:
      'https://www.dhs.wisconsin.gov/covid-19/vaccine-about.htm#:~:text=Starting%20January%2025%2C%20adults%20ages,week%20from%20the%20federal%20government',
    phases: [
      {
        name: 'N/A',
        criteria: [
          {
            occupation: [
              'fronline healthcare',
              'healthcare',
              'LTC',
              'first responder',
              'education',
              'frontline essential',
              'congregate living',
            ],
          },
          { living: ['LTC', 'congregate living'] },
          { age: 65 },
        ],
        current: true,
      },
    ],
    lastUpdate: '03-05-2021',
  },
  {
    name: 'WYOMING',
    abbr: 'WY',
    fullPlan: true,
    fullTimeline: false,
    url:
      'https://health.wyo.gov/wp-content/uploads/2021/02/WDH_Phase-1-COVID-19-Vaccination-Priorities_2.19.21.pdf',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['healthcare', 'LTC', 'first responder'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { age: 65 },
          { age: 16, medicalCondition: 1 },
          { occupation: ['frontline essential'] },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [
          { occupation: ['congregate living', 'essential'] },
          { living: ['congregate living'] },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '2',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-05-2021',
  },
];
