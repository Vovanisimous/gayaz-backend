import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity {

    @Column({ type: 'varchar', length: 300 })
    user_id: string;

    @Column({ type: 'varchar', length: 300 })
    login: string;

    @Column({ type: 'varchar', length: 300 })
    password: string;

    @Column({ type: 'varchar', length: 300 })
    role_id: string;
}