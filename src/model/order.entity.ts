import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'orders' })
export class OrderEntity extends BaseEntity {

    @Column({ type: 'varchar', length: 300 })
    order_id: string;

    @Column({ type: 'varchar', length: 300 })
    dealer_id: string;

    @Column({ type: 'varchar', length: 300 })
    manager_id: string;

    @Column({ type: 'simple-array', length: 300 })
    products_list: string[];

    @Column({ type: 'varchar', length: 300 })
    order_date: string;

    @Column({ type: 'varchar', length: 300 })
    order_status: string;

    @Column({ type: 'varchar', length: 300 })
    contract_id: string;

    @Column({ type: 'varchar', length: 300 })
    amount: string;
}