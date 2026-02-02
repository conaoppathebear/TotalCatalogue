
import { z } from 'zod';
import { insertTradeSchema, trades, tradeContent, blueprintSchema, tradeIdentitySchema } from './schema';

export const api = {
  trades: {
    list: {
      method: 'GET' as const,
      path: '/api/trades',
      responses: {
        200: z.array(z.custom<typeof trades.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/trades/:slug',
      responses: {
        200: z.custom<typeof trades.$inferSelect & { 
          content: typeof tradeContent.$inferSelect,
          blueprints?: Record<string, z.infer<typeof blueprintSchema>>,
          tradeIdentity?: z.infer<typeof tradeIdentitySchema>
        }>(),
        404: z.object({ message: z.string() }),
      },
    },
    // Admin/Generator endpoint
    create: {
      method: 'POST' as const,
      path: '/api/trades',
      input: z.object({
        name: z.string(),
        slug: z.string(),
        description: z.string(),
        icon: z.string(),
      }),
      responses: {
        201: z.custom<typeof trades.$inferSelect>(),
      },
    },
    analyze: {
      method: 'POST' as const,
      path: '/api/trades/analyze',
      responses: {
        200: z.any(),
      },
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
