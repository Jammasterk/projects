import React from "react"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField";
import {CTX} from "./Store"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2)
  },

  title:{
      alignItem: "center"
  },
  flex: {
    display: "flex",
    alignItem: "center",
  },
  topicsWindow: {
    width: "40%",
    height: "300px",
    borderRight: "1px solid grey"
},
chatWindow: {
    width: "70%",
    height: "300px",
    marginLeft: "20px"
  },
  chatBox: {
    width: "85%",
  },
  button: {
    width: "15%",
  },
}));


export default function Dashboard(){
    
    const classes = useStyles()

const {allChats, sendChatAction, user} = React.useContext(CTX)
const topics = Object.keys(allChats)

// Local State
const [activeTopic, changeActiveTopic] =  React.useState(topics[0])
    const [textValue, changeTextValue] = React.useState('')


    return (
      <Paper className={classes.root}>
        <div className={classes.title}>
          <Typography variant="h4" component="h4">
            React Chat
          </Typography>
          <Typography variant="h5" component="h5">
            {activeTopic}
          </Typography>
        </div>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {topics.map((topic) => (
                <ListItem onClick={e => changeActiveTopic(e.target.innerText)} key={topic} button>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}>
            {
            allChats[activeTopic].map((chat, i) => (
              <div className={classes.flex} key={i}>
                <Chip label={chat.name} className={classes.chip} />
                <Typography variant="body1" gutterBottom>{chat.msg}</Typography>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.flex}>
          <TextField
            id="standard-textarea"
            label="Write a chat"
            className={classes.chatBox}
            value={textValue}
            onChange={e => changeTextValue(e.target.value)}
            multiline
          />

          <Button 
          variant="outlined" 
          color="primary"
          className={classes.button}
          onClick={() => {
              sendChatAction({name: user, msg: textValue, topic: activeTopic});
              changeTextValue('')
          }}
          >
            Submit
          </Button>
        </div>
      </Paper>
    );
}
