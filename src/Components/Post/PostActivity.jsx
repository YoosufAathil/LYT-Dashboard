import "./postactivity.scss";
import avatar1 from "../../Assets/img/avatar1.jpg";
import avatar2 from "../../Assets/img/avatar2.jpg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    image: avatar1,
    desc: "Success can be achieved by being bold enough...",
    Date: "May 30",
    Number: "1.1k",
  },
  {
    image: avatar2,
    desc: "Knowing what to do can never be okay, you have to...",
    Date: "May 30",
    Number: "3.1k",
  },
  // ...
];
const PostActivity = () => {
  return (
    <div className="postactivity">
      <div className="heading">
        <span> Post Activity</span>
      </div>
      <TableContainer className="content" component={Paper}>
        <Table sx={{ maxWidth: 500 }} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <img src={row.image} alt={row.desc} width={45} height={45} />
                </TableCell>
                <TableCell className="desc" width={220}>
                  {row.desc}
                </TableCell>
                <TableCell className="date">{row.Date}</TableCell>
                <TableCell className="eyetext">
                  <RemoveRedEyeIcon className="icon" />
                  {row.Number}
                </TableCell>
                <TableCell className="more">
                  {" "}
                  <MoreHorizIcon />{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PostActivity;
