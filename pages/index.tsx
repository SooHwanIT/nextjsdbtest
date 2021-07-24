import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

interface StateProps {
  count: number;
  user_id : string;
  user_name : string;
  user_etc : string;
}

// const 

const IndexPage = () => {
  
  const [count,setCount] = useState<number>(0);
  const [user_id, setUser_id] = useState<string>("");
  const [user_name, setUser_name] = useState<string>("");
  const [user_etc, setUser_etc] = useState<string>("");
  const [state, setState] = useState<StateProps[]>([]);
  
  const onChangeId = (input:string) =>{
    setUser_id(input)
  }
  const onChangeName = (input:string) =>{
    setUser_name(input)
  }
  const onChangeEtc = (input:string) =>{
    setUser_etc(input)
  }
  const onClickButton = () =>{
    setState([...state,{count,user_id,user_name,user_etc}])
    setCount(count+1)
    console.log(state)
  }
    return (
    <div>
      <input onChange={e => onChangeId(e.target.value)}/>
      <input onChange={e => onChangeName(e.target.value)}/>
      <input onChange={e => onChangeEtc(e.target.value)}/>
      <button onClick={onClickButton}> 전송 </button>
      <div>
        {state.map(s => 
          <div key={s.count}>
            <span>{s.count}</span>
            <span>id : {s.user_id},</span>
            <span>name : {s.user_name},</span>
            <span>etc : {s.user_etc},</span>
          </div>
          )}
      </div>
    </div>
  )
}

export default IndexPage
