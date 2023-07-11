export default {
    name: 'services',
    type: 'document',
      title: 'Services',
    fields: [
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLenght: 100,
        }
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
        name: 'featureImageOne',
        title: 'Feature Image One',
        type: 'image',
        options: {
          hotspot: true, 
        },
      },
      {
        name: 'featureImageTwo',
        title: 'Feature Image Two',
        type: 'image',
        options: {
          hotspot: true, 
        },
      },
      {
        name: 'featureImageThree',
        title: 'Feature Image Three',
        type: 'image',
        options: {
          hotspot: true, 
        },
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