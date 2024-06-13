import env from 'dotenv';
import path from 'path';

env.config({ path: path.join(process.cwd(), '.env') })

const envData = {
    databaseUrl: process.env.DATABASE_URL,
    port: process.env.PORT,
    defaultPass: process.env.DEFAULT_PASS
}

export default envData