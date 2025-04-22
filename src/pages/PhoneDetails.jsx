import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../components/ui/Button';
import { BsBookmarkPlusFill } from 'react-icons/bs';
import { BsCart4 } from 'react-icons/bs';
import { addFavorite, addToCart, getCart } from '../utils';
import { CartContext } from '../providers/Contexts';

const PhoneDetails = () => {
  const { setCart } = useContext(CartContext);

  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.find(phone => phone.id === parseInt(id));
  // console.log(singlePhone);
  // console.log(data);

  const { name, image, description, storage, camera_info } = singlePhone || {};

  const handleFavorite = () => {
    addFavorite(singlePhone);
  };

  const handleCart = () => {
    // save to local storage  for persistency
    addToCart(singlePhone)
    // update instant UI change  // prv=> [...prv,singlePhone]
    setCart(getCart())
  }

  return (
    <div className="w-full py-5">
      <img
        src={image}
        alt="Phone"
        className="w-full mx-auto md:w-auto mb-5 rounded-4xl"
      />
      <div className="flex justify-between">
        <h1 className="text-5xl font-thin">{name}</h1>
        <div className="flex gap-3">
          <Button
            onClick={handleCart}
            label={<BsCart4 />}
          ></Button>
          <Button
            onClick={handleFavorite}
            label={<BsBookmarkPlusFill />}
          ></Button>
        </div>
      </div>
      <div className="mt-10">
        <p>
          <span className="font-bold">Description:</span> {description}
        </p>
        <p>
          <span className="font-bold">storage:</span> {storage}
        </p>
        <p>
          <span className="font-bold">Camera:</span> {camera_info}
        </p>
      </div>
    </div>
  );
};

export default PhoneDetails;
