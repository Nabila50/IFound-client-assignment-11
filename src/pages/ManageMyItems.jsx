import React, { Suspense, use, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
// import { myProfilePromise } from '../API/profileApi';
import LostItemList from '../Components/lostItemList';
import { useLoaderData } from 'react-router';
import useApplicationApi from '../API/useApplicationApi';

const ManageMyItems = () => {

  const { user } = use(AuthContext);
  console.log('token in the context', user.accessToken)
  const {myProfilePromise} = useApplicationApi();
    

  const initialItems = useLoaderData();
  const [items, setItems] = useState(initialItems);

  return (
    <div>
      <Suspense>
        <LostItemList myProfilePromise={myProfilePromise(user.email, user.accessToken)}
        items={items}
        setItems = {setItems}
        
        >


        </LostItemList>
      </Suspense>
    </div>
  );
};

export default ManageMyItems;