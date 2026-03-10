import { defineCollection, z } from 'astro:content';

const spots = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        spotName: z.string(),
        genre: z.union([z.enum(['anime', 'drama', 'movie']), z.array(z.enum(['anime', 'drama', 'movie']))]),
        prefecture: z.string(),
        address: z.string(),
        lat: z.number(),
        lng: z.number(),
        image: z.string().optional(),
        imageCredit: z.string().optional(),
        imageCreditUrl: z.string().optional(),
        officialImage: z.string().optional(),
        officialImageCredit: z.string().optional(),
        episode: z.string().optional(),
        description: z.string(),
        publishDate: z.date(),
        featured: z.boolean().default(false),
    }),
});

export const collections = { spots };
