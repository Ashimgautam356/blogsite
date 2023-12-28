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

    const{cate,id} = useParams()
    console.log(cate,id)    

    

    const [post, setPost] = useState();

    // const location = useLocation();
    const navigate = useNavigate();
  
    const { currentUser,posts } = useContext(AuthContext);
  
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

    console.log(post)
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
  

  return (
    <div className="flex gap-8">

    <div className="flex-5">
      <div className="flex flex-col gap-4">
  
        {/* <img src={`../upload/${post?.img}`} alt="" className="w-full h-72 object-cover" /> */}
  
        <div className="flex items-center gap-4 text-sm">
          {post?.photo && <img src={post?.userImg} alt="" className="w-12 h-12 rounded-full object-cover" />}
  
          <div className="info">
            <span className="font-bold">{post?.username}</span>
            <p>Posted {moment(post?.date).fromNow()}</p>
          </div>
  
          {currentUser?.username === post?.username && (
            <div className="flex gap-2 edit">
              <Link to={`/write?edit=2`} state={post}>
                <CiEdit className='w-5 h-5 cursor-pointer'></CiEdit>
                {/* <img src={Edit} alt="" className="w-5 h-5 cursor-pointer" /> */}
              </Link>
              <MdDelete onClick={handleDelete} className='w-5 h-5 cursor-pointer'></MdDelete>
              {/* <img onClick={handleDelete} src={Delete} alt="" className="w-5 h-5 cursor-pointer" /> */}
            </div>
          )}
        </div>
  
        <h1 className="text-2xl font-semibold">{post?.title}</h1>
  
        <p dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(post?.desc),
        }}></p>
  
      </div>
    </div>
  
    <div className="flex-2">
      <div className="flex flex-col gap-4">
  
        <h1 className="text-lg text-gray-700">Categories</h1>
  
        <div className="flex flex-col gap-4 post">
  
          {/* <img src={`../upload/${post?.cat?.img}`} alt="" className="w-full h-48 object-cover" /> */}
  
          <h2 className="text-gray-700">{post?.cat?.name}</h2>
  
          <button className="w-max-content px-4 py-2 border border-teal-500 text-teal-500 hover:border-white hover:bg-teal-500 hover:text-black">
            Read More
          </button>
  
        </div>
      </div>
    </div>
  
  </div>
  )
}

export default SinglePost