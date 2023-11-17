import data from '@/config/blog-posts';

export function getBlogPostSlugs() {
  return data.map((bp) => bp.slug);
}

export function getBlogPostBySlug(givenSlug) {
  const foundPost = data.filter((bp) => bp.slug === givenSlug)[0] || {};

  return { ...foundPost, dateFormatted: formatDate(foundPost.date) };
}

export function getBlogMetaData(givenId) {
  const [match = {}] = data.filter((x) => x.slug === givenId);

  return {
    name: match.name,
    blurb: match.blurb,
    author: match.author?.name,
    date: match.date,
  };
}

export function formatDate(date = '', options = {}) {
  return date
    ? new Date(date).toLocaleDateString('en-GB', {
        month: 'short',
        year: '2-digit',
        day: 'numeric',
        ...options,
      })
    : date;
}
