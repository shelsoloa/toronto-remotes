'use server';

import { Venue } from '@/schema';

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

export async function getRecentlyAddedVenues(): Promise<Venue[]> {
  const venues = await getVenues();
  return venues
    .sort((a, b) => new Date(b.fields.created).getTime() - new Date(a.fields.created).getTime())
    .slice(0, 5);
}

export async function getNeighbourhoods(): Promise<string[]> {
  const venues = await getVenues();
  return venues.map((venue: Venue) => venue.fields.neighbourhood);
}

export async function getVenuesByNeighbourhood(neighbourhood: string): Promise<Venue[]> {
  const venues = await getVenues();
  return venues.filter((venue: Venue) => venue.fields.neighbourhood === neighbourhood);
}

export async function getVenueById(id: string): Promise<Venue> {
  const venue = await fetch(`${baseAirtableUrl}/venues/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
  });

  const data = await venue.json();
  return data;
}
