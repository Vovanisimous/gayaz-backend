import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'managers' })
export class ManagerEntity extends BaseEntity {

    @Column({ type: 'varchar', length: 300 })
    manager_id: string;

    @Column({ type: 'varchar', length: 300 })
    name: string;

    @Column({ type: 'varchar', length: 300 })
    user_id: string;

    @Column({ type: 'varchar', length: 300 })
    phone_number: string;

    @Column({ type: 'varchar', length: 300 })
    position: string;
}