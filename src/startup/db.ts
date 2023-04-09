import mongoose, { ConnectOptions } from 'mongoose';
import dbConfig from '../config/db';

class Database {

    private static instance: Database;

    private constructor() {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions;

        mongoose.connect(dbConfig.databaseUrl, options);
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}

export default Database;
