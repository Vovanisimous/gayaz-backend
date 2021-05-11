import { MigrationInterface, QueryRunner } from 'typeorm';

export class relationToUserAndRole1614669971599 implements MigrationInterface {
  name = 'relationToUserAndRole1614669971599';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" ADD "roleId" uuid`);
    await queryRunner.query(
      `COMMENT ON COLUMN "contracts"."createdAt" IS NULL`,
    );
    await queryRunner.query(
      `COMMENT ON COLUMN "contracts"."updatedAt" IS NULL`,
    );
    await queryRunner.query(`COMMENT ON COLUMN "dealers"."createdAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "dealers"."updatedAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "managers"."createdAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "managers"."updatedAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "orders"."createdAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "orders"."updatedAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "products"."createdAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "products"."updatedAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "users"."createdAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "users"."updatedAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "roles"."createdAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "roles"."updatedAt" IS NULL`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_368e146b785b574f42ae9e53d5e" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_368e146b785b574f42ae9e53d5e"`,
    );
    await queryRunner.query(`COMMENT ON COLUMN "roles"."updatedAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "roles"."createdAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "users"."updatedAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "users"."createdAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "products"."updatedAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "products"."createdAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "orders"."updatedAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "orders"."createdAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "managers"."updatedAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "managers"."createdAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "dealers"."updatedAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "dealers"."createdAt" IS NULL`);
    await queryRunner.query(
      `COMMENT ON COLUMN "contracts"."updatedAt" IS NULL`,
    );
    await queryRunner.query(
      `COMMENT ON COLUMN "contracts"."createdAt" IS NULL`,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "roleId"`);
  }
}
