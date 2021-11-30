import { Match } from "../models/Match.model";
import { MatchPlayer } from "../models/MatchPlayer.model";
import { Player } from "../models/Player.model";

interface PlayersResponse {
    items: Player[],
    pageSize: number
    page: number
}

interface MatchesResponse {
    items: Match[],
    pageSize: number
    page: number
}

interface MatchPlayersResponse {
    items: MatchPlayer[],
    pageSize: number
    page: number
}
