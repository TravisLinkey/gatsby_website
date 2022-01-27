import React from "react";
import { Layout } from "components";
import {
  ContactWrapper,
  LabelWrapper,
  SubmitButton,
} from "../components/style";

const Contact = (props) => {
  return (
    <Layout>
      <ContactWrapper>
        <h1>Contact us</h1>
        <form
          class="ui form"
          action="https://formspree.io/f/moqrjoyy"
          method="POST"
        >
          <LabelWrapper>
            <label for="email">
              Email
              <input type="email" required id="email" />
            </label>
          </LabelWrapper>
          <LabelWrapper>
            <label for="message">
              Message
              <textarea rows="5" cols="23" required id="message" />
            </label>
          </LabelWrapper>
          <SubmitButton type="submit">Send</SubmitButton>
        </form>
      </ContactWrapper>
    </Layout>
  );
};

export default Contact;
