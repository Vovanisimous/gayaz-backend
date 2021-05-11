import {MigrationInterface, QueryRunner} from "typeorm";

export class orderTableOrdersColumnToProducts1614857194454 implements MigrationInterface {
    name = 'orderTableOrdersColumnToProducts1614857194454'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orders_products_products" ("ordersId" uuid NOT NULL, "productsId" uuid NOT NULL, CONSTRAINT "PK_9a16b87f8bea57750b1bca044ab" PRIMARY KEY ("ordersId", "productsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_dbab812991c32a735a34748370" ON "orders_products_products" ("ordersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_af9cb00de5ab2af01a6a325343" ON "orders_products_products" ("productsId") `);
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
        await queryRunner.query(`ALTER TABLE "orders_products_products" ADD CONSTRAINT "FK_dbab812991c32a735a34748370c" FOREIGN KEY ("ordersId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_products_products" ADD CONSTRAINT "FK_af9cb00de5ab2af01a6a3253435" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders_products_products" DROP CONSTRAINT "FK_af9cb00de5ab2af01a6a3253435"`);
        await queryRunner.query(`ALTER TABLE "orders_products_products" DROP CONSTRAINT "FK_dbab812991c32a735a34748370c"`);
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
        await queryRunner.query(`DROP INDEX "IDX_af9cb00de5ab2af01a6a325343"`);
        await queryRunner.query(`DROP INDEX "IDX_dbab812991c32a735a34748370"`);
        await queryRunner.query(`DROP TABLE "orders_products_products"`);
    }

}
