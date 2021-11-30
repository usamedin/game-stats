import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript'

@Table
export class Player extends Model {
    @PrimaryKey
    @Column
    id: string

    @Column
    name: string
}
