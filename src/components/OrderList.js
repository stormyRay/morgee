import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import OrderInformation from "./OrderInformation";
import LoadingBar from "./LoadingBar";

class orderList extends Reac.Component{
	constructor(props) {
		super(props);
	}

	render() {
		const {orderList, getOrderList} = this.props;
		const {orders, hasMore, page} = orderList;
		var orderInfoList = [];
		for(var i = 0; i < orders.length; i++){
			orderInfoList.push(
				<OrderInformation key={orders[i].orderNumber} {...orders[i]} />
			);
		}
		renturn (
			<div className="order-list-container">
				<InfiniteScroll hasMore={hasMore} loadMore={() => getOrderList(page)} loader={<LoadingBar />}>
						{ShowingImages}
				</InfiniteScroll>
			</div>
		)
	}
}

export default orderList;