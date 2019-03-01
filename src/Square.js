import React from 'react'

const square = (props) => (  <button style={{width:"50px",height:"50px"}}
                                onClick={props.buttonClickHandler}>
                                {props.value}
                            </button>
                        )

export default square                    


