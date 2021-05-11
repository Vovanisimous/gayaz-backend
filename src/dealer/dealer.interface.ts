import { IUser } from "../user/user.interface";

export interface IDealer {
  name: string;
  town: string;
  address: string;
  phone_number: string;
  sale: string;
  personal_discount: string;
  user: IUser;
}

// name: string;
//
// @Column({ type: 'varchar', length: 300 })
// town: string;
//
// @Column({ type: 'varchar', length: 300 })
// address: string;
//
// @Column({ type: 'varchar', length: 300 })
// phone_number: string;
//
// @Column({ type: 'varchar', length: 300 })
// sale: string;
//
// @Column({ type: 'varchar', length: 300 })
// personal_discount: string;
//
// @OneToOne(() => UserEntity)
// @JoinColumn()
// user: UserEntity;