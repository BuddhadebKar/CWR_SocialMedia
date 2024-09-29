import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/modal'
import { useForm } from "react-hook-form"
import { uploadBytes, ref } from "firebase/storage";
import { bucket, db, auth } from "../../lib/firebase";
import { getDownloadURL } from 'firebase/storage'
import { Input } from "@nextui-org/input";
import { Button } from '@nextui-org/button';
import { addDoc, collection } from "firebase/firestore";


export default function NewPostForm() {



  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm();

  





  async function onSubmit(values: any) {

    let postName = ""
    postName = values.image[0].name

    const storageRef = ref(bucket, `post/${postName}`); //now post2 not exist but when we upload its name in folder will be post1.jpeg and also wwe can give any name as we want

    const file = values.image[0]
    await uploadBytes(storageRef, file).then((snapshot) => {
      console.log('uploaded a blob or file', snapshot)
    }
    ).catch((error) => {
      console.log(error)
    });


    const imageUrl: any = await getDownloadURL(storageRef).catch((error) => {
      console.log(error);
    })

    console.log(imageUrl, values.title, values.description, "From get download url")

    if (auth.currentUser) {
      await addDoc(collection(db, "posts"), {
        title: values.title,
        description: values.description,
        imageUrl: imageUrl,
        user: auth.currentUser.email
      });
    }
    else {
      console.log("first login then came")
    }
    console.log(values)
  }

  return (
    <>
      <Button onPress={onOpen} color="primary">Add Post</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add new post</ModalHeader>
              <ModalBody>
                <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)} >
                  <Input
                    autoFocus
                    type="file"
                    accept="image/*"
                    label="Image"
                    placeholder="Upload your image"
                    variant="bordered"
                    {...register("image")}
                  />
                  <Input
                    autoFocus
                    type="text"
                    label="Title"
                    placeholder="Write your title"
                    variant="bordered"
                    {...register("title")}
                  />
                  <Input
                    autoFocus
                    type="text"
                    label="Description"
                    placeholder="Write your description"
                    variant="bordered"
                    {...register("description")}
                  />
                  <Button color="primary" type="submit" onPress={onClose}>
                    Upload
                  </Button>
                </form>

              </ModalBody>

            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
