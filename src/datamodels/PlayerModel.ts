export interface Player {
    BasicInformation: BasicInformation;
}

export interface BasicInformation {
    FirstName: string;
    Lastname: string;
    KnownAs: string;
    Age: number;
    Height: number;
    Weight: number;
}

export interface Performance {
    Goals: number;
    Cards: number;
}

export interface Position {
    Name: 'forward' | 'midfield' | 'defender' | 'goalkeeper';
}