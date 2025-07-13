import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {
  return (
    <div>
      <h1>Madhukar Barad</h1>
    </div>
  );
});


export const head: DocumentHead = {
  title: "Barad`s Blog",
  meta: [
    {
      name: "description",
      content: "A blog site about Madhukar Barad",
    },
  ],
  links: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
    },
  ],
};
