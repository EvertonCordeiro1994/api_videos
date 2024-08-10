import sql from './db.js';

// Apagar a tabela se ela existir
// sql`
//   DROP TABLE IF EXISTS videos;
// `
//   .then(() => console.log('Tabela apagada'))

// Criar a tabela
sql`
  CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTEGER CHECK (duration > 0)
  );
`
  .then(() => console.log('Tabela criada com sucesso'));
