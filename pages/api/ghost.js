import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'https://admin.gminazabor.info',
  key: '9a01239ece054001a2f53e8ee3',
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