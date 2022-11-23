import React,{useState} from 'react';
import newsContext from './newsContex';

const NewsState = (props) => {
    const host = ' http://localhost:7000';
    const newsInitial = []
    const [news, setNews] = useState(newsInitial)

    const getNews = async () => {

        // api call

        const response = await fetch(`${host}/api/news/fetchfavnews`, {
            method: 'Get', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token':localStorage.getItem('token')
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },

        });
        const json = await response.json()
        console.log(json)
        setNews(json);
    }
    const createNews = async (title, description, imgUrl,newsUrl,author,source) => {
        // TODO: API Call
        //api call
        const response = await fetch(`${host}/api/news/addnews`, {
            method: 'Post', // *GET, POST, PUT, DELETE, etc.

            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },

            body: JSON.stringify({title, description, imgUrl,newsUrl,author,source}) // body data type must match "Content-Type" header
        });
        const fnews =await response.json()
        console.log(fnews);

        //logic

        console.log("Adding a new news");
        
        setNews(news.concat(fnews));
        console.log("new news is added");
    }

      // Delete a Note // use the filter function to remove 
    
      const deleteNews = async (id) => {
        // TODO: API Call

        //api call
        const response = await fetch(`${host}/api/news/deletenews/${id}`, {
            method: 'Delete', // *GET, POST, PUT, DELETE, etc.

            headers: {
                'Content-Type': 'application/json',
                'auth-token':  localStorage.getItem('token')
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
            // body data type must match "Content-Type" header
        });
        const json = response.json()
        console.log(json)

        //logic
        console.log("not with id" + id + "has been deleted");
        // to delete a not  using the fillter function it will filter the note with the given id
        const newNews = news.filter((fnews) => { return fnews._id !== id })
        setNews(newNews)
    }


  return (

    <div>
           <newsContext.Provider value={ { news,getNews, createNews,deleteNews}}>
        {props.children}
    </newsContext.Provider>
    </div>
  )

}

export default NewsState