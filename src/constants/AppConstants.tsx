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

export const icons = {
    bundesliga1: require('../assets/icons/bundesliga-1.png'),
    championsleague: require('../assets/icons/champions-league.png'),
    eredivisie: require('../assets/icons/eredivisie.png'),
    ligue1: require('../assets/icons/ligue-1.png'),
    majorleaguesoccer: require('../assets/icons/major-league-soccer.png'),
    premierleague: require('../assets/icons/premier-league.png'),
    primeradivision: require('../assets/icons/primera-division.png'),
    seriea: require('../assets/icons/serie-a.png'),
    uefaleague: require('../assets/icons/uefa-league.png'),
    womensworldcup: require('../assets/icons/womens-world-cup.png'),
    worldcup: require('../assets/icons/world-cup.png'),
}