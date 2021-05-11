import {MigrationInterface, QueryRunner} from "typeorm";

export class DealerTableRemoveSaleTable1614933723452 implements MigrationInterface {
    name = 'DealerTableRemoveSaleTable1614933723452'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dealers" DROP COLUMN "sale"`);
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
        await queryRunner.query(`COMMENT ON COLUMN "orders"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."updatedAt" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "orders"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."createdAt" IS NULL`);
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
        await queryRunner.query(`ALTER TABLE "dealers" ADD "sale" character varying(300) NOT NULL`);
    }

}
