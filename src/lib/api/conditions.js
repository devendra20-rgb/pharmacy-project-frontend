const API_BASE_URL = "https://pharmacy-backend-2onl.onrender.com/api/conditions";

const apiFetch = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      next: { revalidate: 3600 }, 
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

// GET all conditions 
export const getAllConditions = async () => {
  return await apiFetch('/', { cache: 'no-store' }); 
};

// GET condition by slug
export const getConditionBySlug = async (slug) => {
  return await apiFetch(`/${slug}`);
};

// POST create new condition 
export const createCondition = async (conditionData) => {
  return await apiFetch('/', {
    method: 'POST',
    body: JSON.stringify(conditionData),
  });
};

// PUT update condition by ID
export const updateCondition = async (id, conditionData) => {
  return await apiFetch(`/${id}`, {
    method: 'PUT',
    body: JSON.stringify(conditionData),
  });
};

// DELETE condition by ID
export const deleteCondition = async (id) => {
  return await apiFetch(`/${id}`, {
    method: 'DELETE',
  });
};

// Export all for easy import
export default {
  getAllConditions,
  getConditionBySlug,
  createCondition,
  updateCondition,
  deleteCondition,
};