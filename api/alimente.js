const URL = "https://671cae1309103098807ad43b.mockapi.io/api/v1/alimente";

export async function getAllProducts() {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
