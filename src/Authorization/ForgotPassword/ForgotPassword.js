import React from 'react'

export default function ForgotPassword() {
const [data, setData] = React.useState({
    email: '',
    code:'',
})

const handleChange = (e) => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    });
}
const handlesubmit=(e)=>{
e.preventDefault();
}
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" onChange={handleChange}/>
            <input type="text" onChange={handleChange}/>
        </form>
    </div>
  )
}
