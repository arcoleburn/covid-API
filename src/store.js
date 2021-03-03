'use strict';

const lastGeneralUpdate = '03-03-21'

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
        criteria: [{ occupation: 'frontline healthcare' }],
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
            living: 'congregate living',
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
        effectiveDate: '05-15-21',
      },
    ],
    lastUpdate: '03-03-21'
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
          { living: 'LTC' },
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          { age: 55 },
          { age: 50, occupation: 'frontline essential' },
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
    lastUpdate: '03-03-21'
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
          { living: 'LTC' },
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
            living: 'congregate',
          },
        ],
        current: true,
      },
      {
        name: '1C',
        criteria: [
          { age: 16, medicalCondition: 1 },
          { age: 16, living: 'congregate' },
        ],
        current: false,
        effectiveDate: '04-15-21',
      },
      {
        name: '2',
        criteria: [
          {
            age: 16,
          },
        ],
        current: false,
        effectiveDate: '06-15-21',
      },
    ],
    lastUpdate: '03-03-21'
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
          { living: 'LTC' },
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
          { occupation: 'essential' },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-03-21'
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
          { living: 'LTC' },
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
        effectiveDate: '03-15-21',
      },
    ],
    lastUpdate: '03-03-21'
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
          { living: 'LTC' },
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
          { occupation: 'frontline essential' },
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
          { occupation: 'govt' },
          {
            age: 16,
            special:
              'received placebo during COVID-19 vaccine clinical trial',
          },
        ],
        current: false,
        effectiveDate: 'TBD'
      },
      {
        name: '3',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD'
      },
    ],
    lastUpdate: '03-03-21'
  },
  {
    name: 'CONNECTICUT',
    abbr: 'CT',
    fullPlan: true,
    fullTimeline: true,
    url: 'https://portal.ct.gov/Coronavirus/covid-19%20vaccinations',
    phases:[
      {
        name: '1A',
        criteria:[
          {occupation: ['healthcare', 'LTC']},
          {living: 'LTC'}
        ],
        current: true,
      },
      {
        name: '1B',
        criteria:[
        {occupation: ['first responder', 'congregate living']}
        {age: 65},
        {living: 'congregate living'}
        ],
        current: true,
      },
      {
        name: '1C',
        criteria:[
          {age: 55},
          {occupation: ['frontline essential', 'education']},
          {age: 16, medicalCondition: 1}
        ],
        current: true
      },
      {
        name: '2',
        criteria:[
          {age: 45}
        ],
        current: false,
        effectiveDate: '03-22-21'
      },
      {
        name: '3',
        criteria: [
          {age: 35}
        ],
        current: false,
        effectiveDate: '04-12-21'
      },
      {
        name: '4',
        criteria: [
          {age: 16}
        ],
        current: false,
        effectiveDate: '05-03-21'
      }
    ],
    lastUpdate: '03-03-21'
  },
  {
    name: 'DELAWARE',
    abbr: 'DE',
    fullPlan: true,
    fullTimeline: false,
    url: 'https://coronavirus.delaware.gov/vaccine/',
    phases:[
      {
        name: '1A',
        criteria: [
          {occupation: ['healthcare', 'first responder', 'LTC']},
          {living: 'LTC'}
        ],
        current: true,
      },
      {
        name: '1B',
        criteria:[
          {age: 65},
          {occupation: 'frontline essential'}
        ],
        current: true
      },
      {
        name: '1C',
        criteria: [
          {age: 16, medicalCondition: 1},
          {living: 'congregate living'},
          {occupation: ['essential', 'congregate living']}
        ],
        current: false,
        effectiveDate: 'TBD'
      },
      {
        name: '2',
        criteria: [{age: 50}],
        current: false,
        effectiveDate: 'TBD'
      },
      {
        name: '3',
        criteria:[
          {age: 16}
        ],
        current: false,
        effectiveDate: 'TBD'
      }
    ],
    lastUpdate: '03-03-21'
  },
  {
    name:'WASHINGTON DC',
    abbr: 'DC',
    fullPlan: true,
    fullTimeline: false,
    url: 'https://coronavirus.dc.gov/vaccinatedc',
    phases: [
      {
        name: '1A',
        criteria: [
          {occupation: ['frontline healthcare', 'first responders']}
        ],
        current: true
      },
      {
        name: '1B',
        criteria: [
          {age: 16,
          medicalCondition: 1},
          {age: 65,
          living: 'congregate'}
        ],
        current: true,
      },
      {
        name: '2',
        criteria: [
          {occupation: ['education', 'frontline essential', 'essential']},
          {living: 'congregate living'},
          {age: 65}
        ],
        current: true
      },
      {
        name: '3',
        criteria: [
          {age: 16}
        ],
        current: false,
        effectiveDate: 'TBD'
      }
    ],
    lastUpdate: '03-03-21'
  },
  {
    name: 'FLORIDA',
    abbr: 'FL',
    fullPlan: false,
    fullTimeline: false,
    url: 'https://floridahealthcovid19.gov/covid-19-vaccines-in-florida/',
    phases:[
      {name:'N/A',
      criteria: [
        {living: 'LTC'},
        {occupation: ['healthcare', 'LTC']},
        {age: 65},
        {age: 16,
        medicalCondition: 1},
        {
          occupation: ['first responder', 'education'],
          age: 50
        }
      ],
      current: true
    } 
    ],
    lastUpdate: '03-03-21'
  },
  {
    name: 'GEORGIA',
    abbr: 'GA',
    fullPlan: false,
    fullTimeline: false,
    url: 'https://dph.georgia.gov/covid-vaccine',
    phases:[
      {
        name: '1A',
        criteria: [
          {occupation: ['healthcare', 'LTC', 'first responders']},
          {living: 'LTC'},
          {age: 65},
        ],
        current: true,
      },
      {
        name: '1B',
        criteria: [
          {occupation: 'essential'}
        ],
        current: false,
        effectiveDate: 'TBD'
      },
      {
        name: '1C',
        criteria: [{age: 16, medicalCondition: 1}],
        current: false,
        effectiveDate: 'TBD'
      }
    ],
    lastUpdate: '03-03-21'
  },
  {
    name: 'HAWAII',
    abbr: 'HI',
    fullPlan: true,
    fullTimeline: true,
    url: 'https://hawaiicovid19.com/vaccine/',
    phases:[
      {
        name: '1A',
        criteria: [
          {occupation: ['healthcare', 'LTC']},
          {living: 'LTC'}
        ],
        current: true
      },
      {
        name: '1B',
        criteria: [
          {occupation: ['first responder', 'frontline essential']},
          {age: 75}
        ],
        current: true
      },
      {
        name: '1C',
        criteria:[
          {age: 65},
          {age: 16, medicalCondition: 1},
          {occupation: 'essential'}
        ],
        current: false,
        effectiveDate: '04-15-21'
      },
      {
        name: '2',
        criteria: [{age: 16}],
        current: false,
        effectiveDate: '06-20-21'
      }
    ],
    lastUpdate: '03-03-21'
  },
  {
    name: 'IDAHO',
    abbr: 'ID',
    fullPlan: true,
    fullTimeline: true,
    url: 'https://healthandwelfare.idaho.gov/covid-19-vaccination',
    phases:[
      {
        name: '1',
        criteria:[
          {age: 65},
          {occupation: ['healthcare', 'LTC', 'first responder', 'education']},
          {living: 'LTC'},
        ],
        current: true,
      },
      {
        name: '2',
        criteria:[
          {occupation: ['essential']}
        ],
        current: false,
        effectiveDate: '04-01-21'
      },
      {
        name: '3',
        criteria:[
          {age: 16, medicalCondition: 1}
        ],
        current: false,
        effectiveDate: '04-20-21'
      },
      {
        name:'4',
        criteria:[
          {age: 16}
        ],
        current: false,
        effectiveDate: '05-15-21'
      }
    ],
    lastUpdate: '03-03-21'
  },
  {
    name: 'US VIRGIN ISLANDS',
    abbr: 'USVI',
    fullPlan: true,
    fullTimeline: false,
    url: 'https://www.covid19usvi.com/vaccines',
    phases:[
      {
        name: '1A',
        criteria: [
          {occupation: ['healthcare', 'first responder', 'LTC']},
          {age: 65},
          {living: 'LTC'}
        ],
        current: true
      },
      {
        name: '1B',
        criteria: [
          {age: 16, medicalCondition: 1},
          {occupation: ['frontline essential','essential','govt essential']},
        ],
        current: true
      },
      {
        name: '1C',
        criteria: [
          {occupation: ['govt', 'retail']}
        ],
        current: false,
        effectiveDate: 'TBD'
      },
      {
        name: '2 and 3',
        criteria:[
          {age: 16}
        ],
        current: false,
        effectiveDate: 'TBD'
      }
    ],
    lastUpdate: '03-03-21'
  },
  {
    name: 'ILLINOIS',
    abbr: 'IL',
    fullPlan: true,
    fullTimeline: false,
    url: 'https://www.dph.illinois.gov/covid19/vaccination-plan',
    phases:[
      {
        name: '1A',
        criteria: [
          {occupation: ['healthcare', 'LTC']},
          {living: 'LTC'}
        ],
        current: true,
      },
      {
        name: '1B',
        criteria:[
          {age: 65},
          {occupation: 'frontline essential'},
          {living: 'congregate living'},
          {age: 16, medicalCondition: 1},
        ],
        current: true,
      },
      {
        name: '2',
        criteria: {age: 16},
        current: false,
        effectiveDate: 'TBD'
      }
    ],
    lastUpdate: '03-03-21'
  },
  {
    name: 'INDIANA',
    abbr: 'IN',
    fullPlan: false,
    fullTimeline: true,
    url: 'https://www.coronavirus.in.gov/vaccine/',
    phases:[
      {
        name: '1A',
        criteria: [
          {occupation: ['healthcare', 'LTC', 'first responder', 'congregate living', 'corrections']},
          {
            living: ['LTC', 'congregate living']
          }
        ],
        current: true
      },
      {
        name:'1B',
        criteria: [
          {age: 50},
          {age: 16, medicalCondition: 1}
        ],
        current: true
      }
    ],
    lastUpdate: '03-03-21'
  },
  {
    name: 'IOWA',
    abbr: 'IA',
    fullPlan: false,
    fullTimeline: true,
    url: 'https://idph.iowa.gov/Emerging-Health-Issues/Novel-Coronavirus/Vaccine/Information-for-the-Public',
    phases: [
      {
        name: '1A',
        criteria: [
          {occupation: 'healthcare', 'LTC'},
          {living: 'LTC'}
        ],
        current: true,
      },
      {
        name: '1B',
        criteria:[
          {age: 65},
          {occupation: ['first responder', 'education', 'frontline essential', 'govt essential', 'corrections']},
          {living: 'congregate living'}
        ],
        current: true
      }
    ],
    lastUpdate: '03-03-21'
  },
  {
    name: 'KANASAS',
    abbr: 'KS',
    fullPlan: true,
    fullTimeline: true,
    url: 'https://www.kansasvaccine.gov/DocumentCenter/View/120/Vaccine-Phase-Chart-PDF-',
    phases:[
      {
        name: '1',
        criteria: [
          {occupation: ['healthcare', 'LTC', 'critical pandemic response']}
        ],
        current: true
      },
      {
        name: '2',
        criteria: [
          {age: 65},
          {living: 'congregate living'},
          {occupation: ['congregate living', 'frontline essential']}
        ],
        current: true
      },
      {
        name: '3',
        criteria: [
          {age: 16, medicalCondition: 2},
          {occupation: 'essential'}
        ],
        current: true
      },
      {
        name: '4',
        criteria: [
          {age: 16, medicalCondition: 1},
        ],
        current: false,
        effectiveDate: '05-01-21'
      },
      {
        name: '5',
        criteria: [
          {age: 16}
        ],
        current: false,
        effectiveDate: '06-01-21'
      }
    ],
    lastUpdate: '03-03-21'

  },
  {
    name: 'KENTUCKY',
    abbr:'KY',
    fullPlan: true,
    fullTimeline: false,
    url: 'https://govstatus.egov.com/ky-covid-vaccine',
    phases:[
      {
        name: '1A',
        criteria: [
          {occupation: 'healthcare', 'LTC'},
          {living: 'LTC'}
        ],
        current: true,
      },
      {
        name: '1B',
        criteria:[
          {age: 70},
          {occupation: ['first responder', 'education']}
        ],
        current: true
      },
      {
        name: '1C',
        criteria: [
          {age: 60},
          {age: 16, medicalCondition: 1},
          {occupation: ['frontline essential', 'essential']}
        ],
        current: true
      },
      {
        name: '2',
        criteria: [
          {age: 40}
        ],
        current: false,
        effectiveDate: 'TBD'
      },
      {
        name: '3',
        criteria: [
          {age: 16}
        ],
        current: false,
        effectiveDate: 'TBD'
      }
    ],
    lastUpdate: '03-03-21'
  }

];
