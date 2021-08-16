import { Countries } from 'src/entities/Countries';
import { Repository } from 'typeorm';
export declare class CountriesService {
    private CountriesRepository;
    constructor(CountriesRepository: Repository<Countries>);
    getCountries(): Promise<Countries[]>;
    getPopularCountries(): Promise<any[]>;
    getCountry(code: string): Promise<Countries>;
    getCountryInfo(code: string, type: string): Promise<{
        content: any;
    }>;
}
