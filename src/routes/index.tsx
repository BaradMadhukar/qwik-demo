import { component$, useSignal, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const name = useSignal('Madhukar');

  const person = useStore({ name: 'Madhav', age: 30,  })

  const blogs = useStore([
    {id: 1, title: 'my first blog'},
    {id: 2, title: 'my second blog'},
    {id: 3, title: 'marmite rules!'}
  ])

  return (
    <div>
      <h1>Coders!</h1>

      <p>Hello, {name.value}</p>
      <p>Hello, {person.name}, you are {person.age} years young</p>

      <button onClick$={() => name.value = 'qwik'}>click me</button>
      <button onClick$={() => person.name = 'developer'}>click me again</button>

      {blogs.map(blog => (
        <div key={blog.id}>{blog.title}</div>
      ))}

      <button onClick$={() => blogs.pop()}>remove a blog</button>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Barads Qwik post',
  meta: [
    {
      name: 'description',
      content: 'a blog site about everything Super Mario related',
    },
  ]
};
