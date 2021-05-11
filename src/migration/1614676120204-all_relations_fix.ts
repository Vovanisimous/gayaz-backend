import { MigrationInterface, QueryRunner } from 'typeorm';

export class allRelationsFix1614676120204 implements MigrationInterface {
  name = 'allRelationsFix1614676120204';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "orders_orders_products" ("ordersId" uuid NOT NULL, "productsId" uuid NOT NULL, CONSTRAINT "PK_0aa500966676235e42e2df9e731" PRIMARY KEY ("ordersId", "productsId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_3b23eb799fa7b0682a7301ffa0" ON "orders_orders_products" ("ordersId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b2a0122147913e2b228d9ceab5" ON "orders_orders_products" ("productsId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "contracts" DROP COLUMN "contract_id"`,
    );
    await queryRunner.query(`ALTER TABLE "dealers" DROP COLUMN "dealer_id"`);
    await queryRunner.query(`ALTER TABLE "dealers" DROP COLUMN "user_id"`);
    await queryRunner.query(`ALTER TABLE "managers" DROP COLUMN "manager_id"`);
    await queryRunner.query(`ALTER TABLE "managers" DROP COLUMN "user_id"`);
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "product_id"`);
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "order_id"`);
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "dealer_id"`);
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "manager_id"`);
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "products_list"`);
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "contract_id"`);
    await queryRunner.query(`ALTER TABLE "dealers" ADD "userId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "dealers" ADD CONSTRAINT "UQ_25b026940b97f63fc8cdab2f429" UNIQUE ("userId")`,
    );
    await queryRunner.query(`ALTER TABLE "managers" ADD "userId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "managers" ADD CONSTRAINT "UQ_657a998a2bb0be0d3dcf91fb273" UNIQUE ("userId")`,
    );
    await queryRunner.query(`ALTER TABLE "orders" ADD "dealerId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "UQ_ed6cb351c0f685042c3e742f5bb" UNIQUE ("dealerId")`,
    );
    await queryRunner.query(`ALTER TABLE "orders" ADD "managerId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "UQ_3f30dcd69f06f473c7bb510d11c" UNIQUE ("managerId")`,
    );
    await queryRunner.query(`ALTER TABLE "orders" ADD "contractId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "UQ_dd2150ec3d9f387ab3777f70d65" UNIQUE ("contractId")`,
    );
    await queryRunner.query(
      `COMMENT ON COLUMN "contracts"."createdAt" IS NULL`,
    );
    await queryRunner.query(
      `COMMENT ON COLUMN "contracts"."updatedAt" IS NULL`,
    );
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
    await queryRunner.query(
      `ALTER TABLE "dealers" ADD CONSTRAINT "FK_25b026940b97f63fc8cdab2f429" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "managers" ADD CONSTRAINT "FK_657a998a2bb0be0d3dcf91fb273" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "FK_ed6cb351c0f685042c3e742f5bb" FOREIGN KEY ("dealerId") REFERENCES "dealers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "FK_3f30dcd69f06f473c7bb510d11c" FOREIGN KEY ("managerId") REFERENCES "managers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "FK_dd2150ec3d9f387ab3777f70d65" FOREIGN KEY ("contractId") REFERENCES "contracts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_orders_products" ADD CONSTRAINT "FK_3b23eb799fa7b0682a7301ffa0c" FOREIGN KEY ("ordersId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_orders_products" ADD CONSTRAINT "FK_b2a0122147913e2b228d9ceab55" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "orders_orders_products" DROP CONSTRAINT "FK_b2a0122147913e2b228d9ceab55"`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_orders_products" DROP CONSTRAINT "FK_3b23eb799fa7b0682a7301ffa0c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "FK_dd2150ec3d9f387ab3777f70d65"`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "FK_3f30dcd69f06f473c7bb510d11c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "FK_ed6cb351c0f685042c3e742f5bb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "managers" DROP CONSTRAINT "FK_657a998a2bb0be0d3dcf91fb273"`,
    );
    await queryRunner.query(
      `ALTER TABLE "dealers" DROP CONSTRAINT "FK_25b026940b97f63fc8cdab2f429"`,
    );
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
    await queryRunner.query(
      `COMMENT ON COLUMN "contracts"."updatedAt" IS NULL`,
    );
    await queryRunner.query(
      `COMMENT ON COLUMN "contracts"."createdAt" IS NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "UQ_dd2150ec3d9f387ab3777f70d65"`,
    );
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "contractId"`);
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "UQ_3f30dcd69f06f473c7bb510d11c"`,
    );
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "managerId"`);
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "UQ_ed6cb351c0f685042c3e742f5bb"`,
    );
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "dealerId"`);
    await queryRunner.query(
      `ALTER TABLE "managers" DROP CONSTRAINT "UQ_657a998a2bb0be0d3dcf91fb273"`,
    );
    await queryRunner.query(`ALTER TABLE "managers" DROP COLUMN "userId"`);
    await queryRunner.query(
      `ALTER TABLE "dealers" DROP CONSTRAINT "UQ_25b026940b97f63fc8cdab2f429"`,
    );
    await queryRunner.query(`ALTER TABLE "dealers" DROP COLUMN "userId"`);
    await queryRunner.query(
      `ALTER TABLE "orders" ADD "contract_id" character varying(300) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" ADD "products_list" text NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" ADD "manager_id" character varying(300) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" ADD "dealer_id" character varying(300) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" ADD "order_id" character varying(300) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD "product_id" character varying(300) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "managers" ADD "user_id" character varying(300) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "managers" ADD "manager_id" character varying(300) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "dealers" ADD "user_id" character varying(300) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "dealers" ADD "dealer_id" character varying(300) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "contracts" ADD "contract_id" character varying(300) NOT NULL`,
    );
    await queryRunner.query(`DROP INDEX "IDX_b2a0122147913e2b228d9ceab5"`);
    await queryRunner.query(`DROP INDEX "IDX_3b23eb799fa7b0682a7301ffa0"`);
    await queryRunner.query(`DROP TABLE "orders_orders_products"`);
  }
}
