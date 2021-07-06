import {
  Item,
  ItemContent,
  ItemDescription,
  ItemExtra,
  ItemGroup,
  ItemHeader,
  ItemImage,
  Label,
} from "semantic-ui-react";
import AddProductToCart from "./AddProductToCart";

function ProductSummary({ name, mediaUrl, _id, price, sku }) {
  return (
    <ItemGroup>
      <Item>
        <ItemImage size="medium" src={mediaUrl} />
        <ItemContent>
          <ItemHeader>{name}</ItemHeader>
          <ItemDescription>
            <p>${price}</p>
            <Label>SKU: {sku}</Label>
          </ItemDescription>
          <ItemExtra>
            <AddProductToCart productId={_id} />
          </ItemExtra>
        </ItemContent>
      </Item>
    </ItemGroup>
  );
}

export default ProductSummary;
