// import { Button } from '@nextui-org/button'
// import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/modal'
// import { Input } from '@nextui-org/input'
// import { useForm } from 'react-hook-form';
// import { ref, set, get, child } from "firebase/database";
// import { db } from "../../lib/firebase"
// import { auth } from "../../lib/firebase"
// import { useEffect, useState } from 'react';

// const Account = () => {

//   const { isOpen, onOpen, onOpenChange } = useDisclosure();
//   const { register, handleSubmit } = useForm();
//   const [userData, setUserData] = useState({ Bio: 'Devoloper', username: 'Buddhadeb kar' })

//   useEffect(() => {
//     get(child(ref(db), `users/${auth.currentUser?.uid}`)).then((snapshot) => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val());
//         setUserData({
//           username: snapshot.val().name,
//           Bio: snapshot.val().bio
//         })
//       }
//       else {
//         console.log("No data available");
//       }
//     }).catch((error) => {
//       console.error(error);
//     });
//   }, [])



//   async function onSubmit(values: any) {
//     set(ref(db, 'users/' + auth.currentUser?.uid), {
//       username: values.name,
//       Bio: values.bio

//     });
//   }



//   return (
//     <>
//       <h1>Profile Picture</h1>
//       <h1>Name: {userData.username}</h1>
//       <h1>Bio: {userData.Bio}</h1>

//       <Button onPress={onOpen} color="primary">Edit Profile</Button>
//       <Modal
//         isOpen={isOpen}
//         onOpenChange={onOpenChange}
//         placement="top-center"
//       >
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
//               <ModalBody>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                   <Input
//                     autoFocus
//                     type="text"
//                     label="Name"
//                     placeholder="Enter your name"
//                     {...register("name")}
//                   />
//                   <Input
//                     autoFocus
//                     type="text"
//                     label="Bio"
//                     placeholder="Enter your bio"
//                     {...register("bio")}
//                   />
//                   <Button color="primary" type="submit" onPress={onClose}>
//                     Upload
//                   </Button>
//                 </form>

//               </ModalBody>

//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   )
// }

// export default Account

const Account = () => {
  return (
    <div>Account</div>
  )
}

export default Account