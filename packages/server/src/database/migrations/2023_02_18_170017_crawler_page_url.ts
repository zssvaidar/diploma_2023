import BaseSchema from 'sosise-core/build/Database/BaseSchema';

/**
 * If you need more information, see: http://knexjs.org/#Schema
 */
export default class CrawlerPageUrl extends BaseSchema {

    protected tableName = 'page_url';

    /**
     * Run the migrations.
     */
    public async up(): Promise<void> {
        await this.dbConnection.schema.createTable(this.tableName, (table) => {
            table.increments('id');

            table.integer("domain_id").unsigned().notNullable();
            table.foreign("domain_id").references("domain_url.id");

            table.specificType('url', 'VARCHAR(1000)');
            table.string('type');
            table.integer("group_id").unsigned().nullable();

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
