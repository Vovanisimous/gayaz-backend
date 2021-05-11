import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'contracts' })
export class ContractEntity extends BaseEntity {

    @Column({ type: 'varchar', length: 300 })
    contract_id: string;

    @Column({ type: 'varchar', length: 300 })
    contract_link: string;
}