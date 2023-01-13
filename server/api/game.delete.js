import prisma from "../../lib/prisma.js";
//const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const deletedGame = await prisma.game.delete({
    where: {
      id: body.id,
    },
  });
  console.log();
  return { deletedGame };
});
