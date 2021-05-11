import {MigrationInterface, QueryRunner} from "typeorm";

export class test1615806738686 implements MigrationInterface {
    name = 'test1615806738686'

    public async up(queryRunner: QueryRunner): Promise<void> {
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
        await queryRunner.query(`COMMENT ON COLUMN "receipts"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "receipts"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_ed6cb351c0f685042c3e742f5bb"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_3f30dcd69f06f473c7bb510d11c"`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."dealerId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "UQ_ed6cb351c0f685042c3e742f5bb"`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."managerId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "UQ_3f30dcd69f06f473c7bb510d11c"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_ed6cb351c0f685042c3e742f5bb" FOREIGN KEY ("dealerId") REFERENCES "dealers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_3f30dcd69f06f473c7bb510d11c" FOREIGN KEY ("managerId") REFERENCES "managers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_3f30dcd69f06f473c7bb510d11c"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_ed6cb351c0f685042c3e742f5bb"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "UQ_3f30dcd69f06f473c7bb510d11c" UNIQUE ("managerId")`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."managerId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "UQ_ed6cb351c0f685042c3e742f5bb" UNIQUE ("dealerId")`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."dealerId" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_3f30dcd69f06f473c7bb510d11c" FOREIGN KEY ("managerId") REFERENCES "managers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_ed6cb351c0f685042c3e742f5bb" FOREIGN KEY ("dealerId") REFERENCES "dealers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`COMMENT ON COLUMN "receipts"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "receipts"."createdAt" IS NULL`);
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
    }

}
