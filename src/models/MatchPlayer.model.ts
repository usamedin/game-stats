import { Table, Column, Model, ForeignKey, PrimaryKey } from 'sequelize-typescript'
import { Match } from './Match.model'
import { Player } from './Player.model'

@Table
export class MatchPlayer extends Model {
    @ForeignKey(() => Player)
    playerId: string

    @ForeignKey(() => Match)
    matchId: string
}
