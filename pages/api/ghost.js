import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'http://165.232.69.88',
  key: '39bbd0c7b03ca0f198ffe1e965',
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