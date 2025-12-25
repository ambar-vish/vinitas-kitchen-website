import React from 'react';
import './Reviews.css';

interface Review {
    name: string;
    rating: number;
    comment: string;
    date: string;
}

const Reviews: React.FC = () => {
    const reviews: Review[] = [
        {
            name: 'Priya Sharma',
            rating: 5,
            comment: 'Absolutely delicious! The butter chicken reminded me of my grandmother\'s cooking. Will definitely order again!',
            date: '2 weeks ago'
        },
        {
            name: 'Rahul Verma',
            rating: 5,
            comment: 'Best homemade food in town! The flavors are authentic and the portions are generous. Highly recommend!',
            date: '1 month ago'
        },
        {
            name: 'Anjali Patel',
            rating: 4,
            comment: 'Great food and friendly service. The samosas were crispy and perfectly spiced. Looking forward to trying more items!',
            date: '3 weeks ago'
        },
    ];

    const overallRating = 4.8;

    const renderStars = (rating: number) => {
        return (
            <div className="stars">
                {[...Array(5)].map((_, index) => (
                    <span key={index} className={index < rating ? 'star filled' : 'star'}>
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <section id="reviews" className="reviews-section">
            <div className="reviews-container">
                <h2 className="section-title">Customer Reviews</h2>

                <div className="overall-rating">
                    <div className="rating-score">{overallRating}</div>
                    {renderStars(5)}
                    <p className="rating-text">Based on Google Reviews</p>
                    <a
                        href="https://www.google.com/maps/place/your-business-name"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leave-review-button"
                    >
                        Leave a Review on Google
                    </a>
                </div>

                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <h4 className="reviewer-name">{review.name}</h4>
                                    <span className="review-date">{review.date}</span>
                                </div>
                                {renderStars(review.rating)}
                            </div>
                            <p className="review-comment">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
