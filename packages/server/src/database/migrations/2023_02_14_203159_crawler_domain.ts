import BaseSchema from "sosise-core/build/Database/BaseSchema";

/**
 * If you need more information, see: http://knexjs.org/#Schema
 */
export default class CrawlerDomain extends BaseSchema {
    protected tableName = "domain_url";

    /**
     * Run the migrations.
     */
    public async up(): Promise<void> {
        await this.dbConnection.schema.createTable(this.tableName, (table) => {
            table.increments("id");

            table.string("name");
            table.string("url");

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
