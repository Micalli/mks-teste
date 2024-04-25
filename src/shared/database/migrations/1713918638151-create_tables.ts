// import { MigrationInterface, QueryRunner } from 'typeorm';

// export class CreateTables1713918638151 implements MigrationInterface {
//   name = 'CreateTables1713918638151';

//   public async up(queryRunner: QueryRunner): Promise<void> {
//     // await queryRunner.query(
//     //   `CREATE TABLE "movies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "category" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`,
//     // );
//     await queryRunner.query(
//       `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" boolean NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
//     );
//     // await queryRunner.query(
//     //   `ALTER TABLE "movies" ADD CONSTRAINT "FK_64a78407424745d6c053e93cc36" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
//     // );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     // await queryRunner.query(
//     //   `ALTER TABLE "movies" DROP CONSTRAINT "FK_64a78407424745d6c053e93cc36"`,
//     // );
//     await queryRunner.query(`DROP TABLE "user"`);
//     // await queryRunner.query(`DROP TABLE "movies"`);
//   }
// }
