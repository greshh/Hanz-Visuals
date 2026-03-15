import { connectToDb } from '../db';

export async function GET() {
  const db = await connectToDb();
  const projects = await db.db.collection('projects').find({}).toArray();

  console.log(projects);

  return new Response(
    JSON.stringify(projects),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}