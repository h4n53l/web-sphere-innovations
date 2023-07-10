export default {
    name: 'services',
    type: 'document',
      title: 'Services',
    fields: [
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'details',
        title: 'Details',
        type: 'array',
        of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'service',
                  title: 'Service',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                },
              ],
            },
          ],
      },
    ]
  }