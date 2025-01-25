import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'favorites',
      type: 'relationship',
      relationTo: 'quotes',
      hasMany: true,
    },
  ],
}
