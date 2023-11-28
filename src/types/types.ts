export type Country = {
    cca2: string;
    name: string;
    flag: string; 
    lat: number; 
    lng: number;
    coat: string;
    region: string;
}

export type MasterDetailStackParams = {
    Master: undefined;
    Detail: Country;
};
