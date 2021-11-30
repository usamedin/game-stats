import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript'

@Table
export class Match extends Model {
    @PrimaryKey
    @Column
    id: string

    @Column
    startDate: Date

    // Duration in seconds
    @Column
    duration: number
}
