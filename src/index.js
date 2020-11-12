import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const BookList = () => {
    return (
        <section className='booklist'>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            
                     
        </section>
    )
    
}

const Book = () => {return <div className='book'> <Image/>
    <Title/>
    <Author/>
    </div>

}
    

const Image = () => { return <img src="https://images-na.ssl-images-amazon.com/images/I/61rAZbhTV4L.jpg" alt=""/>
    
}

const Title = () => { return <h3>GTA V</h3>
    
}
const Author = () => { return <h4 style={{color: 'black', margintop: '0.25rem'}}>Rockstar Games</h4>
    
}

ReactDOM.render(<BookList/>, document.getElementById('root'))


//css

