// src/components/transactions/hooks/useTransactions.js
import { useQuery } from "@tanstack/react-query";
import api from "../../../services/api";

export default function useTransactions() {
  return useQuery({
    queryKey: ["transactions"], // المفتاح الفريد للتخزين المؤقت
    queryFn: async () => {
      const response = await api.get("/all-transactions");
      if (!response.data.success) {
        throw new Error(
          response.data.message || "Failed to fetch transactions"
        );
      }
      return response.data.data; // ترجع فقط البيانات الفعلية
    },
    staleTime: 1000 * 60 * 2, // البيانات تظل "طازجة" لمدة دقيقتين
    refetchOnWindowFocus: false, // لا يعيد الجلب عند الرجوع للنافذة
  });
}
