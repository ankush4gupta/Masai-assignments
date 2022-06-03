import { Avatar ,Wrap,WrapItem } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
export const UserProfile = ()=>{
    const user  =  useSelector((store)=>{store.user});
    console.log(user)
    return <div className="user-profile">
        <Wrap>
            <WrapItem>
                <Avatar size='xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{user?user.email:"Something"}
            </WrapItem>
        </Wrap>
    </div>
}