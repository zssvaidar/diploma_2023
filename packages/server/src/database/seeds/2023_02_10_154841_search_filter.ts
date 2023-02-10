import BaseSchema from 'sosise-core/build/Database/BaseSchema';
import * as faker from 'faker';

/**
 * If you need more information, see: http://knexjs.org/#Schema ; https://www.npmjs.com/package/faker
 */
export default class SearchFilter extends BaseSchema {
    /**
     * Restrict running the seed only in a local environment (APP_ENV=local)
     */
    protected onlyInLocalEnvironment = false;

    /**
     * Table name where data should be inserted in
     */
    protected tableName = 'search_filter';

    /**
     * Run seed
     */
    public async run(): Promise<void> {
        // Prepare data to seed
        const data: any = [];

        // Generate 100 rows
        for (let row = 0; row < 10; row++) {
            data.push({
                name: 'data' + row,
            });
        }

        // Insert to table
        await this.dbConnection.table(this.tableName).insert(data);
    }
}
