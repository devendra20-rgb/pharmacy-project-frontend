// app/conditions/[slug]/page.jsx
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getConditionBySlug } from "../../../lib/api/conditions";

const ConditionDetail = async ({ params }) => {
  const { slug } = await params;
  let condition = null;

  try {
    condition = await getConditionBySlug(slug);
  } catch (error) {
    console.error("Error fetching condition:", error);
    condition = null;
  }

  // Render block helper (heading, image under heading, content, bullets)
  const renderBlock = (block) => (
    <div key={block._id || block.slug} className="mb-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {block.heading}
      </h3>
      {block.image?.url && (
        <img
          src={block.image.url}
          alt={block.image.alt || block.heading}
          className="w-full h-64 object-cover rounded-lg mb-4 shadow-md"
        />
      )}
      <div
        className="prose prose-lg max-w-none mb-4"
        dangerouslySetInnerHTML={{ __html: block.content }} // Editor HTML as is (bullets, formatting)
      />
      {block.bullets?.length > 0 && (
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          {block.bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );

  // Render section helper (title with blocks)
  const renderSection = (section) => (
    <div key={section._id || section.slug} className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-teal-600 pb-2">
        {section.title}
      </h2>
      {section.blocks?.map(renderBlock) || (
        <p className="text-gray-500">No content blocks in this section.</p>
      )}
    </div>
  );

  // Fallback if no condition
  if (!condition) {
    return (
      <>
        <title>Condition Not Found | Dev Health</title>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center max-w-md p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Condition Not Found</h1>
            <p className="text-gray-600 mb-6">The condition you're looking for might be coming soon or the link is incorrect.</p>
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
      <title>{condition.seo?.metaTitle || condition.name} | Dev Health</title>
      <meta name="description" content={condition.seo?.metaDescription || `${condition.name} - Explore health conditions.`} />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-4 bg-white border-b border-gray-100">
          <Link href="/" className="flex items-center text-teal-600 hover:text-teal-700 text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-8">
          {/* Featured Image */}
          {condition.image?.url && (
            <img
              src={condition.image.url}
              alt={condition.image.alt || condition.name}
              className="w-full h-96 object-cover rounded-lg shadow-xl mb-8"
            />
          )}

          {/* Header (without author) */}
          <header className="mb-8">
            <h1 className="text-4xl font-black text-gray-900 mb-4 leading-tight">
              {condition.name}
            </h1>
            {condition.category?.name && (
              <p className="text-sm text-gray-500 mb-4">
                Category: {condition.category.name}
              </p>
            )}
            {condition.seo?.metaDescription && (
              <p className="text-lg text-gray-600 italic mb-6">
                {condition.seo.metaDescription}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mb-6">
              {condition.tags?.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Sections */}
          <div className="prose prose-lg max-w-none">
            {condition.sections?.map(renderSection) || (
              <p className="text-gray-500">Content coming soon for this condition.</p>
            )}
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              Published on {new Date(condition.createdAt).toLocaleDateString()}.
            </div>
          </footer>
        </article>
      </div>
    </>
  );
};

export default ConditionDetail;