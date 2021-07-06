import React from "react";
import {
  Button,
  Header,
  Modal,
  ModalActions,
  ModalContent,
  ModalHeader,
} from "semantic-ui-react";

function ProductAttributes({ description }) {
  const [modal, setModal] = React.useState(false);
  return (
    <>
      <Header as="h3">About this product</Header>
      <p>{description}</p>
      <Button
        icon="trash alternate outline"
        color="red"
        content="Delete Product"
        onClick={() => setModal(true)}
      />
      <Modal open={modal} dimmer="blurring">
        <ModalHeader>Confirm Delete</ModalHeader>
        <ModalContent>
          <p>Are you sure you want to delete this product?</p>
        </ModalContent>
        <ModalActions>
          <Button content="Cancel" onClick={() => setModal(false)} />
          <Button
            negative
            icon="trash"
            labelPosition="right"
            content="Delete"
            onClick={() => setModal(false)}
          />
        </ModalActions>
      </Modal>
    </>
  );
}

export default ProductAttributes;
