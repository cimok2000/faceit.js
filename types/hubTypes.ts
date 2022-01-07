import { IMatch } from "./matchTypes";

export interface IHub {
  hub_id: string;
  name: string;
  avatar: string;
  cover_image: string;
  background_image: string;
  game_id: string;
  region: string;
  description: string;
  chat_room_id: string;
  organizer_id: string;
  rule_id: string;
  players_joined: number;
  min_skill_level: number;
  max_skill_level: number;
  join_permission: string;
  faceit_url: string;
}

export interface IMatches {
  items: [IMatch];
  start: number;
  end: number;
}

export interface IMembers {
  items: [
    {
      user_id: string;
      nickname: string;
      avatar: string;
      roles: [string];
      faceit_url: string;
    }
  ];
  start: 0;
  end: 20;
}

export interface IRoles {
  role_id: string;
  name: string;
  ranking: number;
  color: string;
  visible_on_chat: boolean;
}

export interface IRules {
  rule_id: string;
  game: string;
  organizer: string;
  name: string;
  body: string;
}

export interface IStats {
  game_id: string;
  players: [
    {
      player_id: string;
      nickname: string;
      stats: {
        player_id: string;
        nickname: string;
        stats: {
          "Penta Kills": string;
          "Average Quadro Kills": string;
          "Average Kills": string;
          "Average Assists": string;
          "K/D Ratio": string;
          "Average Deaths": string;
          "Win Rate %": string;
          MVPs: string;
          "Average Headshots %": string;
          Assists: string;
          Kills: string;
          "Headshots per Match": string;
          Matches: string;
          "Average K/R Ratio": string;
          "K/R Ratio": string;
          Rounds: string;
          "Average Triple Kills": string;
          "Average K/D Ratio": string;
          "Average MVPs": string;
          Deaths: string;
          Wins: number;
          "Quadro Kills": string;
          "Average Penta Kills": string;
          "Triple Kills": string;
          "Total Headshots %": string;
          Headshots: string;
        };
      };
    }
  ];
}
