import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { z } from "zod";

// --- Types inferred from API schemas ---
export type Trade = z.infer<typeof api.trades.list.responses[200]>[number];
export type TradeDetail = z.infer<typeof api.trades.get.responses[200]>;
export type CreateTradeInput = z.infer<typeof api.trades.create.input>;

// --- Hooks ---

// GET /api/trades
export function useTrades() {
  return useQuery({
    queryKey: [api.trades.list.path],
    queryFn: async () => {
      const res = await fetch(api.trades.list.path);
      if (!res.ok) throw new Error("Failed to fetch trades");
      return api.trades.list.responses[200].parse(await res.json());
    },
  });
}

// GET /api/trades/:slug
export function useTrade(slug: string) {
  return useQuery({
    queryKey: [api.trades.get.path, slug],
    queryFn: async () => {
      const url = buildUrl(api.trades.get.path, { slug });
      const res = await fetch(url);
      if (res.status === 404) return null; // Handle 404 cleanly
      if (!res.ok) throw new Error("Failed to fetch trade details");
      return api.trades.get.responses[200].parse(await res.json());
    },
    enabled: !!slug,
  });
}

// POST /api/trades
export function useCreateTrade() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateTradeInput) => {
      const res = await fetch(api.trades.create.path, {
        method: api.trades.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to create trade");
      return api.trades.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.trades.list.path] });
    },
  });
}
