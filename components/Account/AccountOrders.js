import {
  Accordion,
  Button,
  Header,
  Icon,
  Image,
  Label,
  List,
  ListContent,
  ListDescription,
  ListHeader,
  ListItem,
  Segment,
} from "semantic-ui-react";
import { useRouter } from "next/router";

function AccountOrders({ orders }) {
  const router = useRouter();

  function mapOrdersToPanels(orders) {
    return orders.map((order) => ({
      key: order._id,
      title: {
        content: <Label color="blue" content={order.createdAt} />,
      },
      content: {
        content: (
          <>
            <ListHeader as="h3">
              Total: ${order.total}
              <Label
                content={order.email}
                icon="mail"
                basic
                horizontal
                style={{ marginLeft: "1em" }}
              />
            </ListHeader>
            <List>
              {order.products.map((p) => (
                <ListItem key={order._id}>
                  <Image avatar src={p.product.mediaUrl} />
                  <ListContent>
                    <ListHeader>{p.product.name}</ListHeader>
                    <ListDescription>
                      {p.quantity} x ${p.product.price}
                    </ListDescription>
                  </ListContent>
                  <ListContent floated="right">
                    <Label tag color="red" size="tiny">
                      {p.product.sku}
                    </Label>
                  </ListContent>
                </ListItem>
              ))}
            </List>
          </>
        ),
      },
    }));
  }

  return (
    <>
      <Header as="h2">
        <Icon name="folder open" />
        Order History
      </Header>
      {orders.length === 0 ? (
        <Segment inverted tertiary color="grey" textAlign="center">
          <Header icon>
            <Icon name="copy outline" />
            No past orders.
          </Header>
          <div>
            <Button onClick={() => router.push("/")} color="orange">
              View Products
            </Button>
          </div>
        </Segment>
      ) : (
        <Accordion
          fluid
          styled
          exclusive={false}
          panels={mapOrdersToPanels(orders)}
        />
      )}
    </>
  );
}

export default AccountOrders;
