import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const userData = [
  {
    name: 'Gary',
    email: 'gary@g.com',
    passwordHash: "qwewqeqwedqw",
    schematics: {
      create: [
        {
          title: 'Sourdough pizza with hair',
          description: 'Lorem ipsum sourdough',
          private: true,
        },
      ],
    },
  },
  {
    name: 'Dave',
    email: 'dave@dave.com',
    passwordHash: "efdasdedad",
    schematics: {
      create: [
        {
          title: 'Spinach-flavoured tiramisu',
          description: 'Lorem ipsum spinach',
          private: false,
        },
      ],
    },
  },
  {
    name: 'Sarah',
    email: 'sarah@smail.com',
    passwordHash: "awdawdawdwa",
    schematics: {
      create: [
        {
          title: 'Chicken shed instructions',
          description: 'Lorem ipsum chickens!!!!!',
          private: false,
        },
      ],
    },
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })