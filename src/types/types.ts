export type Country = {
    cca2: string;
    name: string;
    flag: string; 
    lat: number; 
    lng: number;
}

export type MasterDetailStackParams = {
    Master: undefined;
    Detail: Country;
};
