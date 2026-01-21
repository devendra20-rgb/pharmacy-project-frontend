const API_BASE_URL = "https://pharmacy-backend-2onl.onrender.com/api/articles"; // Your backend base URL

// Helper: Generic fetch with error handling and JSON response
const apiFetch = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      next: { revalidate: 3600 }, // ISR: Revalidate every hour
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`API Fetch Error for ${endpoint}:`, error);
    throw error;
  }
};

// GET all articles (for HeroSection list)
export const getAllArticles = async () => {
  return await apiFetch('/', { cache: 'no-store' }); // Fresh data for home
};

// GET article by slug (for /articles/[slug] detail page)
export const getArticleBySlug = async (slug) => {
  return await apiFetch(`/slug/${slug}`);
};

// GET article by ID (for admin/internal use)
export const getArticleById = async (id) => {
  return await apiFetch(`/id/${id}`);
};

// POST create new article (for admin form)
export const createArticle = async (articleData) => {
  return await apiFetch('/', {
    method: 'POST',
    body: JSON.stringify(articleData),
  });
};

// PUT update article by ID
export const updateArticle = async (id, articleData) => {
  return await apiFetch(`/${id}`, {
    method: 'PUT',
    body: JSON.stringify(articleData),
  });
};

// DELETE article by ID
export const deleteArticle = async (id) => {
  return await apiFetch(`/${id}`, {
    method: 'DELETE',
  });
};

// Export all for easy import
export default {
  getAllArticles,
  getArticleBySlug,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};