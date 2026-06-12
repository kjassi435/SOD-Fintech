import turso from "./turso";

export async function initDB() {
  await turso.execute(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await turso.execute(`
    CREATE TABLE IF NOT EXISTS subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

export async function saveContact(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  const result = await turso.execute({
    sql: "INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)",
    args: [data.name, data.email, data.subject || null, data.message],
  });
  return result;
}
