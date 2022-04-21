export interface Movie {
    id: string;
    title: string;
    poster: string;
    release: string;
    boxOffice: number;
    actors?: string[];
    creationDate: string;
}
