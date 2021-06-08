import { objectType } from 'nexus';

export const Schematic = objectType({
  name: 'Schematic',
  definition(t) {
    t.nonNull.int('id'),
    t.string('title'),
    t.string('description'),
    t.boolean('private')
    t.field('user', {
      type: 'User',
      resolve: (parent, _, context) => {
        return context.db.user
          .findUnique({
            where: {id: parent.id}
          })
          .user()
      }
    })
  }
});