export interface IGames {
  items: [IGame];
  start: number;
  end: number;
}

export interface IGame {
  game_id: string;
  short_label: string;
  long_label: string;
  assets: IGameAssets;
  platforms: [string];
  regions: [string];
  parent_game_id: string;
  order: number;
}

interface IGameAssets {
  cover: string;
  flag_img_icon: string;
  flag_img_s: string;
  flag_img_m: string;
  flag_img_l: string;
  featured_img_s: string;
  featured_img_m: string;
  featured_img_l: string;
  landing_page: string;
}

interface IFaction {
  faction_id: string;
  leader: string;
  avatar: string;
  roster: [IPlayer];
  substituted: false;
  name: string;
  type: string;
}

interface IPlayer {
  player_id: string;
  nickname: string;
  avatar: string;
  membership: string;
  game_player_id: string;
  game_player_name: string;
  game_skill_level: number;
  anticheat_required: boolean;
}

export interface IMatch {
  match_id: string;
  version: number;
  game: string;
  region: string;
  competition_id: string;
  competition_type: string;
  competition_name: string;
  organizer_id: string;
  teams: {
    faction2: IFaction;
    faction1: IFaction;
  };
  voting: {
    location: {
      entities: [
        {
          name: string;
          class_name: string;
          game_location_id: string;
          guid: string;
          image_lg: string;
          image_sm: string;
        }
      ];
      pick: [string];
    };
    map: {
      entities: [
        {
          image_sm: string;
          name: string;
          class_name: string;
          game_map_id: string;
          guid: string;
          image_lg: string;
        }
      ];
      pick: [string];
    };
    voted_entity_types: [string];
  };
  calculate_elo: boolean;
  configured_at: number;
  started_at: number;
  finished_at: number;
  demo_url: [string];
  chat_room_id: string;
  best_of: number;
  results: {
    winner: string;
    score: {
      faction2: number;
      faction1: number;
    };
  };
  status: string;
  faceit_url: string;
}

export interface IMatchStats {
  rounds: [
    {
      best_of: string;
      competition_id: any;
      game_id: string;
      game_mode: string;
      match_id: string;
      match_round: string;
      played: string;
      round_stats: {
        Region: string;
        Map: string;
        Rounds: string;
        Score: string;
        Winner: string;
      };
      teams: [
        {
          team_id: string;
          premade: false;
          team_stats: {
            Team: string;
            "Final Score": number;
            "Overtime score": number;
            "First Half Score": number;
            "Second Half Score": number;
            "Team Win": number;
            "Team Headshots": number;
          };
          players: [
            {
              player_id: string;
              nickname: string;
              player_stats: {
                Kills: string;
                MVPs: string;
                "Quadro Kills": string;
                "K/R Ratio": string;
                "Headshots %": string;
                Assists: string;
                Deaths: string;
                "Triple Kills": string;
                "Penta Kills": string;
                Result: string;
                Headshots: string;
                "K/D Ratio": string;
              };
            }
          ];
        }
      ];
    }
  ];
}