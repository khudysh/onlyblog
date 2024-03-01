import { Button, Modal } from 'antd';
import { useState, useEffect, memo } from 'react';
import { getSubs } from '../../store/blog/blogActions';
import { subscriptionType } from '../../store/blog/blogTypes';
import { userType } from '../../store/user/userTypes';
import { useAppDispatch } from '../../hooks/hooksState';

const UserSubscriptions = memo(({ subs, profileUser }: {subs: subscriptionType[], profileUser: userType}) => {
    console.log("Rednder Profile Subs")

    const dispatch = useAppDispatch();
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<subscriptionType>();
  
    const showModal = (sub: subscriptionType) => {
      setIsModalOpen(true);
      setModalContent(sub);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    useEffect(() => {
      dispatch(getSubs(profileUser.id!));
    }, [profileUser])

  return (
    <div className="subs">
      {subs.map((sub) => (
        <Button key={sub.id} type="primary" onClick={() => showModal(sub)}>
          {sub.title}
        </Button>
      ))}
      {modalContent && (
        <Modal title="Subscription Details" open={isModalOpen} onOk={handleOk}>
          <p>{modalContent.title}</p>
          <p>{modalContent.description}</p>
          <p>{modalContent.price}</p>
        </Modal>
      )}
    </div>
  );
});

export default UserSubscriptions;
