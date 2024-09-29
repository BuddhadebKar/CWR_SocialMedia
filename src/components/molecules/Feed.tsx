import { Button } from '@nextui-org/button';
import { Card } from '@nextui-org/card';
import { collection, getDocs } from "firebase/firestore";
import { Forward, MessageCircleDashed, ThumbsUp } from 'lucide-react';
import { useState } from 'react';
import { db } from '../../lib/firebase';
import NewPostForm from './newPostForm';



interface Post {
  user: string,
  title: string,
  description: string,
  imageUrl: string
}



const Feed = () => {

  const [posts, setPosts] = useState<Post[]>([])


  const q = collection(db, "posts")

  const getAllPosts = async () => {
    let postArray: any[] = []
    await getDocs(q).then((docs) => {
      docs.forEach((doc) => {
        postArray.push(doc.data())
      })
      setPosts(postArray)
    })
  }


  setInterval(()=>{
    getAllPosts();
  },3000)

  let count = 0
 async function like(){
  count++;
 }


  return (
    <main>
      <div className='fixed p-4'>
        <NewPostForm></NewPostForm>
        </div>
      <div className='w-full  flex flex-col justify-center items-center p-8'>
        <div className='grid grid-cols-1 gap-4'>
          {
            posts.map((values, index) => {
              return (
                <Card className='w-80 h-[28rem] top-14 bg-violet-200' key={index}>
                  <div className='rounded-lg'>
                    <img src={values.imageUrl} alt="" />
                  </div>
                  <div className='p-3'>
                  <p>User| {values.user}</p>
                  <p>Title: {values.title}</p>
                  <p>Description: {values.description}</p>
                  </div>
                  <div className='p-3 gap-4 flex flex-row justify-center items-center'>
                  <Button onClick={like}><ThumbsUp /></Button>
                  <Button><MessageCircleDashed /></Button>
                  <Button><Forward /></Button>
                  </div>
                </Card>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}

export default Feed