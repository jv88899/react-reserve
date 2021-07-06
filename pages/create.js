import React from "react";
import {
  Form,
  FormField,
  FormGroup,
  Header,
  Icon,
  Input,
  TextArea,
  Button,
  Image,
  Message,
} from "semantic-ui-react";

const INITIAL_PRODUCT = {
  name: "",
  price: "",
  media: "",
  description: "",
};

function CreateProduct() {
  const [product, setProduct] = React.useState(INITIAL_PRODUCT);
  const [mediaPreview, setMediaPreview] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  function handleChange(event) {
    const { name, value, files } = event.target;
    if (name === "media") {
      setProduct((prevState) => ({ ...prevState, media: files[0] }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setProduct((prevState) => ({ ...prevState, [name]: value }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setProduct(INITIAL_PRODUCT);
    setSuccess(true);
  }

  return (
    <>
      <Header as="h2" block>
        <Icon name="add" color="orange" />
        Create New Product
      </Header>
      <Form success={success} onSubmit={handleSubmit}>
        <Message
          success
          icon="check"
          header="Success"
          content="Your product has been posted"
        />
        <FormGroup widths="equal">
          <FormField
            control={Input}
            name="name"
            label="Name"
            placeholder="Name"
            value={product.name}
            type="text"
            onChange={handleChange}
          />
          <FormField
            control={Input}
            name="price"
            label="Price"
            placeholder="Price"
            value={product.price}
            min="0.00"
            step="0.01"
            type="number"
            onChange={handleChange}
          />
          <FormField
            control={Input}
            name="media"
            type="file"
            label="Media"
            accept="image/*"
            content="Select Image"
            onChange={handleChange}
          />
        </FormGroup>
        <Image src={mediaPreview} rounded centered size="small" />
        <FormField
          control={TextArea}
          name="description"
          label="Description"
          placeholder="Description"
          onChange={handleChange}
          value={product.description}
        />
        <FormField
          control={Button}
          color="blue"
          icon="pencil alternate"
          content="Submit"
          type="submit"
          onChange={handleChange}
        />
      </Form>
    </>
  );
}

export default CreateProduct;
