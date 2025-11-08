from fastapi import FastAPI, HTTPException, status, Response
from pydantic import BaseModel
import pypandoc

class Question(BaseModel):
    theme: str
    context: str
    hasAlternatives: bool
    answers: list[str] | None = None

app = FastAPI()

@app.post("/pdf", response_model=None)
async def genPdf(data: list[Question]) -> any:
    md_text = ""
    md_text += "## Questões sobre Trigonometria"
    md_text += "\n\n"

    c = 1
    for q in data:
        question_text = ""
        question_text += f"**QUESTÂO {c}** (*{q.theme}*) - {q.context}\n"
        if (q.hasAlternatives):
            question_text += f"**(a)** {q.answers[0]}\n"
            question_text += f"**(b)** {q.answers[1]}\n"
            question_text += f"**(c)** {q.answers[2]}\n"
            question_text += f"**(d)** {q.answers[3]}\n"
        else:
            question_text += "\n\n\n\n"
        question_text += "\n"
        
        md_text += (question_text)

        c += 1

        response = Response()
        response.headers["Content-Type"] = "application/pdf"

        byte_pdf = pypandoc.convert_text(md_text, to="pdf", format="md")

        return byte_pdf