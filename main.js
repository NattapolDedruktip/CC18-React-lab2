
function App(){
    const stBigDiv = {backgroundColor : '#23272F',color:'white' ,padding:'20px' ,width : '70%',marginLeft:'15%'}
    const stDiv = {backgroundColor: '#343A46', padding:'8px', borderRadius : '8px'}
    const stdP = {fontSize:'24px'}
    const stdli = {fontSize:'20px', lineHeight:'1.8'}
    const stdH1 = {fontSize:'48px'}

    return(
        <div style={stBigDiv}>
            <h1 style={stdH1}>Quick Start</h1>
            <h2>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</h2>
            <div style={stDiv}>
                <ul>
                    <p style={stdP}>You will learn</p>
                    <li style={stdli}>How to create and nest components</li>
                    <li style={stdli}>How to add markup and styles</li>
                    <li style={stdli}>How to display data</li>
                    <li style={stdli}>How to render conditions and lists</li>
                    <li style={stdli}>How to respond to events and update the screen</li>
                    <li style={stdli}>How to share data between components</li>
                </ul>
            </div>
        </div>
    )
}


















ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)