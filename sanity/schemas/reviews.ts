export default {
    name: 'reviews',
    type: 'document',
      title: 'Reviews',
    fields: [
      {
        name: 'author',
        title: 'Author',
        type: 'string',
      },
      {
        name: 'review',
        title: 'Review',
        type: 'string',
      },
      {
        name: 'company',
        title: 'Company',
        type: 'string',
      },
      {
        name: 'avatar',
        title: 'Avatar',
        type: 'image',
        options: {
          hotspot: true, 
        },
      },
    ]
  }