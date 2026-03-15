export async function getProjects() {
  const response = await fetch(process.env.PUBLIC_SITE_URL + '/api/projects');
  const projects = await response.json();
  return projects;
}