import { DB_HOST, DB_PASSWORD, DB_USER } from '../config'

export default {
    HOST: DB_HOST,
    USER: DB_USER,
    PASSWORD: DB_PASSWORD,
    DB: 'game-stats',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
