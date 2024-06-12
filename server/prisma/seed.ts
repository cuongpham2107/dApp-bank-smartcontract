import { PrismaClient } from '@prisma/client'
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient()

async function main() {
  const role = await prisma.role.create({
    data: {
      name: 'ADMIN',
    },
  });
  const password = await bcrypt.hash('password', 10);
  const user = await prisma.user.create({
    data: {
      username: 'Admin',
      email: 'admin@admin.com',
      password: password,
      roleId: role.id
    },
  });
  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })