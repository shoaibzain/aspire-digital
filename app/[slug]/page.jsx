import Header2 from "@/components/headers/Header2";
import Newsletter from "@/components/blog/Newsletter";
import Footer from "@/components/footers/Footer";
import BlogDetails1 from "@/components/blog/BlogDetails";
import { allBlogs } from "@/data/blogs";

export const metadata = {
  title:
    "Blog || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};

export default function BlogBySlugPage({ params }) {
  const slug = params.slug;
  // first try to find by slug, then fallback to id (string or number)
  const blogItem =
    allBlogs.find((b) => String(b.slug) === String(slug)) ||
    allBlogs.find((b) => String(b.id) === String(slug)) ||
    allBlogs[0];

  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <BlogDetails1 blogItem={blogItem} />
          <Newsletter />
        </div>
        <Footer />
      </div>
    </>
  );
}
