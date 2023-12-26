import { MdCategory } from "react-icons/md";
export default {
    name: 'skills',
    type: 'document',
    title: 'Skills',
    icon: MdCategory,
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'icon',
        type: 'image',
        title: 'Icon',
      }
    ]
  }