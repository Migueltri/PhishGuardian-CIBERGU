from pptx import Presentation
from pptx.util import Inches
from pptx.enum.shapes import MSO_SHAPE

prs = Presentation()

# Title slide
slide = prs.slides.add_slide(prs.slide_layouts[0])
slide.shapes.title.text = "Inteligencia Artificial y su Impacto en la Humanidad"
slide.placeholders[1].text = "Presentación sobre IA, automatizaciones y modelos 3D"

# Slide 1: Introducción
slide = prs.slides.add_slide(prs.slide_layouts[1])
slide.shapes.title.text = "Introducción a la Inteligencia Artificial"
tf = slide.shapes.placeholders[1].text_frame
tf.text = "La IA es la capacidad de las máquinas para realizar tareas que requieren inteligencia humana."
p = tf.add_paragraph()
p.text = "Componentes clave: Aprendizaje automático, procesamiento de lenguaje natural, visión por computadora."
# Add 3D shape
shape = slide.shapes.add_shape(MSO_SHAPE.SPHERE, Inches(5), Inches(3), Inches(2), Inches(2))

# Slide 2: Impacto Positivo
slide = prs.slides.add_slide(prs.slide_layouts[1])
slide.shapes.title.text = "Impacto Positivo en la Humanidad"
tf = slide.shapes.placeholders[1].text_frame
tf.text = "Mejora en la eficiencia en diversos sectores."
p = tf.add_paragraph()
p.text = "Avances en medicina, educación y transporte."

# Slide 3: Impacto Negativo
slide = prs.slides.add_slide(prs.slide_layouts[1])
slide.shapes.title.text = "Impacto Negativo en la Humanidad"
tf = slide.shapes.placeholders[1].text_frame
tf.text = "Pérdida de empleos debido a la automatización."
p = tf.add_paragraph()
p.text = "Preocupaciones éticas y de privacidad."

# Slide 4: Automatizaciones
slide = prs.slides.add_slide(prs.slide_layouts[1])
slide.shapes.title.text = "Automatizaciones con IA"
tf = slide.shapes.placeholders[1].text_frame
tf.text = "En industrias: Robots en fábricas."
p = tf.add_paragraph()
p.text = "En servicios: Chatbots para atención al cliente."
p = tf.add_paragraph()
p.text = "En transporte: Vehículos autónomos."

# Slide 5: Modelos de IA
slide = prs.slides.add_slide(prs.slide_layouts[1])
slide.shapes.title.text = "Modelos de Inteligencia Artificial"
tf = slide.shapes.placeholders[1].text_frame
tf.text = "Tipos: Aprendizaje supervisado, no supervisado, por refuerzo."
p = tf.add_paragraph()
p.text = "Ejemplos: GPT para texto, ResNet para imágenes."
# Add 3D cube
shape = slide.shapes.add_shape(MSO_SHAPE.CUBE, Inches(5), Inches(3), Inches(2), Inches(2))

# Slide 6: Futuro
slide = prs.slides.add_slide(prs.slide_layouts[1])
slide.shapes.title.text = "Futuro de la IA"
tf = slide.shapes.placeholders[1].text_frame
tf.text = "Singularidad tecnológica: Cuando la IA supera la inteligencia humana."
p = tf.add_paragraph()
p.text = "Desafíos: Ética, regulación y equidad."

# Slide 7: Conclusión
slide = prs.slides.add_slide(prs.slide_layouts[1])
slide.shapes.title.text = "Conclusión"
tf = slide.shapes.placeholders[1].text_frame
tf.text = "La IA tiene el potencial para transformar el mundo."
p = tf.add_paragraph()
p.text = "Es crucial desarrollar y usar la IA de manera responsable."

prs.save('/vercel/sandbox/presentacion_ia.pptx')