import BaseSchema from 'sosise-core/build/Database/BaseSchema';

/**
 * If you need more information, see: http://knexjs.org/#Schema
 */
export default class PivotInfoIbg extends BaseSchema {

    protected tableName = 'pivot_info_ibg';

    /**
     * Run the migrations.
     */
    public async up(): Promise<void> {
        await this.dbConnection.schema.createTable(this.tableName, (table) => {
            table.increments('id');

            table.integer('info_id').unsigned().notNullable();
            table.foreign('info_id').references('info.id');

            table.integer('ibg_id').unsigned().notNullable();
            table.foreign('ibg_id').references('info_by_group.id');

            table.timestamps(true);
        });
    }

    /**
     * Reverse the migrations.
     */
    public async down(): Promise<void> {
        await this.dbConnection.schema.dropTable(this.tableName);
    }
}
