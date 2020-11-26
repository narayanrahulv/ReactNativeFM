import { LeagueModel } from '../datamodels/LeagueModel';
import { array, nominalTypeHack } from 'prop-types';

export class LeagueService{
    public async getAllLeagues(): Promise<LeagueModel[]>{
        let response: Response;
        response = await fetch("https://api-football-v1.p.rapidapi.com/v2/leagues", {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key':'477d85230fmshe9a81f2d1924227p10f49djsn1088ff69e2c4'
            }
        });

        let retrievedLeagues = await response.json();
        let allLeagues: LeagueModel[];
        let returnedLeagues: LeagueModel[];

        if (retrievedLeagues["api"]["leagues"] !== undefined && retrievedLeagues["api"]["leagues"] !== null){
            allLeagues = retrievedLeagues["api"]["leagues"];
            returnedLeagues = allLeagues.map(function(elem){
                return{
                    league_id: elem.league_id,
                    name: elem.name,
                    type: elem.type,
                    country: elem.country,
                    season: elem.season,
                    logo: elem.logo
                }
            });
        }

        return returnedLeagues;
    }
}