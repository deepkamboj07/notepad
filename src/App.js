import {React,useState,useEffect,useCallback} from 'react';
import './App.css';
import Notes from './component/notesCard/Notes';
import AddNotes from './component/addNotes/AddNotes';
import Header from './component/Header/Header';

function App() {

  const[disform,setdisform]=useState(false);
  const[note,setNote]=useState([]);

  const displayForm=()=>{
    setdisform(true);
  }
  const onClose=()=>{
    setdisform(false);
  }

  const fetchData=()=>{
    var all_notes=localStorage.getItem("notes");
    if(all_notes!=null)
    {
      setNote(JSON.parse(all_notes || "[]"))
    }  
  }

  const deleteData=(id)=>{
    let data=localStorage.getItem("notes");
    data=JSON.parse(data||"[]");
    
    const new_data=data.filter((d,index)=>{
      return index !==id;
    })
    localStorage.setItem("notes",JSON.stringify(new_data));
    fetchData();
  }
  
  const handleData=useCallback((data)=>{
      var all_notes=localStorage.getItem("notes");
      if(all_notes!=null)
      {
        all_notes=JSON.parse(all_notes || "[]");
        all_notes.push(data);
        localStorage.setItem("notes",JSON.stringify(all_notes));
      }
      else
      {
        var new_data=[];
        new_data.push(data)
        localStorage.setItem("notes",JSON.stringify(new_data));
      }
      fetchData();
  },[])

  useEffect(()=>{
    fetchData();
  },[handleData]);

  return (
    <div className="App">
        <Header/>
        {disform && <AddNotes onSub={handleData} close={onClose}/>}
        <Notes notes={note} disClick={displayForm} onDeleteItem={deleteData}/>

    </div>
  );
}

export default App;
