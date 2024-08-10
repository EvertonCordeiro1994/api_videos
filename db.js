import 'dotenv/config';
import postgres from 'postgres';

// Desestruturação das variáveis de ambiente
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// Configuração do cliente PostgreSQL
const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require', // Mantenha 'require' se a conexão SSL for obrigatória
});

export default sql;
