import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {serialize} from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'articles');

function getPostSlugs(locale) {
  const dir = path.join(CONTENT_DIR, locale);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));
}

export function getAllPostsMeta(locale) {
  const posts = getPostSlugs(locale).map((file) => {
    const fullPath = path.join(CONTENT_DIR, locale, file);
    const source = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(source);
    const iso = data.date ? new Date(data.date).toISOString() : null;
    return {
      ...data,
      date: iso,                                  // ← string (no Date)
      slug: data.slug || file.replace(/\.mdx$/,''),
      locale
    };
  });
  posts.sort((a,b) => new Date(b.date) - new Date(a.date));
  return posts;
}

export async function getPostBySlug(locale, slug) {
  const fullPath = path.join(CONTENT_DIR, locale, `${slug}.mdx`);
  const source = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {behavior: 'wrap'}]],
    },
    parseFrontmatter: false
  });

  const iso = data.date ? new Date(data.date).toISOString() : null;

  return {
    mdxSource,
    frontMatter: {
      ...data,
      date: iso,                                  // ← string (no Date)
      slug: data.slug || slug,
      locale
    }
  };
}
