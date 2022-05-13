-- CreateTable
CREATE TABLE "Bug" (
    "id" SERIAL NOT NULL,
    "bugTitle" TEXT NOT NULL,
    "bugDescription" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "isInProgress" BOOLEAN NOT NULL,
    "isComplete" BOOLEAN NOT NULL,

    CONSTRAINT "Bug_pkey" PRIMARY KEY ("id")
);
