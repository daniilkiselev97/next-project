import Review from './../review/review'
const Reviews = ({reviews}) =>{
    return (
        <div>
         { Boolean(reviews.length) && reviews.map((review)=>(
                   <Review
                   key={review.id}
                   name={review.name}
                   text={review.text}
                   rating = {review.rating}
                   />
           
                )
                )}
        </div>
    )
}

export default Reviews