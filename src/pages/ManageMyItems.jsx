import React, { Suspense, use, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { myProfilePromise } from '../API/profileApi';
import LostItemList from '../Components/lostItemList';
import { useLoaderData } from 'react-router';

const ManageMyItems = () => {

  const { user } = use(AuthContext);

  const initialItems = useLoaderData();
  const [items, setItems] = useState(initialItems);

  return (
    <div>
      <Suspense>
        <LostItemList myProfilePromise={myProfilePromise(user.email)}
        items={items}
        setItems = {setItems}
        
        >


        </LostItemList>
      </Suspense>
    </div>
  );
};

export default ManageMyItems;