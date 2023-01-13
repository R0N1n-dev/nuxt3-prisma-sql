import prisma from "../../lib/prisma.js";
//const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const games = await prisma.game.findMany({
    select: {
      id: true,
      title: true,
      developer: true,
      publisher: true,
    },
  });

  return games;
});
