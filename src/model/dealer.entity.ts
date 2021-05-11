import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'dealers' })
export class DealerEntity extends BaseEntity {

    @Column({ type: 'varchar', length: 300 })
    dealer_id: string;

    @Column({ type: 'varchar', length: 300 })
    user_id: string;

    @Column({ type: 'varchar', length: 300 })
    name: string;

    @Column({ type: 'varchar', length: 300 })
    town: string;

    @Column({ type: 'varchar', length: 300 })
    address: string;

    @Column({ type: 'varchar', length: 300 })
    phone_number: string;

    @Column({ type: 'varchar', length: 300 })
    sale: string;

    @Column({ type: 'varchar', length: 300 })
    personal_discount: string;
}