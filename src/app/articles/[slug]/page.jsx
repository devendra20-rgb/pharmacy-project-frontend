// app/articles/[slug]/page.jsx
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getArticleBySlug } from "../../../lib/api/articles"; // Import from lib (adjust path if needed)

const ArticleDetail = async ({ params }) => {
  const { slug } = await params; // Await params for Next.js 15+
  let article = null;

  try {
    console.log(`🔍 Detail Page: Slug from params: "${slug}"`);
    article = await getArticleBySlug(slug);
    console.log(`✅ Detail Page: Fetched Article:`, article);
  } catch (error) {
    console.error("Detail Page Error fetching article:", error);
    article = null; // Fallback
  }

  // Render section helper (updated for proper bullets and image under heading)
  const renderSection = (section) => (
    <div key={section._id || section.slug} className="mb-8">
      {/* Section Heading */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
        {section.heading}
      </h2>

      {/* Section Image (under heading) */}
      {section.image?.url && (
        <img
          src={section.image.url}
          alt={section.image.alt || section.heading}
          className="w-full h-64 object-cover rounded-lg mb-4 shadow-md"
        />
      )}

      {/* Section Content (HTML as is from editor) */}
      <div
        className="prose prose-lg max-w-none mb-6"
        dangerouslySetInnerHTML={{ __html: section.content }} // Renders HTML exactly as editor (bullets, formatting)
      />

      {/* Separate Bullets List (if bullets array present, render as UL) */}
      {section.bullets?.length > 0 && (
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          {section.bullets.map((bullet, idx) => (
            <li key={idx} className="leading-relaxed">
              {bullet} {/* Bullet text as is – supports HTML if needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  // Fallback if no article
  if (!article) {
    return (
      <>
        <title>Article Not Found | Dev Health</title>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center max-w-md p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The article might be coming soon or the link is incorrect. Slug received: "{slug}". Check console for API logs.</p>
            <Link href="/" className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <title>{article.seo?.metaTitle || article.title} | Dev Health</title>
      <meta name="description" content={article.seo?.metaDescription || `${article.title} - Explore health insights.`} />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-4 bg-white border-b border-gray-100">
          <Link href="/" className="flex items-center text-teal-600 hover:text-teal-700 text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-8">
          {/* Featured Image (main article image) */}
          {article.image?.url && (
            <img
              src={article.image.url}
              alt={article.image.alt || article.title}
              className="w-full h-96 object-cover rounded-lg shadow-xl mb-8"
            />
          )}

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-black text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>
            {article.author && (
              <div className="text-sm text-gray-500 mb-4">
                By {article.author.name} | {article.author.specialization} | {article.category?.name || "General"}
              </div>
            )}
            {article.seo?.metaDescription && (
              <p className="text-lg text-gray-600 italic mb-6">
                {article.seo.metaDescription}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags?.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Sections (each with heading, image under heading, content, bullets) */}
          <div className="prose prose-lg max-w-none">
            {article.sections?.map(renderSection) || (
              <p className="text-gray-500">Content coming soon for this article.</p>
            )}
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              Published on {new Date(article.createdAt).toLocaleDateString()}. Category: {article.category?.name || "Uncategorized"}.
            </div>
          </footer>
        </article>
      </div>
    </>
  );
};

export default ArticleDetail;