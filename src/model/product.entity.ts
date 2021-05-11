import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'products' })
export class ProductEntity extends BaseEntity {

    @Column({ type: 'varchar', length: 300 })
    product_id: string;

    @Column({ type: 'varchar', length: 300 })
    name: string;

    @Column({ type: 'varchar', length: 300 })
    cost_per_kg: string;

    @Column({ type: 'varchar', length: 300 })
    packing_weight: string;

    @Column({ type: 'varchar', length: 300 })
    packing_price: string;

    @Column({ type: 'varchar', length: 300 })
    container: string;

    @Column({ type: 'varchar', length: 300 })
    amount_in_package: string;

    @Column({ type: 'varchar', length: 300 })
    product_group: string;
}