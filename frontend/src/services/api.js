import axios from "axios";

// ✅ إنشاء مثيل من axios
const api = axios.create({
  baseURL: "http://localhost:3001/api", // ✅ الجذر المشترك لجميع الـ API
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Interceptor للطلبات (request)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      // ✅ أضف الـ token تلقائيًا في كل طلب
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const currentPath = window.location.pathname;

    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      currentPath !== "/login" &&
      currentPath !== "/register"
    ) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
