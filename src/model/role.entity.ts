import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'roles' })
export class RolesEntity extends BaseEntity {

    @Column({ type: 'varchar', length: 300 })
    role_id: string;

    @Column({ type: 'varchar', length: 300 })
    name: string;
}