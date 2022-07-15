import React from 'react'
import ReactDOM from 'react-dom/client'
import CommentDetail from './CommentDetail'


const App = () => {
    return (
        <div className='ui container comments'>
            <CommentDetail/>
        </div>
    )
}

const domContainer = document.querySelector('#root')
const root = ReactDOM.createRoot(domContainer)
root.render(<App/>)
