import React from 'react';
import { addToCart, notify } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import Item from '../components/Item';

function ItemListContainer() {
  const state = useSelector(state => state.itemReducer);
  const { items, cartItems } = state;
  const dispatch = useDispatch();

  const handleClick = (item) => {
    if (!cartItems.map((el) => el.itemId).includes(item.id)) {
      dispatch(addToCart(item.id))
      dispatch(notify(`장바구니에 ${item.name}이(가) 추가되었습니다.`))
    }
    else {
      dispatch(notify('이미 추가된 상품입니다.'))
    }
  }

  return (
    <main id="item-list-container">
      <div id="item-list-body">
        <h2>쓸모없는 선물 모음</h2>
        {items.map((item, idx) => <Item item={item} key={idx} handleClick={() => {
          handleClick(item)
        }} />)}
      </div>
    </main>
  );
}

export default ItemListContainer;
