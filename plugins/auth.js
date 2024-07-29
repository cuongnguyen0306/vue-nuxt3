export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", () => {
    const token = useCookie("auth-token").value;
    console.log("auth token");
    nuxtApp.$fetch = async (url, options = {}) => {
      const headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      };
      return $fetch(url, { ...options, headers });
    };
  });
});