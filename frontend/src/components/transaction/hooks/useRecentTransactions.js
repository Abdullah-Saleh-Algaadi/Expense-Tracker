import { useQuery } from "@tanstack/react-query";
import api from "../../../services/api";

export default function useRecentTransactions({ limit = 7, date }) {
  return useQuery({
    queryKey: ["transactions", "recent", { limit, date }],
    queryFn: async () => {
      const res = await api.get(
        `/recent-transactions?limit=${limit}&date=${date}`
      );
      if (!res.data.success)
        throw new Error(
          res.data.message || "Failed to fetch recent transactions"
        );
      return res.data.transactions;
    },
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
  });
}
