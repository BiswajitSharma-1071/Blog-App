import React, { useState } from "react";
import SearchBar from "./SearchBar"
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Header from "./Header"
import StartDialog from "./StartDialog"



function App() {
  const [noteList, setNoteList] = useState([]);
  const [deletedNoteList, setDeletedNoteList] = useState([]);
  const [userName, setUserName] = useState("")
  const [openNewpost, setopenNewpost] = useState(false);
  const [openPublishedpost, setopenPublishedpost] = useState(false);



  function addNote(noteContent) {
    setNoteList(prevValues => {
      return [...prevValues, noteContent];
    });
  }

  function deleteItem(id) {
    setDeletedNoteList(prevValues => {
      return [...prevValues,
      {
        index: id,
        note: noteList[id]
      }
      ]
    })

    setNoteList(preValues => {
      return preValues.filter((element, index) => {
        return index !== id;
      });
    });
  }

  function restoreContent() {
    let deleItems = deletedNoteList;
    let delItems = deleItems.pop();
    let ind = delItems.index
    let noteData = delItems.note
    let newItems = [...noteList];

    newItems.splice(ind, 0, noteData);

    setNoteList([...newItems])
    setDeletedNoteList([...deleItems]);
  }

  function showName(name) {
    setUserName(name)
  }

  
  return (
    <div >
    <StartDialog displayName={showName} />
      <Header NameUser={userName} />
      <button className="buttonNewPost"
        onClick={() => {
          setopenNewpost(true)
          setopenPublishedpost(false)
        }}
        onDoubleClick={() => setopenNewpost(false)}>
        New Posts
      </button>
      <SearchBar data={noteList} />
      <button className="buttonPublishPost"
        onClick={() => {
          setopenNewpost(false)
          setopenPublishedpost(true)
        }}
        onDoubleClick={() => setopenPublishedpost(false)}>
        Published Posts
      </button>
      {openNewpost && <CreateArea onAdd={addNote}
        deletedListNote={deletedNoteList}
        restoreItems={restoreContent}
        onClear={() => {
          if (noteList.length && window.confirm("This action will remove all your notes ")) {
            setNoteList([])
          }
          else if (!noteList.length) {
            return ("No Posts to clear.")
          }
        }}
      />}
      {openPublishedpost && !openNewpost && (noteList.length !== 0) && noteList.map((value, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            onDelete={deleteItem}
          />
        );
      })
      }

      <Footer />
    </div >
  );
}

export default App;