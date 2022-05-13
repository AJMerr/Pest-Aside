import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const getAllBugs = async () => {
    return await prisma.bug.findMany()
}

module.exports = {
    getAllBugs
}