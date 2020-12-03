export default function getFullApiUrl(searchTerm, currentPage) {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const apiKey = `?key=${process.env.REACT_APP_API_KEY}`;
  const searchQuery = `&q=${searchTerm}&image_type=photo`;
  const pagination = `&per_page=${process.env.REACT_APP_PAGINATION_LENGTH}&page=${currentPage}`;

  return baseUrl + apiKey + searchQuery + pagination;
}
