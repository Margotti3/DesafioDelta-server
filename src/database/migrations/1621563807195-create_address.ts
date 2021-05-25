import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAddress1621563807195 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'address',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'student_id',
                    type: 'integer',
                },
                {
                    name: 'zipcode',
                    type: 'integer'
                },
                {
                    name: 'city',
                    type: 'varchar'
                },
                {
                    name: 'state',
                    type: 'varchar'
                },
                {
                    name: 'neighborhood',
                    type: 'varchar'
                },
                {
                    name: 'street',
                    type: 'varchar'
                },
                {
                    name: 'number',
                    type: 'integer'
                },
                {
                    name: 'complement',
                    type: 'varchar',
                    default: null,
                    isNullable: true,
                }
            ],
            foreignKeys: [
                {
                    name: 'Student',
                    columnNames: ['student_id'],
                    referencedTableName: 'students',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('address');
    }

}
