import { component$, useStylesScoped$, useSignal, useStore } from "@builder.io/qwik"
import ContactStyles from './contact.css?inline'

export default component$(() => {
  useStylesScoped$(ContactStyles)

  const formVisible = useSignal(false)
  const formState = useStore({ name: '', message: '' })

  return (
    <article>
      <h2>Contact Me</h2>
    
      <p>I’m always open to discussing exciting full-stack development opportunities, collaborative projects, or freelance work. With a strong background in Java, Spring Boot, ReactJS, Microservices, and cloud platforms like AWS and Azure, I’m eager to contribute to impactful software solutions. Feel free to connect with me on LinkedIn, explore my work on GitHub, or reach out directly via email at madhukarbarad@gmail.com.</p>
     <p>Let’s build something amazing together!</p>
     
      <button onClick$={() => formVisible.value = true}>Contact Me</button>

      {formVisible.value && (
        <form preventdefault:submit onSubmit$={() => {
          console.log(formState.name, formState.message)
          formState.name = ''
          formState.message = ''
        }}>
          <label>
            <span>Your name:</span>
            <input 
              type="text"
              value={formState.name} 
              onInput$={(e) => formState.name = (e.target as HTMLInputElement).value} 
            />
          </label>
          <label>
            <span>Your message:</span>
            <textarea
              value={formState.message}
              onInput$={(e) => formState.message = (e.target as HTMLInputElement).value} 
            ></textarea>
          </label>
          <button>Send</button>

          <p>{formState.name}</p>
          <p>{formState.message}</p>
        </form>
      )}

    </article>

    
  )
})