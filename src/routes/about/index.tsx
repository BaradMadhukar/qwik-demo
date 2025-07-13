import { component$, useSignal, useStyles$ } from "@builder.io/qwik"
import AboutStyles from './about.css?inline'
import Modal from "~/components/modal/modal"

export default component$(() => {
  useStyles$(AboutStyles)

  const modalVisible = useSignal(false)

  return (
    <article>
     <h2>About</h2>
      <p>I am a highly motivated and skilled Java Full-Stack Developer with over 7 years of real-time industry experience in designing, developing, and deploying robust, scalable web applications.</p>
     
      <p>I have a strong command over CI/CD pipelines using tools like Jenkins, GitHub Actions, and Azure DevOps, along with containerization using Docker and Kubernetes. </p>
      <p> I’ve worked extensively with cloud platforms such as AWS and Azure, integrating services like EC2, S3, RDS, Lambda, and ADO into enterprise applications.</p>
      <p> I also bring solid knowledge of databases, both SQL (MySQL, PostgreSQL) and NoSQL (MongoDB), and I’m experienced in secure application development using Spring Security, JWT, and OAuth2, including SSO. In addition, I’ve implemented real-time messaging systems using Apache Kafka and JMS in production environments. I’m passionate about clean code, system design, and exploring new technologies, and I thrive in agile environments that focus on continuous improvement and innovation. Open to exciting opportunities where I can contribute as a proactive team member, solve complex business problems, and grow as a technology leader.</p>
      <button onClick$={() => modalVisible.value = true}>Open Modal</button>

      {modalVisible.value && (
        <Modal size="sm" frosted={true}>
          <div>some modal content</div>
          <div q:slot="content">
            <h3>Great News!!</h3>
            <h4>Exciting Opportunities Await!</h4>
            <p>With 7+ years of hands-on experience in Java Full-Stack development, I specialize in building scalable, secure, and high-performance applications using technologies like Spring Boot, ReactJS, Microservices, AWS, Docker, and more. Whether it's backend architecture or crafting seamless frontend interfaces, I bring precision, passion, and real-time expertise to every project. Ready to collaborate, innovate, and deliver impact?

                Let’s build something great—connect with me today!</p>
          </div>
          <div q:slot="footer">
            <button>Sign up now!</button>
          </div>
        </Modal>
      )}
    </article>
  )
})