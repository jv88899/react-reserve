import {
  Header,
  HeaderSubheader,
  Icon,
  Label,
  Segment,
} from "semantic-ui-react";
import formatDate from "../../utils/formatDate";

function AccountHeader({ role, email, name, createdAt }) {
  return (
    <Segment secondary inverted color="violet">
      <Label
        color="teal"
        size="large"
        ribbon
        icon="privacy"
        style={{ textTransform: "capitalize" }}
        content={role}
      />
      <Header inverted textAlign="center" as="h1" icon>
        <Icon name="user" />
        {name}
        <HeaderSubheader>{email}</HeaderSubheader>
        <HeaderSubheader>Joined {formatDate(createdAt)}</HeaderSubheader>
      </Header>
    </Segment>
  );
}

export default AccountHeader;
