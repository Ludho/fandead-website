import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

const PaginationComponent = ({props}) =>  {

    let currentPage = props.currentPage;
    let lastPage = props.lastPage;
    let lowpage = lastPage<10;
    let pageItems = [];
    if(lowpage){
        if(currentPage>1){pageItems.push(<Pagination.Prev onClick={() => props.paginate(currentPage-1)} />);}
        for (let  i = 1; i < lastPage; i++) {
            if(i===currentPage){
                pageItems.push(<Pagination.Item active onClick={() => props.paginate(i)}>{i} </Pagination.Item>);
            }else{
                pageItems.push(<Pagination.Item onClick={() => props.paginate(i)}>{i} </Pagination.Item>);
            }
        }
        if(currentPage<lastPage) {pageItems.push(<Pagination.Next onClick={() => props.paginate(currentPage+1)}/>);}

        return <div style={{ display: 'flex', padding: 30 , justifyContent:'center',margin: 0, width:'100%'}}><Pagination>{pageItems}</Pagination></div>;

    }else{


    return (<>

    {currentPage<6 &&
        <div style={{ display: 'flex', padding: 30 , justifyContent:'center',margin: 0, width:'100%'}}>
            <Pagination>
                {currentPage>1 &&  <Pagination.Prev onClick={() => props.paginate(currentPage-1)} />}

                {currentPage===1?
                    <Pagination.Item active onClick={() => props.paginate(currentPage)}>{currentPage} </Pagination.Item>:
                    <Pagination.Item onClick={() => props.paginate(1)}>{1} </Pagination.Item>
                }
                {currentPage===2?
                    <Pagination.Item active onClick={() => props.paginate(currentPage)}>{currentPage} </Pagination.Item>:
                    <Pagination.Item onClick={() => props.paginate(2)}>{2} </Pagination.Item>
                }
                {currentPage===3?
                    <Pagination.Item active onClick={() => props.paginate(currentPage)}>{currentPage} </Pagination.Item>:
                    <Pagination.Item onClick={() => props.paginate(3)}>{3} </Pagination.Item>
                }
                {currentPage===4?
                    <Pagination.Item active onClick={() => props.paginate(currentPage)}>{currentPage} </Pagination.Item>:
                    <Pagination.Item onClick={() => props.paginate(4)}>{4} </Pagination.Item>
                }
                {currentPage===5?
                    <Pagination.Item active onClick={() => props.paginate(currentPage)}>{currentPage} </Pagination.Item>:
                    <Pagination.Item onClick={() => props.paginate(5)}>{5} </Pagination.Item>
                }
                <Pagination.Item onClick={() => props.paginate(6)}>{6} </Pagination.Item>
                <Pagination.Item onClick={() => props.paginate(7)}>{7} </Pagination.Item>
                <Pagination.Ellipsis onClick={() => props.paginate(8)}/>
                <Pagination.Item onClick={() => props.paginate(lastPage)}>{lastPage}</Pagination.Item>
                <Pagination.Next onClick={() => props.paginate(currentPage+1)}/>
            </Pagination>
        </div>
    }

    {currentPage>lastPage-5 &&
        <div style={{ display: 'flex', padding: 30 , justifyContent:'center',margin: 0, width:'100%'}}>
            <Pagination>
                <Pagination.Prev onClick={() => props.paginate(currentPage-1)} />
                <Pagination.Item onClick={() => props.paginate(1)}>{1} </Pagination.Item>
                <Pagination.Ellipsis onClick={() => props.paginate(lastPage-7)}/>
                <Pagination.Item onClick={() => props.paginate(lastPage-6)}>{lastPage-6} </Pagination.Item>
                <Pagination.Item onClick={() => props.paginate(lastPage-5)}>{lastPage-5} </Pagination.Item>

                {currentPage===lastPage-4?
                    <Pagination.Item active onClick={() => props.paginate(currentPage)}>{currentPage} </Pagination.Item>:
                    <Pagination.Item onClick={() => props.paginate(lastPage-4)}>{lastPage-4} </Pagination.Item>
                }
                {currentPage===lastPage-3?
                    <Pagination.Item active onClick={() => props.paginate(currentPage)}>{currentPage} </Pagination.Item>:
                    <Pagination.Item onClick={() => props.paginate(lastPage-3)}>{lastPage-3} </Pagination.Item>
                }
                {currentPage===lastPage-2?
                    <Pagination.Item active onClick={() => props.paginate(currentPage)}>{currentPage} </Pagination.Item>:
                    <Pagination.Item onClick={() => props.paginate(lastPage-2)}>{lastPage-2} </Pagination.Item>
                }
                {currentPage===lastPage-1?
                    <Pagination.Item active onClick={() => props.paginate(currentPage)}>{currentPage} </Pagination.Item>:
                    <Pagination.Item onClick={() => props.paginate(lastPage-1)}>{lastPage-1} </Pagination.Item>
                }
                {currentPage<lastPage &&  <Pagination.Next onClick={() => props.paginate(currentPage+1)}/>}
            </Pagination>
        </div>
    }

    { currentPage>5 && currentPage<lastPage-4 &&
            <div style={{ display: 'flex', padding: 30 , justifyContent:'center',margin: 0, width:'100%'}}>
            <Pagination>
                {currentPage>1 &&  <Pagination.Prev onClick={() => props.paginate(currentPage-1)} />}
                {currentPage>3 &&  <Pagination.Item onClick={() => props.paginate(1)}>{1} </Pagination.Item>}
                {currentPage>5 &&  <Pagination.Ellipsis onClick={() => props.paginate(currentPage-3)}/>}
                {currentPage===5 &&  <Pagination.Item onClick={() => props.paginate(2)}>{2} </Pagination.Item>}
                
                {currentPage>2 &&  <Pagination.Item onClick={() => props.paginate(currentPage-2)}>{currentPage-2} </Pagination.Item>}
                {currentPage>1 &&  <Pagination.Item onClick={() => props.paginate(currentPage-1)}>{currentPage-1} </Pagination.Item>}
        
                
                <Pagination.Item active>{currentPage}</Pagination.Item>
                
                {currentPage+1<=lastPage &&  <Pagination.Item onClick={() => props.paginate(currentPage+1)}>{currentPage+1}</Pagination.Item>}
                {currentPage+2<=lastPage &&  <Pagination.Item onClick={() => props.paginate(currentPage+2)}>{currentPage+2}</Pagination.Item>}
        
                {currentPage===lastPage-4 &&  <Pagination.Item onClick={() => props.paginate(lastPage-1)}>{lastPage-1} </Pagination.Item>}
                {currentPage<lastPage-4 &&  <Pagination.Ellipsis onClick={() => props.paginate(currentPage+3)}/>}
                {currentPage<lastPage-2 &&  <Pagination.Item onClick={() => props.paginate(lastPage)}>{lastPage}</Pagination.Item>}
                {currentPage<lastPage &&  <Pagination.Next onClick={() => props.paginate(currentPage+1)}/>}
                
            </Pagination>
            </div>
    }

    </>

    )
    }
}

export default PaginationComponent;