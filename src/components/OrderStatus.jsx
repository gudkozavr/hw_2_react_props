function createNewOrderInfo(arr) {
  return arr.map((el, ind) => {
    return (
      <p key={ind}>
        order: #{el.orderId}: {el.status}
      </p>
    );
  });
}

function OrderStatus(props) {
  return <div>{createNewOrderInfo(props.orders)}</div>;
}
export default OrderStatus;
