import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Api() {
  const [update, setUpdate] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [perPage, setPerPage] = useState(3)
  var pages = [1, 2, 3]

  useEffect(() => {

    // fetch('https://api.tvmaze.com/seasons/1/episodes')
    // .then((res)=>{
    //     return res.json()

    // })

    // .then((data)=>setUpdate(data))

    // .catch((err)=>console.log(err))


    axios.get("https://api.tvmaze.com/seasons/1/episodes")
      .then((res) => {
        // console.log(res.data);
        setUpdate(res.data)
      })

  }, [])

  const lastPost = currentPage * perPage;
  const firstPage = lastPost - perPage;
  const currentPost = update.slice(firstPage, lastPost)



  let a = useNavigate()
  const nextPage = (value) => {
    // console.log(value);
    a(`/details/${value}`)

  }

  const pageChange = (value) => {
    setCurrentPage(value * 4)
    setPerPage((value * 4) + 3)

  }

  return (

    <div className='row'>
      
      {
        update.map((updates, i) => {
          return (i >= currentPage && i <= perPage) ?

            <div className='col'>
              <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant="top" src={updates.image.medium} />
                <Card.Body>

                  <Card.Title className='name' style={{ fontSize: '17px' }}>Movie : {updates.name}</Card.Title>

                </Card.Body>
                <ListGroup className="list-group-flush">
                  {/* <ListGroup.Item>AirDate:{updates.airdate}</ListGroup.Item>
                <ListGroup.Item>AirTime:{updates.airtime}</ListGroup.Item>
                <ListGroup.Item>RunTime:{updates.runtime}Mins</ListGroup.Item>
                <ListGroup.Item>Ratings:{updates.rating.average}</ListGroup.Item> */}
                </ListGroup>
                <Card.Body>
                  <Button variant="primary" onClick={() => nextPage(updates.id)}>More Info</Button>{' '}

                </Card.Body>
              </Card>






            </div>
            :""

      })

      }
      <div className='pagebtnn'>
        {
          pages.map((e, i) => {
            return (
           
                <button onClick={() => { pageChange(i) }} className='pagebtn'>{e}</button>
           
            )
          })
        }

      </div>


    </div>
  )
}

export default Api


