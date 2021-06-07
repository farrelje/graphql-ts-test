# Test project TS + GraphQL + Prisma

Not production ready, just to learn, and in no way an expert yet - so lots to improve.
Could be a stepping stone to a project.

## Lots of dependencies to sort out - this is just a playground.

### Docker:

- `docker-compose up -d` to start and create databases

### Prisma (need to do a lot more work here):

- `npx prisma init` to create the needed Prisma setup
- `prisma migrate dev --name <whatever>` once schema and seed are sorted
- `prisma db seed --preview-feature` to seed the data

### Some Prisma gotchas:
- If querying the DB manually (psql), you need to be careful of case and use quotation marks (lots of time lost finding out)
  `select * from "Schematic"`

### GraphQL (need to unpack notes here and do a lot more learning):

TBC
