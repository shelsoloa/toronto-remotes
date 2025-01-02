'use server';

import { Venue } from './app/schema';

const baseAirtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}`;

export async function getVenues(): Promise<Venue[]> {
  const venues = await fetch(`${baseAirtableUrl}/venues`, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
  });

  const data = await venues.json();
  return data.records;
}
