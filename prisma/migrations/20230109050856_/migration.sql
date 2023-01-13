-- CreateTable
CREATE TABLE "game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "developer" TEXT,
    "publisher" TEXT
);

-- CreateTable
CREATE TABLE "player" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "team" TEXT,
    "allstar" BOOLEAN
);
