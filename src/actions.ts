'use server';

import { Venue } from '@/schema';

const baseAirtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}`;

export async function getVenues(): Promise<Venue[]> {
  const venues = await fetch(`${baseAirtableUrl}/venues?sort[0][field]=name&sort[0][direction]=asc`, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
  });

  const data = await venues.json();
  return data.records;
}

export async function getRecentlyAddedVenues(): Promise<Venue[]> {
  const venues = await fetch(`${baseAirtableUrl}/venues?sort[0][field]=created&sort[0][direction]=desc`, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
  });
  const data = await venues.json();
  return data.records.slice(0, 5);
}

export async function getNeighbourhoods(): Promise<string[]> {
  const venues = await getVenues();
  return [...new Set(venues
    .map((venue: Venue) => venue.fields.neighbourhood)
    .sort((a, b) => a.localeCompare(b)))];
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
