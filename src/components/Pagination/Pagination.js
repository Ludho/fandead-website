import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

const PaginationComponent = ({props}) =>  {
    return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
    <Pagination>
        {props.currentPage>1 &&  <Pagination.Prev onClick={() => props.paginate(props.currentPage-1)} />}
        {props.currentPage>3 &&  <Pagination.Item onClick={() => props.paginate(1)}>{1} </Pagination.Item>}
        {props.currentPage>5 &&  <Pagination.Ellipsis onClick={() => props.paginate(props.currentPage-3)}/>}
        {props.currentPage===5 &&  <Pagination.Item onClick={() => props.paginate(2)}>{2} </Pagination.Item>}

        {props.currentPage>2 &&  <Pagination.Item onClick={() => props.paginate(props.currentPage-2)}>{props.currentPage-2} </Pagination.Item>}
        {props.currentPage>1 &&  <Pagination.Item onClick={() => props.paginate(props.currentPage-1)}>{props.currentPage-1} </Pagination.Item>}

        

        <Pagination.Item active>{props.currentPage}</Pagination.Item>
        
        {props.currentPage+1<=props.lastPage &&  <Pagination.Item onClick={() => props.paginate(props.currentPage+1)}>{props.currentPage+1}</Pagination.Item>}
        {props.currentPage+2<=props.lastPage &&  <Pagination.Item onClick={() => props.paginate(props.currentPage+2)}>{props.currentPage+2}</Pagination.Item>}

        {props.currentPage===props.lastPage-4 &&  <Pagination.Item onClick={() => props.paginate(props.lastPage-1)}>{props.lastPage-1} </Pagination.Item>}
        {props.currentPage<props.lastPage-4 &&  <Pagination.Ellipsis onClick={() => props.paginate(props.currentPage+3)}/>}
        {props.currentPage<props.lastPage-2 &&  <Pagination.Item onClick={() => props.paginate(props.lastPage)}>{props.lastPage}</Pagination.Item>}
        {props.currentPage<props.lastPage &&  <Pagination.Next onClick={() => props.paginate(props.currentPage+1)}/>}
        

    </Pagination>
    </div>
    )
}

export default PaginationComponent;