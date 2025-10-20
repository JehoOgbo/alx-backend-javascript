export default async function loadBalancer(chinaDownload, USDownload) {
  return await Promise.any([chinaDownload, USDownload]);
}
