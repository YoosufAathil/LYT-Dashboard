import "./postactivity.scss";
import avatar1 from "../../Assets/img/avatar1.jpg";
// import avatar2 from "../../Assets/img/avatar2.jpg";
import eyeicon from "../../Assets/img/eyeicon.png";
import spinner from "../../Assets/img/spinner.png";

const PostActivity = () => {
  return (
    <div className="postactivity">
      <div className="heading">
        <span> Post Activity</span>
      </div>
      <div className="content">
        {/* <table>
          <tbody>
            <tr>
              <td className="1st">
                <img src={avatar1} alt="" className="profile" />
              </td>
              <td className="2nd">
                Success can be achieved by being bold enough...
              </td>
              <td className="3rd">May 30</td>
              <td>
                <img src={eyeicon} alt="" className="icon" />
              </td>
              <td className="4th">1.1k</td>
              <td className="5th">
                <img src={spinner} alt="" className="icon" />
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default PostActivity;
