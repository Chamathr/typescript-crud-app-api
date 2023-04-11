require('dotenv').config()

class DatabaseConfig {
    public static databaseUrl: any = process.env.DATABASE_URL
}

export { DatabaseConfig }