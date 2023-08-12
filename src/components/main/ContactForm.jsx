import IconOne from "../../assets/icons/icon-1.png";
import IconThree from "../../assets/icons/icon-3.png";
import IconTwo from "../../assets/icons/icon-2.png";
import React from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const ContactForm = () => {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_c502dyg",
        "template_yviiujh",
        event.target,
        "q63xnC6xyTolLOuPW"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <TitleHeadingContainer id="contacto">
        <TitleHeading>Información de contacto</TitleHeading>
      </TitleHeadingContainer>
      <SectionContact>
        <BoxContainer>
          <Box>
            <ImgBox src={IconOne} />
            <TitleBox>Teléfono</TitleBox>
            <TextBox>926 532 749</TextBox>
          </Box>
          <Box>
            <ImgBox src={IconTwo} />
            <TitleBox>Correo Electrónico</TitleBox>
            <TextBox
              href="tel:926532749"
              target="_blank"
              title="Teléfono Afymos"
            >
              afymos@gmail.com
            </TextBox>
          </Box>
          <Box>
            <ImgBox src={IconThree} />
            <TitleBox>Dirección</TitleBox>
            <TextBox>
              C. Pedro Arias, 87, 13630 Socuéllamos, Ciudad Real
            </TextBox>
          </Box>
        </BoxContainer>

        <Row>
          <Form>
            <InputBox>
              <Input type="text" placeholder="nombre" name="user_name" />
              <Input
                type="number"
                placeholder="teléfono"
                name="user_telephone"
              />
            </InputBox>
            <InputBox>
              <Input type="email" placeholder="email" name="user_telephone" />
              <Input type="text" placeholder="asunto" name="user_telephone" />
            </InputBox>
            <TextArea
              name="user_message"
              placeholder="mensaje"
              id=""
              cols="30"
              rows="10"
            ></TextArea>
            <InputSubmit
              type="submit"
              value="enviar mensaje"
              className="btn"
              onSubmit={sendEmail}
            ></InputSubmit>
          </Form>
          <Iframe
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.115024827591!2d-2.792748684638135!3d39.28564187951258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd68f525d5ea6049%3A0x180a68074859800d!2sAFYMOS!5e0!3m2!1ses!2ses!4v1687676404652!5m2!1ses!2ses"
          ></Iframe>
        </Row>
      </SectionContact>
    </>
  );
};
export default ContactForm;

export const SectionContact = styled.section`
  padding: 2rem 9%;
  box-sizing: border-box;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  @media (max-width: 991px) {
    padding: 1.5rem;
  }
`;
SectionContact.displayName = "SectionContact";

export const TitleHeadingContainer = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  background-color: #071c2f;
  height: 40px;
`;
TitleHeadingContainer.displayName = "TitleHeadingContainer";

export const TitleHeading = styled.h2`
  text-align: center;
  color: #ffc0bc;
  font-size: 2rem;
  font-weight: 400;

  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;
TitleHeading.displayName = "TitleHeading";

export const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-bottom: 2rem;
`;
BoxContainer.displayName = "BoxContainer";

export const Box = styled.div`
  flex: 1 1 25rem;
  background: white;
  padding: 2rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  text-align: center;
  text-decoration: none;
`;
Box.displayName = "Box";

export const ImgBox = styled.img`
  height: 3rem;
`;
ImgBox.displayName = "ImgBox";

export const TitleBox = styled.h3`
  font-size: 1rem;
  color: #071c2f;
  padding: 1rem 0;
`;
TitleBox.displayName = "TitleBox";

export const TextBox = styled.a`
  font-size: 1rem;
  color: #666;
  padding: 0.2rem 0;
  cursor: pointer;
`;
TextBox.displayName = "TextBox";

export const InputBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
InputBox.displayName = "InputBox";

export const TextArea = styled.textarea`
  margin-top: 1rem;
  padding: 1rem;
  font-size: 1rem;
  color: #071c2f;
  background: #f7f7f7;
  border-radius: 0.5rem;
  text-transform: none;
  width: 49%;
  width: 100%;
  height: 20rem;
  resize: none;
`;
TextArea.displayName = "TextArea";

export const Form = styled.form`
  flex: 1 1 50rem;
  padding: 0.5rem 1rem;
`;
Form.displayName = "Form";

export const Iframe = styled.iframe`
  flex: 1 1 30rem;
  width: 100%;
  padding: 1rem;
`;
Iframe.displayName = "Iframe";

export const Input = styled.input`
  margin-top: 1rem;
  padding: 1rem;
  font-size: 1rem;
  color: grey;
  background: #f7f7f7;
  border-radius: 0.5rem;
  text-transform: none;
  width: 49%;

  @media (max-width: 450px) {
    font-size: 1rem;
    width: 100%;
  }
`;
Input.displayName = "Input";

export const Row = styled.div`
  background: white;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap-reverse;
  padding: 1rem;
`;
Row.displayName = "Row";

export const InputSubmit = styled.input`
  margin-top: 1rem;
  display: inline-block;
  padding: 0.8rem 3.5rem;
  border-radius: 0.5rem;
  font-size: 1.7rem;
  color: #071c2f;
  background: #071c2f;
  cursor: pointer;
  text-align: center;
  background: pink;
`;
InputSubmit.displayName = "InputSubmit";
