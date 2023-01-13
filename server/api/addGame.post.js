import prisma from "../../lib/prisma.js";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const gameData = await prisma.game.create({
    data: {
      title: body.title,
      developer: body.developer,
      publisher: body.publisher,
    },
  });
  console.log("Successfull Added", `${gameData.title}`);
  return { success: true};
});
