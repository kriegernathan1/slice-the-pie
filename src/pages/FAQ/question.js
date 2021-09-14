function Question(props){


    return(
        <div className='faq-container'>
            <div className='question'>
                <p>
                    <span>Q:</span> {props.question}?
                </p>
            </div>

            <div className='answer'>
                <p>
                    <span>A:</span> {props.answer}
                </p>
            </div>
        </div>

    )
}


export default Question;