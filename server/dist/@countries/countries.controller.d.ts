import { CountriesService } from './countries.service';
export declare class CountriesController {
    private readonly CountriesService;
    constructor(CountriesService: CountriesService);
    getCountries(): Promise<import("../entities/Countries").Countries[]>;
    getPopularCountries(): Promise<any[]>;
    getCountryInfo(code: string, type: string): Promise<{
        content: any;
    }>;
    getCountry(code: string): Promise<import("../entities/Countries").Countries>;
}
