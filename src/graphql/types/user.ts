import { list, objectType, extendType, intArg, nonNull } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id'),
    t.string('email'),
    t.string('username'),
    t.string('firstname'),
    t.string('lastname'),
    t.string('passwordHash')
    t.nonNull.list.nonNull.field('schematics', {
      type: 'Schematic',
      resolve: (parent, _, context) => {
        return context.db.user
          .findUnique({
            where: {id: parent.id}
          })
          .schematics()
      }
    })
  }
});

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
      // get all companies
      t.list.field('users', {
          type: 'User',
          resolve(_root, _args, ctx) {
              return ctx.db.user.findMany();
          },
      });
      // get company by id
      t.field('user', {
          type: 'User',
          args: {
              id: nonNull(intArg()),
          },
          resolve(_root, args, ctx) {
              return ctx.db.user.findUnique({
                  where: { id: args.id },
              });
          },
      });
      t.list.field('schematic', {
          type: 'Schematic',
          resolve(_root, _args, ctx) {
              return ctx.db.schematic.findMany();
          },
      });
  },
});
