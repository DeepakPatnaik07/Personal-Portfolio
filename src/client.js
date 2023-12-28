import  {createClient}  from "@sanity/client"; 
import  ImageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
    projectId: 'jqv3o1ff',
    apiVersion: "2022-02-01",
    dataset: "production",
    useCdn: true,
    token: "skdQZMpp4HG05zcbT2H4rLQfcqcYuw4EPGhjSzhynJnygDbpnSsA8UKr0ZMzkkCzsDri52HPc7SSQRMXFGnkWPaAruQ6EdEimeKyJ7sRIzQLYpYL2zmxNcN4232Dovw6wRjQm62GUu0Da08mUktEPh1jA6O5crO2Q86czgBEJWOFoMxqNCwf"
});

const builder = ImageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}
