import mongoose, { ConnectOptions } from 'mongoose';
import { DatabaseConfig } from '../config/database';

class MongoDbConnection {

    private static instance: MongoDbConnection;

    private constructor() { }

    public static async getInstance(): Promise<MongoDbConnection> {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions;
        if (!MongoDbConnection.instance) {
            try {
                await mongoose.connect(DatabaseConfig.databaseUrl, options)
                console.log('Connected to MongoDB!');
            }
            catch (error: any) {
                console.error('Error connecting to MongoDB:', error.message);
            }
            MongoDbConnection.instance = new MongoDbConnection();
        }
        return MongoDbConnection.instance;
    }
}

export default MongoDbConnection;
