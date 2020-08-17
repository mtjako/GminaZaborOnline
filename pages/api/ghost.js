import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'https://droszkow.net',
  key: '4a74a6468c01021d42de77454e',
  version: "v3"
});

export async function getPosts() {
  return await api.posts
    .browse({
      include: "tags,authors",
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    });
}