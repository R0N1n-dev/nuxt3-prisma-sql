export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: "",
    games: [],
  }),
  actions: {
  },
  getters: {
    showGamesData: (state) => state.games,
  },
});
