import {MigrationInterface, QueryRunner} from "typeorm";

export class dbInit1614596947044 implements MigrationInterface {
    name = 'dbInit1614596947044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contracts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "contract_id" character varying(300) NOT NULL, "contract_link" character varying(300) NOT NULL, CONSTRAINT "PK_2c7b8f3a7b1acdd49497d83d0fb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dealers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "dealer_id" character varying(300) NOT NULL, "user_id" character varying(300) NOT NULL, "name" character varying(300) NOT NULL, "town" character varying(300) NOT NULL, "address" character varying(300) NOT NULL, "phone_number" character varying(300) NOT NULL, "sale" character varying(300) NOT NULL, "personal_discount" character varying(300) NOT NULL, CONSTRAINT "PK_4d0d8be9eac6e1822ad16d21194" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "managers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "manager_id" character varying(300) NOT NULL, "name" character varying(300) NOT NULL, "user_id" character varying(300) NOT NULL, "phone_number" character varying(300) NOT NULL, "position" character varying(300) NOT NULL, CONSTRAINT "PK_e70b8cc457276d9b4d82342a8ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "order_id" character varying(300) NOT NULL, "dealer_id" character varying(300) NOT NULL, "manager_id" character varying(300) NOT NULL, "products_list" text NOT NULL, "order_date" character varying(300) NOT NULL, "order_status" character varying(300) NOT NULL, "contract_id" character varying(300) NOT NULL, "amount" character varying(300) NOT NULL, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "product_id" character varying(300) NOT NULL, "name" character varying(300) NOT NULL, "cost_per_kg" character varying(300) NOT NULL, "packing_weight" character varying(300) NOT NULL, "packing_price" character varying(300) NOT NULL, "container" character varying(300) NOT NULL, "amount_in_package" character varying(300) NOT NULL, "product_group" character varying(300) NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "role_id" character varying(300) NOT NULL, "name" character varying(300) NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "user_id" character varying(300) NOT NULL, "login" character varying(300) NOT NULL, "password" character varying(300) NOT NULL, "role_id" character varying(300) NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "managers"`);
        await queryRunner.query(`DROP TABLE "dealers"`);
        await queryRunner.query(`DROP TABLE "contracts"`);
    }

}
