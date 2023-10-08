export const FormSubmitConfig: React.FC = () => {
  return (
    <>
      <input
        type="hidden"
        name="_autoresponse"
        value="Thanks for reaching out! I will respond to you as soon as possible :) | Obrigado por me contatar! Vou te responder assim que possível :)"
      ></input>
      <input
        type="hidden"
        name="_subject"
        value="Nova menságem em Portifólio"
      ></input>
      <input
        type="hidden"
        name="_next"
        value="http://localhost:3000/#contact"
      ></input>
      <input type="hidden" name="_template" value="box" />
    </>
  )
}
