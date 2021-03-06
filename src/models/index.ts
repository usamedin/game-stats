import { Player } from './Player.model'
import { Sequelize } from 'sequelize-typescript'
import { DB_HOST, DB_PASSWORD, DB_USER } from '../shared/config'
import mysql2 from 'mysql2'
import { Match } from './Match.model'
import { MatchPlayer } from './MatchPlayer.model'

const options: any = {
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    database: 'game-stats',
    dialect: 'mysql',
    models: [Player, Match, MatchPlayer]
}

if (options.dialect === 'mysql') {
    options.dialectModule = mysql2
}

export const sequelize = new Sequelize(options)
