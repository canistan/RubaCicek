import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function resetDB() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log('Veritabanına bağlanıldı. Temizlik başlıyor...');
    
    // Tüm tabloları siliyoruz (Drop schema public and recreate it)
    await client.query('DROP SCHEMA public CASCADE;');
    await client.query('CREATE SCHEMA public;');
    
    console.log('Tüm eski tablolar başarıyla silindi ve veritabanı sıfırlandı!');
  } catch (error) {
    console.error('Hata:', error);
  } finally {
    await client.end();
  }
}

resetDB();
