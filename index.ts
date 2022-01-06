import Axios from "axios";
import chalk from "chalk";
import { IGames, IGame, IMatch, IMatchStats } from "./types/matchTypes";
import { IPlayer, IPlayerMatches } from "./types/playerTypes";

class Logger {
  constructor() {}

  request(method: string, url: string) {
    console.log(`${chalk.red("[REQUEST]")} ${chalk.blue(`${method}`)} ${chalk.green(url)}`);
  }
}

class FaceIT {
  version: string;
  url: string;
  authorizationToken: string;
  useLogger: boolean;
  logger: Logger;

  constructor(token: string, logger = false) {
    this.version = "v4";
    this.url = `https://open.faceit.com/data/${this.version}`;
    this.authorizationToken = `Bearer ${token}`;
    this.useLogger = logger;
    this.logger = new Logger();
  }

  parseError(error: any) {
    return {
      code: error.response.status,
      text: error.response.statusText,
    };
  }

  async getRequest(endpoint: string, params?: string) {
    const requestUrl = params ? `${this.url}/${endpoint}?${params}` : `${this.url}/${endpoint}`;
    if (this.useLogger) this.logger.request("GET", requestUrl);
    try {
      const req = await Axios.get(requestUrl, {
        headers: {
          Authorization: this.authorizationToken,
        },
      });
      return { data: req.data, error: null };
    } catch (error) {
      return { data: null, error: this.parseError(error) };
    }
  }

  async testKey() {
    const { data, error } = await this.getRequest("games", "limit=1");
    if (data) return { data: true, error };
    else return { data: false, error };
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
