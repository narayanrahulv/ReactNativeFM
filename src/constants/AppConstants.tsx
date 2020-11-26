import { Platform } from 'react-native';

export function getPopularCupList(): string[] {
    return ["World Cup","UEFA Champions League","UEFA Europa League","Euro Championship","World Cup - Women","African Nations Championship","CONCACAF Gold Cup","CONMEBOL Sudamericana"];
}

export function getPopularCupCountriesList(): string[] {
    return ["World"];
}

export function getPopularLeagueList(): string[] {
    return ["Premier League","Primera Division","Ligue 1","Serie A","Bundesliga 1","Eredivisie","Major League Soccer"];
}

export function getPopularLeagueCountriesList(): string[] {
    return ["England","Spain","France","Italy","Germany","Netherlands","USA"];
}