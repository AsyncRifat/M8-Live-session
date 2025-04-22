import React, { useEffect, useState } from 'react';
import PhoneCart from '../components/PhoneCart';
import { getFavorites, removeFavorite } from '../utils';
import EmptyState from '../components/ui/EmptyState';

const Favorites = () => {
  const [displayPhones, setDisplayPhones] = useState([]);

  useEffect(() => {
    const favorites = getFavorites();
    setDisplayPhones(favorites);
  }, []);

  const handleDelete = id => {
    removeFavorite(id);
    setDisplayPhones(getFavorites());
  };

  if (displayPhones.length < 1) return <EmptyState></EmptyState>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <p p={p}>uqtqe</p> */}

        {displayPhones.map(phone => (
          <PhoneCart
            key={phone.id}
            phone={phone}
            deletable={true}
            handleDelete={handleDelete}
          ></PhoneCart>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
