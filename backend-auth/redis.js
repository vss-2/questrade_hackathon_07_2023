require('dotenv').config();
import { createClient } from 'redis';

const redis = createClient();

redis.on('error', e => console.error('Redis-Client error', e));
await client.connect({
	url: REDIS_JWT_ADDRESS + REDIS_JWT_PORT
});

export default redis;