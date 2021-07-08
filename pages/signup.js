import {
  Button,
  Form,
  FormInput,
  Icon,
  Message,
  Segment,
} from "semantic-ui-react";
import Link from "next/link";

function Signup() {
  return (
    <>
      <Message
        attached
        icon="settings"
        header="Get Started"
        content="Create a new account"
        color="teal"
      />
      <Form>
        <Segment>
          <FormInput
            fluid
            icon="user"
            iconPosition="left"
            label="Name"
            placeholder="Name"
            name="name"
          />
          <FormInput
            fluid
            icon="envelope"
            iconPosition="left"
            label="Email"
            placeholder="Email"
            name="email"
          />
          <FormInput
            fluid
            icon="lock"
            iconPosition="left"
            label="Password"
            placeholder="Password"
            name="password"
          />
          <Button icon="signup" type="submit" color="orange" content="Signup" />
        </Segment>
      </Form>
      <Message attached="bottom" warning>
        <Icon name="help" />
        Existing user?{" "}
        <Link href="/login">
          <a>Log in here</a>
        </Link>{" "}
        instead.
      </Message>
    </>
  );
}

export default Signup;
