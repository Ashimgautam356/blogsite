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

    const{category,id} = useParams()

    

    const [post, setPost] = useState();

    // const location = useLocation();
    const navigate = useNavigate();
  
    const { currentUser,posts } = useContext(AuthContext);
    console.log(currentUser)
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

    const handleDelete = async ()=>{
      try {
        await axios.delete(`/posts/${id}`);
        navigate("/")
      } catch (err) {
        console.log(err);
      }
    }
  
    const getText = (html) =>{
      const doc = new DOMParser().parseFromString(html, "text/html")
      return doc.body.textContent
    }
  
    const specificPost = post?.filter(po=> po.cate === category && po.id == id);
    console.log(specificPost)
    
  return (
    <>
      {
          specificPost?.map(p=>{
            return(
              <div className="flex gap-8 pt-16">

              <div className="flex-5">
                <div className="flex flex-col gap-4">
            
                  <img src={`/upload/${p?.photo}`} alt="" className="w-full h-72 object-cover" />
            
                  <div className="flex items-center gap-4 text-sm">
                    {p?.photo && <img src={post?.userImg} alt="" className=" border border-black w-12 h-12 rounded-full object-cover" />}
            
                    <div className="info">
                      <span className="font-bold">{currentUser?.userName}</span>
                      <p>Posted {moment(p?.date).fromNow()}</p>
                    </div>
            
                    {currentUser?.id === p.userId&& (
                      <div className="flex gap-2 edit">
                        <Link to={`/write?edit=2`} state={post}>
                          <CiEdit className='w-6 h-6 rounded-full cursor-pointer text-white bg-green-400'></CiEdit>
                        </Link>
                        <MdDelete onClick={handleDelete} className='w-6 h-6 text-white bg-red-500  rounded-full cursor-pointer'></MdDelete>
                  
                      </div>
                    )}
                  </div>
            
                  <h1 className="text-2xl font-semibold">{p?.heading}</h1>
            
                  <p dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(p?.details),
                  }}></p>
            
                </div>
              </div>
            
              <div className="flex-2">
                <div className="flex flex-col gap-4">
            
                  <h1 className="text-lg text-gray-700">Categories</h1>
                  <div className="flex flex-col gap-4 post">
                  {
                    post?.map(otherPost=>{
                      return(
                        otherPost.cate === category && otherPost.id != id ? 
                        <>
                          <img src={`/upload/${otherPost?.photo}`} alt="" className="w-full h-48 object-cover" />
                  
                          <h2 className="text-gray-700">{otherPost?.heading}</h2>
                  
                          <button className="w-max-content px-4 py-2 border border-teal-500 text-teal-500 hover:border-white hover:bg-teal-500 hover:text-black">
                            Read More
                          </button>
                        </>
                  :
                  ''
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