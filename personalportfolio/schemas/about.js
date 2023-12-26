import { FaHouseUser } from "react-icons/fa";
export default {
    name: 'about',
    type: 'document',
    title: 'About',
    icon: FaHouseUser,
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'cvbio',
        type: 'text',
        title: 'CV Bio'
      },
      {
        name: 'cvimage',
        type: 'image',
        title: 'CV Image'
      },
      {
        name: 'resume',
        type: 'file',
        title: 'Resume',
        options: {
          accept: '.pdf'
        }
      },
      {
        name: 'heroimage',
        type: 'image',
        title: 'Hero Image'
      },
      {
        name: 'shortbio',
        type: 'text',
        title: 'Short Bio'
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email'
      },
      {
        name: 'phone',
        type: 'string',
        title: 'Phone'
      },

    ]
  }