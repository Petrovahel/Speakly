export const getFavorites = (userId) => {
  const favorites = localStorage.getItem(`favorites_${userId}`);

  return favorites ? JSON.parse(favorites) : [];
};

export const toggleFavorite = (userId, teacherId) => {
  const favorites = getFavorites(userId);

  const isFavorite = favorites.includes(teacherId);

  let updatedFavorites;

  if (isFavorite) {
    updatedFavorites = favorites.filter((id) => id !== teacherId);
  } else {
    updatedFavorites = [...favorites, teacherId];
  }

  localStorage.setItem(`favorites_${userId}`, JSON.stringify(updatedFavorites));

  return updatedFavorites;
};
