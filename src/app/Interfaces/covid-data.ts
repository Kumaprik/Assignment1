export interface CovidData {
    prname: string;
    totalcases: number;
    numdeaths: number;
    numtotal_last7: number;
    numdeaths_last7: number;
    numtotal_last14: number;
    numdeaths_last14: number;
    avgcases_last7: number;
  }
  
  export interface OntarioData {
    totalcases: number;
    resolved: number;
    deaths: number;
    hospitalized: number;
    icu: number;
    ventilator: number;
  }
  export interface DataRecord {
    _id: number;
    report_date: string;
    previous_day_total_doses_administered: number;
    previous_day_at_least_one: number;
    previous_day_fully_vaccinated: number;
    previous_day_3doses: string | null;
    total_doses_administered: number;
    total_individuals_at_least_one: string;
    total_individuals_partially_vaccinated: string;
    total_doses_in_fully_vaccinated_individuals: string;
    total_individuals_fully_vaccinated: string;
    total_individuals_3doses: string | null;
  }
  export interface SubsetDataRecord {
    report_date: string;
    previous_day_total_doses_administered: number;
    total_doses_administered: number;
  }
  