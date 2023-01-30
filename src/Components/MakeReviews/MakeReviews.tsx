import React, { useState } from 'react'
import "./MakeReviews.scss"
import { Button } from 'antd'

const MakeReviews = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>("")

    const makeReviewsHandler = () => {
        setIsClicked(true)
    }
    const submitButtonHandler = () => {
        console.log(inputValue); //buraya yukaradan post api
    }
    const cancelIt = () => {
        setInputValue("")
        setIsClicked(false)
    }
    return (
        <div className='make-reviews'>
            {isClicked === false &&

                <Button className='write-reviews' onClick={makeReviewsHandler}>Write Reviews</Button>
            }
            {isClicked === true &&
                <div className='form'>
                    <form>
                        <textarea value={inputValue} onChange={e => setInputValue(e.target.value)} />
                    </form>
                    <div className="buttons">

                        <Button className='cancel' onClick={cancelIt}> Cancel</Button>
                        <Button className='submit' onClick={submitButtonHandler}> Submit</Button>
                    </div>
                </div>

            }

        </div>
    )
}

export default MakeReviews