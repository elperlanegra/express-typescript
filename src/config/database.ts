import { ConnectionOptions } from 'typeorm'

const config: ConnectionOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || "postgres-api",
    password: process.env.POSTGRES_PASSWORD || "secret",
    database: process.env.POSTGRES_DB || "postgres",
    entities: [],
    synchronize: true,
};

export default config;