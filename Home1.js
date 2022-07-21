import React ,{useState,useEffect}  from 'react';
import ReactDOM from 'react-dom/client';

const Home1=()=>{

  const [name,setName]=useState();
  const [age,setAge]=useState();
  const[arr,setArr]=useState();

  useEffect(()=>{  //componentDidmount
    console.log('called');
  },[age,name,arr]);

  return(
    <div>Home1{name}{age} {arr}
    <button onClick={()=>setName('edwin')}>Cleckme</button>
    <button onClick={()=>setAge('25')}>Cleckme</button>
    <button onClick={()=>setArr(['edwin',"",'raja','mani'])}>Cleckme</button>
    </div>
  )
}

const root= ReactDOM.createRoot((document.getElementById('root')));

root.render(<Home1/>)

export default Home1;