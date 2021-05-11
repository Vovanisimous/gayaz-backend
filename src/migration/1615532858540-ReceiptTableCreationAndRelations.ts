import {MigrationInterface, QueryRunner} from "typeorm";

export class ReceiptTableCreationAndRelations1615532858540 implements MigrationInterface {
    name = 'ReceiptTableCreationAndRelations1615532858540'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "receipts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "amount" integer NOT NULL, "orderId" uuid, "productId" uuid, CONSTRAINT "PK_5e8182d7c29e023da6e1ff33bfe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "amount"`);
        await queryRunner.query(`COMMENT ON COLUMN "contracts"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "contracts"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "roles"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "roles"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "dealers"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "dealers"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "managers"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "managers"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "products"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "products"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "cost_per_kg"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "cost_per_kg" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "amount_in_package"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "amount_in_package" integer NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "receipts" ADD CONSTRAINT "FK_d02da16abce2f669423eefd5b36" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "receipts" ADD CONSTRAINT "FK_603190a6e2316064f57540cc7c9" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "receipts" DROP CONSTRAINT "FK_603190a6e2316064f57540cc7c9"`);
        await queryRunner.query(`ALTER TABLE "receipts" DROP CONSTRAINT "FK_d02da16abce2f669423eefd5b36"`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "amount_in_package"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "amount_in_package" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "cost_per_kg"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "cost_per_kg" character varying(300) NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "products"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "products"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "managers"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "managers"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "dealers"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "dealers"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "roles"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "roles"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "contracts"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "contracts"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "amount" character varying(300) NOT NULL`);
        await queryRunner.query(`DROP TABLE "receipts"`);
    }

}
