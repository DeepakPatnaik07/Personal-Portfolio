import { MdOutlineWork } from "react-icons/md";
export default {
    name: 'workexp',
    type: 'document',
    title: 'Work Experience',
    icon: MdOutlineWork,
    fields: [
      {
        name: 'logo',
        type: 'image',
        title: 'Logo'
      },
      {
        name: 'company',
        type: 'string',
        title: 'Company'
      },
      {
        name: 'role',
        type: 'string',
        title: 'Role'
      },
      {
        name:'responsibilities',
        type: 'array',
        title: 'Responsibilities',
        of: [{type: 'string'}]
      },
        {
            name: 'startdate',
            type: 'date',
            title: 'Start Date'
        },
        {
            name: 'enddate',
            type: 'date',
            title: 'End Date'
        },
        {
            name: 'current',
            type: 'boolean',
            title: 'Current'
        },
    ]
  }