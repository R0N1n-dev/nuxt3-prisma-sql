<template>
  <div>
    <TheHeader />
    <h2>Home Page</h2>
    <p v-if="pending">Loading</p>
    <div v-else>
      <ul>
        <li v-for="game in data" :key="game.id">
          {{ game.title }}<button @click="deleteGame(game.id)">Remove</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { data, pending } = useFetch("/api/games");
const deleteGame = async (gameId) => {
  const res = await $fetch("/api/game", {
    method: "delete",
    body: {
      id: gameId,
    },
  });
  console.log("Response", res);
};
</script>

<style scoped></style>
