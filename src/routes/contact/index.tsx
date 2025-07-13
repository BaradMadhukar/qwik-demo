import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyles from "./contact.css?inline";

export default component$(() =>  {
    useStylesScoped$(ContactStyles);
    return (
        <article>
            <h2>Contact Me</h2>
           <p>I’m always open to discussing exciting full-stack development opportunities, collaborative projects, or freelance work. With a strong background in Java, Spring Boot, ReactJS, Microservices, and cloud platforms like AWS and Azure, I’m eager to contribute to impactful software solutions. Feel free to connect with me on LinkedIn, explore my work on GitHub, or reach out directly via email at madhukarbarad@gmail.com. Let’s build something amazing together!</p>
        </article>
    )
});