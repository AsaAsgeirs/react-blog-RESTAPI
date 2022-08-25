import "./singlePost.css"

export default function Singlepost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
              src="./images/postImg.jpg" 
              alt="" 
              className="singlePostImg" 
            />
            <h1 className="singlePostTitle">
              Lorem ipsum dolor sit, amet.
              <div className="singlePostEdit">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i className="singlePostIcon fa-solid fa-trash-can"></i>
              </div>
            </h1>
            <div className="singlePostInfo">
              <span className="singlePostAuthor">
                Author: <b>Ása</b>
              </span>
              <span className="singlePostDate"> 1 hour ago</span>
            </div>
            <p className="singlePostDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eaque, rerum quasi nobis quidem exercitationem voluptate animi. Vel, temporibus? 
              Vitae dolorum quasi nemo consectetur fugit, assumenda ea eaque non quam laudantium.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eaque, rerum quasi nobis quidem exercitationem voluptate animi. Vel, temporibus? 
              Vitae dolorum quasi nemo consectetur fugit, assumenda ea eaque non quam laudantium.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eaque, rerum quasi nobis quidem exercitationem voluptate animi. Vel, temporibus? 
              Vitae dolorum quasi nemo consectetur fugit, assumenda ea eaque non quam laudantium.
            </p>
        </div>
    </div>
  )
}
