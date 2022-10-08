import { questions } from "../data"
import Question from "./Question"

const FAQ = () => {
  return (
    <section className="faq">
      <h2 className="title"><span className="line"></span>FAQs</h2>
      <div className="questions">
        {
            questions.map(question => {
                return <Question key={question.id} title={question.title} info={question.info}/>
            })
        }
      </div>
    </section>
  )
}

export default FAQ
