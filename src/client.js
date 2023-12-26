import  SanityClient  from "@sanity/client"; 
import  ImageUrlBuilder  from "@sanity/image-url";

export const client = SanityClient({
    projectId: 'jqv3o1ff',
    apiVersion: "2022-02-01",
    dataset: "production",
    useCdn: true
});

const builder = ImageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}
