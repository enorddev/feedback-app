import React, {useState, version} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'


export default function FeedbackForm() {
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
        
    }
  return (
    <Card>
        <form>
            <h2>How would you rate our service with us?</h2>
                <div className='input-group'>
                    <input onChange={handleTextChange} 
                            type='text' 
                            placeholder='Write a review' 
                            value={text}
                    />

                    <Button type='submit' version='primary'>Send</Button>
                </div>
        </form>
    </Card>
  )
}
