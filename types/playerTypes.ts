export interface IPlayer {
  player_id: string;
  nickname: string;
  avatar: string;
  country: string;
  cover_image: string;
  platforms: {
    steam: string;
  };
  games: {
    overwatch_EU: {
      region: string;
      game_player_id: string;
      skill_level: number;
      faceit_elo: number;
      game_player_name: string;
      skill_level_label: string;
      regions: {};
      game_profile_id: string;
    };
    valorant: {
      region: string;
      game_player_id: string;
      skill_level: number;
      faceit_elo: number;
      game_player_name: string;
      skill_level_label: string;
      regions: {};
      game_profile_id: string;
    };
    csco: {
      region: string;
      game_player_id: string;
      skill_level: number;
      faceit_elo: number;
      game_player_name: string;
      skill_level_label: string;
      regions: {};
      game_profile_id: string;
    };
    csgo: {
      region: string;
      game_player_id: string;
      skill_level: number;
      faceit_elo: number;
      game_player_name: string;
      skill_level_label: string;
      regions: {};
      game_profile_id: string;
    };
    krunker: {
      region: string;
      game_player_id: string;
      skill_level: number;
      faceit_elo: number;
      game_player_name: string;
      skill_level_label: string;
      regions: {};
      game_profile_id: string;
    };
  };
  settings: {
    language: string;
  };
  friends_ids: [string];
  new_steam_id: string;
  steam_id_64: string;
  steam_nickname: string;
  memberships: [string];
  faceit_url: string;
  membership_type: string;
  cover_featured_image: string;
  infractions: {};
}

export interface IPlayerMatches {
  items: [IPlayerMatch];
  start: number;
  end: number;
  from: number;
  to: number;
}

interface IPlayerMatch {
  match_id: string;
  game_id: string;
  region: string;
  match_type: string;
  game_mode: string;
  max_players: number;
  teams_size: number;
  teams: [IFaction];
  playing_players: [string];
  competition_id: string;
  competition_name: string;
  competition_type: string;
  organizer_id: string;
  status: string;
  started_at: number;
  finished_at: number;
  results: {
    winner: string;
    score: {
      faction2: number;
      faction1: number;
    };
  };
  faceit_url: string;
}

interface IFactionPlayer {
  player_id: string;
  nickname: string;
  avatar: string;
  skill_level: number;
  game_player_id: string;
  game_player_name: string;
  faceit_url: string;
}

interface IFaction {
  team_id: string;
  nickname: string;
  avatar: string;
  type: string;
  players: [IFactionPlayer];
}
