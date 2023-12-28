import { IoMdPhotos } from "react-icons/io";
export default {
    name: 'carousel',
    type: 'document',
    title: 'Carousel',
    icon: IoMdPhotos,
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true
        }
      }
    ]
  }