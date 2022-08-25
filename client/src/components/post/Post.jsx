import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="postInfo">
          <div className="postCats">
              <span className="postCat">Music</span>
              <span className="postCat">Life</span>
          </div>
          <span className="postTitle">
              Lorem ipsum dolor sit amet
          </span>
          <hr/>
          <span className="postDate">1 hour ago</span>
      </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Eius laborum ea similique saepe voluptatibus asperiores, 
          autem esse voluptatem rem eaque obcaecati dolores qui vero amet 
          deleniti mollitia voluptates dolore ratione!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Eius laborum ea similique saepe voluptatibus asperiores, 
          autem esse voluptatem rem eaque obcaecati dolores qui vero amet 
          deleniti mollitia voluptates dolore ratione!
        </p>
    </div>
  )
}
