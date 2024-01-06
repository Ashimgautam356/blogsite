import React,{useContext,useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link, useNavigate  } from 'react-router-dom'
import DOMPurify from "dompurify";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const SinglePost = () => {

  // username of the post is same as the login id .
    const{category,id} = useParams()

    

    const [post, setPost] = useState();

    // const location = useLocation();
    const navigate = useNavigate();
  
    const { currentUser,posts,removing } = useContext(AuthContext);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const respond = await posts();
          setPost(respond);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, [id]);

    const handleDelete = async (id)=>{
      try {
        const respon = await removing(id,(err)=>{
          err && console.log(err)
        });
        navigate("/")
      } catch (err) {
        console.log(err);
      }
    }
  
    const specificPost = post?.filter(po=> po.cate === category && po.id == id);
    const reversed = post?.filter(p => p.cate === category).reverse()

  return (
    <>
      {
          specificPost?.map(p=>{
            return(
              <div className=' flex flex-col items-center w-full pt-16 mb-20' key={p.key}>
                
                <div className='grid grid-cols-4 gap-10 w-4/5'>
                  <div className="md:col-span-3 sm:col-span-4 b w-full">
                    <div className="flex flex-col gap-4 border  w-full">

                      <img src={`/upload/${p?.photo}`} alt="" className="w-full min-h-contain object-cover object-center" />

                      <div className="flex items-center gap-4 text-sm">
                        {p?.photo && <img src={`/upload/${currentUser?.img}`} alt="" className="w-14 h-14 rounded-full object-cover object-center" />}

                        <div className="info">
                          <span className="font-bold">{p?.userName}</span>
                          <p>Posted {moment(p?.date).fromNow()}</p>
                        </div>

                        {currentUser?.id === p.userId &&(
                         
                          <div className="flex gap-2 edit">
                            <Link to={`/newPost?edit=2`} state={p}>
                              <CiEdit className='w-6 h-6 rounded-full cursor-pointer text-white bg-green-400'></CiEdit>
                            </Link>
                            <MdDelete onClick={()=>handleDelete({id:p.id,img:p.photo})} className='w-6 h-6 text-white bg-red-500  rounded-full cursor-pointer'></MdDelete>
                      
                          </div>
                        )}
                      </div>

                      <h1 className="text-2xl font-semibold">{p?.heading}</h1>

                      <p dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(p?.details),
                      }} className='p-4'></p>

                    </div>
                  </div>

                  <div className="md:col-span-1 sm:col-span-4 w-full">
                    <div className="flex flex-col gap-4">

                      <h1 className="text-2xl font-bold text-gray-700 mb-5">Other posts you may like</h1>
                      {
                        reversed.map(otherPost=>{
                          return(
                            <div className="flex flex-col gap-4 " key={otherPost.id}>
                              <img src={`/upload/${otherPost?.photo}`} alt="" className="w-full h-48 object-cover object-center" />
                      
                              <h2 className="text-gray-700" >{otherPost?.heading}</h2>
                      
                              <Link  className="text-center w-max-content px-4 py-2 border border-teal-500 text-teal-500 hover:border-white hover:bg-teal-500 hover:text-black" to={`/${otherPost.cate}/${otherPost.id}`} >
                                Read More
                              </Link>
                            </div>
                      )
                    })
                    
                  }                  
                    </div>
                  </div>
                </div>
              </div>
              
            )
          })



      }  
      
    </>
    
    )
}
export default SinglePost