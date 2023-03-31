import React, {useState} from 'react'

export default function About(props) {
    
    // const [myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor :'white'
    // });
    // const [btnText , setBtnText] = useState("Enable Dark Mode")

    let myStyle = {
        color:props.mode === 'dark'? 'white' : '#042743',
        backgroundColor:props.mode === 'dark'? 'rgb(36 74 104)' : 'white',
        // border : '2px solid',
        borderColor : props.mode==='dark'  ? 'white' : '#042743'
    }

    // const toggleStyle = ()=>{
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border : '1px solid white'
    //         })
    //         setBtnText('Enable Light Mode')
    //     }
    //     else{
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor :'white'
    //         })
    //     }
    // }


  return (
    <div className='container' >
        <h1 className='my-3' style={{color:props.mode === 'dark'? 'white' : '#042743'}}>About us</h1>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 <strong>     Anaylyze your text </strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam temporibus deleniti hic ipsum, voluptas blanditiis porro enim quos placeat, ipsa dolorum asperiores architecto, pariatur dignissimos similique non odit iure? Accusamus.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong> Browser compatible</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ex odio, ipsam ducimus expedita consequatur iusto obcaecati consectetur! Unde praesentium, deserunt officiis necessitatibus sit expedita sunt non esse autem? Ea quis facilis nam iure!
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong> Free to use </strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, provident nemo. Ipsum voluptate rem, mollitia modi voluptatibus dignissimos necessitatibus temporibus facilis fuga debitis sunt maxime reprehenderit ex, impedit quibusdam! Architecto!
                </div>
                </div>
            </div>
            </div>

        {/* <div className="container">
            <button className="btn btn-primary my-4" onClick={toggleStyle}>
                {btnText}
            </button>
        </div> */}
    </div>
  )
}
