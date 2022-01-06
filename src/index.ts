import chalk from "chalk";
import Axios, { AxiosResponse } from "axios";
import { IGames, IGame, IMatch, IMatchStats } from "./types/matchTypes";
import { IPlayer, IPlayerMatches } from "./types/playerTypes";

class FaceIT {
  version: string;
  url: string;
  authorizationToken: string;

  constructor(token: string) {
    this.version = "v4";
    this.url = `https://open.faceit.com/data/${this.version}`;
    this.authorizationToken = `Bearer ${token}`;
  }

  async getRequest(endpoint: string, params?: string) {
    const requestUrl = params ? `${this.url}/${endpoint}?${params}` : `${this.url}/${endpoint}`;
    try {
      const req = await Axios.get(requestUrl, {
        headers: {
          Authorization: this.authorizationToken,
        },
      });
      return { data: req.data, error: null };
    } catch (error) {
      return { data: null, error: error };
    }
  }

  async testKey() {
    const { data, error } = await this.getRequest("games", "limit=1");
    if (data) return true;
    else if (error) return false;
  }

  async getGames() {
    const { data, error } = await this.getRequest("games", "offset=0&limit=20");
    const _data = data as IGames;
    return { data: _data, error };
  }

  async getGame(gameId: string) {
    const { data, error } = await this.getRequest(`games/${gameId}`);
    const _data = data as IGame;
    return { data: _data, error };
  }

  async getMatch(matchId: string) {
    const { data, error } = await this.getRequest(`matches/${matchId}`);
    const _data = data as IMatch;
    return { data: _data, error };
  }

  // async getMatchPlayers(matchId: string) {
  //   const match = await this.getMatch(matchId);
  //   return match;
  //   // for (const [key, faction] of Object.entries(match.teams)) {
  //   //   console.log(chalk.magenta(`${faction.name}`));
  //   //   faction.roster.map((player) => {
  //   //     console.log("-------------------------------------------------------------");
  //   //     console.log(`${chalk.red("[NAME]")}: ${player.nickname}`);
  //   //     console.log(`${chalk.blue("[MEMBERSHIP]")}: ${player.membership}`);
  //   //     console.log(`${chalk.green("[ANTICHEAT]")}: ${player.anticheat_required}`);
  //   //     console.log(`${chalk.cyan("[LEVEL]")}: ${player.game_skill_level}`);
  //   //   });
  //   //   console.log("-------------------------------------------------------------");
  //   // }
  // }

  // async getMatchMapPick(matchId: string) {
  //   const match = await this.getMatch(matchId);
  //   return match;
  //   // match.voting.map.entities.map((map) => {
  //   //   console.log(`${chalk.red("[NAME]")}: ${map.name}`);
  //   //   console.log(`${chalk.green("[IMAGE]")}: ${map.image_lg}`);
  //   //   console.log("------------------------------------------------------------------------------------------");
  //   // });
  //   // console.log(`${chalk.blue("[MAP CHOSEN]")}: ${match.voting.map.pick}`);
  // }

  // async getMatchLocationPick(matchId: string) {
  //   const match = await this.getMatch(matchId);
  //   return match;
  //   // match.voting.location.entities.map((location) => {
  //   //   console.log(`${chalk.red("[COUNTRY]")}: ${location.name}`);
  //   //   console.log(`${chalk.red("[GUID]")}: ${location.guid}`);
  //   //   console.log(`${chalk.red("[IMAGE]")}: ${location.image_lg}`);
  //   //   console.log("------------------------------------------------------------------------------------------");
  //   // });
  //   // console.log(`${chalk.blue("[LOCATION CHOSEN]")}: ${match.voting.location.pick}`);
  // }

  async getMatchStats(matchId: string) {
    const { data, error } = await this.getRequest(`matches/${matchId}/stats`);
    const _data = data as IMatchStats;
    return { data: _data, error };
  }

  async getPlayerDetailsByUsername(playerUsername: string) {
    const { data, error } = await this.getRequest(`players`, `nickname=${playerUsername}`);
    const _data = data as IPlayer;
    return { data: _data, error };
  }

  async getPlayerDetailsByID(playerID: string) {
    const { data, error } = await this.getRequest(`players/${playerID}`);
    const _data = data as IPlayer;
    return { data: _data, error };
  }

  async getPlayerMatchHistory(playerID: string, gameID: string, offset: number = 0, limit: number = 20) {
    const { data, error } = await this.getRequest(`players/${playerID}/history`, `game=${gameID}&offset=${offset}&limit=${limit}`);
    const _data = data as IPlayerMatches;
    return { data: _data, error };
  }
}

export default FaceIT;
