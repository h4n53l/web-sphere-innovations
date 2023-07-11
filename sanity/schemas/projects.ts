export default {
    name: 'projects',
    type: 'document',
      title: 'Projects',
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
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true, 
        },
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'link',
        title: 'Link',
        type: 'string',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: 'client',
        title: 'Client',
        type: 'string',
      },
      {
        name: 'duration',
        title: 'Duration',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'outcome',
        title: 'Outcome',
        type: 'string',
      },
      {
        name: 'conclusion',
        title: 'Conclusion',
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