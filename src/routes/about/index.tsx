import { component$, useStyles$ } from "@builder.io/qwik";
import AboutStyles from "./about.css?inline";

export default component$(() =>  {
    useStyles$(AboutStyles); 
    return (
        <article>
            <h2>About Me</h2>
            <p>
            I am a highly motivated and skilled Java Full-Stack Developer with over 7 years of real-time industry experience in designing, developing, and deploying robust, scalable web applications. 
            My technical expertise spans Java, Spring Boot, Microservices, and RESTful APIs on the backend, and ReactJS, VueJS, and JavaScript/TypeScript frameworks on the frontend. I have a strong command over CI/CD pipelines using tools like Jenkins, GitHub Actions, and Azure DevOps, along with containerization using Docker and Kubernetes. I’ve worked extensively with cloud platforms such as AWS and Azure, integrating services like EC2, S3, RDS, Lambda, and ADO into enterprise applications. I also bring solid knowledge of databases, both SQL (MySQL, PostgreSQL) and NoSQL (MongoDB), and I’m experienced in secure application development using Spring Security, JWT, and OAuth2, including SSO. In addition, I’ve implemented real-time messaging systems using Apache Kafka and JMS in production environments. I’m passionate about clean code, system design, and exploring new technologies, and I thrive in agile environments that focus on continuous improvement and innovation. Open to exciting opportunities where I can contribute as a proactive team member, solve complex business problems, and grow as a technology leader.
            </p>
        </article>
    )
});