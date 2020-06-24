import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';


function StartDialog(props) {

    const [open, setOpen] = useState(true);
    const [name, setName] = useState("")



    return (
        <div>
            <Dialog open={open} onClose={() => {
                setOpen(false);
            }}
                aria-labelledby="form-dialog-title" maxWidth="xs"
                style={{
                    textAlign: "center",
                    backgroundColor: "#ebfa1a",
                    fontFamily: "Arial"
                }}>
                <DialogTitle id="form-dialog-title"
                    style={{
                        textAlign: "center",
                        backgroundColor: "#beee4d",
                        fontFamily: "Arial"
                    }}>
                    Hi There !!!
        </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        style={{
                            textAlign: "center",
                            fontFamily: "Arial"
                        }}>
                        Enter Your Name:
                    </DialogContentText>
                    <Input
                        onChange={(event) => {
                            const nameVar = event.target.value
                            setName(nameVar)
                        }}
                        autoFocus
                        margin="none"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setOpen(false)
                        props.displayName(name)
                    }}
                        color="primary">
                        Okay
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}


export default StartDialog;