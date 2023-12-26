import { GrProjects } from "react-icons/gr";
export default {
    name: 'projects',
    type: 'document',
    title: 'Projects',
    icon: GrProjects,
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'url',
            type: 'url',
            title: 'URL'
        },
        {
            name: 'github',
            type: 'url',
            title: 'Github'
        },
    ]
  }