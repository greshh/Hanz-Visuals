import { Suspense } from "react";
import ProjectsClient from "./projects-client";

export default function Projects() {
  return (
    <Suspense fallback={<div></div>}>
      <ProjectsClient />
    </Suspense>
  );
}